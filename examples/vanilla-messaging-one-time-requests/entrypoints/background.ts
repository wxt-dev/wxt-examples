export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.runtime.onMessage.addListener(async (message) => {
    console.log('Background received:', message);
    console.log('Background sending:', 'pong');
    return 'pong';
  });
});
