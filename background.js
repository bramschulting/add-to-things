chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update(tab.id, {
    url: 'things:'
  }, function() {
    setTimeout(function() {
      chrome.tabs.update(tab.id, {
        url: 'things:add?title=' + encodeURIComponent(tab.title) + '&notes=' + encodeURIComponent(tab.url)
      });
    }, 300);
  });
});
