chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript(tab.id, {
		// run script to try to get user selected text
		code: "window.getSelection().toString()"
	},function(selection) {
		// format selection if it is not null
		selection = selection ? "\n" + selection[0]: "";

		var thingsURL = 'things:add?title=' + encodeURIComponent(tab.title) + '&notes=' + encodeURIComponent(tab.url + selection);
  		chrome.tabs.update({ url: thingsURL });
	});

});
