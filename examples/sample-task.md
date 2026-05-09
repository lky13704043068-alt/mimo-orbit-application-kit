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

