chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        // Run script to try to get user selected text
        code: 'window.getSelection().toString()'
    }, function(selection) {
        // Format selection if it’s not null
        selection = selection[0] ? '\n\n' + selection[0] : '';

        chrome.tabs.update(tab.id, {
            url: 'things:'
        }, function() {
            setTimeout(function() {
                chrome.tabs.update(tab.id, {
                    url:
                        'things:add?title=' + encodeURIComponent(tab.title) +
                        '&notes=' + encodeURIComponent(tab.url + selection)
                });
            }, 300);
        });
    });
});
