const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const reportsDir = path.join(root, "reports");
const proofDir = path.join(root, "proof-images");

function listFiles(dir) {
  return fs.existsSync(dir)
    ? fs.readdirSync(dir).sort().map((name) => path.join(path.basename(dir), name))
    : [];
}

const report = {
  project: "MiMo Coding Agent Workflow Kit",
  generatedAt: new Date().toISOString(),
  summary: {
    repoType: "agent evaluation kit",
    focus: ["long-context", "multi-file coding", "review", "test diagnosis", "docs"],
    evidenceFiles: listFiles(proofDir),
    artifactCount: 0,
  },
  artifacts: {
    applicationDocs: listFiles(path.join(root, "application")),
    prompts: listFiles(path.join(root, "prompts")),
    examples: listFiles(path.join(root, "examples")),
    reports: listFiles(reportsDir),
  },
};

const artifactCount =
  report.summary.evidenceFiles.length +
  report.artifacts.applicationDocs.length +
  report.artifacts.prompts.length +
  report.artifacts.examples.length +
  report.artifacts.reports.length;

report.summary.artifactCount = artifactCount;

fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(path.join(reportsDir, "project-report.json"), JSON.stringify(report, null, 2));
console.log("reports/project-report.json generated");

