// searchTerapeak = function (word) {
//   var query = word.selectionText;
//   console.log(query);
// };

const sendMessage = async (data) => {
  const { selectionText } = data;
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  // do something with response here, not outside the function
  console.log(response);
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "1",
    title: "Hello Extensions",
    contexts: ["selection"], // ContextType
  });
});

chrome.contextMenus.onClicked.addListener(sendMessage);
