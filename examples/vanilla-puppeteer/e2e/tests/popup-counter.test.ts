import { test, expect } from 'vitest';
import { openPopup } from '../pages/popup';

test('Popup counter works', async () => {
  const popup = await openPopup();
  expect(await popup.getCounterText()).toEqual('count is 0');

  await popup.clickCounter();
  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual('count is 2');
});
