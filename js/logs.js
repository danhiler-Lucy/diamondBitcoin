var logOfConsole = [];

var _log = console.log,
    _warn = console.warn,
    _error = console.error;

function getParamsUrl( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function checkIfLogs(){
    // Store
    //localStorage.setItem("log", "1");
     logPermission = getParamsUrl('log',location.href);
     if(localStorage.getItem("log")!==null){
         if(localStorage.getItem("log")==='1'){
                logPermission=true;
            }
           
     }
    if(!logPermission){
        //console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
        console.log("%cPowered by Lucy platforms", "margin-top: 201px;display: inline-block;font-size: 20px;letter-spacing: 1.5px;");
        logPermission=false;
    }
    else{
        console.log("%cNice to see you again, chief.", "margin-top: 201px;display: inline-block;font-size: 20px;letter-spacing: 1.5px;");
        logPermission=true;
    }
}
checkIfLogs();
console.log = function() {
    if(!logPermission){
        return true;
    }
    logOfConsole.push({method: 'log', arguments: arguments});
    if(logPermission){
        return _log.apply(console, arguments);
    }
};

console.warn = function() {
    if(!logPermission){
        return true;
    }
    logOfConsole.push({method: 'warn', arguments: arguments});
    return _warn.apply(console, arguments);
};

console.error = function() {
    if(!logPermission){
        return true;
    }
    logOfConsole.push({method: 'error', arguments: arguments});
    return _error.apply(console, arguments);
};