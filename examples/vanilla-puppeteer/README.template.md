# Puppeteer

This example will walk you through adding E2E tests written with Puppeteer and Vitest. Since Puppeteer just provides APIs for browser automation, we need to use Vitest to setup and run the actual tests.

## Setup

First, install both dependencies:

{{package.json}}

Next, create a `e2e/` folder in the root of the project. This is an arbitrary but fairly standard name for a folder containing all the E2E tests, their utils, and config.

If you're using TypeScript, the first file you'll want to create is a `tsconfig.json` file. E2E tests can be considered their own "project", running in a different environment with different globals.

{{e2e/tsconfig.json}}

And exclude the `e2e/` folder from the root `tsconfig.json`.

{{tsconfig.json}}

Next, we're gonna setup Vitest. Go ahead and add a `e2e` script to your package.json for convinence:

{{package.json}}

Here, we're running vitest, but instead of running it in the current folder, we're running it from the E2E folder. Vitest will look for an `e2e/vitest.config.ts` file, so we need to create that:

{{e2e/vitest.config.ts}}

Last step of the setup: we need to create a [custom Vitest environment](https://vitest.dev/guide/environment.html#custom-environment) responsible for managing puppeteer.

{{e2e/vitest-environment-puppeteer.ts}}

> [!Warning]
> If you don't have a background script, [you'll have to make the ID consistent](https://developer.chrome.com/docs/extensions/reference/manifest/key) and hardcode it instead.

And finally, if you're using TypeScript, add a declaration file setting up the global types:

{{e2e/globals.d.ts}}

This will make sure TS don't report errors when using the `browser` or `extensionId` globals.

## Writing Tests

We're going to write a test to make sure the counter increments correctly in the popup. When you press the button, it should increment by 1.

Frameworks often recommend creating an abstraction around their APIs and writing helper function to interact with the page more naturally during tests. We'll follow this approach and create a `openPopup` util, which returns natural helper functions.

{{e2e/pages/popup.ts}}

And after all that work, we can write a simple test:

{{e2e/tests/popup-counter.test.ts}}
