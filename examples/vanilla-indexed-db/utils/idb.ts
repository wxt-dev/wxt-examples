import { IDBPDatabase, openDB } from 'idb';

export function openExtensionDatabase(): Promise<IDBPDatabase> {
  return openDB('todos', 1, {
    upgrade(database) {
      database.createObjectStore('todos', { keyPath: 'id' });
    },
  });
}
