# Angular Metrics Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

Install the dependencies locally with `npm install`. It is recommended having `nvm` installed and you should be using most recent Node LTS version (currently `node v18.14.2` and `npm 9.5.0`).

## Angular frontend

Currently the angular application is configured to run locally and outside a docker configuration. It is also [deployed on vercel](https://angular-metrics-playground.vercel.app/) and that is the version that will have data tracking.

Run `ng serve --open` for a dev server. The `--open` flag will open a tab with `http://localhost:4200/` in your default browser. The application will automatically reload if you change any of the source files. If you don't have or don't want to use the global installation of the `@angular/cli` just run `npx ng serve --open`. All other angular (ng) commands need to be preceded by `npx`, to refer the local installation.

## Other project components

The docker compose lifts the following containers:

- Matomo
- MySQL

Run the following command in the root directory to start the other project components.

```bash
docker compose up -d
```

## Metrics to Track

- Page views (what are the most used and accessed areas)
- Browser (most used)
- Devices (screen size most used)
- Navigation (flows)
- Navigation + detailed: number of clicks, the hesitations between clicks, the back and next clicks on wizard, etc.
- Success rates of a given task (e.g., click the final submit button in a wizard)
- Telemetry – cross-reference/collect data with Open Telemetry
- CES (Customer Effort Score) - how much effort your customer needs to use to complete a transaction/task.
