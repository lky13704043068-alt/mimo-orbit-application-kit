# Task: Diagnose a failing test from logs

Type: test-diagnosis
Objective: Read a failure log and repository context to propose the smallest safe fix.

## Agents
- test-diagnosis-agent
- review-agent

## Expected Outputs
- root cause
- minimal fix
- regression test

## Success Criteria
- cites evidence
- avoids broad rewrites
- adds regression coverage

## Repository Context
## fixtures/logs/build-failure.txt
> mimo-agent-benchmark@1.0.0 test
> node tests/validation.test.js

FAIL tests/validation.test.js
  validateCreateUser
    ✓ accepts a valid payload
    ✕ rejects an empty email

Expected validation error code:
  INVALID_EMAIL

Received:
  undefined

Stack:
  at validateCreateUser (src/validators/user.js:18:11)
  at createUserHandler (src/routes/users.js:31:17)

Recent change:
  The route now calls normalizePayload before validateCreateUser.



## prompts/test-diagnosis-agent.md
# Test Diagnosis Agent Prompt

You are a test diagnosis agent.

Read the failing test output, source files, recent changes, and expected behavior. Identify the most likely root cause and propose the smallest safe fix.

Return:

1. Failure summary
2. Most likely root cause
3. Evidence
4. Minimal fix
5. Regression tests to add



## reports/sample-evaluation-report.json
{
  "project": "MiMo Coding Agent Workflow Kit",
  "date": "2026-05-09T12:18:53.765Z",
  "task": "sample validation task",
  "metrics": {
    "planning_quality": "pending",
    "implementation_correctness": "pending",
    "review_usefulness": "pending",
    "test_repair_success": "pending",
    "documentation_quality": "pending",
    "token_usage": "pending"
  },
  "next_steps": [
    "Connect MiMo-V2.5-Pro API access",
    "Run at least 20 coding-agent tasks",
    "Compare MiMo with GPT, Claude, and DeepSeek",
    "Publish a practice note and prompt templates"
  ]
}