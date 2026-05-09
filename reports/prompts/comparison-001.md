# Task: Compare MiMo with another coding model on the same prompt bundle

Type: model-comparison
Objective: Prepare a repeatable comparison run with shared context and metrics.

## Agents
- planning-agent
- review-agent

## Expected Outputs
- comparison plan
- shared prompt bundle
- metrics table

## Success Criteria
- same prompt across models
- records token estimates
- records pass/fail result

## Repository Context
## data/model-comparison-template.md
# Model Comparison Template

Use this sheet to compare MiMo with other coding models on the same task.

| Task ID | Model | Context Size Used | Tokens Consumed | Passed | Notes |
| --- | --- | --- | --- | --- | --- |
| repo-understanding-001 | MiMo |  |  |  |  |
| repo-understanding-001 | Other model |  |  |  |  |
| coding-001 | MiMo |  |  |  |  |
| coding-001 | Other model |  |  |  |  |

The purpose is to make the project look and behave like a real benchmark harness, not a one-off demo.



## reports/task-matrix.md
# Coding Agent Task Matrix

This matrix describes the type of tasks this project is designed to evaluate.

| Task Type | Inputs | Output | Why Long Context Matters |
| --- | --- | --- | --- |
| Repo understanding | Full tree, README, configs, key source files | Architecture summary, dependency map | The model must read many files together |
| Feature planning | Issue, product notes, codebase state | Implementation plan, risk list | Planning depends on complete project context |
| Multi-file coding | Several source files and tests | Patch across modules | Changes must stay consistent across files |
| Test diagnosis | Failing logs, test files, recent diff | Root cause, minimal fix | Error text and code must be compared together |
| PR review | Diff, tests, project conventions | Findings and missing tests | Review quality depends on repo-wide style |
| Docs update | Code changes, release notes, README | Documentation patch | Docs must reflect implementation accurately |

## Evaluation cadence

- Baseline run: 1 to 3 tasks
- Weekly run: 5 to 10 tasks
- Full benchmark: 20+ tasks

## Token profile

- Small task: 10K to 50K tokens
- Typical task: 100K to 300K tokens
- Heavy task: 300K to 1M tokens

The project is intentionally structured around repeated long-context tasks so that the model is evaluated in the same way it will be used in practice.



## prompts/planning-agent.md
# Planning Agent Prompt

You are a senior software engineer acting as a planning agent.

Read the requirement, repository context, source files, and logs. Produce a concise implementation plan.

Return:

1. Goal summary
2. Relevant files
3. Proposed changes
4. Risks and edge cases
5. Test plan
6. Questions only if blocked

Avoid vague advice. Prefer concrete file-level actions.

