export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  console.log(browser.i18n.getMessage('extName'));
  console.log(i18n.global.t('some-key'));
});
