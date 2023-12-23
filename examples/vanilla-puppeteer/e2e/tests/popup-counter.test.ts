import { test, expect } from 'vitest';
import { openPopup } from '../pages/popup';

test('Popup counter increments when clicked', async () => {
  const popup = await openPopup();
  expect(await popup.getCounterText()).toEqual('count is 0');

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual('count is 1');

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual('count is 2');
});
