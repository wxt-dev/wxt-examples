---
tags:
  - testing
---

# Puppeteer

> Puppeteer's Chrome Extension docs: https://pptr.dev/guides/chrome-extensions

This example will walk you through adding E2E tests written with Puppeteer and Vitest. Since Puppeteer just provides APIs for browser automation, we need to use Vitest to setup and run the actual tests.

## Setup

First, install both dependencies and add a `e2e` convience script:

{{package.json}}

Next, create a `e2e/` folder in the root of the project. This is an arbitrary but fairly standard name for a folder containing all the E2E tests, their utils, and config.

If you're using TypeScript, the first file you'll want to create is a `tsconfig.json` file. E2E tests can be considered their own "project", running in a different environment with different globals.

{{e2e/tsconfig.json}}

And exclude the `e2e/` folder from the root `tsconfig.json`.

{{tsconfig.json}}

Next, we're gonna setup Vitest. Our new `e2e` script, `vitest -r e2e`, will look for an `e2e/vitest.config.ts` file, so we need to create that:

{{e2e/vitest.config.ts}}

Last step of the setup: we need to create a [custom Vitest environment](https://vitest.dev/guide/environment.html#custom-environment) responsible for managing Puppeteer. It will need to launch a browser before each test file, define a few global variables, and close the browser after the tests run:

{{e2e/vitest-environment-puppeteer.ts}}

> [!Warning]
> If you don't have a background script, [you'll have to make the ID consistent](https://developer.chrome.com/docs/extensions/reference/manifest/key) and hardcode it instead.

And finally, if you're using TypeScript, add a declaration file to add types for the two globals defined in the custom environment:

{{e2e/globals.d.ts}}

## Writing Tests

We're going to write a test to make sure the Popup's counter increments when pressed.

Frameworks often recommend creating an abstraction around their APIs and writing helper function to interact with the page more naturally during tests. We'll follow this approach and create a `openPopup` util, which returns natural helper functions.

{{e2e/pages/popup.ts}}

> Chromium doesn't support opening popups in the native UI location under the action during testing. Instead, you have to open the popup's URL in a new tab.

And after all that work, we can write a simple test:

{{e2e/tests/popup-counter.test.ts}}

## Running Tests

To run the tests, build the extension for production and run the `e2e` script we added at the very beginning of this walkthrough.

```sh
pnpm build && pnpm e2e
```

The test should pass!

## Closing Remarks

- The custom environment is designed to reset your application state completely between test files, following best practices for E2E testing
- Chromium doesn't support installing extensions in headless mode, meaning you always have to open a window
  - To run the tests in CI, you can integrate [`xvfb`](https://www.npmjs.com/package/xvfb) into the custom environment
- You may want to consider adding the [`testTimeout`](https://vitest.dev/config/#testtimeout) and [`maxWorkers`](https://vitest.dev/config/#maxworkers) options in Vitest
