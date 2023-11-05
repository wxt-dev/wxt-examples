# Welcome Page

To create a welcome or onboarding page, add an HTML file to the `entrypoints/` directory.

{{entrypoints/welcome.html}}

> You can include any number of HTML pages in an extension. If they're not apart of the extension's manifest, WXT calls these ["unlisted pages"](https://wxt.dev/entrypoints/unlisted-pages.html).

To open this page on install, listen to the `onInstall` event and get the full URL via `browser.runtime.getURL`.

{{entrypoints/background.ts}}

To open a tab from the background, you need the `tabs` permission. Add it to your manifest, otherwise `browser.tabs` will be undefined.

{{wxt.config.ts}}
