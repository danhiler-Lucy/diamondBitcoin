'use strict';

$(function() {

setTimeout(function(){ 
  $('.loadingStructure').css('opacity','0');
  setTimeout(function(){ 
    $('.loadingStructure').css('display','none');
  
  }, 600);
}, 1500);

  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */
 
  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */
   
    smoothScroll: true

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */




});


function setStopChangeComView(){
  stopchangeComView=true;
}
/*
function changeComView(){
  if(stopchangeComView){
    return true;
  }
  var windowScrollCount   = $(window).scrollTop()+$(window).height()/2;
  var elementOffsetTop = $($('#comView li')[0]).offset().top;
  var elementHeight = 60;
  
  if(windowScrollCount>elementOffsetTop){
    if(windowScrollCount>elementOffsetTop+elementHeight*4){
      $($('#comView li a')[3]).click();
    }
    else if(windowScrollCount>elementOffsetTop+elementHeight*3){
      $($('#comView li a')[2]).click();
    }
    else if(windowScrollCount>elementOffsetTop+elementHeight*2){
      $($('#comView li a')[1]).click();
    }
    else{
      $($('#comView li a')[0]).click();
    }
  }
}*/
var stopchangeComView=false;
var activeBar=0;
function changeComView(){
  activeBar++;
  if(stopchangeComView){
    return true;
  }
  if(activeBar===$('#comView li a').length){
    activeBar=0;
  }
  $($('#comView li a')[activeBar]).click();
  setTimeout(function(){ 
    
      changeComView()
    }, 2000);
}

$(window).scroll(function()
{
  //changeComView();
    
});

setTimeout(function(){ 

  changeComView()
}, 2000);



function sendEmail(data,form){
  console.log(data);
  var obj={
    name: data[0].value,
    company: '',
    phone: '',
    email: data[1].value,
    message: data[2].value
    }
  $.ajax({
    url:"https://store-api-prod.herokuapp.com/api/v1/contacts/send",
    type: 'post',
    data: obj,
    dataType: 'json',
    done: function (data) {
      form.find('.alert-success').fadeIn(1000);
      
      form.find(':input').val('');
        console.log(data);
    },
    error: function (data) {
      form.find('.alert-success').fadeIn(1000);
      
      form.find(':input').val('');
       console.log(data);
       
        
    }
});
}

function redirectToPage(index){
    if(index===2){
        window.location.href = 'search';
    }
    else if(index===3){
        window.location.href = 'about';
    }
    else if(index===4){
        window.location.href = 'contact';
    }
    else{
        window.location.href = 'home';
    }
    
    
}