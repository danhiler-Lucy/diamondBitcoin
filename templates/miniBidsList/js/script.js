function miniBidsList(){
    this.expanded = false;
    this.maxHeight=322;
    this.expandedAvailable=true;
}

var activeMiniBidsList = new miniBidsList();

activeMiniBidsList.expandBidsList = function () {
    var expandedAvailable=activeMiniBidsList.expandedAvailable;
    if(window.innerWidth<1020){
        expandedAvailable=true;
    }
    if(!activeMiniBidsList.expanded && expandedAvailable){ //to show
        activeProductManager.hideNotifications();
        $('.miniBidsListStructureBlur').css('visibility','visible');
        setTimeout(function(){ 
        $('.miniBidsListStructureBlur').css('opacity','1');
        }, 10);
        $('.miniBidsListHeader').addClass('miniBidsListHeaderMax');
        if(activeBidManager.bids.length===0){
            activeMiniBidsList.expandedAvailable=false;
            $('.miniBidsListMainBubbleStructure').css({
                'display':'block'
            });
            setTimeout(function(){ 
                $('.miniBidsListMainBubbleStructure').addClass('miniBidsListMainBubbleStructureActive');
            }, 10);
             setTimeout(function(){ 
               $('.miniBidsListMainBubbleStructure').removeClass('miniBidsListMainBubbleStructureActive');
                $('.miniBidsListStructureBlur').css('opacity','0');   
                setTimeout(function(){ 
                    $('.miniBidsListStructureBlur').css('visibility','hidden');
                }, 600);
                activeMiniBidsList.expandedAvailable=true;
            }, 3000);
            return true;
        }
        var bidsListHeight = $('.miniBidsListExpandInfoWrapper').height();
        if(activeMiniBidsList.maxHeight<$('.miniBidsListExpandInfoWrapper').height()){
                bidsListHeight = activeMiniBidsList.maxHeight;
        }
        
        $('.miniBidsListStructure').css('bottom','0px');
           $('.miniBidsListExpandInfoStructure').css('height',bidsListHeight);
           activeMiniBidsList.expanded = true;
    }
    else{
           activeMiniBidsList.hideBidsList();
    }
    
}

activeMiniBidsList.hideBidsList = function () {
     $('.miniBidsListExpandInfoStructure').css('height',0);
           activeMiniBidsList.expanded = false;
           $('.miniBidsListStructure').css('bottom','');
        $('.miniBidsListStructureBlur').css('opacity','0');   
        $('.miniBidsListHeader').removeClass('miniBidsListHeaderMax');
        setTimeout(function(){ 
            $('.miniBidsListStructureBlur').css('visibility','hidden');
        }, 600);
         $('.miniBidsListMainBubbleStructure').removeClass('miniBidsListMainBubbleStructureActive');
                $('.miniBidsListStructureBlur').css('opacity','0');   
                setTimeout(function(){ 
                    $('.miniBidsListStructureBlur').css('visibility','hidden');
                }, 600);
}

activeMiniBidsList.updateDimBidsList= function () {
    if(activeMiniBidsList.expanded){ //to show
        var cartHeight = $('.miniBidsListExpandInfoWrapper').height();
        if(activeMiniBidsList.maxHeight<$('.miniBidsListExpandInfoWrapper').height()){
                cartHeight = activeMiniBidsList.maxHeight;
        }
           $('.miniBidsListExpandInfoStructure').css('height',cartHeight);
    }
    else{
        
    }
}









