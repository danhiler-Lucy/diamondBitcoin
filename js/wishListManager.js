function wishListManager(){
        this.cart=[];
        this.newCart=[];
}

var activeWishListManager= new wishListManager();


activeWishListManager.getCart = function () {
      $.ajax({
                url:activeMainTool.serverSrc+'users/'+activeMemberManager.user._id+'/wishlist',
                type: 'get',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    $('.wishListStructure').css('display','block');
                    setTimeout(function(){
                        $('.wishListStructure').css('opacity','1');
                    }, 10);
                    activeWishListManager.newCart=data;
                    activeWishListManager.setCart();
                    try{
                        activeProductCard.checkAlreadyCartProducts();
                        activeProductCard.checkAlreadyWishListCartProducts();
                    }
                    catch(e){
                        console.log('checkAlreadyCartProducts not execute');
                    }
                    console.log('WishList:');
                    console.log(data);
                },
                error: function (data) {
                    /*console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }*/
                    
                }
        });
}

activeWishListManager.addProduct = function (productId) {
    if(!activeMemberManager.loginStatus){
        activeMainTool.redirectPage(7); //login
    }
    if($($('.itemStructure_'+productId+' .itemAlreadyWishListStructure')[0]).hasClass('itemAlreadyWishListActive')){
            activeWishListManager.removeProduct(productId);
            return true;
    }
      $.ajax({
                url:activeMainTool.serverSrc+'users/'+activeMemberManager.user._id+'/wishlist/'+productId,
                type: 'post',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    activeWishListManager.newCart=data;
                    activeWishListManager.setCart();
                    //activeWishListManager.animationForAdded();
                    activeProductCard.checkAlreadyCartProducts();
                    activeProductCard.checkAlreadyWishListCartProducts();
                    console.log('WishList:');
                    console.log(data);
                },
                error: function (data) {
                    /*console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }*/
                    
                }
        });
}

activeWishListManager.removeProduct = function (productId) {
    if(!activeMemberManager.loginStatus){
        activeMainTool.redirectPage(7); //login
    }
      $.ajax({
                url:activeMainTool.serverSrc+'users/'+activeMemberManager.user._id+'/wishlist/'+productId,
                type: 'delete',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    activeWishListManager.newCart=data;
                    activeWishListManager.setCart();
                    //activeWishListManager.animationForAdded();
                    activeProductCard.checkAlreadyCartProducts();
                    activeProductCard.checkAlreadyWishListCartProducts();
                    console.log('WishList:');
                    console.log(data);
                },
                error: function (data) {
                    /*console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }*/
                    
                }
        });
}

activeWishListManager.animationForAdded = function () {
            //$('#miniCartTotalItemsTitle').html(activeWishListManager.newCart.length);
    $('.miniCartTotalItemsButton').addClass('miniCartMainTitleCountAdded');
    setTimeout(function(){ 
        $('.miniCartTotalItemsButton').removeClass('miniCartMainTitleCountAdded');
    }, 600);
     
}

activeWishListManager.setNewProducts = function () {
    activeWishListManager.cart=[];
    for(var i=0;i<activeWishListManager.newCart.length;i++){
        var product=activeWishListManager.newCart[i];
        
        product.id=product._id.toString();
        
        activeProductManager.productManipulation(product);
        
        activeWishListManager.cart.push(product);
    activeProductManager.productsIds[product.id] = product;
    }
}
activeWishListManager.getCartIds = function () {
        var cartIds = [];
      for(var i=0;i<activeWishListManager.newCart.length;i++){
          if(typeof activeWishListManager.newCart[i].id==='undefined'){
              activeWishListManager.newCart[i].id = activeWishListManager.newCart[i]._id;
          }
          cartIds.push(activeWishListManager.newCart[i].id);
      }
      return cartIds;
  }

activeWishListManager.cleanMiniCart = function () {
     var cartIds =activeWishListManager.getCartIds();
      for(var i=0;i<cartIds.length;i++){
          activeWishListManager.removeProduct(cartIds[i]);
      }
}
activeWishListManager.checkIfExist = function (productId) {
    var cartIds =activeWishListManager.getCartIds();
       if (cartIds.indexOf(productId) > -1) {
            return true;
        }
        else{
            return false;
        }
}

activeWishListManager.removeProductWithAnimation= function (thisElm) {
    $($(thisElm).parents()[0]).css('display','none');
}

activeWishListManager.setCart = function () {
    activeWishListManager.setNewProducts();
    if(activeMainPage.pageId===6 || activeMainPage.pageId===8 || activeMainPage.pageId===9 || activeMainPage.pageId===10 || activeMainPage.pageId===11){
        // activeMainPage.setCartSection();
        return true;
    }
    var content = ''; 
    var totalCost=0;
    var totalCount=activeWishListManager.cart.length;
    for(var i=0;i<activeWishListManager.cart.length;i++){
        var product=activeWishListManager.cart[i];
        
        totalCost+=product.totalPrice;
        content+='<div class="ui-state-default"><div class="wishListDragElement ui-icon ui-icon-arrowthick-2-n-s"><img src="../assets/dragIcon.png"/></div><div onclick="activeWishListManager.addProduct('+"'"+product.id+"'"+');activeWishListManager.removeProductWithAnimation(this);" class="wishListRemoveProductIcon"><img src="../assets/cancel-button-20.svg"/></div>';
        content+=activeProductCard.template1(product);
        content+='</div>';
     }
     
     
     $('#wishListCartTotalItemsTitle').html(totalCount);
     $('.wishListMainIconTitle').html(totalCount);
     
     
     totalCost = activeMainTool.numberWithCommas(totalCost);
     $('.wishListContentResults').html(content);
     
      if(totalCount===0){
         $('.wishlistIconMobile .mobileHeaderIconBubbleStructure').css('opacity','0');
     }
     else{
         $('.wishlistIconMobile .mobileHeaderIconBubbleTitle').html(totalCount);
         $('.wishlistIconMobile .mobileHeaderIconBubbleStructure').css('opacity','1');
     }
     $('.wishlistIconMobile .mobileHeaderIconBubbleStructure').addClass('mobileHeaderIconBubbleStructureActive');
     setTimeout(function(){ 
     $('.wishlistIconMobile .mobileHeaderIconBubbleStructure').removeClass('mobileHeaderIconBubbleStructureActive');
     }, 300);
}

