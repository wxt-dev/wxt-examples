<!-- Generated by scripts/generate-diffs.ts -->

# Welcome Page

To create a welcome or onboarding page, add an HTML file to the `entrypoints/` directory.

###### entrypoints/welcome.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to WXT</title>
  </head>
  <body>
    <h1>Welcome to WXT</h1>
    <p>Your extension's welcome page</p>
  </body>
</html>
```

> You can include any number of HTML pages in an extension. If they're not apart of the extension's manifest, WXT calls these ["unlisted pages"](https://wxt.dev/entrypoints/unlisted-pages.html).

To open this page on install, listen to the `onInstall` event and get the full URL via `browser.runtime.getURL`.

###### entrypoints/background.ts

```diff
@@ -1,3 +1,13 @@
 export default defineBackground(() => {
   console.log('Hello background!', { id: browser.runtime.id });
+
+  browser.runtime.onInstalled.addListener(async ({ reason }) => {
+    // Also fired on update and browser_update
+    if (reason !== 'install') return;
+
+    await browser.tabs.create({
+      url: browser.runtime.getURL('/welcome.html'),
+      active: true,
+    });
+  });
 });
```

To open a tab from the background, you need the `tabs` permission. Add it to your manifest, otherwise `browser.tabs` will be undefined.

###### wxt.config.ts

```diff
@@ -1,4 +1,8 @@
 import { defineConfig } from 'wxt';

 // See https://wxt.dev/api/config.html
-export default defineConfig({});
+export default defineConfig({
+  manifest: {
+    permissions: ['tabs'],
+  },
+});
```
