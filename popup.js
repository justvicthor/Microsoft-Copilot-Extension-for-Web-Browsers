// file popup.js
document.getElementById('openPage').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://www.bing.com/chat?form=NTPCHB' });
  });
  