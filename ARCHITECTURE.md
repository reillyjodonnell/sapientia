# Architecture

## What's needed

- Database (SQL )
- Automatic deployment pipelines
- Authentication
- Testing
- Linting/Formatting/TypeScript

## Problems/ Tradeoffs

- With many project - the goal is a rapid deployment to get the idea out there.
- Building a full fledge full stack application running on a node server is not time efficient.

## Techno

### Allows quick iteration for SSR built on fetch API

- this allows Remix to deploy in both node & non-node environments (express to cloudfare workers)
- Docs emphasize Remix runs on the server but is NOT the server
