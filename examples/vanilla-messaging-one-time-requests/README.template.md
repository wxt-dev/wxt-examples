# Messaging - One Time Requests

{{base}}

This example demonstrates how to send messages to and from your background script. In this case, the popup makes a request to the background.

{{entrypoints/popup/main.ts}}

The background receives the message, and returns a response.

{{entrypoints/background.ts}}

With this code, you should see the following logs when inspecting the popup in dev tools:

```
Popup sending: ping
Background received: ping
Background sending: pong
Popup response: pong
```
