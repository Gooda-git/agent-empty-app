const tasks = [
  {
    id: "intent",
    title: "Document product intent",
    detail: "Charter, architecture, and design notes make the first scaffold durable.",
    complete: true,
  },
  {
    id: "commands",
    title: "Wire repeatable commands",
    detail: "Setup, validation, and launch all run through the agent harness.",
    complete: true,
  },
  {
    id: "surface",
    title: "Ship a runnable surface",
    detail: "This page proves the repository can serve a useful product slice.",
    complete: false,
  },
];

const taskList = document.querySelector("[data-task-list]");
const progressBar = document.querySelector("[data-progress-bar]");
const progressLabel = document.querySelector("[data-progress-label]");
const readyStatus = document.querySelector("[data-ready-status]");

function renderTasks() {
  taskList.replaceChildren(
    ...tasks.map((task) => {
      const item = document.createElement("li");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");
      const title = document.createElement("span");
      const detail = document.createElement("span");

      checkbox.type = "checkbox";
      checkbox.id = `task-${task.id}`;
      checkbox.checked = task.complete;
      checkbox.addEventListener("change", () => {
        task.complete = checkbox.checked;
        updateProgress();
      });

      label.htmlFor = checkbox.id;
      title.className = "task-title";
      title.textContent = task.title;
      detail.className = "task-detail";
      detail.textContent = task.detail;

      label.append(title, detail);
      item.append(checkbox, label);
      return item;
    }),
  );

  updateProgress();
}

function updateProgress() {
  const completed = tasks.filter((task) => task.complete).length;
  const total = tasks.length;
  const percentage = Math.round((completed / total) * 100);

  progressBar.style.width = `${percentage}%`;
  progressLabel.textContent = `${completed} of ${total} complete`;
  readyStatus.textContent =
    completed === total ? "Launch checklist complete" : "Ready to run";
}

renderTasks();
