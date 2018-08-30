function bidManager(){
        this.bids=[];
        this.newBids=[];
        this.productsIds=[];
}

var activeBidManager= new bidManager();


activeBidManager.getBidsList = function () {
    activeBidManager.newBids=activeMemberManager.user.bids;
    console.log('Bids:');
    console.log(activeBidManager.newBids);
     activeBidManager.setMiniBidsList();
}

activeBidManager.addProduct = function (productId,newPriceBid) {
    if(!activeMemberManager.loginStatus){
        activeMainTool.redirectPage(7); //login
        return true;
    }
      $.ajax({
                url:activeMainTool.serverSrc+'bids/'+productId,
                type: 'post',
                data: {
                    price:newPriceBid
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    activeBidManager.newBids.push(data);
                    activeBidManager.setMiniBidsList();
                    activeBidManager.animationForAdded();
                    activeMiniBidsList.updateDimBidsList();
                    try{
                        
                    }
                    catch(e){
                        
                    }
                    console.log('Bids:');
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

activeBidManager.animationForAdded = function () {
    $('#miniBidsListTotalItemsTitle').html(activeBidManager.newBids.length);
    $('.miniBidsListTotalItemsButton').addClass('miniBidsListMainTitleCountAdded');
    setTimeout(function(){ 
        $('.miniBidsListTotalItemsButton').removeClass('miniBidsListMainTitleCountAdded');
    }, 600);
     
}

activeBidManager.checkIfExist = function (productId) {
    var cartIds =activeCartManager.getCartIds();
       if (cartIds.indexOf(productId) > -1) {
            return true;
        }
        else{
            return false;
        }
}

activeBidManager.setNewProducts = function () {
      activeBidManager.bids=[];
    for(var i=0;i<activeBidManager.newBids.length;i++){
        var product=activeBidManager.newBids[i].product;
        
        product.id=product._id.toString();
        
        activeProductManager.productManipulation(product);
        activeBidManager.newBids[i].product=product;
        activeBidManager.bids.push(activeBidManager.newBids[i]);
    activeBidManager.productsIds[product.id] = activeBidManager.newBids[i];
    }
}

activeBidManager.setMiniBidsList = function () {
    activeBidManager.setNewProducts();
    if(activeMainPage.pageId===6){
        //activeMainPage.setCartSection();
        return true;
    }
    var content = ''; 
    var totalCost=0;
    var totalBidsCost=0;
    var totalCount=activeBidManager.bids.length;
    for(var i=0;i<activeBidManager.bids.length;i++){
        var product=activeBidManager.bids[i].product;
        
        totalCost+=product.totalPrice;
        totalBidsCost+=activeBidManager.bids[i].price;
        var newPrice='$'+activeMainTool.numberWithCommas(activeBidManager.bids[i].price);
           var model=product.model;
    var caratString=product.caratString;
    var color=product.color;
    var clarity=product.clarity;
    var cut=product.cut;
    var polish=product.polish;
    var symmetry=product.symmetry;
    var fluor=product.fluor;
    var discount=product.discountString
    if(model==='---'){
        model='';
    }
    if(caratString==='---'){
        caratString='';
    }
    if(color==='---'){
        color='';
    }
    if(clarity==='---'){
        clarity='';
    }
    if(cut==='---'){
        cut='';
    }
    if(polish==='---'){
        polish='';
    }
    if(symmetry==='---'){
        symmetry='';
    }
    if(fluor==='---'){
        fluor='';
    }
    if(discount==='---'){
        discount='';
    }

         content+= '<div class="itemStructure">'+
                                        '<div onclick="activeProductPopup.show('+"'"+product.id+"'"+')">'+
                                                '<div class="itemImage">'+
                                                        '<img src="'+product.imageSrc+'">'+
                                                '</div>'+
                                                '<div class="itemStructureTd_2">'+                                        
                                                            '<div class="itemStructureTdInfo1">'+
                                                                    '<span>'+
                                                                        caratString+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                         color+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                         clarity+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                        cut+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                          polish+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                          symmetry+
                                                                    '</span> '+
                                                                    '<span>'+
                                                                          fluor+
                                                                    '</span> '+
 
                                                                '</div>'+
                                                                '<div class="itemStructureTdInfo2">'+
                                                                        '<span>'+
                                                                            'ID '+
                                                                        '</span>'+
                                                                        '<span>'+
                                                                            product.productId+
                                                                        '</span>'+
                                                                '</div>'+
                                                                '<div class="itemStructureTdInfo3">'+
                                                                    '<span>'+
                                                                            '5 '+
                                                                    '</span>'+
                                                                    '<span>'+
                                                                            'Buisness Days'+
                                                                    '</span>'+
                                                                '</div>'+
                                                                '<div class="itemStructureTdInfo4">'+
                                                                        '(ETA 22/02/17)'+
                                                        '</div>'+
                                                '</div>'+
                                                '<div class="itemStructureTdInfo5TitleWrapper">'+
                                                '<div class="itemStructureTdInfo5Title">'+
                                                       'Original Price:'+
                                                '</div>'+
                                                '<div class="itemStructureTdInfo5">'+
                                                       product.totalPriceString+
                                                '</div>'+
                                                '<div class="itemStructureTdInfo6Title">'+
                                                       'Your Bid:'+
                                                '</div>'+
                                                '<div class="itemStructureTdInfo6">'+
                                                       newPrice+
                                                '</div>'+
                                                '</div>'+
                                                '<div class="itemStructureTdInfo7">'+
                                                       activeBidManager.bids[i].status+
                                                '</div>'+
                                                '</div>'+
                                             
                                        '</div>';
     }
     $('#miniBidsListTotalItemsTitle').html(totalCount);
     $('.miniBidsListResults').html(content);
     totalCost = '$'+activeMainTool.numberWithCommas(totalCost);
     $('.miniBidsListTotalButton').html(totalCost);
     totalBidsCost = '$'+activeMainTool.numberWithCommas(totalBidsCost);
     //$('.footerBidsListTotalCount').html(content);
     var content1='<div class="footerBidsListTotalCountPrice">'+totalCost+'</div>'+
                '<div class="productPopupBidPrice">'+totalBidsCost+'</div>';
        $('.footerBidsListTotalCount').html(content1);
     
     $('.miniBidsListStructure').css('opacity','1');
     if(totalCount===0){
         $('.bidsListIconMobile .mobileHeaderIconBubbleStructure').css('opacity','0');
     }
     else{
         $('.bidsListIconMobile .mobileHeaderIconBubbleTitle').html(totalCount);
         $('.bidsListIconMobile .mobileHeaderIconBubbleStructure').css('opacity','1');
     }
     $('.bidsListIconMobile .mobileHeaderIconBubbleStructure').addClass('mobileHeaderIconBubbleStructureActive');
     setTimeout(function(){ 
     $('.bidsListIconMobile .mobileHeaderIconBubbleStructure').removeClass('mobileHeaderIconBubbleStructureActive');
     }, 300);
     
     
     
     //activeMiniCart.updateCartPosition();
}

