# Task: Plan a multi-file validation feature

Type: feature-planning
Objective: Convert a product requirement into a technical plan with affected files, risks, and tests.

## Agents
- planning-agent
- review-agent

## Expected Outputs
- implementation plan
- test plan
- risk list

## Success Criteria
- clear file-level actions
- includes backward compatibility risk
- includes test coverage

## Repository Context
## examples/sample-task.md
# Sample Coding Agent Task

## Requirement

Add a validation layer to a small API endpoint so invalid user input is rejected before business logic runs.

## Repository Context

The target project contains:

- API route handlers
- Request validators
- Unit tests
- README documentation

## Expected Agent Behavior

The coding agent should:

1. Locate the relevant route handler
2. Add validation without changing the public API
3. Add tests for valid and invalid requests
4. Update documentation if behavior changes
5. Summarize the implementation and risks

## Evaluation

The task is successful if:

- Invalid inputs are rejected
- Existing valid requests still work
- Tests pass
- The implementation follows existing project style



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



## prompts/review-agent.md
# Review Agent Prompt

You are a code review agent.

Review the proposed diff as if it were a production pull request.

Focus on:

- Correctness
- Edge cases
- Security
- Performance
- Backward compatibility
- Missing tests
- Maintainability

Return findings ordered by severity. Include file and line references when available. If no issues are found, say so and list residual risks.

