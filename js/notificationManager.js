function notificationManager(){
        this.notificationsStatusView=false;
        this.notificationsList=[];
        this.unreadNotificationsCount=0;
}

var activeNotificationManager= new notificationManager();

activeProductManager.getNotifications = function () {
    $.ajax({
                        url:activeMainTool.serverSrc+'users/'+activeMemberManager.user._id+'/notifications',
                        type: 'get',
                        data: {

                        },
                        headers: {
                            token: activeMemberManager.token 
                        },
                        dataType: 'json',
                        success: function (data) {
                                console.log('Notifications:');
                                console.log(data);
                                activeProductManager.setNotifications(data);
                        },
                        error: function (data) {
                                    if(data.status===403 || data.status===400){
                                            activeMainTool.invalidToken();
                                    }

                        }

                });
}

activeProductManager.setNotifications = function (data) {
    activeProductManager.notificationsList=data;
    var content='';
    var unreadNotificationsCount=0;
    var unreadNotificationContent='';
    var readNotificationContent='';
    for(var i=activeProductManager.notificationsList.length-1;i>=0;i--){
        var timeSince=activeMainTool.timeSince(new Date(activeProductManager.notificationsList[i].createdAt));
        if(!activeProductManager.notificationsList[i].read){
            unreadNotificationsCount++;
            unreadNotificationContent+='<div class="memberNotificationResultItem unreadNotification" onclick="activeMiniBidsList.expandBidsList();">'+
                                        '<div class="memberNotificationResultItemLeftSection">'+
                                        '<div class="unreadNotificationIcon">'+
                                        '</div>'+
                                            '<div class="memberNotificationResultItemImage">'+
                                                        '<img  src="../assets/messageIcon.png" />'+
                                            '</div>'+
                                        '</div>'+
                                       '<div class="memberNotificationResultItemRightSection">'+
                                        '<div class="memberNotificationResultItemTitle">'+
                                                    activeProductManager.notificationsList[i].subject+
                                            '</div>'+
                                        '<div class="memberNotificationResultItemDis">'+
                                                    activeProductManager.notificationsList[i].body+
                                            '</div>'+
                                        '<div class="memberNotificationResultItemTime">'+
                                                    timeSince+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
        }
        else{
        readNotificationContent+='<div class="memberNotificationResultItem" onclick="activeMiniBidsList.expandBidsList();">'+
                                        '<div class="memberNotificationResultItemLeftSection">'+
                                        '<div class="unreadNotificationIcon">'+
                                        '</div>'+
                                            '<div class="memberNotificationResultItemImage">'+
                                                        '<img  src="../assets/messageIcon.png" />'+
                                            '</div>'+
                                        '</div>'+
                                       '<div class="memberNotificationResultItemRightSection">'+
                                        '<div class="memberNotificationResultItemTitle">'+
                                                    activeProductManager.notificationsList[i].subject+
                                            '</div>'+
                                        '<div class="memberNotificationResultItemDis">'+
                                                    activeProductManager.notificationsList[i].body+
                                            '</div>'+
                                        '<div class="memberNotificationResultItemTime">'+
                                                    timeSince+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
                        }
    }
    activeProductManager.unreadNotificationsCount=unreadNotificationsCount;
    if(unreadNotificationsCount===0){
        unreadNotificationsCount='';
    }
    if(activeProductManager.notificationsList.length!==0){
        $('.memberNotificationIconDot').html(unreadNotificationsCount);
        $('.memberNotificationResults').html(unreadNotificationContent);
        $('.memberNotificationResults').append(readNotificationContent);
    }
    
}

activeProductManager.setReadNotifications = function () {
    for(var i=0;i<activeProductManager.notificationsList.length;i++){
        if(!activeProductManager.notificationsList[i].read){
            $.ajax({
                        url:activeMainTool.serverSrc+'users/'+activeMemberManager.user._id+'/notifications/'+activeProductManager.notificationsList[i]._id,
                        type: 'put',
                        data: {

                        },
                        headers: {
                            token: activeMemberManager.token 
                        },
                        dataType: 'json',
                        success: function (data) {
                                console.log('Notifications:');
                                console.log(data);
                        },
                        error: function (data) {
                                    if(data.status===403 || data.status===400){
                                            activeMainTool.invalidToken();
                                    }

                        }

                });
                }
    }
}

activeProductManager.showNotifications = function () {
    activeMiniCart.hideCart();
    if(activeProductManager.notificationsStatusView){
        activeProductManager.hideNotifications();
        return true;
    }
    activeProductManager.setReadNotifications();
    activeProductManager.notificationsStatusView=true;
    $('.memberNotificationIconDot').html('');
    $('.memberNotificationResultStructure').css('display','block');
    setTimeout(function(){ 
            $('.memberNotificationResultStructure').css('opacity','1');
            $('.memberNotificationResultStructure').css('margin-top','0px');
    }, 10);
}

activeProductManager.hideNotifications = function () {
    if(!activeProductManager.notificationsStatusView){
        return true;
    }
    activeProductManager.notificationsStatusView=false;
    $('.memberNotificationResultStructure').css('opacity','0');
            $('.memberNotificationResultStructure').css('margin-top','-10px');
    setTimeout(function(){ 
            $('.memberNotificationResultStructure').css('display','none');
    }, 400);
}

$(function () {
 
    $(".memberNotificationStructure")
  .mouseenter(function(){ 
  //activeMainTool.disableScroll();
          })
  .mouseleave(function(){ 
  //activeMainTool.enableScroll();
          })
});