const formatter = new Intl.NumberFormat("en-US");

async function loadReport() {
  const response = await fetch("./latest-run.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Run npm run benchmark first.");
  }
  return response.json();
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderTasks(tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  for (const task of tasks) {
    const item = document.createElement("article");
    item.className = "task";
    item.innerHTML = `
      <div>
        <h3>${task.title}</h3>
        <div class="task-meta">
          <span>${task.id}</span>
          <span>${task.type}</span>
          <span>${task.agents.length} agents</span>
          <span>${formatter.format(task.tokenEstimate.projectedRunTokens)} projected tokens/run</span>
        </div>
      </div>
      <span class="badge">${task.workloadClass}</span>
    `;
    list.appendChild(item);
  }
}

async function render() {
  try {
    const report = await loadReport();
    setText("totalTasks", report.summary.totalTasks);
    setText("totalTokens", formatter.format(report.summary.totalProjectedMonthlyTokens));
    setText("heavyTasks", report.summary.heavyTasks);
    setText("mode", report.mode);
    setText("generatedAt", `Generated ${new Date(report.generatedAt).toLocaleString()}`);
    renderTasks(report.tasks);
  } catch (error) {
    setText("generatedAt", error.message);
  }
}

document.getElementById("refresh").addEventListener("click", render);
render();
