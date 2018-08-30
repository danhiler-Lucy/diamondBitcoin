

$(function() {
   
});

function mainAnalyticsTool(){
    
}

var activeAnalyticsManager = new mainAnalyticsTool();

activeAnalyticsManager.defaultChecks = function () {
       activeAnalyticsManager.sendPageView();
       /*activeAnalyticsManager.sendPageViewType();
       activeAnalyticsManager.sendPageViewOfUserId();
       activeAnalyticsManager.sendPageViewOfDeviceType();
       activeAnalyticsManager.sendPageViewWidth();*/
};

activeAnalyticsManager.sendPageView = function () {
       //mixpanel.track("Page view");
       var userEmail='Guest';
       var firstName='Guest';
       var lastName='Guest';
       if(typeof activeMemberManager==='undefined'){
           activeMemberManager={};
           activeMainTool={};
           activeMainPage={};
           activeMainPage.pageId=0;
           activeMainTool.pageConfig=[];
           activeMainTool.pageConfig[activeMainPage.pageId]='landingpage';
       }
       if(typeof activeMemberManager.email==='undefined'){
       
        }
        else{
           var userEmail=activeMemberManager.email;
        }
        if(typeof activeMemberManager.firstName==='undefined'){
       
        }
        else{
           var firstName=activeMemberManager.firstName;
        }
        if(typeof activeMemberManager.lastName==='undefined'){
       
        }
        else{
           var lastName=activeMemberManager.lastName;
        }
       var obj={
           'userEmail':userEmail,
           'firstName':firstName,
           'lastName':lastName,
           'page':activeMainTool.pageConfig[activeMainPage.pageId],
           'touchDevice':activeMainTool.touchDevice,
           'pageWidth':window.innerWidth
       }
       activeAnalyticsManager.member=obj;
       mixpanel.track("Page view",activeAnalyticsManager.member);
};

activeAnalyticsManager.sendPageViewType = function () {
       mixpanel.track("Page view of page: "+activeMainTool.pageConfig[activeMainPage.pageId]);
};

activeAnalyticsManager.sendPageViewOfUserId = function () {
    if(typeof activeMemberManager.email==='undefined'){
       
    }
    else{
       mixpanel.track("Page view of User Id: "+activeMemberManager.email); 
    }
       
};

activeAnalyticsManager.sendPageViewOfDeviceType = function () {
        if(activeMainTool.touchDevice){
            mixpanel.track("Page view of touch device");
        }
        else{
            mixpanel.track("Page view of desktop");
        }
};

activeAnalyticsManager.sendPageViewWidth = function () {
    mixpanel.track("Page view of width: "+window.innerWidth+"px");
}

activeAnalyticsManager.defaultChecks();