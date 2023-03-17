chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(`Message Received: ${request.greeting}`);
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
