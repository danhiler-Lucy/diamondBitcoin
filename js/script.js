//500: error
//400 bad request, some vars error in sending to server
//403: authentication


$(function() {
   $('.mainWrapper').css('opacity','1');
activeMainTool.getUrlReferrer();
new Clipboard('.clipboardButton');
/*$( window ).resize(function() {
    if(window.innerWidth<1020){
                window.location.href = '../about';
    }
});*/
});

function mainTool(){
    // this.serverSrc="http://localhost:3000/api/v1/"; 
    this.serverSrc="https://dob-api.herokuapp.com/api/v1/";
    this.googleApiKey = 'AIzaSyD0VOEGncvzBaExxxaQbhU_-xE4ccJRVGQ';
    this.touchDevice=false;
    this.capsLockStatus=false;
    this.viewType=0; //desktop
    this.pageProductsLength=150;
    this.pageConfig=[];
    this.pageConfig[0]='home';
    this.pageConfig[1]='search';
    this.pageConfig[5]='profile';
    this.pageConfig[6]='checkout';
    this.pageConfig[7]='login';
    this.pageConfig[8]='about';
    this.pageConfig[9]='contact';
    this.pageConfig[10]='privacypolicy';
    this.pageConfig[11]='terms';
    this.pageConfig[12]='start';
    this.pageConfig[13]='resetpass';
    this.pageConfig[14]='productview';
    this.pageConfig[15]='faq';
    this.pageConfig[16]='moreinfo';
    this.months=[ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
    this.monthsShort=[ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}

var activeMainTool = new mainTool();

activeMainTool.redirectPage = function (index) {
       var activePage = this.pageConfig[index];
       window.location.href = '../'+activePage;
};

activeMainTool.checkViewType = function () {
       if(window.innerWidth>1020){
           activeMainTool.viewType=0;
       }
       else{
           activeMainTool.viewType=1; //mobile
           /*if(!window.location.href.includes("about")){ 
                window.location.href = '../about';
            }*/
   }
};
activeMainTool.checkViewType();

activeMainTool.getUrlReferrer = function () {
       var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
            var urlParamsDV=activeMainTool.getUrlParam('diamondView',url);
            var urlParamsP=activeMainTool.getUrlParam('page',url);
            if(urlParamsDV!==null){
                window.location.href = '../search?productId='+urlParamsDV;
            }
            else if(urlParamsP!==null){
                window.location.href = '../'+urlParamsP;
            }
}

activeMainTool.redirectSearchPage = function (index) {
       var activePage = this.pageConfig[index];
       if(activeMainPage.pageId===1){
           activeProductPopup.hide();
           return true;
       }
       window.location.href = '../'+activePage;
};

activeMainTool.redirectPage = function (index) {
       var activePage = this.pageConfig[index];
       window.location.href = '../'+activePage;
};

activeMainTool.hideWrapper = function () {
       $('.pageWrapperLoadingStructure').css('opacity','0');
         setTimeout(function(){
               $('.pageWrapperLoadingStructure').css('display','none');
       }, 600);
};

activeMainTool.redirectPageWithEx = function (index,exValue) {
       var activePage = this.pageConfig[index];
       window.location.href = '../'+activePage+exValue;
};
activeMainTool.checkIfTouchDevice = function () {
    if (navigator.userAgent.match(/Tablet|iPad/i) || navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)){
        activeMainTool.touchDevice=true;
    }
    else{

    }
}
activeMainTool.checkIfTouchDevice();

activeMainTool.getTitleForFileExport = function() {
    var currentdate = new Date(); 
var datetime = "Diamonds_"+
                 currentdate.getDate().toString()+
                 activeMainTool.months[currentdate.getMonth()].substr(0,3) +
                 currentdate.getFullYear().toString()+"_"+
                 currentdate.getHours().toString() +  
                 currentdate.getMinutes().toString();
        return datetime;
}

activeMainTool.formatDate = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}
activeMainTool.formatDateUs = function(date) {
                var productDate=new Date(date);
                var dateDay=productDate.getDate();
                var dateMonth=activeMainTool.months[productDate.getMonth()];
                var dateYear=productDate.getFullYear();
                productDate=dateMonth+' '+dateDay+', '+dateYear;
                return productDate;
        }
activeMainTool.formatDateRegular = function(date) {
        var productDate=new Date(date);
        var dateDay=productDate.getDate();
        var dateMonth=productDate.getMonth()+1;
        var dateYear=productDate.getFullYear().toString().substr(-2);
        productDate=dateDay+'/'+dateMonth+'/'+dateYear;
        return productDate;
}
activeMainTool.formatDateRegularNumber = function(date) {
        var productDate=new Date(date);
        var dateDay=productDate.getDate();
        var dateMonth=productDate.getMonth()+1;
        var dateYear=productDate.getFullYear().toString().substr(-2);
        productDate=dateDay+''+dateMonth+''+dateYear;
        return productDate;
}
activeMainTool.getUrlParam = function( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

activeMainTool.numberWithCommas = function (x,numAfterDot) {
    x=Number(x);
    numAfterDot=numAfterDot ? numAfterDot : 0;
    x = x.toFixed(numAfterDot);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

activeMainTool.getBrowserName = function () {
   // Return cached result if avalible, else get result then cache it.
    if (activeMainTool.getBrowserName.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return activeMainTool.getBrowserName.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "undefined";
};


activeMainTool.removeValueFromArray = function (array,value) {
       var index = array.indexOf(value);
       if (index > -1) {
            array.splice(index, 1);
        }
        return array;
};
activeMainTool.removeValuesFromArray = function (array,value) {
    for(var i=array.length-1;i>=0;i--){
       var index = array.indexOf(value);
       if (index > -1) {
            array.splice(index, 1);
        }
    }
        return array;
};

 activeMainTool.scrollTo = function (value) {
    $('html, body').animate({
                scrollTop: value
        }, 600);
 }
 
 activeMainTool.timeSince = function (date) {
     var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 0) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
 }
 
// var aDay = 24*60*60*1000
//console.log(timeSince(new Date(Date.now()-aDay)));
//console.log(timeSince(new Date(Date.now()-aDay*2)));
 
  activeMainTool.simulateClickOnElm = function (selector) {
    var element = $(selector)[0], worked = false;
    if (document.createEvent) { // all browsers
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        worked = element.dispatchEvent(e);
    } else if (element.fireEvent) { // ie
        worked = element.fireEvent("onmousedown");
    }
    if (!worked) { // unknown browser / error
        alert("It didn't worked in your browser.");
    }   
 }

 
activeMainTool.hasLowerCase = function (str) {
    return (/[a-z]/.test(str));
}
activeMainTool.hasUpperCase = function (str) {
    return (/[A-Z]/.test(str));
}
activeMainTool.hasNumbers = function (str) {
    return (/[0-9]/.test(str));
}
 
activeMainTool.validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
 
 activeMainTool.setNewGuestUser = function () {
     $.ajax({
        url: activeMainTool.serverSrc + 'users/auth/guest',
        type: 'get',
        data: {

        },
        headers: {
            //token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            console.log('Guest User:');
            console.log(data);
            data.pass='123456';
            activeMemberManager.setDefaultMemberInfo(data);
        },
        error: function (data) {
            console.log(data);
            /*if (data.status === 403 || data.status === 400) {
                activeMainTool.invalidToken();
            }*/

        }
    });
 }
 
 activeMainTool.invalidToken = function () {
             //https://dob-api.herokuapp.com/api/v1/users/auth/guest
             //alert(1);
      activeMainTool.setNewGuestUser();
      return true;
     if(activeMainPage.pageId===14){
         return true;
     }
     if(activeMainPage.pageId===1){
         //if(activeMainTool.getUrlParam('productId', location.href)!==null){
            // return true;
        //}
     }
     if(activeMainPage.pageId===0){
        activeMemberManager.cleanMemberInfo();
        location.href='../start';
        return true;
     }
     activeMemberManager.cleanMemberInfo();
    location.href='../login';
 }
 
 activeMainTool.loadImage = function (src,productId) { 
     if(typeof productId==='undefined'){
         productId='';
         console.log(src)
         return
         
     }
    var image = new Image();
    image.onload = function () {
        var product=activeProductManager.productsIds[productId];
        $('html').find('img[src$="'+src+'"]')
        .css('opacity','1')
        .attr('src',product.imageSrc)
        .parent()
        .addClass('imgloaded');
        product.withImage = true;
        product.imageLoaded = true;
        // $('html').find('img[src$="'+src+'"]')
        // $('#productPopupStructure .productImage').attr('src',product.imageSrc)
    }
    image.onerror = function () {
        console.log("err")
        var product=activeProductManager.productsIds[productId];
        product.productImage = '';
        product.withImage = true;
        product.imageLoaded = true;
        product.imageSrc = product.sampleImageModel;
        $('html').find('img[src$="'+src+'"]')
        .css('opacity','1')
        .attr('src',product.imageSrc)
        .parent()
        .addClass('imgloaded');
    }
    image.src = src;
 }
 
  activeMainTool.comingSoonPopup = function () {
      if($('#comingSoonPopupStructure').css('display')!=='block'){
            $('#comingSoonPopupStructure').css('display','block');
            $('#comingSoonPopupStructureBlur').css('display','block');
            setTimeout(function(){ 
                $('#comingSoonPopupStructure').css('opacity','1');
                $('#comingSoonPopupStructureBlur').css('opacity','.6');
                  $('#comingSoonPopupStructure').css('top','100px');
            }, 10);
      }
      else{ 
         /* if(activeMainPage.pageId===1 && window.innerWidth<1020){ //search
              activeMainTool.redirectPage(0);
              return true;
          }*/
                $('#comingSoonPopupStructure').css('opacity','0');
                 $('#comingSoonPopupStructureBlur').css('opacity','0');
                  $('#comingSoonPopupStructure').css('top','50px');
            setTimeout(function(){ 
                    $('#comingSoonPopupStructure').css('display','none');
                    $('#comingSoonPopupStructureBlur').css('display','none');
            }, 600);
      }
      
 }
 
 activeMainTool.cutString = function (value,valueMaxLength) {
        value = value.substring(value.length-valueMaxLength, value.length);
        return value;
 }
 
  activeMainTool.temp_noProductsResults = function () {
        return '<div class="noProductsResultsBoxStructure">'+
                        'NO RESULTS'+
                    '</div>';
 }
 
  // left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
activeMainTool.scrollKeys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

activeMainTool.preventDefaultForScrollKeys = function (e) {
    if (activeMainTool.scrollKeys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

activeMainTool.disableScroll= function (e) {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = activeMainTool.preventDefaultForScrollKeys;
}

activeMainTool.enableScroll= function (e) {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
activeMainTool.checkIfCapsLock= function (e) {
    var s = String.fromCharCode( e.which );

                if((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) ||
                   (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)){
                    activeMainTool.capsLockStatus=true;
                } else {
                    activeMainTool.capsLockStatus=false;
                }
}


 // Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}