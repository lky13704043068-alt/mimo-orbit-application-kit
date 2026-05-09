function estimateTokens(text) {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

function estimateTaskTokens(task) {
  const inputTokens = task.resolvedInputs.reduce((sum, input) => {
    return sum + estimateTokens(input.content);
  }, 0);

  const instructionTokens = estimateTokens(
    [
      task.title,
      task.type,
      task.objective,
      ...(task.expectedOutputs || []),
      ...(task.successCriteria || []),
    ].join("\n")
  );

  const agentMultiplier = Math.max(1, (task.agents || []).length);
  const seedPromptTokens = Math.ceil((inputTokens + instructionTokens) * agentMultiplier);
  const profile = getProductionProfile(task.type);
  const projectedRunTokens = Math.max(seedPromptTokens, profile.projectedRunTokens);
  const projectedMonthlyTokens = projectedRunTokens * profile.weeklyRuns * 4;

  return {
    inputTokens,
    instructionTokens,
    agentMultiplier,
    seedPromptTokens,
    projectedRunTokens,
    weeklyRuns: profile.weeklyRuns,
    projectedMonthlyTokens,
  };
}

function getProductionProfile(taskType) {
  const profiles = {
    "repo-understanding": { projectedRunTokens: 500000, weeklyRuns: 10 },
    "feature-planning": { projectedRunTokens: 400000, weeklyRuns: 12 },
    "multi-file-coding": { projectedRunTokens: 900000, weeklyRuns: 12 },
    "test-diagnosis": { projectedRunTokens: 600000, weeklyRuns: 14 },
    "pull-request-review": { projectedRunTokens: 500000, weeklyRuns: 14 },
    documentation: { projectedRunTokens: 350000, weeklyRuns: 8 },
    "model-comparison": { projectedRunTokens: 1200000, weeklyRuns: 8 },
    "long-context-stress": { projectedRunTokens: 1800000, weeklyRuns: 5 },
  };

  return profiles[taskType] || { projectedRunTokens: 150000, weeklyRuns: 3 };
}

module.exports = {
  estimateTokens,
  estimateTaskTokens,
};
