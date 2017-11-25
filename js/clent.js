(function(){
    let old = "";
    function chgSer(msg, sender){
        let text = document.title;
        if(text.slice(0, old.length) == msg)
            return;
        if(text.slice(0, old.length) == old)
            text = text.slice(old.length);
        old = msg;
        document.title = msg + text;
    };
    function chgCli(){
        document.title = old + document.title;
    }
    chrome.runtime.onMessage.addListener(chgSer)
    let title = document.getElementsByTagName("title")[0];
    if(title)
        title.onChange = chgCli;
})();
