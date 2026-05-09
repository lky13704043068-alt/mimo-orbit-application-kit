function buildPrompt(task) {
  const context = task.resolvedInputs
    .map((input) => {
      if (!input.exists) {
        return `## ${input.path}\nMissing input file.`;
      }

      return `## ${input.path}\n${input.content}`;
    })
    .join("\n\n");

  return [
    `# Task: ${task.title}`,
    "",
    `Type: ${task.type}`,
    `Objective: ${task.objective}`,
    "",
    "## Agents",
    (task.agents || []).map((agent) => `- ${agent}`).join("\n"),
    "",
    "## Expected Outputs",
    (task.expectedOutputs || []).map((output) => `- ${output}`).join("\n"),
    "",
    "## Success Criteria",
    (task.successCriteria || []).map((criterion) => `- ${criterion}`).join("\n"),
    "",
    "## Repository Context",
    context,
  ].join("\n");
}

module.exports = {
  buildPrompt,
};

