import { Storage } from 'wxt/storage';
import { inject } from 'vue';

export default function () {
  const storage = inject<Storage>('storage');
  if (storage == null)
    throw Error(
      "Injected value for 'storage' not found. Did you forget to provide it?",
    );
  return storage;
}
