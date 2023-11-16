# Vue Storage Composable

{{base}}

WXT's storage API is based on [`unstorage`](https://unstorage.unjs.io/). While [`@vueuse/core`'s `useStorageAsync`](https://vueuse.org/core/useStorageAsync/#usestorageasync) composable accepts a storage object from `unstorage`, it does not watch for changes. So if you want a truly reactive composable, we need to write it ourselves.

The composable will use [`@vueuse/core`'s `useAsyncState`](https://vueuse.org/core/useAsyncState/#useasyncstate), so let's install it:

{{package.json}}

Let's write the composable:

1. Call `useAsyncState` to initialize the state
2. When the component is mounted, add a listener that watches for storage changes
3. When the component is unmounted, remove the listener
4. Instead of returning the state directly, return a "writable computed ref" that updates the value in storage when a new value is set

{{composables/useStoredValue.ts}}

Lets setup a interval in our background that increments a counter in `browser.storage.session` storage:

{{entrypoints/background.ts}}

And we can read and update the value like so from the UI:

{{components/HelloWorld.vue}}
