---
tags:
  - i18n
---

# I18n

{{base}}

This example walks you through setting up a localized manifest.json and accessing the localizations at runtime.

> [!IMPORTANT]
> Before going through this example, you should familiarize yourself with how to localize a plain, non-WXT extension by reading [Chrome's docs](https://developer.chrome.com/docs/extensions/reference/i18n/).

## Add Translations

Web extensions are localized by including a `_locales` folder in the bundled extension. This can be accomplished with WXT by creating the `_locales` directory inside WXT's [public directory](https://wxt.dev/guide/assets.html#public-directory).

{{public/_locales/en/messages.json}}

{{public/_locales/ko/messages.json}}

## Manifest Translations

By default, WXT uses your `package.json` name and description as the manifest's name and description. We can change this behavior by overriding those keys in your `wxt.config.ts` file to use the localized versions.

{{wxt.config.ts}}

We also setup a default locale, in this case English (`en`), that will be used when a user's language is not supported.

## Runtime Translations

To get a translation at runtime, you can call `browser.i18n.getMessage`. This works in the background, content scripts, popup, options, etc. Anywhere in your extension (other than sandboxed pages).

{{entrypoints/background.ts}}

{{entrypoints/popup/main.ts}}

> `browser.i18n.getMessage` is typed to make sure the message you're getting actually exists.
