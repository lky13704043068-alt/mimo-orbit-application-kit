# Runbook

## Generate Reports

```bash
npm run benchmark
```

Outputs:

- `reports/benchmark-report.json`
- `reports/benchmark-report.md`
- `reports/prompts/*.md`
- `dashboard/latest-run.json`

## Open Dashboard

```bash
npm run dashboard
```

Then open:

```text
http://localhost:4173
```

## Update Task Catalog

Edit:

```text
data/tasks.json
```

Each task should include:

- `id`
- `type`
- `title`
- `objective`
- `agents`
- `inputs`
- `expectedOutputs`
- `successCriteria`

## Add Real MiMo Runs

After receiving API access, the next step is to add a provider execution layer after prompt generation. The current reports are already shaped so real outputs can be attached per task.

