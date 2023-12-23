export async function openPopup() {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${extensionId}/popup.html`);

  await page.waitForSelector('#counter');

  const popup = {
    getCounter: () => page.waitForSelector('#counter'),
    clickCounter: async () => {
      const counter = await popup.getCounter();
      await counter.click();
    },
    getCounterText: async () => {
      const counter = await popup.getCounter();
      return await counter.evaluate((el) => el.textContent);
    },
  };
  return popup;
}
