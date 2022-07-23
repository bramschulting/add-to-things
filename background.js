
chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    // run script to try to get user selected text
    function: () => window.getSelection().toString()
  }, function (selection) {
    // format selection if it is not null
    selection = selection[0].result ? '\n' + selection[0].result: '';

    // Things 3.4 URL Scheme
    // https://support.culturedcode.com/customer/en/portal/articles/2803573
    var thingsURL = 'things:///add?show-quick-entry=true&title=' + encodeURIComponent(tab.title) + '&notes=' + encodeURIComponent(tab.url + selection);
    chrome.tabs.update({ url: thingsURL });

  });
  
});