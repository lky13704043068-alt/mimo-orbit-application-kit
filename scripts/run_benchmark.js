const path = require("path");
const { runBenchmark } = require("../src/benchmark-runner");

const rootDir = path.join(__dirname, "..");
const report = runBenchmark(rootDir);

console.log("Benchmark report generated:");
console.log(`- reports/benchmark-report.json`);
console.log(`- reports/benchmark-report.md`);
console.log(`- dashboard/latest-run.json`);
console.log(`Seed prompt tokens: ${report.summary.totalSeedPromptTokens.toLocaleString()}`);
console.log(`Projected monthly tokens: ${report.summary.totalProjectedMonthlyTokens.toLocaleString()}`);
