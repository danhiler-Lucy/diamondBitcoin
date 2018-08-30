function mainPage(){
    this.pageId=0; //home
    this.productsLength=16; //home
}

var activeMainPage = new mainPage();


activeMainPage.setUrlParamsToSearch= function () {
    var value=$('#generalSearchInput').val();
    localStorage.setItem('smartSearchValue',value);
    activeMainTool.redirectPage(1);
}

$("#generalSearchInput").keyup(function(event){
    if(event.keyCode == 13){
        activeMainPage.setUrlParamsToSearch();
    }
});

activeMainPage.setProducts= function (data) {
        var products = activeProductManager.setNewProducts(data);
        var content = '';
        var resultsLength=activeMainPage.productsLength;
        if(resultsLength>products.length){
             resultsLength=products.length;
        }
        if(activeMainTool.viewType===1){ //mobile
             for(var i=0;i<resultsLength/2;i++){
                    content+=  activeProductCard.template1(products[i]);
                }
                $('.results').html(content);
            var content = '';
            for(var i=resultsLength/2;i<resultsLength;i++){
                    content+=  activeProductCard.template1(products[i]);
                }
                $('.results1').html(content);
                
        }
        else{
                for(var i=0;i<resultsLength;i++){
                    content+=  activeProductCard.template1(products[i]);
                }
                $('.results').html(content);
                
        }
        
        activeProductCard.checkAlreadyCartProducts();
        activeProductCard.checkAlreadyWishListCartProducts();
        activeMainTool.hideWrapper();
}

activeMainPage.setRecentlyViewedProducts= function () {
    var content='';
    for(var i=0;i<activeRecentlyViewed.products.length;i++){
        if(i===6){
            break;
        }
            content+=  activeProductCard.template1(activeRecentlyViewed.products[i]);
        }
        $('.recentlyViewedResults').html(content);
         if(activeRecentlyViewed.products.length>0){
            $('.recentlyViewedSection').css('display','block');
        }
        activeProductCard.checkAlreadyCartProducts();
        activeProductCard.checkAlreadyWishListCartProducts();
}

activeMainPage.getData= function () {
        activeProductManager.getFilterProducts('');
}

activeMainPage.changeMicIcon= function () {
    $('.generalSearchStructure img').attr('src','../../assets/mic1.png');
    setTimeout(function(){ 
        $('.generalSearchStructure img').attr('src','../../assets/mic.png');
    }, 2000);
}

activeMainPage.getSearchData= function () {
    console.log("Getting Search Data");
    var inputValue=$('#generalSearchInput').val();
    if(inputValue.length>4){
            if(inputValue.indexOf('yel') !== -1){
                activeProductManager.getFilterProducts('fromPrice=1&colorType=yellow&color=FVY,FIY');
            }
            else if(inputValue.indexOf('whi') !== -1){
                if(inputValue.indexOf('prin') !== -1){
                    activeProductManager.getFilterProducts('fromPrice=1&colorType=white&model=PR');   
                }
                else if(inputValue.indexOf('LA') !== -1){
                    activeProductManager.getFilterProducts('fromPrice=1&colorType=white&model=EM&location=LA');   
                }
                else if(inputValue.indexOf('eme') !== -1){
                    activeProductManager.getFilterProducts('fromPrice=1&colorType=white&model=EM');   
                }
                else{
                    activeProductManager.getFilterProducts('fromPrice=1&colorType=white&color=D,E&productId=&model=RB&fluor=N');
                }   
            }
            else{
                activeProductManager.getFilterProducts('fromPrice=1&colorType=white&color=D,E&productId=&model=RB&fluor=N');
            }
                $('.mainSection .mainTitle').css({
        'margin-top': '120px',
    'color': 'transparent'
    });
    $('.mainContentWrapper').css('margin-top','-209px');
    }
    if(inputValue.length<2){
           $('.mainSection .mainTitle').css({
        'margin-top': '208px',
    'color': 'black'
    });
    $('.mainContentWrapper').css('margin-top','0px');
    activeProductManager.getFilterProducts('fromPrice=1&colorType=white&color=D,E&productId=&model=RB&fluor=N');
    }
}
activeMainPage.showGeneralSearch= function () {
    var urlQuery = activeMainTool.getUrlParam('gs', location.href);
    if(urlQuery==='2'){
        $('.generalSearchIconStructure').css('display','block');
        $('.generalSearchStructure').css('display','block');
        $('.buttonDiamondWrapper').css('display','none');
    }
    else if(urlQuery==='1'){
         $('.generalSearchIconStructure').css('display','block');
        $('.generalSearchStructure').css('display','block');
        $('.generalSearchIconStructure').css('display','none');
        $('.buttonDiamondWrapper').css('display','none');
        $('.mainSection .mainTitle').css('margin-top','239px');
    }
}
activeMainPage.showGeneralSearch();

activeMainPage.checkLoginStatus= function () {
    if(!activeMemberManager.loginStatus){
        activeMainTool.invalidToken();
    }
}
activeMainPage.checkLoginStatus();

activeMainPage.changeMobileAlertPopupView= function (type) {
    
    if(type===1){//toHide
        $('.mobileAlertStructure').css('opacity','0');    
    $('.mobileAlertBlurStructure').css('opacity','0');    
    setTimeout(function(){ 
        $('.mobileAlertStructure').css('display','none');
        $('.mobileAlertBlurStructure').css('display','none');    
     }, 650);
     activeMainTool.enableScroll();
    } 
    else{
        $('.mobileAlertStructure').css('display','block');
    $('.mobileAlertBlurStructure').css('display','block');
    setTimeout(function(){ 
        $('.mobileAlertStructure').css('opacity','1');    
        $('.mobileAlertBlurStructure').css('opacity','1');    
     }, 10);
     activeMainTool.disableScroll();
    }
}

/*$(function(){
  $(window).scroll(function(){
    var aTop = $(this).scrollTop();
    if(aTop<200){
        $(".mainSection").css("top",aTop);
    }
  });
});*/


/*

if (annyang) {
  // Let's define a command.
  var commands = {
    'white': function() { 
    $('#generalSearchInput').val('white');
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    },
    'yellow': function() { 
    $('#generalSearchInput').val('yellow');
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    },
    'emerald': function() { 
    $('#generalSearchInput').val('white emerald');
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    },
    'clear': function() { 
    $('#generalSearchInput').val('');
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    },
    'LA': function() { 
    $('#generalSearchInput').val('white emerald LA');
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    },
    'princess': function() { 
    var inputValue=$('#generalSearchInput').val();
    if(inputValue.indexOf('emerald') !== -1){
        $('#generalSearchInput').val('white princess LA');
    }
    else{
        $('#generalSearchInput').val('white princess');
    }
    
    activeMainPage.changeMicIcon();
    activeMainPage.getSearchData();
    }
    
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

annyang.addCallback('soundstart', function() {
  console.log('sound detected');
});

annyang.addCallback('result', function() {
  console.log('sound stopped');
});
  
  annyang.addCallback('error', function() {
  console.log('There was an error!');
  annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
  console.log(userSaid); // sample output: 'hello'
  console.log(commandText); // sample output: 'hello (there)'
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
});
// pass local context to a global function called notConnected
annyang.addCallback('errorNetwork', TtSnotConnected, this);
});
  // Start listening.
  annyang.start();
}
function TtSnotConnected(){
    console.log('TtS is not connected');
}
function TtSResume(){
    activeMainPage.changeMicIcon();
    console.log('TtS is Resumed');
    annyang.abort();
    annyang.resume();
}
*/