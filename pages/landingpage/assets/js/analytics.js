var obj={
    'userEmail':'guest'
}
if(localStorage.getItem('lpui')!==null || typeof $.cookie('lpui')!=='undefined'){
    if(localStorage.getItem('lpui')===null){
        obj={
            'userEmail':$.cookie('lpui')
        }   
    }
    else{
        obj={
            'userEmail':localStorage.getItem('lpui')
        }   
    }
    
    
}
mixpanel.track("Page view",obj);

