function wishList(){
    this.expanded = false;
    this.maxHeight=322;
    this.expandedAvailable=true;
    this.scaleViewToFullSizeStatus=false;
    this.bubbleIsActive=false;
}

var activeWishList = new wishList();

$( function() {
    $( "#wishListSortTable" ).sortable({
        revert: true,
        delay: 50,
        opacity: 0.8,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        cursor: "move",
        activate: function( event, ui ) {
            activeProductPopup.availableToOpen=false;
        },
        stop: function( event, ui ) {
            setTimeout(function(){
             activeProductPopup.availableToOpen=true;
         }, 500);
        }
    });
    
    //$( "#wishListSortTable" ).disableSelection();
  } );

activeWishList.showBubbleEmptyWishList = function () {
    if(activeWishList.bubbleIsActive){
        return true;
    }
    activeWishList.bubbleIsActive=true;
    $('.wishListMainBubbleStructure').css({
        'display':'block'
    });
    setTimeout(function(){ 
        $('.wishListMainBubbleStructure').css({
            'left':'0px',
            'opacity':'1'
        });
    }, 10);
     setTimeout(function(){ 
        $('.wishListMainBubbleStructure').css({
            'left':'-270px',
            'opacity':'0'
        });
        activeWishList.bubbleIsActive=false;
    }, 3000);
}

activeWishList.expandWishList = function () {
    if(!activeWishList.expanded && activeWishList.expandedAvailable){ //to show
        if(activeWishListManager.cart.length===0){
            activeWishList.showBubbleEmptyWishList();
            return true;
        }
        $('.wishListStructure').css('left','0%');
        $('#productPopupStructureBlur').addClass('zIndex59');
        $('#productPopupStructure').addClass('zIndex60');
           activeWishList.expanded = true;
           activeProductPopup.hide();
           $('body').css('overflow','hidden');
           activeWishList.scaleViewToFullSizeStatus=false;
           activeWishList.scaleViewToFullSize();
    }
    else{
           activeWishList.hideWishList();
    }
    
}

activeWishList.hideWishList = function () {
    $('body').css('overflow','auto');
    $('#productPopupStructureBlur').removeClass('zIndex59');
        $('#productPopupStructure').removeClass('zIndex60');
     $('.wishListStructure').css('left','-100%');
           activeWishList.expanded = false;
}

activeWishList.scaleViewToFullSize = function () {
    if(activeWishList.scaleViewToFullSizeStatus){
        activeWishList.scaleViewToFullSizeStatus=false;
        $('.wishListContentWrapper').attr('style','');
        $('.wishListStructure .scaleTitle').attr('style','');
        $('.wishListStructure .scaleTitle').html('100%');
    }
    else{
        var windowHeight = (window.innerHeight-80)/ $('.wishListContentWrapper').height();
        var extraWidth=0;
        if(window.innerWidth<1020){
            extraWidth=30;
        }
        var windowWidth =  $('.wishListContentStructure').width()*(2-windowHeight)+extraWidth;
        
        $('.wishListContentWrapper').css({
                'transform':' scale('+windowHeight+')',
                'transform-origin':' top left',
                'width':windowWidth+'px'
        });
        $('.wishListStructure .scaleTitle').html('SCALED');
        if(activeMainTool.getBrowserName==='IE'){
            $('.wishListStructure .scaleTitle').css('transform-origin','top left');
        }
        $('.wishListStructure .scaleTitle').css({
                'font-size':'12px',
                'margin-top': '10px',
                'margin-left': '27px'
        });
           
        activeWishList.scaleViewToFullSizeStatus=true;
    }
    
}






