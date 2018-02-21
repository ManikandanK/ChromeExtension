
chrome.contextMenus.create({
	"id": "showFusion",
	"title": "Fusion",
	"contexts": ["selection"] 
})

chrome.contextMenus.create({
	"id": "submission_id",
	"parentId":"showFusion",
	"title": "Show Submission",
	"contexts": ["selection"] 
})

chrome.contextMenus.create({
	"id": "script_exec_id",
	"parentId":"showFusion",
	"title": "Show Script Execution",
	"contexts": ["selection"] 
})

chrome.contextMenus.create({
	"id": "script_exec_id",
	"parentId":"showFusion",
	"title": "Show Script Execution",
	"contexts": ["selection"] 
})


chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "showFusion"){
		window.open('https://inception.juniper.net/fusion/v2');
		return true;
	}

	var intRegex = /^\d+$/
	if(intRegex.test(clickData.selectionText)){
		window.open('https://inception.juniper.net/fusion/v2#' + clickData.menuItemId +'=' + clickData.selectionText )
	}
}

})