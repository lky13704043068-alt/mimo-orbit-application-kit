const fs = require("fs");
const path = require("path");
const { loadTasks } = require("./task-loader");
const { estimateTaskTokens } = require("./token-estimator");
const { buildPrompt } = require("./prompt-builder");
const { writeJson, writeMarkdown } = require("./report-writer");

function classifyTask(tokenEstimate) {
  if (tokenEstimate.projectedRunTokens >= 300000) return "heavy";
  if (tokenEstimate.projectedRunTokens >= 100000) return "standard";
  return "seed";
}

function runBenchmark(rootDir) {
  const tasks = loadTasks(rootDir);

  const enrichedTasks = tasks.map((task) => {
    const tokenEstimate = estimateTaskTokens(task);
    const prompt = buildPrompt(task);
    const promptPath = path.join(rootDir, "reports", "prompts", `${task.id}.md`);
    fs.mkdirSync(path.dirname(promptPath), { recursive: true });
    fs.writeFileSync(promptPath, prompt);

    const missingInputs = task.resolvedInputs.filter((input) => !input.exists);

    return {
      id: task.id,
      type: task.type,
      title: task.title,
      objective: task.objective,
      agents: task.agents || [],
      expectedOutputs: task.expectedOutputs || [],
      successCriteria: task.successCriteria || [],
      tokenEstimate,
      workloadClass: classifyTask(tokenEstimate),
      status: missingInputs.length ? "needs-inputs" : "ready",
      promptFile: path.relative(rootDir, promptPath),
      missingInputs: missingInputs.map((input) => input.path),
    };
  });

  const summary = {
    totalTasks: enrichedTasks.length,
    totalSeedPromptTokens: enrichedTasks.reduce(
      (sum, task) => sum + task.tokenEstimate.seedPromptTokens,
      0
    ),
    totalProjectedRunTokens: enrichedTasks.reduce(
      (sum, task) => sum + task.tokenEstimate.projectedRunTokens,
      0
    ),
    totalProjectedMonthlyTokens: enrichedTasks.reduce(
      (sum, task) => sum + task.tokenEstimate.projectedMonthlyTokens,
      0
    ),
    heavyTasks: enrichedTasks.filter((task) => task.workloadClass === "heavy").length,
    missingInputs: enrichedTasks.reduce((sum, task) => sum + task.missingInputs.length, 0),
  };

  const report = {
    project: "MiMo Coding Agent Workflow Kit",
    generatedAt: new Date().toISOString(),
    mode: process.env.MIMO_API_KEY ? "api-ready" : "offline-planning",
    summary,
    tasks: enrichedTasks,
  };

  writeJson(path.join(rootDir, "reports", "benchmark-report.json"), report);
  writeMarkdown(path.join(rootDir, "reports", "benchmark-report.md"), report);
  writeJson(path.join(rootDir, "dashboard", "latest-run.json"), report);

  return report;
}

module.exports = {
  runBenchmark,
};
