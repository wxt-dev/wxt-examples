export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.runtime.onConnect.addListener((port) => {
    if (port.name !== 'example') return;

    port.onMessage.addListener((message) => {
      console.log('Background received:', message);
      console.log('Background sending:', 'pong');
      port.postMessage('pong');
    });
  });
});
