# TailwindCSS

{{base}}

> [Note!]!
> This works for all frameworks, not just Vue.

WXT uses PostCSS internally, so just follow [Tailwind's PostCSS guide](https://tailwindcss.com/docs/installation/using-postcss).

After following the steps, you should end up with something like this:

{{package.json}}

Your content field will depend on your project's directory setup.

{{tailwind.config.js}}

{{postcss.config.js}}

Add the main tailwind file to the `assets/` directory.

{{assets/main.css}}

Add the CSS file to any HTML pages in your extension:

{{entrypoints/popup/index.html}}

At this point, you can start using tailwind classes in your markup.

To use Tailwind inside content scripts, use either [`createContentScriptUi`](https://wxt.dev/entrypoints/content-scripts.html#ui) or [`createContentScriptIframe`](https://wxt.dev/entrypoints/content-scripts.html#iframe) to isolate Tailwind's styles from the webpage.
