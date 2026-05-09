const fs = require("fs");
const path = require("path");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadTasks(rootDir) {
  const tasksPath = path.join(rootDir, "data", "tasks.json");
  const tasks = readJson(tasksPath);

  return tasks.map((task) => ({
    ...task,
    resolvedInputs: (task.inputs || []).map((inputPath) => {
      const absolutePath = path.join(rootDir, inputPath);
      const exists = fs.existsSync(absolutePath);
      return {
        path: inputPath,
        exists,
        content: exists ? fs.readFileSync(absolutePath, "utf8") : "",
      };
    }),
  }));
}

module.exports = {
  loadTasks,
};

