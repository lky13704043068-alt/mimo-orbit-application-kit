# Architecture

MiMo Coding Agent Workflow Kit is organized as a repeatable benchmark harness.

## Components

- `data/tasks.json`: benchmark task catalog
- `src/task-loader.js`: resolves task inputs from the repository
- `src/token-estimator.js`: estimates task token load
- `src/prompt-builder.js`: builds per-task prompt bundles
- `src/benchmark-runner.js`: generates benchmark reports
- `dashboard/`: local visual console for benchmark runs
- `reports/`: generated evidence artifacts

## Run Flow

1. Load tasks from `data/tasks.json`.
2. Resolve every task input from local files.
3. Build one prompt bundle per task.
4. Estimate token load across input context and agent stages.
5. Write JSON and Markdown reports.
6. Publish the latest run to the dashboard.

## MiMo Integration Point

The current project runs in offline planning mode by default. This is intentional: it lets the task catalog, prompt bundles, token estimates, and reports be validated before connecting a model API.

When MiMo API credentials are available, the benchmark runner can add a provider step after prompt generation:

- submit prompt bundle to MiMo
- store model output per task
- score output with the existing success criteria
- compare MiMo with other models using the same prompt bundle

