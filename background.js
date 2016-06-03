chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript(tab.id, {
		// run script to try to get user selected text
		code: "window.getSelection().toString()"
	},function(selection) {
		// format selection if it is not null
		selection = selection ? "\n" + selection[0]: "";

		// per http://stackoverflow.com/a/29244120/518130
		var frame = document.createElement("iframe");
		frame.src = 'things:add?title=' + encodeURIComponent(tab.title) + '&notes=' + encodeURIComponent(tab.url + selection);

		// Needs to be inserted into document to trigger load
		document.body.appendChild(frame);
		document.body.removeChild(frame);
	});

});
