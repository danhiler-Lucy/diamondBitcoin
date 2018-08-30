function mainPage(){
    this.pageId=7; //login
    this.login={};
    this.login={
        status:false,
        inputError:[],
        inputMessage:[]
    };
    this.register={
        status:false,
        inputError:[],
        inputMessage:[]
    };
}

var activeMainPage = new mainPage();

activeMainPage.getData= function () {
        //activeProductManager.getProducts();
        
}

$(function() {
    activeMainPage.checkLastLogin();
});


activeMainPage.checkLastLogin = function () {
    var lastEmailLogin=localStorage.getItem('rememberEmail');
    var autofillLoginCredentials=localStorage.getItem('autofillLoginCredentials');
    if(autofillLoginCredentials==='false'){
        return true;
    }
    if(lastEmailLogin!==null && $('#loginEmail').val()===''){
        $('#loginEmail').val(lastEmailLogin);
    }
      var lastPassLogin=localStorage.getItem('rememberPass');
    if(lastPassLogin!==null && $('#loginPassword').val()===''){
        var pass=Base64.decode(lastPassLogin);
        $('#loginPassword').val(pass);
    }
}

activeMainPage.registerMember = function () {
        activeMainPage.checkRegisterInputs();
        if(activeMainPage.register.status){ //ok
            var userGender='female';
            if($('#genderMaleInput').is(':checked')){
                    userGender='male';
            }
                var json={
                    email:$('#registerEmail').val().toLowerCase(),
                    password:$('#registerPassword').val(),
                    gender:userGender,
                    firstName:$('#registerFirstname').val(),
                    lastName:$('#registerLastname').val()
                }
                $('.pageWrapperLoadingStructure').css('display','block');
                setTimeout(function(){ 
                      $('.pageWrapperLoadingStructure').css('opacity','1');
                }, 10);
                $.ajax({
                        url:activeMainTool.serverSrc+'users/auth/register',
                        type: 'post',
                        data: json,
                        dataType: 'json',
                        success: function (data) {
                            $('.pageWrapperLoadingStructure').css('opacity','0');
                            setTimeout(function(){ 
                                $('.pageWrapperLoadingStructure').css('display','none');      
                            }, 600);
                            activeMainPage.showApprovalPopup();
                            //activeMemberManager.setDefaultMemberInfo(data);
                            //activeMainTool.redirectPage(0);
                        },
                        error: function (data){
                            console.log(data);
                            
                            $('.pageWrapperLoadingStructure').css('opacity','0');
                            setTimeout(function(){ 
                                $('.pageWrapperLoadingStructure').css('display','none');      
                            }, 600);
                            if(data.status===409){
                                activeMainPage.errorMessage = 'Email is already exist';
                                activeMainPage.errorElm=$('#registerEmail');
                                activeMainPage.showAlert();
                            }
                            else{
                                //alert('Please check your network connection.');
                                //alert('Please wait for your approval.');
                                activeMainPage.showApprovalPopup();
                                console.log(data);
                            }
                            
                        }
                });
                
        }
};

activeMainPage.showApprovalPopup = function () {
    $('#approvalPopupStructure').css('display','block');
    $('.approvalPopupStructureBlur').css('display','block');
    setTimeout(function(){ 
    $('#approvalPopupStructure').css('opacity','1');
    $('#approvalPopupStructure').css('top','100px');
    $('.approvalPopupStructureBlur').css('opacity','.6');
    }, 10);
}

activeMainPage.showForgotPassword = function () {
    $('.loginLeftContentWrapper').css('margin-left','-110%');
}

activeMainPage.hideForgotPassword = function () {
    $('.loginLeftContentWrapper').css('margin-left','0%');
}

activeMainPage.hideApprovalPopup = function () {
    /*$('#approvalPopupStructure').css('opacity','0');
    $('#approvalPopupStructure').css('top','50px');
    $('.approvalPopupStructureBlur').css('opacity','0');
    setTimeout(function(){ 
    $('#approvalPopupStructure').css('display','none');
    $('.approvalPopupStructureBlur').css('display','none');
    }, 600);
*/
activeMainTool.redirectPage(8);
}

activeMainPage.checkRegisterInputs = function () {
        activeMainPage.register={
            status:false,
            inputError:[],
            inputMessage:[]
        };
        if(!activeMainPage.checkRegisterInfo()){
            activeMainPage.showAlert();
            return true;
        }
        if(!activeMainPage.checkRegisterEmail()){
            activeMainPage.showAlert();
            return true;
        }
        if(!activeMainPage.checkRegisterPassword()){
            activeMainPage.showAlert();
            return true;
        }
        if(!activeMainPage.checkRegisterPasswordMatch()){
            activeMainPage.showAlert();
            return true;
        }
};

activeMainPage.showAlert = function () {
     $('.alertPopupStructure').css({
                'visibility':'visible',
                'opacity':'1',
                'background-color':'black',
                'top':$(activeMainPage.errorElm).offset().top+$(activeMainPage.errorElm).height()+30,
                'left':$(activeMainPage.errorElm).offset().left
            });
            $('.registerContentInputWrapperInput').css('opacity','0.5');
            $('.registerContentInputWrapperTitle').css('opacity','0.5');
            $($(activeMainPage.errorElm).parent()).css('opacity','1');
            $($($(activeMainPage.errorElm).parent()).prev()).css('opacity','1');
            $('.alertPopupTitle').html(activeMainPage.errorMessage);
            $(activeMainPage.errorElm).focus();
}

activeMainPage.sendForgotPassword = function () {
            var emailValue=$('#forgotPassEmail').val();
                if(emailValue===''){
                    activeMainPage.errorMessage = 'Please fill your email address';
                    activeMainPage.errorElm=$('#forgotPassEmail');
                    activeMainPage.register.status=false;
                     activeMainPage.showAlert();
                     setTimeout(function(){ activeMainPage.clearAlerts();}, 2000);
                     
                    return true;
                }
                var json={
                    email:emailValue,
                    url:'https://dob.com/resetpass/'
                }
                $('.forgotPasswordContentWrapper .loginLeftContentInputWrapper').css('display','none');
                $('.forgotPasswordContentWrapper .forgotPasswordContentSuccessStructure').css('display','block');
                
                
                setTimeout(function(){ 
                activeMainPage.hideForgotPassword();    
                }, 1000);
                setTimeout(function(){ 
                $('#forgotPassEmail').val('');
                $('.forgotPasswordContentWrapper .loginLeftContentInputWrapper').css('display','block');
                $('.forgotPasswordContentWrapper .forgotPasswordContentSuccessStructure').css('display','none');
                }, 1600);
                $.ajax({
                        url:activeMainTool.serverSrc+'users/auth/forgot-password',
                        type: 'post',
                        data: json,
                        dataType: 'json',
                        success: function (data) {
                            console.log(data);
                        },
                        error: function (data){
                            console.log(data);
                            
                        }
                });
};

activeMainPage.checkRegisterInfo = function () {
    if($('#registerFirstname').val()===''){
        activeMainPage.errorMessage = 'Please fill all the details';
        activeMainPage.errorElm=$('#registerFirstname');
        activeMainPage.register.status=false;
        return false;
    }
    if($('#registerLastname').val()===''){
        activeMainPage.errorMessage = 'Please fill all the details';
        activeMainPage.errorElm=$('#registerLastname');
        activeMainPage.register.status=false;
        return false;
    }
    activeMainPage.register.status=true;
    return true;
        
};

activeMainPage.checkRegisterEmail = function () {
        if($('#registerEmail').val()===''){
            activeMainPage.errorMessage = 'Please fill all the details';
            activeMainPage.errorElm=$('#registerEmail');
            activeMainPage.register.status=false;
            return false;
        }
        else if(!activeMainTool.validateEmail($('#registerEmail').val())){
            activeMainPage.errorMessage = 'Your Email is not valid';
            activeMainPage.errorElm=$('#registerEmail');
            activeMainPage.register.status=false;
            return false;
        }
        activeMainPage.register.status=true;
        return true;
};

activeMainPage.checkRegisterPasswordMatch = function () {
    activeMainPage.register.status=true;
        if($('#registerPassword').val()!==$('#registerConfirmPassword').val()){
            activeMainPage.register.status=false;
            activeMainPage.errorMessage = "Passwords don't match";
            activeMainPage.errorElm=$('#registerConfirmPassword');
            return false;
    }
    return true;
}

activeMainPage.checkRegisterPassword = function () {
    activeMainPage.register.status=true;
    if($('#registerPassword').val().length<6 || $('#registerPassword').val().length>15){
            activeMainPage.register.status=false;
            activeMainPage.errorMessage = 'Must be at least 6-15 letters';
            activeMainPage.errorElm=$('#registerPassword');
            return false;
    }
    /*if(!activeMainTool.hasLowerCase($('#registerPassword').val())){
            activeMainPage.register.status=false;
            activeMainPage.errorMessage = 'Must be at least 1 lowercase';
            activeMainPage.errorElm=$('#registerPassword');
            return false;
    }
    if(!activeMainTool.hasUpperCase($('#registerPassword').val())){
            activeMainPage.register.status=false;
            activeMainPage.errorMessage = 'Must be at least 1 uppercase';
            activeMainPage.errorElm=$('#registerPassword');
            return false;
    }
    if(!activeMainTool.hasNumbers($('#registerPassword').val())){
            activeMainPage.register.status=false;
            activeMainPage.errorMessage = 'Must be at least 1 number';
            activeMainPage.errorElm=$('#registerPassword');
            return false;
    }*/
    return true;
             /*alert(
                                        'Please make sure your password:\n'+
                                        '1. Is at least 8-15 characters long.'+
                                        '\n'+
                                        '2. Includes an uppercase letter.'+
                                        '\n'+
                                        '3. Includes a lowercase letter.'+
                                        '\n'+
                                        '4. Includes a number.'
                                        );*/
            
    
};

activeMainPage.showRegisterForm = function () {
    $('.loginLeftContentWrapper').removeClass('visible');
    $('.registerContentWrapper').addClass('visible');
}
activeMainPage.hideRegisterForm = function () {
    $('.registerContentWrapper').removeClass('visible');
    $('.loginLeftContentWrapper').addClass('visible');
}
activeMainPage.loginMember = function () {
    console.log($('#loginLeftContentRememberCheckbox').prop('checked'));
        activeMainPage.checkLoginInputs();
        if(activeMainPage.login.status){ //ok
                var json={
                    email:$('#loginEmail').val().toLowerCase(),
                    password:$('#loginPassword').val() 
                }
                if($('#loginLeftContentRememberCheckbox').prop('checked')){
                    localStorage.setItem('autofillLoginCredentials','true');
                }
                else{
                    localStorage.setItem('autofillLoginCredentials','false');
                }
                $('.pageWrapperLoadingStructure').css('display','block');
                setTimeout(function(){ 
                      $('.pageWrapperLoadingStructure').css('opacity','1');
                }, 10);
                $.ajax({
                        url:activeMainTool.serverSrc+'users/auth/login',
                        type: 'post',
                        data: json,
                        dataType: 'json',
                        success: function (data) {
                            activeMemberManager.setDefaultMemberInfo(data);
                            activeMainTool.redirectPage(0);
                        },
                        error: function (data){
                            $('.pageWrapperLoadingStructure').css('opacity','0');
                            setTimeout(function(){ 
                                $('.pageWrapperLoadingStructure').css('display','none');      
                            }, 600);
                            if(data.status===400){
                                alert('Please fill your email/password and try again.');
                            }
                            else if(data.status===404){
                                alert('Please check your email/password and try again.');
                            }
                        }
                });       
        }
};

activeMainPage.checkLoginInputs = function () {
        activeMainPage.login={
            status:false,
            inputError:[],
            inputMessage:[]
        };
        activeMainPage.checkLoginEmail();
        activeMainPage.checkLoginPassword();
};

activeMainPage.checkLoginEmail = function () {
        activeMainPage.login.status=true;
};

activeMainPage.checkLoginPassword = function () {
        activeMainPage.login.status=true;
};

$(".resetpassInputLogin").keyup(function(event){
    if(event.keyCode == 13){
        activeMainPage.sendForgotPassword();
    }
});

$(".loginInputLogin").keyup(function(event){
    if(event.keyCode == 13){
        activeMainPage.loginMember();
    }
});

$(".loginInputRegister").keyup(function(event){
    activeMainPage.clearAlerts();
    if(event.keyCode == 13){
        activeMainPage.registerMember();
    }
});

$("#registerPassword").keyup(function(event){
    if(!activeMainPage.checkRegisterPassword()){
        activeMainPage.showAlert();
    }
    else{
       activeMainPage.clearAlerts();
    }
});


$("input").click(function () {
    activeMainPage.clearAlerts();
});

activeMainPage.clearAlerts = function () {
     $('.alertPopupStructure').css({
                'visibility':'hidden',
                'opacity':'0'
            })
            $('.loginLeftContentInputWrapperInput').css('opacity','1');
            $('.loginLeftContentInputWrapperTitle').css('opacity','1');
}

activeMainPage.checkIfCapLockLogic = function (e) {
 kc = e.keyCode?e.keyCode:e.which;
 sk = e.shiftKey?e.shiftKey:((kc == 16)?true:false);
 if(((kc >= 65 && kc <= 90) && !sk)||((kc >= 97 && kc <= 122) && sk)){
  activeMainTool.capsLockStatus=true;
 }
 else{
     activeMainTool.capsLockStatus=false;
     $('.capslockTitle').css('display','none');
 } 
}


activeMainPage.checkIfCapLock = function (thisElm,e) {
    activeMainPage.checkIfCapLockLogic(e);
    $('.capslockTitle').css('display','none');
    if(activeMainTool.capsLockStatus){
            var elm=$(thisElm);
            $($(elm).next()[0]).css('display','block');
    }
}

 $(document).ready(function(){
            $('input').keypress(function(e) { 
                activeMainPage.checkIfCapLock(this,e);
            });
            $('input').focus(function(e) { 
                activeMainPage.checkIfCapLock(this,e);
            });
            $('input').focusout(function(e) { 
                $('.capslockTitle').css('display','none');
            });
        });