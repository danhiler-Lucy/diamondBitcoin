
function dashboardManager(){
        //this.serverSrc = "https://store-api-prod.herokuapp.com/api/v1/";
        this.serverSrc="https://dob-api.herokuapp.com/api/v1/"; //prod
        //this.serverSrc = "https://store-api-stg.herokuapp.com/api/v1/";
        this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
      this.email = localStorage.getItem('email');
      this.token = localStorage.getItem('token');
      this.usersArray=[];
}

var activeDashboardManager= new dashboardManager();

activeDashboardManager.setAdminInfo = function () {
    if(typeof activeDashboardManager.firstName==='undefined'){
        var firstName="User";
        var lastName="User";
    }
    else{
        var firstName=activeDashboardManager.firstName;
         if(typeof activeDashboardManager.lastName==='undefined' || activeDashboardManager.lastName==='undefined'){
            var lastName="";
            activeDashboardManager.lastName='';
        }
        else{
            var lastName=activeDashboardManager.lastName;
        }
    }
    
    $('#adminFullName').html(firstName+' '+lastName);
    $('#headerAdminFullName').html(firstName+' '+lastName);
    
}
activeDashboardManager.setAdminInfo();
$(function() {
    activeDashboardManager.getUserDetails();
});


activeDashboardManager.getInfo = function (requestUrl,type) {
        $.ajax({
                    url:activeDashboardManager.serverSrc+requestUrl,
                    type: 'get',
                    data: {

                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log('Get Info:'+type);
                        console.log(data);
                        $('.activeExcelStructure').css('display','block');
                        switch(type) {
                            case 1: { //users
                                    activeDashboardManager.SetUsersTable(data);
                                    break;
                            }
                            case 2: { //products
                                    activeDashboardManager.SetProductsTable(data);
                                    break;
                            }
                            case 3: { //orders
                                    activeDashboardManager.SetOrdersTable(data);
                                    break;
                            }
                            case 4: { //Contact us
                                    activeDashboardManager.SetContactTable(data);
                                    break;
                            }
                             case 5: { //Analytics
                                    activeDashboardManager.SetAnalyticsTable(data);
                                    break;
                            }
                            case 6: { //bids
                                    activeDashboardManager.SetBidsTable(data);
                                    break;
                            }
                            case 7: { //me
                                    activeDashboardManager.SetUserView(data);
                                    break;
                            }
                             default:
                                    console.log('default Products data');
                                    break;
                            }
                            //$('body').css('opacity','1');
                    },
                    error: function (data) {
                        console.log('login error');
                        location.href='login.php';
                        console.log(data);
                    }
            });
    };

activeDashboardManager.getUserDetails = function () {
    activeDashboardManager.getInfo('users/me',7);
}                            

activeDashboardManager.SetUserView = function (data) {
    var permissions=[];
    if(jQuery.inArray( "admin", data.roles )!==-1){//admin
        $('.menuButton').removeClass('menuButtonHidden');
    }
    else if(jQuery.inArray( "manager", data.roles )!==-1){//manager
        activeDashboardManager.hideIrelevantButtons(data.permissions);
    }
    else{
        
    }
}                 

activeDashboardManager.hideIrelevantButtons = function (data) {
    for(var i=0;i<data.length;i++){
        $('.menuButton_'+data[i]).removeClass('menuButtonHidden');
    }
}
                           
activeDashboardManager.openCert= function (certId) {
    window.open('https://b.dob.com/barak/Output/Certificates/'+certId+'.pdf');
}

activeDashboardManager.numberWithCommas = function (x,numAfterDot) {
    x=Number(x);
    numAfterDot=numAfterDot ? numAfterDot : 0;
    x = x.toFixed(numAfterDot);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getMixpanelDetails(){
     $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/bids/'+bidId+'/approve',
                    type: 'get',
                    data: {

                    },
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