# Messaging - Long Lived Connections

{{base}}

This example demonstrates how to send messages to and from your background script using long-lived connections.

First, we need to setup a port to let other context's connect to.

{{entrypoints/background.ts}}

Then in our other files, like content scripts, options page, or popup, you need to connect to the port with the same name to send a message.

{{entrypoints/popup/main.ts}}

With this code, you should see messages sent to and from the background when the popup is opened.

```
Popup sending: ping
Background received: ping
Background sending: pong
Popup received: pong
```
