---
tags:
  - testing
---

# Vitest

WXT has first class support for running unit tests with [Vitest](https://vitest.dev/).

First, start by installing Vitest and setting up a `test` script:

{{package.json}}

Then, create a Vitest config file, importing WXT and adding the plugin to automatically configure Vitest for WXT:

- Configure auto-imports
- Mock `browser` API
- Setup TSConfig paths
- Resolve remote URLs
- Define global variables

{{vitest.config.ts}}

> [!CAUTION]
> Make sure to add any dependencies you use to the `ssr` option if they depend on `webextension-polyfill`! If they are not listed here, Vitest will not process them, and cannot mock the polyfill they import. This will lead to errors with the message "This script should only be loaded in a browser extension". So remember to add dependencies to `ssr`!
>
> _Eventually, WXT will automatically detect these dependencies. Follow [Issue #475](https://github.com/wxt-dev/wxt/issues/475) to track progress_

And that's it, you're all setup!

For an example test, lets you want to save the date your extension was installed to storage:

{{entrypoints/background.ts}}

It's very simple to write some unit tests to cover this:

{{entrypoints/__tests__/background.test.ts}}

As you can see, we can use the `browser` global like we would in a real extension. The `browser` is mocked with an in-memory implementation via [`@webext-core/fake-browser`](https://webext-core.aklinker1.io/guide/fake-browser/). See their docs for more examples and details about which APIs are implemented.

To run the tests, use the new `test` script:

```sh
pnpm test
```
