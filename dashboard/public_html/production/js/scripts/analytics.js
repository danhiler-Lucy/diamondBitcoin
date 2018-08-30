

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
       if(typeof activeDashboardManager.email==='undefined'){
       
        }
        else{
           var userEmail=activeDashboardManager.email;
        }
        if(typeof activeDashboardManager.firstName==='undefined'){
       
        }
        else{
           var firstName=activeDashboardManager.firstName;
        }
        if(typeof activeDashboardManager.lastName==='undefined'){
       
        }
        else{
           var lastName=activeDashboardManager.lastName;
        }
       var obj={
           'userEmail':userEmail,
           'firstName':firstName,
           'lastName':lastName,
           'page':'dashboard',
           'pageWidth':window.innerWidth
       }
       mixpanel.track("Page view",obj);
};

activeAnalyticsManager.sendPageViewType = function () {
       mixpanel.track("Page view of page: dashboard");
};

activeAnalyticsManager.sendPageViewOfUserId = function () {
    if(typeof activeDashboardManager.email==='undefined'){
       
    }
    else{
       mixpanel.track("Page view of User Id: "+activeDashboardManager.email); 
    }
       
};



activeAnalyticsManager.sendPageViewWidth = function () {
    mixpanel.track("Page view of width: "+window.innerWidth+"px");
}

activeDashboardManager.getAnalytics = function () {
    activeDashboardManager.getInfo('admin/analytics',5);
}
activeDashboardManager.getAnalytics();



activeDashboardManager.SetAnalyticsTable = function (data) {
    console.log(data);
    $('#info1').html('$'+activeDashboardManager.numberWithCommas(data.sales.month));
    $('#info1_sec').html(activeDashboardManager.numberWithCommas(data.productsBought.month));
    $('#info2').html('$'+activeDashboardManager.numberWithCommas(data.sales.week));
    $('#info2_sec').html(activeDashboardManager.numberWithCommas(data.productsBought.week));
    $('#info3').html('$'+activeDashboardManager.numberWithCommas(data.sales.day));
    $('#info3_sec').html(activeDashboardManager.numberWithCommas(data.productsBought.day));
    $('#info4').html(activeDashboardManager.numberWithCommas(data.products.available));
    $('#info4_sec').html(activeDashboardManager.numberWithCommas(data.products.total));
    $('#info5').html(activeDashboardManager.numberWithCommas(data.users.month));
    $('#info5_sec').html(activeDashboardManager.numberWithCommas(data.users.week));
    
}


activeAnalyticsManager.defaultChecks();