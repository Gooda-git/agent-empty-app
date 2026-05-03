import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(join(root, "src", "index.html"), "utf8");
const css = await readFile(join(root, "src", "styles.css"), "utf8");
const js = await readFile(join(root, "src", "app.js"), "utf8");

const requiredSnippets = [
  "data-app-root",
  "data-task-list",
  "data-progress-bar",
  "data-progress-label",
  "data-ready-status",
  'href="./styles.css"',
  'src="./app.js"',
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`Missing required HTML snippet: ${snippet}`);
  }
}

if (!html.includes("<h1 id=\"page-title\">Project cockpit</h1>")) {
  throw new Error("Expected Project cockpit heading");
}

if (!css.includes("--accent:") || !css.includes("@media")) {
  throw new Error("Stylesheet must define core theme tokens and responsive rules");
}

if (!js.includes("renderTasks()") || !js.includes("updateProgress()")) {
  throw new Error("App script must render checklist state and progress");
}

class Element {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.listeners = {};
    this.style = {};
    this.textContent = "";
    this.checked = false;
    this.className = "";
    this.htmlFor = "";
    this.id = "";
    this.type = "";
  }

  append(...children) {
    this.children.push(...children);
  }

  addEventListener(type, listener) {
    this.listeners[type] = listener;
  }

  replaceChildren(...children) {
    this.children = children;
  }
}

const elements = {
  "[data-task-list]": new Element("ul"),
  "[data-progress-bar]": new Element("span"),
  "[data-progress-label]": new Element("p"),
  "[data-ready-status]": new Element("p"),
};

const document = {
  createElement(tagName) {
    return new Element(tagName);
  },
  querySelector(selector) {
    return elements[selector] ?? null;
  },
};

vm.runInNewContext(js, { document });

const renderedTasks = elements["[data-task-list]"].children;
if (renderedTasks.length !== 3) {
  throw new Error(`Expected 3 rendered checklist tasks; got ${renderedTasks.length}`);
}

if (elements["[data-progress-label]"].textContent !== "2 of 3 complete") {
  throw new Error("Expected initial progress to be 2 of 3 complete");
}

const finalCheckbox = renderedTasks.at(-1).children[0];
finalCheckbox.checked = true;
finalCheckbox.listeners.change();

if (elements["[data-progress-label]"].textContent !== "3 of 3 complete") {
  throw new Error("Expected progress to update after checking the final task");
}

if (elements["[data-progress-bar]"].style.width !== "100%") {
  throw new Error("Expected progress bar to reach 100%");
}

if (elements["[data-ready-status]"].textContent !== "Launch checklist complete") {
  throw new Error("Expected ready status to update when all tasks are complete");
}

console.log("[static-validate] ok");
