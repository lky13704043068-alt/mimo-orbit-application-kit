const fs = require("fs");
const path = require("path");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function writeMarkdown(filePath, report) {
  ensureDir(path.dirname(filePath));

  const lines = [
    "# MiMo Coding Agent Benchmark Report",
    "",
    `Generated at: ${report.generatedAt}`,
    "",
    "## Summary",
    "",
    `- Total tasks: ${report.summary.totalTasks}`,
    `- Seed prompt tokens: ${report.summary.totalSeedPromptTokens.toLocaleString()}`,
    `- Projected tokens per full run: ${report.summary.totalProjectedRunTokens.toLocaleString()}`,
    `- Projected monthly tokens: ${report.summary.totalProjectedMonthlyTokens.toLocaleString()}`,
    `- Heavy tasks: ${report.summary.heavyTasks}`,
    `- Missing inputs: ${report.summary.missingInputs}`,
    "",
    "## Tasks",
    "",
    "| ID | Type | Agents | Projected Tokens / Run | Status |",
    "| --- | --- | ---: | ---: | --- |",
  ];

  for (const task of report.tasks) {
    lines.push(
      `| ${task.id} | ${task.type} | ${task.agents.length} | ${task.tokenEstimate.projectedRunTokens.toLocaleString()} | ${task.status} |`
    );
  }

  lines.push(
    "",
    "## Max-Plan Rationale",
    "",
    "This report is generated from repeated long-context coding-agent tasks. The benchmark is designed to consume tokens through repository reading, multi-agent planning, review, diagnosis, documentation, and comparison runs."
  );

  fs.writeFileSync(filePath, lines.join("\n"));
}

module.exports = {
  writeJson,
  writeMarkdown,
};
