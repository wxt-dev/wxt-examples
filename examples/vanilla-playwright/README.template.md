# Playwright

> Playwright's Chrome Extension docs: https://playwright.dev/docs/chrome-extensions

This example will walk you through adding E2E tests written with Playwright.

## Setup

First, install a few playwright dependencies and add a `e2e` convience script:

{{package.json}}

Next, we'll add config for Playwright:

{{playwright.config.ts}}

Then we can create custom fixtures that will:

1. Open a browser window with the extension installed
2. Wait for the background script/service worker to extract the extension's ID from the URL

{{e2e/fixtures.ts}}

## Writing Tests

We're going to write a test to make sure the Popup's counter increments when pressed.

Frameworks often recommend creating an abstraction around their APIs and writing helper function to interact with the page more naturally during tests. We'll follow this approach and create a `openPopup` util, which returns natural helper functions.

{{e2e/pages/popup.ts}}

> Chromium doesn't support opening popups in the native UI location under the action during testing. Instead, you have to open the popup's URL in a new tab.

And now we can write a simple test:

{{e2e/tests/popup-counter.test.ts}}

Make sure to import your custom `test` and `expect` fixtures so the extension is loaded correctly.

## Running Tests

To run the tests, build the extension for production and run the `e2e` script we added at the very beginning of this walkthrough.

```sh
pnpm build && pnpm e2e
```

The test should pass!
