# IndexedDB

{{base}}

If you need to store an unknown amount of data, IndexedDB is the only solution for web extensions. It has no storage size limits, and provides fast ways to query the data.

However, just like `localStorage`, `sessionStorage`, and other standard web storage solutions, an extension does not share IndexedDB instances across all contexts. The popup, content scripts, options page, and background all have separate databases.

So when using IndexedDB in web extensions, it's important to always access it from the background. Then you can use the background as if it's a standard backend, making requests to it for data.

In this example, we're going to use [`idb`](https://www.npmjs.com/package/idb) to simplify the IndexedDB code, and [`@webext-core/proxy-service`](https://webext-core.aklinker1.io/guide/proxy-service/) to simplify the communication with the background.

{{package.json}}

First, we need to setup our database.

{{utils/idb.ts}}

We also need to setup a service for interacting with our database.

{{utils/todos-repo.ts}}

In the background, we can open our database, register the proxy service, and start using the repo!

{{entrypoints/background.ts}}

In the popup, use `getTodosRepo` to get an instance of `TodosRepo` that executes in the background.

{{entrypoints/popup/main.ts}}
