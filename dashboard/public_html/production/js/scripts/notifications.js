
activeDashboardManager.sendNotificationToUser= function (data){
     $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/notifications',
                    type: 'post',
                    data:data,
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log('notification was sent!');
                        console.log(data);
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}
