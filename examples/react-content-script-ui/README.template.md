# React Content Script UI

{{base}}

This example will walk you through creating a UI inside a content script with isolated styles inside a ShadowRoot using React.

To add a content script to the extension, create a file named `content/index.tsx` inside the `entrypoints/` directory.

> See https://wxt.dev/entrypoints/content-scripts.html for alternatie names.

{{entrypoints/content/index.tsx}}

There's lots of stuff going on there:

1. We're importing a CSS file containing styles for the entire UI and using `cssInjectionMode: "ui"` to automatically load it into our UI when mounted.
2. We're calling `createShadowRootUi`, defining a UI that will be mounted as the first child of the `body` element.
3. Inside `onMount` and `onRemove`, we're creating and unmounting a react app.
4. Finally, we're actually mounting the ui on the page by calling `ui.mount()`

Don't forget to add the CSS file:

{{entrypoints/content/style.css}}

Next, let's create the app:

{{entrypoints/content/App.tsx}}

{{entrypoints/content/App.module.css}}

It's just a basic counter app with scoped styles, nothing special here.

And that's it! Just run `pnpm dev` to start the app for development, visit a website, like <https://google.com>, and you should see a black and yellow UI show up at the top of the page.
