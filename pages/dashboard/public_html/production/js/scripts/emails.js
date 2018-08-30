activeDashboardManager.sendEmail = function () {
    var emailValue=$('#emailValue').val();
    var emailSubjectValue=$('#subjectValue').val();
    var emailContentValue=$('#emailContentValue').val();
    var json={
            email:emailValue,
            subject:emailSubjectValue,
            body:emailContentValue
        };
        $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/send-email',
                    type: 'post',
                    data: json,
                    dataType: 'json',
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });
}