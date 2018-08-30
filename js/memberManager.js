function memberManager(){
        this.loginStatus = false;
        this.rememberPass = false;
}

var activeMemberManager= new memberManager();



activeMemberManager.setLocalStorage = function (name,value) {
      localStorage.setItem(name,value);
};

activeMemberManager.userManipulations = function (data) {
      if(typeof data.firstName==='undefined'){
          data.firstName='';
          localStorage.setItem('firstName','');
      }
      if(typeof data.lastName==='undefined'){
          data.lastName='';
          localStorage.setItem('lastName','');
      }
      
      return data;
};

activeMemberManager.getLocalStorage = function (name) {
      return localStorage.getItem(name);
};

activeMemberManager.logoutUser = function () {
    activeMemberManager.cleanMemberInfo();
    activeMainTool.redirectPage(7); //to login
}

activeMemberManager.cleanMemberInfo = function () {
     window.localStorage.removeItem("firstName");
     window.localStorage.removeItem("lastName");
     window.localStorage.removeItem("gender");
     window.localStorage.removeItem("email");
     window.localStorage.removeItem("token");
};

activeMemberManager.setDefaultMemberInfo = function (value) {
    if(typeof value.firstName==='undefined'){
        value.firstName = 'User';
    }
    if(typeof value.gender==='undefined'){
        value.gender = 'male';
    }
    
      localStorage.setItem('firstName',value.firstName);
      localStorage.setItem('lastName',value.lastName);
      localStorage.setItem('gender',value.gender);
      localStorage.setItem('email',value.email);
      localStorage.setItem('rememberEmail',value.email);
      if(typeof value.pass==='undefined'){
        var pass=Base64.encode($('#loginPassword').val());
      }
      else{
        var pass=Base64.encode(value.pass);
      }
      
      localStorage.setItem('rememberPass',pass);
      localStorage.setItem('token',value.token);
      activeMemberManager.setObjDefaultMemberInfo();
      location.reload();
};

activeMemberManager.setObjDefaultMemberInfo = function () {
      activeMemberManager.firstName = localStorage.getItem('firstName');
      activeMemberManager.lastName = localStorage.getItem('lastName');
      activeMemberManager.gender = localStorage.getItem('gender');
      activeMemberManager.email = localStorage.getItem('email');
      activeMemberManager.token = localStorage.getItem('token');
      activeMemberManager.saveLpui();
};

activeMemberManager.saveLpui = function () {
    try{
        $('#lpuiInput').val(activeMemberManager.email);
      $('#lpuiSubmitButton').click();
      console.log('lpui Updated: '+activeMemberManager.email);
    }
    catch(e){
        console.log('err saveLpui');
    }
}

activeMemberManager.checkLoginStatus = function (name,value) {
      if(activeMemberManager.getLocalStorage('token')!==null){ //member
          activeMemberManager.loginStatus = true;
          activeMemberManager.setObjDefaultMemberInfo();
          activeMemberManager.getUserInfo();
      }
      else{
          activeMemberManager.loginStatus = false;
      }
};

activeMemberManager.getData = function () {
    $(function() {
    activeMainPage.getData();
    });
        
}

activeMemberManager.checkAdminUser = function () {
    if(activeMemberManager.user.roles.length>0){
        if(activeMemberManager.user.roles[1]==='admin' || activeMemberManager.user.roles[1]==='manager'){
            $('#header5_button').css('display','block');
        }
    }
}

activeMemberManager.checkWhiteLabelUsers = function () {
    if(activeMemberManager.user._id==='593d9ceb271fc01000a35ebb'){
        activeMemberManager.whiteLabelChanges();
    }
}

activeMemberManager.whiteLabelChanges = function () {
    $('#mainLogoTitle').html('THE JEWELERS');
    $('.mainCompanyTitle').html('THE JEWELERS');
    $('.comingSoonPopupHeaderTitle').html('THE JEWELERS');
    $('.footerAddress1').html('The Jewelers of Las Vegas ');
    $('.footerAddress2').html('2400 WESTERN AVENUE ');
    $('.footerAddress3').html('LAS VEGAS, NV 89102');
    $('.footerPhone').html('T. (702) 382-1234');
    $('.footerPhone').attr('onclick','window.location.href = ("tel:+7023821234")');
    $('.footerFax').html('F. (702) 382-3307');
    $('.footerEmail').html('western@thejewelers.com');
    $('.footerEmail').attr('onclick','window.location.href = ("mailto:western@thejewelers.com")');
    $('.comingSoonPopupDescMail').html('western@thejewelers.com');
    
    $('.whatsupInfoStructure').css('display','none');
    
    if($('.contentSection2tabStructure .contentSection2tabTableTdValue').length>0){
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[0]).html('none');
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[1]).html('none');
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[2]).html('none');
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[3]).html('none');
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[4]).html('none');
        $($('.contentSection2tabStructure .contentSection2tabTableTdValue')[5]).html('none');
    }
    
    document.title = 'The Jewelers - Online';
}

activeMemberManager.getUserInfo = function () {
        $.ajax({
                        url:activeMainTool.serverSrc+'users/me',
                        type: 'get',
                        data: {

                        },
                        headers: {
                            token: activeMemberManager.token 
                        },
                        dataType: 'json',
                        success: function (data) {
                                activeMemberManager.user=activeMemberManager.userManipulations(data);
                                activeCartManager.getCart();
                                activeWishListManager.getCart();
                                activeMemberManager.getData();
                                activeMemberManager.checkWhiteLabelUsers();
                                activeMemberManager.checkAdminUser();
                                activeProductManager.getNotifications();
                                activeBidManager.getBidsList();
                                activeRecentlyViewed.getData();
                                //if(activeMainPage.pageId===5){
                                    //activeMainPage.getData();
                                //}
                                console.log('Member:');
                                console.log(data);
                        },
                        error: function (data) {
                                    if(data.status===403 || data.status===400){
                                            activeMainTool.invalidToken();
                                    }

                        }

                });
    }
    activeMemberManager.checkLoginStatus();