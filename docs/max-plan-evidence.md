# Max Plan Evidence

This repository is designed to justify a high-token allocation by showing a repeatable workload, not a one-off usage scenario.

## Evidence in the Repository

- Runnable benchmark command: `npm run benchmark`
- Local dashboard command: `npm run dashboard`
- 8 benchmark tasks in `data/tasks.json`
- Multi-agent task stages across planning, coding, review, diagnosis, documentation, and comparison
- Generated prompt bundles under `reports/prompts/`
- Generated benchmark reports under `reports/`
- Long-context stress task that bundles docs, prompts, reports, and application materials
- Current projected four-week usage: 229.6M tokens

## Why the Workload Needs Max-Level Tokens

Each benchmark run combines:

- repository files
- prompt templates
- task instructions
- error logs
- simulated diffs
- evaluation criteria
- model comparison records

The real MiMo evaluation plan is to run this repeatedly across at least 20 coding-agent tasks, not just the seed task catalog. The current benchmark profile models 80+ task runs per week across repository understanding, planning, multi-file coding, diagnosis, review, documentation, and model comparison. That turns token usage into a recurring evaluation workload.

## Planned Public Output

- GitHub repository
- benchmark task catalog
- prompt templates
- MiMo evaluation notes
- model comparison report
- practical guide for using MiMo in coding-agent workflows
