function mainPage(){
    this.pageId=13; //login
}

var activeMainPage = new mainPage();

activeMainPage.getData= function () {
        //activeProductManager.getProducts();
        
}




activeMainPage.resetpass = function () {
        if($('#resetPassword').val()!==$('#repeatResetPassword').val()){
            alert('Passwords must be matched');
            return true;
    }
    var filterUrlQuery = activeMainTool.getUrlParam('reset', location.href);
    if(filterUrlQuery===null){
        alert('The link to reset password is no longer valid');
        return true;
    }
                var json={
                    password:$('#resetPassword').val(),
                    token:filterUrlQuery
                }
                
                $.ajax({
                        url:activeMainTool.serverSrc+'users/auth/reset-password',
                        type: 'post',
                        data: json,
                        dataType: 'json',
                        success: function (data) {
                            activeMainTool.redirectPage(7);
                        },
                        error: function (data){
                            console.log(data);
                            if(data.responseText==='OK'){
                                activeMainTool.redirectPage(7);
                            }
                            else{
                            alert('The link to reset password is no longer valid');
                        }
                            
                        }
                });
                
};

