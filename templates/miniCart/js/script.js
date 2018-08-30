function miniCart(){
    this.expanded = false;
    this.maxHeight=322;
    this.expandedAvailable=true;
}

var activeMiniCart = new miniCart();

activeMiniCart.expandCart = function () {
    var expandedAvailable=activeMiniCart.expandedAvailable;
    if(window.innerWidth<1020){
        expandedAvailable=true;
    }
    if(!activeMiniCart.expanded && expandedAvailable){ //to show
        activeProductManager.hideNotifications();
        $('.miniCartStructureBlur').css('visibility','visible');
        setTimeout(function(){ 
        $('.miniCartStructureBlur').css('opacity','1');
        }, 10);
        
        if(activeCartManager.cart.length===0){
            activeMiniCart.expandedAvailable=false;
            $('.miniCartMainBubbleStructure').css({
                'display':'block'
            });
            setTimeout(function(){ 
                $('.miniCartMainBubbleStructure').addClass('miniCartMainBubbleStructureActive');
            }, 10);
             setTimeout(function(){ 
               $('.miniCartMainBubbleStructure').removeClass('miniCartMainBubbleStructureActive');
                $('.miniCartStructureBlur').css('opacity','0');   
                setTimeout(function(){ 
                    $('.miniCartStructureBlur').css('visibility','hidden');
                }, 600);
                activeMiniCart.expandedAvailable=true;
            }, 3000);
            return true;
        }
        var cartHeight = $('.miniCartExpandInfoWrapper').height();
        if(activeMiniCart.maxHeight<$('.miniCartExpandInfoWrapper').height()){
                cartHeight = activeMiniCart.maxHeight;
        }
        
        $('.miniCartStructure').css('bottom','0px');
           $('.miniCartExpandInfoStructure').css('height',cartHeight);
           activeMiniCart.expanded = true;
    }
    else{
           activeMiniCart.hideCart();
    }
    
}

activeMiniCart.hideCart = function () {
     $('.miniCartExpandInfoStructure').css('height',0);
           activeMiniCart.expanded = false;
           $('.miniCartStructure').css('bottom','');
        $('.miniCartStructureBlur').css('opacity','0');   
        setTimeout(function(){ 
            $('.miniCartStructureBlur').css('visibility','hidden');
        }, 600);
         $('.miniCartMainBubbleStructure').removeClass('miniCartMainBubbleStructureActive');
                $('.miniCartStructureBlur').css('opacity','0');   
                setTimeout(function(){ 
                    $('.miniCartStructureBlur').css('visibility','hidden');
                }, 600);
}

activeMiniCart.updateDimCart= function () {
    if(activeMiniCart.expanded){ //to show
        var cartHeight = $('.miniCartExpandInfoWrapper').height();
        if(activeMiniCart.maxHeight<$('.miniCartExpandInfoWrapper').height()){
                cartHeight = activeMiniCart.maxHeight;
        }
           $('.miniCartExpandInfoStructure').css('height',cartHeight);
    }
    else{
        
    }
}









