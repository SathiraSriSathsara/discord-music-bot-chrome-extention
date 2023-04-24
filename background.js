chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: 'https://discord.com/login' }, (tab) => {
    chrome.storage.local.set({ tabId: tab.id }, () => {
      console.log('Discord login page opened');
    });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'start-bot') {
    chrome.tabs.executeScript({ file: 'bot.js' }, () => {
      console.log('Bot script injected');
    });
  }
});
