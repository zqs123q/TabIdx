(function(){
    function sendMsg(id, info, tab){
        chrome.tabs.query({
            currentWindow: true
        }, function(tabs){
            for(let i = 0; i < tabs.length; i++){
                chrome.tabs.sendMessage(tabs[i].id, tabs[i].index+1+"#");
            }
        });
    }
    chrome.tabs.onUpdated.addListener(sendMsg);
    chrome.tabs.onMoved.addListener(sendMsg);
    chrome.tabs.onRemoved.addListener(sendMsg);
    chrome.tabs.onReplaced.addListener(sendMsg);
})();
