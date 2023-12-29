---
tags:
  - i18n
---

# Vue I18n

{{base}}

This example shows you have to use the builtin `browser.i18n` API along side [`vue-i18n`](https://vue-i18n.intlify.dev) (optimized with [`@intlify/unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n)) for localizing or translating an extension.

> You can localize your app without `vue-i18n`, just using the `browser.i18n` APIs, but `vue-i18n` will make it much easier to use.

## Setup

First, let's install all the packages:

{{package.json}}

```sh
pnpm i
```

We need to update our `wxt.config.ts` file, several changes here:

1. Add `@intlify/unplugin-vue-i18n` to Vite
1. Add a `name`, `description`, and `default_locale` to the manifest

{{wxt.config.ts}}

Finally, we need to create an instance of `vue-i18n` so we can use it in our code.

{{utils/i18n.ts}}

## Adding Translations

When using `vue-i18n`, it's recommended to store the runtime translations separate from the manifest translations.

> This is because `vue-i18n` handles placeholders differently than `browser.i18n`. So rather than try and combine the two, it's much simpler to store them in different locations.

First, the manifest translations go in the `public/_locales` directory.

{{public/_locales/en/messages.json}}

{{public/_locales/ko/messages.json}}

> Note that we specified the "en" locale as the deafult. We also used `extName` and `extDescription` in the manifest, which are declared in these files.
>
> See [Chrome's internationalization docs](https://developer.chrome.com/docs/extensions/reference/i18n/) for more details around this setup.

Second, we'll put the `vue-i18n` translations in the `assets/` directory. This is where the majority of translations will go.

{{assets/locales/en.json}}

{{assets/locales/ko.json}}

## Using Translations

You can use either `browser.i18n` or `i18n` (auto-imported from `utils/i18n.ts`) to get translations in the background or content scripts:

{{entrypoints/background.ts}}

Inside Vue, we'll want to setup a composable. This composable will include type-safety to make sure the message key exists, and will be auto-imported into our components.

{{composables/useI18n.ts}}

Finally, you can use the new composable in your components. Don't forget to add the plugin to your Vue app!

{{entrypoints/popup/main.ts}}

{{components/HelloWorld.vue}}
