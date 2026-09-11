# DevOps Final

Coursework project for a DevOps class: the point was the pipeline, not the app. It's a one-route Express server, containerized, with a GitHub Actions workflow that installs, runs the test suite, then builds and pushes the Docker image on every push to `main`.

## What's actually here

- `app.js` — a single `GET /` route (`Hola Mundo DevOps 🚀`), exported so it can be tested without binding a port.
- `test/app.test.js` — one Supertest check that the route responds correctly.
- `dockerfile` — `node:18` base, installs deps, exposes 3000, runs `npm start`.
- `.github/workflows/ci.yml` — `npm install` → `npm test` → `docker login` → `docker build` → `docker push`, gated on the tests passing first.

## Running it

```bash
npm install
npm start        # or: docker build -t devops-final . && docker run -p 3000:3000 devops-final
```

## Scope

Deliberately minimal on the app side — this was an assignment about wiring a CI/CD pipeline end to end (test gate before a real image push), not about building a real product on top of it.
