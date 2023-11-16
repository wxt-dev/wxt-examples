import { UseAsyncStateOptions, useAsyncState } from '@vueuse/core';
import useStorage from './useStorage';
import { computed, onMounted, onUnmounted } from 'vue';

export default function <
  T extends StorageValue,
  Shallow extends boolean = true,
>(
  key: string,
  initialValue?: T,
  opts?: UseAsyncStateOptions<Shallow, T | null>,
) {
  const { state, ...asyncState } = useAsyncState<T | null, [], Shallow>(
    () => storage.getItem(key),
    initialValue ?? null,
    opts,
  );

  // Listen for changes
  let unwatch: Promise<() => void> | undefined;
  onMounted(() => {
    unwatch = storage.watch(async (event, changedKey) => {
      if (key !== changedKey) return;
      if (event === 'remove') state.value = null;
      else asyncState.execute();
    });
  });
  onUnmounted(() => {
    unwatch?.then((fn) => fn());
  });

  return {
    // Use a writable computed ref to write updates to storage
    state: computed({
      get() {
        return state.value;
      },
      set(newValue) {
        void storage.setItem(key, newValue);
        state.value = newValue;
      },
    }),
    ...asyncState,
  };
}

type StorageValue = null | string | number | boolean | object;
