## Steps to reproduce

1. `pnpm i` to install dependencies
2. Run a dynamodb instance locally on port 8000, a docker compose file is provided in the repo.
3. `node main.js`

## Expected

`{"a": "a"}` is put into the table (because we override toJSON to return such an object)

## Actual

Throws maximum call stack size exceeded error.
