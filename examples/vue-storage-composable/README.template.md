# Vue Storage Composable

{{base}}

WXT's storage API is based on [`unstorage`](https://unstorage.unjs.io/). While [`@vueuse/core`'s `useStorageAsync`](https://vueuse.org/core/useStorageAsync/#usestorageasync) composable accepts a storage object from `unstorage`, it does not watch for changes. So if you want a truly reactive composable, we need to write it ourselves.

The composable will use [`@vueuse/core`'s `useAsyncState`](https://vueuse.org/core/useAsyncState/#useasyncstate), so let's install it:

{{package.json}}

Next, rather than relying on `wxt/storage` in our Vue app, let's use `provide`/`inject` to do some dependency injection.

{{entrypoints/popup/main.ts}}

{{composables/useStorage.ts}}

Alright, everything is setup. Let's write the composable:

1. Grab the provided storage object by calling `useStorage()`
2. Call `useAsyncState` to initialize the state
3. When the component is mounted, add a listener that watches for storage changes
4. When the component is unmounted, remove the listener
5. Instead of returning the state directly, return a "writable computed ref" that updates the value in storage when a new value is set

{{composables/useStoredValue.ts}}

Lets setup a interval in our background that increments a counter in `browser.storage.session` storage:

{{entrypoints/background.ts}}

And we can read and update the value like so:

{{components/HelloWorld.vue}}