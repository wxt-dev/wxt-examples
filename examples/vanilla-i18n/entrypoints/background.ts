export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  console.log(
    browser.i18n.getMessage('extName'),
    browser.i18n.getMessage('someAppText'),
  );
});
