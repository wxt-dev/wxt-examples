# Devtools Setup

{{base}}

This example demonstrates how to setup a devtools page with a custom panel and sidebar pane. Read [Chrome's docs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) before following this guide to understand the basics of devtools chrome extensions.

First step is to register a `devtools_page` in your manifest. To do this with WXT, create a [devtools entrypoint](https://wxt.dev/entrypoints/devtools.html).

{{entrypoints/devtools/index.html}}

This page is where you create custom panels/sidebar panes. For this example, we'll create one of each. These pages are just [unlisted HTML pages](https://wxt.dev/entrypoints/unlisted-pages.html), so you can name the entrypoints whatever you like. We'll go with `devtools-panel` and `devtools-pane`.

{{entrypoints/devtools-panel/index.html}}

{{entrypoints/devtools-pane/index.html}}

Next, in our `devtools_page`, we need to create the panel and sidebar pane:

{{entrypoints/devtools/main.ts}}

And you're done! Run `pnpm dev`, open the devtools, and you will see a new tab called "Example Panel" and in the "Elements" tab, you'll see a new pane called "Example Pane".

Continue following [Chrome's docs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools#solutions) to add functionality to the pages.
