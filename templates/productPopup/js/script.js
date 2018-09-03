function productPopup(){
    this.visibility = false;
    this.image360visibility = false;
    this.compareMasterActiveAnimation= false;
    this.compareMasterActive= false;
    this.recommendedProductsMaxLength= 5;
    this.activeProductId=-1;
    this.availableToOpen=true;
    this.urlToShare='https://www.diamonds-bitcoin.com/diamondView=';
}

var activeProductPopup = new productPopup();

activeProductPopup.showImage360Zoom = function () {
    $('.productPopupCloseButton').css('display','none');
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    $('.productPopupStructure .productImage360_zoomStructure').addClass('image360zoomDisplay');
    if(window.innerWidth<=1020){
    activeProductPopup.turnOnImage360();
}
}


activeProductPopup.openProductLinkStructure = function () {
    if($('.shareInputStructure').hasClass('shareInputStructureActive')){
        activeProductPopup.closeProductLinkStructure();
        return true;
    }
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    $('#shareProductInput').val(activeProductPopup.urlToShare+product.productId);
    $('.shareInputStructure').addClass('shareInputStructureActive');
}

activeProductPopup.closeProductLinkStructure = function () {
    $('.shareInputStructure').removeClass('shareInputStructureActive');
}


activeProductPopup.shareProductLinkViaEmail = function () {
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    var productLink=activeProductPopup.urlToShare+product.productId;
    var whatsappMessage= "Diamonds-Bitcoin diamond:"+"\r\n"+productLink;
    whatsappMessage = window.encodeURIComponent(whatsappMessage);
    window.location.href="mailto:?body=" + whatsappMessage;
    }

activeProductPopup.shareProductLinkViaSms = function () {
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    var productLink=activeProductPopup.urlToShare+product.productId;
    var whatsappMessage= "Diamonds-Bitcoin diamond:"+"\r\n"+productLink;
    whatsappMessage = window.encodeURIComponent(whatsappMessage);
    window.location.href = "sms:?&body="+whatsappMessage;
    }

activeProductPopup.shareProductLinkViaWhatsApp = function () {
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    var productLink=activeProductPopup.urlToShare+product.productId;
    var whatsappMessage= "Diamonds-Bitcoin diamond:"+"\r\n"+productLink;
    whatsappMessage = window.encodeURIComponent(whatsappMessage);
    window.location.href="whatsapp://send?text="+whatsappMessage;
}

activeProductPopup.shareProductLinkViaCopy = function () {
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    var productLink=activeProductPopup.urlToShare+product.productId;
    /*var $temp = $("<input style='    position: absolute;'>");
        $("body").append($temp);
        $temp.val(productLink).select();
        document.execCommand("copy");
        $temp.remove();*/
         setTimeout(function(){ 
            activeProductPopup.shareProductLinkViaCopyTitle();
         }, 10);
        
        var success   = true,
      range     = document.createRange(),
      selection;


  // For IE.
  if (window.clipboardData) {
        var $temp = $("<input style='    position: absolute;'>");
        $("body").append($temp);
        $temp.val(productLink).select();
        document.execCommand("copy");
        $temp.remove();      
  } else {
    // Create a temporary element off screen.
    var tmpElem = $('<div>');
    tmpElem.css({
      position: "absolute",
      left:     "-1000px",
      top:      "-1000px"
    });
    // Add the input value to the temp element.
    tmpElem.text(productLink);
    $("body").append(tmpElem);
    // Select temp element.
    range.selectNodeContents(tmpElem.get(0));
    selection = window.getSelection();
    selection.removeAllRanges ();
    selection.addRange(range);
    // Lets copy.
    try { 
      success = document.execCommand ("copy", false, null);
    }
    catch (e) {
      //copyToClipboardFF(input.val());
    }
    if (success) {
      //alert ("The text is on the clipboard, try to paste it!");
      // remove temp element.
      tmpElem.remove();
    }
  }
}

activeProductPopup.shareProductLinkViaCopyTitle = function () {
    $('.copyMessageSuccessStructure').css('bottom','0px');
    setTimeout(function(){ 
    $('.copyMessageSuccessStructure').css('bottom','-63px');
    }, 2000);
}


activeProductPopup.hideImage360Zoom = function () {
    $('.productPopupCloseButton').css('display','block');
    $('.productPopupStructure .productImage360_zoomStructure').removeClass('image360zoomDisplay');
}

activeProductPopup.turnOnImage360 = function () {
         var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    var image360src = 'https://s3.eu-west-2.amazonaws.com/diamonds-images/'+product.productId+'/'+product.productId+'.html';
    
        if($('.productPopupStructure #productImage360').attr('src')!==image360src){
            $('.productPopupStructure #productImage360').attr('src',image360src);
        }
       $('.productPopupStructure .productImage360_zoom').attr('src',product.imageSrc);
    
}

activeProductPopup.showImage360 = function () {
    
    /*activeProductPopup.showImage360Zoom();
    return true;*/
    return true;
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    if(!product.withImage){
        return true;
    }
    
    if(activeProductPopup.image360visibility){ //to hide
        activeProductPopup.hideImage360();
    }   
    else{ //to show
      if(window.innerWidth<=1020){
    //activeProductPopup.turnOnImage360();
}
        activeProductPopup.showImage360Excute();
    }   
}
activeProductPopup.showImage360Excute = function () {
    $('.productPopupStructure .image360IconTitle').html('Image');
        $('.productPopupStructure .productImage').addClass('productImageDisplay');
        $('.productPopupStructure .productImage360Structure').addClass('image360IconDisplay');
        //$('.productPopupStructure .productImage360_zoom').addClass('image360IconDisplay');
        //$('.productPopupStructure .image360ZoomIcon').addClass('image360IconDisplay');
        activeProductPopup.image360visibility = true;
}
activeProductPopup.openGiaCert = function () {
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];    
    
    //https://www.gia.edu/report-check?reportno=6205063291
    if(product.lab!=='GIA'){
        return true;
    }
    var iframeSrc='https://www.gia.edu/report-check?reportno='+product.certificateId;
    //var iframeSrc='https://b.dob.com/barak/Output/Certificates/'+product.certificateId+'.pdf?target=main';
    $('.productPopupCertificate').attr('src',iframeSrc);
    $('.productPopupCloseButton').css('display','none');
    $('.productInfoStructure').css('display','none');
    $('.productPopupCertificateStructureCloseButton').css('visibility','visible');
    $('.productPopupCertificateStructure').addClass('productPopupCertificateStructureActive');
    //window.open('https://b.dob.com/barak/Output/Certificates/'+product.certificateId+'.pdf?target=main');
}


activeProductPopup.hidecertificatepopup = function () {
    //var product=activeProductManager.productsIds[activeProductPopup.activeProductId];    
    //var iframeSrc='https://b.dob.com/barak/Output/Certificates/'+product.certificateId+'.pdf?target=main';
    $('.productPopupCertificateStructureCloseButton').css('visibility','hidden');
    $('.productPopupCertificate').attr('src','');
    $('.productInfoStructure').css('display','block');
    $('.productPopupCloseButton').css('display','block');
    $('.productPopupCertificateStructure').removeClass('productPopupCertificateStructureActive');
    //window.open('https://b.dob.com/barak/Output/Certificates/'+product.certificateId+'.pdf?target=main');
}

activeProductPopup.changeMobileCartFooterButton = function (type,manually) {
    if(manually===0){
        if(type===0){ //hide
        $('.productPopupButtonsMobileStructureCart').removeClass('productPopupButtonsMobileStructureCartActive');
    }
    else{
            $('.productPopupButtonsMobileStructureCart').addClass('productPopupButtonsMobileStructureCartActive');
    }
    return true;
    }
    if(type===0){ //hide
        $('.productPopupButtonsMobileStructureCart').addClass('productPopupButtonsMobileStructureIconCartActive');    
        setTimeout(function(){ 
            $('.productPopupButtonsMobileStructureCart').removeClass('productPopupButtonsMobileStructureIconCartActive');    
        $('.productPopupButtonsMobileStructureCart').removeClass('productPopupButtonsMobileStructureCartActive');
            }, 200);
    }
    else{ //to show added
        
        $('.productPopupButtonsMobileStructureCart').addClass('productPopupButtonsMobileStructureIconCartActive');    
        setTimeout(function(){ 
            $('.productPopupButtonsMobileStructureCart').removeClass('productPopupButtonsMobileStructureIconCartActive');    
        $('.productPopupButtonsMobileStructureCart').addClass('productPopupButtonsMobileStructureCartActive');
            }, 200);
    }
}

activeProductPopup.changeMobileWishlistFooterButton = function (type,manually) { //manually===0 is false
    if(manually===0){
        if(type===0){ //hide
        $('.productPopupButtonsMobileStructurePick').removeClass('productPopupButtonsMobileStructurePickActive');
    }
    else{
            $('.productPopupButtonsMobileStructurePick').addClass('productPopupButtonsMobileStructurePickActive');
    }
    return true;
    }
    if(type===0){ //hide
        $('.productPopupButtonsMobileStructurePick').addClass('productPopupButtonsMobileStructureIconCartActive');    
        setTimeout(function(){ 
            $('.productPopupButtonsMobileStructurePick').removeClass('productPopupButtonsMobileStructureIconCartActive');    
        $('.productPopupButtonsMobileStructurePick').removeClass('productPopupButtonsMobileStructurePickActive');
            }, 200);
    }
    else{
            $('.productPopupButtonsMobileStructurePick').addClass('productPopupButtonsMobileStructureIconCartActive');    
        setTimeout(function(){ 
            $('.productPopupButtonsMobileStructurePick').removeClass('productPopupButtonsMobileStructureIconCartActive');    
        $('.productPopupButtonsMobileStructurePick').addClass('productPopupButtonsMobileStructurePickActive');
            }, 200);
    }
}

activeProductPopup.unavailableProductAdded = function () {
    $('.productAttrTableTr_status').addClass('productAttrTableTrAlert');
    setTimeout(function(){ 
        $('.productAttrTableTr_status').removeClass('productAttrTableTrAlert');
    }, 1000);
}

activeProductPopup.addProductToCart = function () {
    console.log('Cart Clicked');
    if($('.productPopupStructure .productPopupMainButtonCart').css('opacity')==='0.2' || $('.productPopupButtonsMobileStructureCart').hasClass('productPopupButtonsMobileStructureCartActive')){
            $('.productPopupStructure .productPopupMainButtonCart').css('opacity','1');
            activeProductPopup.changeMobileCartFooterButton(0,1);
            
        }
        else{
                if(activeCartManager.checkProductStatus(activeProductPopup.activeProductId,'productPopup')){
                    activeCartManager.addProduct(activeProductPopup.activeProductId);
                }
                else{
                    return true;
                }
            $('.productPopupStructure .productPopupMainButtonCart').css('opacity','0.2');
            activeProductPopup.changeMobileCartFooterButton(1,1);
            
        }
}

activeProductPopup.addProductToWishList = function () {
        if($('.productPopupStructure .productPopupMainButtonWishList').css('opacity')==='0.2' || $('.productPopupButtonsMobileStructurePick').hasClass('productPopupButtonsMobileStructurePickActive')){
            activeProductPopup.changeMobileWishlistFooterButton(0,1);
            $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','1');
        }
        else{
            activeProductPopup.changeMobileWishlistFooterButton(1,1);
            $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','0.2');
        }
    activeWishListManager.addProduct(activeProductPopup.activeProductId);
}

activeProductPopup.hideImage360 = function () {
    activeProductPopup.image360visibility = false;
        $('.productPopupStructure .image360IconTitle').html('360°');
        $('.productPopupStructure .productImage').removeClass('productImageDisplay');
        $('.productPopupStructure .productImage360Structure').removeClass('image360IconDisplay');
        $('.productPopupStructure .productImage360_zoom').removeClass('image360IconDisplay');
        //$('.productPopupStructure .image360ZoomIcon').removeClass('image360IconDisplay');
}


activeProductPopup.restart360Image= function (productId) {
    var product=activeProductManager.productsIds[productId];
    if(!product.withImage){
        
    }
    else{
        var image360src = 'https://segoma.com/v.php?type=iframe&id='+product.segomaId;
        if($('.productPopupStructure #productImage360').attr('src')!==image360src){
            $('.productPopupStructure #productImage360').attr('src',image360src);
        }
    }
}
activeProductPopup.setPopupValues = function (productId) {
    var product=activeProductManager.productsIds[productId];
    //data-clipboard-text="Just because you can doesn't mean you should — clipboard.js"
    $('#shareInputCopyButton').attr('data-clipboard-text',activeProductPopup.urlToShare+product.productId);
    //$('#shareProductInput').attr('value','https://www.dob.com/search/?productId='+product.productId);
    if(!product.withImage){
    
        var imageSrc = '../assets/company/sampleDiamond.png';
        $('#productPopupStructure .productImage').attr('src',imageSrc);
        $('#productPopupStructure .image360Icon').css('display','none');
        $('#productPopupStructure .masterCompareButtonStructure').css('display','none');
        $('#productPopupStructure .image360ZoomIcon').css('display','none');
    }
    else{
        if(!product.imageLoaded){
            $('#productPopupStructure .productImage').attr('src','../assets/company/sampleDiamond.png');
        } else{
            $('#productPopupStructure .productImage').attr('src',product.imageSrc);
        }
        
        setTimeout(function(){ 
        var image360src = 'https://segoma.com/v.php?type=iframe&id='+product.segomaId;
        if(window.innerWidth>1020){
                activeProductPopup.turnOnImage360();
            }
        /*if($('.productPopupStructure #productImage360').attr('src')!==image360src){
            $('.productPopupStructure #productImage360').attr('src',image360src);
            //activeCompareMaster.setMasterProducts();
            $('.productPopupStructure .productImage360_zoom').attr('src',image360src+'&zoom=1');
        }*/
        
        }, 600);
        
        // $('#productPopupStructure .image360Icon').css('display','block');
        $('#productPopupStructure .masterCompareButtonStructure').css('display','block');
        // $('#productPopupStructure .image360ZoomIcon').css('display','block');
        
    }
    
    
    var tableContent1 = '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'MODEL'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.model+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'Ct.'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.caratString+
                                            '<div class="diamondOnHandProductPopUpIcon" onclick="activeDiamondOnHand.show()" >'+
                                                    '<img src="../assets/informationIcon.png"/>'+
                                            '</div>'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'COLOR'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.color+
                                            '<span class="IHvalueStructure">'+
                                            product.IHColor+
                                            '</span>'+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CLARITY'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.clarity+
                                            '<span class="IHvalueStructure">'+
                                            product.IHClarity+
                                            '</span>'+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CUT'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.cut+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'POLISH'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.polish+
                                        '</td>'+
                                    '</tr>';
    var tableContent2 = '<tr class="productAttrTableTr">'+
                                            '<td class="productAttrTableTitleTd">'+
                                                'SYMMETRY'+
                                            '</td>'+
                                            '<td class="productAttrTableValueTd">'+
                                                product.symmetry+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'FLUOR'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.fluor+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'DATE'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.dateProduct+
                                        '</td>'+
                                    '</tr>'+
                                    '</tr>' + '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                    '<td class="productAttrTableTitleTd">'+
                                        'DEPTH'+
                                    '</td>'+
                                    '<td class="productAttrTableValueTd">'+
                                        product.depth+
                                    '</td>'+
                                '</tr>' + 
                                 '<tr class="productAttrTableTr">'+
                                    '<td class="productAttrTableTitleTd">'+
                                        'TABLE'+
                                    '</td>'+
                                    '<td class="productAttrTableValueTd">'+
                                        product.table+
                                    '</td>'+
                                '</tr>'+
                                '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                    '<td class="productAttrTableTitleTd">'+
                                        'MEASURE.'+
                                    '</td>'+
                                    '<td class="productAttrTableValueTd">'+
                                        product.measureString+
                                    '</td>'+
                                '</tr>';
    var tableContent3 = '<tr class="productAttrTableTr">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'CROWN HEIGHT'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.crownHeight+
                                        '</td>'+
                                    '</tr>'+
                                      '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'CROWN ANGLE'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.crownAngle+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'PAVILION DEPTH'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.pavillionDepth+
                                        '</td>'+
                                    '</tr>'+
                                      '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'PAVILION ANGLE'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.pavillionAngle+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                         '<td class="productAttrTableTitleTd">'+
                                            'LAB (CERT.)'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                        '<div class="productAttrTableValueTdCertTitleWrapper">'+
                                            '<div class="productAttrTableValueTdCertTitle">'+product.lab+'</div>'+
                                            '<div class="productAttrTableValueTdCert">('+product.certificateId+')</div>'+
                                            '</div>'+
                                        '</td>'+
                                    '</tr>' + '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                            '<td class="productAttrTableTitleTd">'+
                                            'ID'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.productId+
                                        '</td>'+
                                    '</tr>'
                            

    activeProductPopup.showLazyLoadingRecommendedProducts();
    activeProductPopup.getRecommendedProducts(product);
    $('#productPopUpAttrTable1').html(tableContent1);
    $('#productPopUpAttrTable2').html(tableContent2);
    $('#productPopUpAttrTable3').html(tableContent3);
    $('.productPopupStructure .giaCerIconTitle').html(product.lab);
    var model=product.model;
    var caratString=product.caratString;
    var color=product.color;
    var clarity=product.clarity;
    var cut=product.cut;
    var polish=product.polish;
    var symmetry=product.symmetry;
    var fluor=product.fluor;
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
    
    $('.productMainTitle').html(
            model+'    '+caratString+'    '+ color+'    '+ clarity+'    '+ cut
            /*polish+'    '+symmetry+'    '+fluor*/
            );
    $('.productMainDiscount').html(product.discountString);
    $('.productTotalPrice').html(product.totalPriceString);
    $('.productPopupItemBitcoinCostStructure .itemCostValue').html(product.bitcoinPriceString);
    $('.productTotalPriceBid').html('');
    //$('.productTotalPrice').html(product.listPriceString);
    $('.productStatus').html("<span>Status:</span>" + product.forSellStatus);
    $('.productLocation').html("<span>Location:</span>" + product.location);
    
    if(product.ppcString==='---'){
        $('#productPopupStructure .productMainCost').html('');
        $('.productMainCostTitle').css('display','none');
    }
    else{
        $('#productPopupStructure .productMainCost').html(product.ppcString);
        $('.productMainCostTitle').css('display','block');
    }
    
    activeProductPopup.showBid(product);
    
    
    
}

activeProductPopup.showBid = function (product) {
    if(typeof product.bidPrice!=='undefined'){
        console.log(product.bidPrice);
        var content='<div class="productPopupTotalPrice">'+product.totalPriceString+'</div>'+
                '<div class="productPopupBidPrice">'+'$'+activeMainTool.numberWithCommas(product.bidPrice);+'</div>';
        $('.productTotalPriceBid').html(product.totalPriceString);
        $('.productTotalPrice').html('$'+activeMainTool.numberWithCommas(product.bidPrice));
        var ppcValue=product.bidPrice/product.carat;
        ppc='$'+activeMainTool.numberWithCommas(ppcValue);
        var content='<div class="productPopupPPCTitle">'+product.ppcString+'</div>'+
                '<div class="productPopupBidPrice">'+ppc+'</div>';
        $('.productMainCost').html(content);
        var discount=(ppcValue/product.listPrice*(100))-100;
        discount=activeMainTool.numberWithCommas(discount,1)+'%';
        if(discount==='Infinity%'){
                    discount='---';
                }
        var content='<div class="productPopupDiscountTitle">'+product.discountString+'</div>'+
                '<div class="productPopupBidDiscount">'+discount+'</div>';
        $('.productAttrTableValueTdDiscount').html(content);
        
       activeProductPopup.alreadyBid(product,product.bidPrice);
    }
    else{
        if(typeof activeBidManager.productsIds[product.id]==='undefined'){
            $('.productPopupMainButtonBid').css('opacity','1');
        $('.productPopupBidMainTitle').html('PLACE BID');
        $('.productPopupMainButtonBid .productPopupMainButtonTitle').html('PLACE BID');
        }
        else{
        activeProductPopup.alreadyBid(product,activeBidManager.productsIds[product.id].price);
        }
        
    }
    
    
}

activeProductPopup.alreadyBid= function (product,bidPrice) {
    activeProductPopup.activeProductId=product._id;
        $('#bidMainInput').val(bidPrice);
        activeProductPopup.updateFieldBids();
        $('.productPopupMainButtonBid .productPopupMainButtonTitle').html('UPDATE BID');
        $('.productPopupBidMainTitle').html('UPDATE BID');
        //$('.productPopupMainButtonBid').css('opacity','0.2');
}
activeProductPopup.showLazyLoadingRecommendedProducts= function () {
    var content = '';
    for(var i =0;i<5;i++){
                                                if(i===4){
                                                    content += '<div class="recommendedProductPopUpItemStructure recommendedProductPopUpItemStructureLast recommendedProductPopUpItemStructureLazy" style="    box-shadow: 0 0 0;">';
                                                }
                                                else{
                                                    content += '<div  class="recommendedProductPopUpItemStructure recommendedProductPopUpItemStructureLazy" style="    box-shadow: 0 0 0;">';
                                                }

                                                content+='<div class="recommendedProductTypeItemImage">'+
                                                                                            //'<img src="../../assets/match.png"/>'+
                                                                                    '</div>'+
                                                                                    '<div class="recommendedProductPopUpItemImage recommendedLazyLoadingProductPopUpItemImage" style="    margin-top: -11px;    padding-bottom: 12px;">'+
                                                                                        '<img src="../assets/transparent.png" style="opacity:1;"/>'+
                                                                                    '</div>'+
                                                                                    '<div class="recommendedProductPopUpItemAttrStructure" style="padding-top: 0px;margin-top: -6px;">'+
                                                                                        '<div class="recommendedProductPopUpItemAttr" style="width: 100%;">'+
                                                                                        '<div class="animated-background-image-product" style="width: 112px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: left;margin-right: 5px;"></div>'+
                                                                                            '<div class="animated-background-image-product" style="width: 26px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: left;margin-right: 5px;"></div>'+
                                                                                            '<div class="animated-background-image-product" style="width: 12px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: left;margin-right: 5px;"></div>'+
                                                                                            '<div class="animated-background-image-product" style="width: 28px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: left;margin-right: 5px;"></div>'+
                                                                                                '<div class="animated-background-image-product" style="width: 62px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: left;margin-right: 5px;"></div>'+
                                                                                                '<div class="animated-background-image-product" style="width: 18px;height: 5px;background-color: #dee0e4;margin-top: 6px;float: right;margin-right: 19px;"></div>     </div>'+
                                                                                            '<div  class="recommendedProductPopUpItemCost">'+
                                                                                                    
                                                                                            '</div>'+
                                                                                    '</div>'+
                                                                            '</div>';
                                                                }
        $('#recommendedProductPopUpResults').html(content);
}

activeProductPopup.getRecommendedProducts= function (product,params,lastTry) {
     $('.recommendedProductPopUpTitle').html('RECOMMENDED FOR YOU');
    var productCaratMinRange=activeMainTool.numberWithCommas(product.carat-1,2);
    var productCaratMaxRange=activeMainTool.numberWithCommas(product.carat+1,2);
    if(productCaratMinRange<0){
        productCaratMinRange=0;
    }
    var paramsFilter='fromCarat='+productCaratMinRange+'&toCarat='+productCaratMaxRange+'&model='+product.model+'&color='+product.color;
    var params=params ? params : paramsFilter;
    var lastTry=lastTry ? lastTry : false;
    $.ajax({
                url:activeMainTool.serverSrc+'products?'+params,
                type: 'get',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    if(data.length<2 && !lastTry){
                        console.log('Recommended level2');
                        activeProductPopup.getRecommendedProducts(product,'fromCarat='+productCaratMinRange+'&toCarat='+productCaratMaxRange+'&color='+product.color,true);
                        return true;
                    }
                    else if(data.length<2 && lastTry){
                        console.log('Recommended level3');
                        $('.recommendedProductPopUpTitle').html('RECENTLY VIEWED');
                        activeProductManager.setNewProducts(activeRecentlyViewed.products);
                        activeProductPopup.setRecommendedProducts(product,activeRecentlyViewed.products,false);
                        return true;
                    }
                    console.log('Recommended level1');
                    activeProductManager.setNewProducts(data);
                   activeProductPopup.setRecommendedProducts(product,data);
                },
                error: function (data) {
                    console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }
                    
                }
        });
}

activeProductPopup.setRecommendedProducts= function (product,data,match) {
         var footerContent ='';
         if(typeof match==='undefined'){
             match=true;
         }
         if(match){
             var matchImageContent= '<img src="../assets/match.png"/>';
         }
         else{
             var matchImageContent= '';
         }
                            var productSuggestedCount=0;
                            if(data.length>1){
                                for(var i=0;i<data.length;i++){
                                    var productSuggested = data[i];
                                    if(productSuggestedCount<activeProductPopup.recommendedProductsMaxLength){
                                            if(productSuggested.id===product.id){
                                        
                                            }
                                            else{
                                                productSuggestedCount++;
                                                if(productSuggestedCount===activeProductPopup.recommendedProductsMaxLength){
                                                    footerContent += '<div onclick="activeProductPopup.closeAndShow('+"'"+productSuggested.id+"'"+')" class="recommendedProductPopUpItemStructure recommendedProductPopUpItemStructureLast">';
                                                }
                                                else{
                                                    footerContent += '<div onclick="activeProductPopup.closeAndShow('+"'"+productSuggested.id+"'"+')" class="recommendedProductPopUpItemStructure">';
                                                }
                                                    var model=productSuggested.model;
                                                var caratString=productSuggested.caratString;
                                                var color=productSuggested.color;
                                                var clarity=productSuggested.clarity;
                                                var cut=productSuggested.cut;
                                                var polish=productSuggested.polish;
                                                var symmetry=productSuggested.symmetry;
                                                var fluor=productSuggested.fluor;
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
                                                footerContent +='   <div class="recommendedProductTypeItemImage">'+
                                                                                            matchImageContent+
                                                                                    '</div>'+
                                                                                    '<div class="recommendedProductPopUpItemImage">'+
                                                                                        '<img src="'+productSuggested.imageSrc+'"/>'+
                                                                                    '</div>'+
                                                                                    '<div class="recommendedProductPopUpItemAttrStructure">'+
                                                                                            '<div class="recommendedProductPopUpItemAttr">'+
                                                                                                    '<span>'+caratString+'</span> '+
                                                                                                    '<span>'+color+'</span> '+
                                                                                                    '<span>'+clarity+'</span> '+
                                                                                                    /*'<span>'+cut+'</span> '+
                                                                                                     '<span>'+polish+'</span> '+
                                                                                                      '<div class="itemCost"> '+
                                                                                                    product.totalPriceString+
                                                                                                    //'<span class="itemCostTitle">Per Ct.</span>'+
                                                                                            '<span class="itemBitcoinCostStructure"> '+
                                                                                                    '<span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>'+
                                                                                                '<span class="itemCostValue">'+product.bitcoinPriceString+'</span>'+
                                                                                            '</span>'+
                                                                                            '</div>'+*/
                                                                                            '<div class="itemCost"> '+
                                                                                                    //product.totalPriceString+
                                                                                            '<span class="itemBitcoinCostStructure"> '+
                                                                                                    '<span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>'+
                                                                                                '<span class="itemCostValue">'+productSuggested.bitcoinPriceString+'</span>'+
                                                                                            '</span>'+
                                                                                            '</div>'+
                                                                                                    //'<span>'+productSuggested.symmetry+'</span>'+
                                                                                                    //'<span>'+productSuggested.fluor+'</span>'+
                                                                                            '</div>'+
                                                                                    '</div>'+
                                                                            '</div>';
                                                                    activeMainTool.loadImage(productSuggested.imageSrc);
                                                                   
                                            }
                                    }
                                    else{
                                        break;
                                    }
                                }
                            }
$('#recommendedProductPopUpResults').html(footerContent);
                            
}

activeProductPopup.setMasterProducts = function (productId) {
    var product=activeProductManager.productsIds[productId];   
    var masterProduct=activeCompareMaster.getMasterProducts(product);
}

activeProductPopup.showMainButtons = function (product) {
    $('.productPopupMainButtonStructureDesktop ').css('display','block');
    $('.productPopupButtonsMobileFooter ').removeClass('productPopupButtonsMobileFooterDisplayNone');
    $('.shareInputStructure').css('display','block');
    
}
activeProductPopup.hideMainButtons = function (product) {
    $('.productPopupMainButtonStructureDesktop ').css('display','none');
    $('.productPopupButtonsMobileFooter ').addClass('productPopupButtonsMobileFooterDisplayNone');
    $('.shareInputStructure').css('display','none');
}

activeProductPopup.show = function (productId) {
        
      if(!activeProductPopup.availableToOpen){
          return true;
      }
      $('.productPopupButtonsMobileStructurePick').css('opacity','1');
            
            if(activeCartManager.checkIfExist(productId)){
                $('.productPopupStructure .productPopupMainButtonCart').css('opacity','0.2');
            activeProductPopup.changeMobileCartFooterButton(1,0);
            }
            else{
                $('.productPopupStructure .productPopupMainButtonCart').css('opacity','1');
            activeProductPopup.changeMobileCartFooterButton(0,0);
            }
            
            if(activeWishListManager.checkIfExist(productId)){
            $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','0.2');
            activeProductPopup.changeMobileWishlistFooterButton(1,0);
            }
            else{
               $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','1');
            activeProductPopup.changeMobileWishlistFooterButton(0,0);
            }
            
        /*if($('#itemStructure_'+productId+' .itemAlreadyCartStructureActive').length!==0 || $('.productPopupButtonsMobileStructurePick').hasClass('productPopupButtonsMobileStructureCartActive')){
            $('.productPopupStructure .productPopupMainButtonCart').css('opacity','0.2');
            activeProductPopup.changeMobileCartFooterButton(1,0);
        }
        else{
            $('.productPopupStructure .productPopupMainButtonCart').css('opacity','1');
            activeProductPopup.changeMobileCartFooterButton(0,0);
        }
        
        
        if($('#itemStructure_'+productId+' .itemAlreadyWishListActive').length!==0 || $('.productPopupButtonsMobileStructurePick').hasClass('productPopupButtonsMobileStructurePickActive')){
            activeProductPopup.changeMobileWishlistFooterButton(1,0);
            $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','0.2');
        }
        else{
            $('.productPopupStructure .productPopupMainButtonWishList').css('opacity','1');
            activeProductPopup.changeMobileWishlistFooterButton(0,0);
        }*/
        
        
        $('.productPopupButtonsMobileFooter').removeClass('productPopupButtonsMobileFooterHidden');
        
         setTimeout(function(){
            $('.productPopupButtonsMobileFooter').addClass('productPopupButtonsMobileFooterDisplay');
        }, 10);
        
        
        activeMiniCart.hideCart();
        activeMiniBidsList.hideBidsList();
        //$('body').addClass('overflowHidden');
        if(window.innerWidth>1020){
            activeProductPopup.setMasterProducts(productId);
            //activeMainTool.disableScroll();
            $('body').css('overflow','hidden');
        }
        else{
            $('body').css('overflow','hidden');
             $('.productPopupWrapper').animate({
                    scrollTop: 0
                }, 'slow');
        }
        activeRecentlyViewed.addProduct(productId);
        var product=activeProductManager.productsIds[productId];  
       /* if(product.status==='available'){
            activeProductPopup.showMainButtons(product);
        }
        else{
            activeProductPopup.hideMainButtons(product);
        }*/
        activeMiniCart.expandedAvailable=false;
        activeProductPopup.setPopupValues(productId);
        activeProductPopup.activeProductId=productId;
        activeProductPopup.turnOnImage360();
        if(window.scrollY===0){
            activeMainTool.scrollTo(10);
        }
        $('#productPopupStructureBlur').removeClass('productPopupStructureBlurHidden');
        $('#productPopupStructure').removeClass('productPopupStructureHidden');
        
        $('#productPopupStructureBlur').removeClass('productPopupStructureBlurDesktopHidden');
        $('.productPopupStructure').removeClass('productPopupStructureBlurDesktopHidden');
        
        setTimeout(function(){
            $('.productPopupWrapper').addClass('productPopupWrapperDisplay');
            $('#productPopupStructureBlur').addClass('productPopupStructureBlurDisplay');
        }, 10);
        
        $('.productPopupWrapper').attr('style','');
        if($('.productPopupWrapper').offset().top<100){
                var gapDiv = 100 - $('.productPopupWrapper').offset().top;
                $('.productPopupWrapper').css('margin-top',gapDiv);
        }
        
        this.visibility = true;
/*      var el = document.getElementById('productPopupStructure');

ontouch(el, function(evt, dir, phase, swipetype, distance){
 // evt: contains original Event object
 // dir: contains "none", "left", "right", "top", or "down"
 // phase: contains "start", "move", or "end"
 // swipetype: contains "none", "left", "right", "top", or "down"
 // distance: distance traveled either horizontally or vertically, depending on dir value
 
 if ( phase == 'move' && dir == 'right'){
    //activeProductPopup.hide();
    $('.productPopupStructure').css('margin-left',distance);
    activeMainTool.disableScroll();
    }
    else  if ( phase == 'end' && dir == 'right'){
    activeProductPopup.hide();
    activeMainTool.enableScroll();
    }
})*/
    

};

activeProductPopup.closeAndShow = function (productId) {
    if(activeMainPage.pageId===14){//productview
        return true;
    }
    activeProductPopup.hideImage360();
    activeProductPopup.show(productId);
}

activeProductPopup.hide = function () {
    if(activeMainPage.pageId===14){//productview
        return true;
    }
    activeMiniCart.expandedAvailable=true;
        //$('body').removeClass('overflowHidden');
        if(window.innerWidth>1020){
            activeProductPopup.resetFieldBids();
            activeProductPopup.hideBidSection();
            activeDiamondOnHand.hide();
              activeProductPopup.hidecertificatepopup();
            $('.productPopupWrapper').removeClass('productPopupWrapperDisplay');
         $('.productPopupWrapper').removeClass('productPopupWrapperDisplay');
            $('#productPopupStructureBlur').removeClass('productPopupStructureBlurDisplay');
            $('.productPopupButtonsMobileFooter').removeClass('productPopupButtonsMobileFooterDisplay');
            activeProductPopup.closeProductLinkStructure();
            $('#shareProductInput').val('');
       // setTimeout(function(){ 
            $('#productPopupStructure').addClass('productPopupStructureHidden');
            $('#productPopupStructureBlur').addClass('productPopupStructureBlurHidden');
            $('.productPopupButtonsMobileFooter').addClass('productPopupButtonsMobileFooterHidden');
            activeProductPopup.hideMasterStructure();
        activeProductPopup.hideImage360();
        $('.productPopupStructure #productImage360').attr('src','');
        activeCompareMaster.hideMasterProducts();
        $('.productPopupStructure .productImage360_zoom').attr('src','');
        $('.productPopupStructure .image360IconTitle').html('360°');
        activeProductPopup.hideImage360Zoom();
        $('#productPopupStructureBlur').addClass('productPopupStructureBlurDesktopHidden');
        $('.productPopupStructure').addClass('productPopupStructureBlurDesktopHidden');
        $('.productPopupStructure').attr('style','');
       // }, 350); 
            $('body').css('overflow','auto');
        }
        else{
              activeProductPopup.hidecertificatepopup();
            $('.productPopupWrapper').removeClass('productPopupWrapperDisplay');
         $('.productPopupWrapper').removeClass('productPopupWrapperDisplay');
            $('#productPopupStructureBlur').removeClass('productPopupStructureBlurDisplay');
            $('.productPopupButtonsMobileFooter').removeClass('productPopupButtonsMobileFooterDisplay');
            
      setTimeout(function(){ 
            $('#productPopupStructure').addClass('productPopupStructureHidden');
            $('#productPopupStructureBlur').addClass('productPopupStructureBlurHidden');
            $('.productPopupButtonsMobileFooter').addClass('productPopupButtonsMobileFooterHidden');
            activeProductPopup.hideMasterStructure();
        activeProductPopup.hideImage360();
        $('.productPopupStructure #productImage360').attr('src','');
        activeCompareMaster.hideMasterProducts();
        $('.productPopupStructure .productImage360_zoom').attr('src','');
        $('.productPopupStructure .image360IconTitle').html('360°');
        activeProductPopup.hideImage360Zoom();
        $('#productPopupStructureBlur').addClass('productPopupStructureBlurDesktopHidden');
        $('.productPopupStructure').addClass('productPopupStructureBlurDesktopHidden');
        $('.productPopupStructure').attr('style','');
        }, 350); 
            $('body').css('overflow','auto');
        }
           

           
        
       

        
        activeProductPopup.changeMobileCartFooterButton(0,1);
            activeProductPopup.changeMobileWishlistFooterButton(0,1);
        this.visibility = false;
};

$( "#productPopupStructureBlur" ).click(
  function() {
      activeProductPopup.hide();
  }
);

activeProductPopup.showMasterStructure = function () {
    if(activeProductPopup.compareMasterActiveAnimation){
        return true;
    }
    activeProductPopup.compareMasterActiveAnimation=true;
    if(!activeProductPopup.compareMasterActive){ //to open
        activeProductPopup.compareMasterActive=true;
        activeProductPopup.showImage360Excute();
        activeProductPopup.restart360Image(activeProductPopup.activeProductId);
        $('.productPopupStructure .compareMasterStructure').css('display','block');
        $('.masterCompareButtonStructure').css('opacity','0');
        $('.masterCompareCloseButtonStructure').css('display','block');
        setTimeout(function(){ 
            $('.masterCompareCloseButtonStructure').css('opacity','1');
        }, 10);
        setTimeout(function(){ 
            activeProductPopup.compareMasterActiveAnimation=false;
            $('.masterCompareButtonStructure').css('display','none');
        }, 600);
    }
    else{
       activeProductPopup.hideMasterStructure();
    }
}

activeProductPopup.hideMasterStructure = function () {
      activeProductPopup.compareMasterActive=false;
         $('.productPopupStructure .compareMasterStructure').css('display','none');
          $('.masterCompareButtonStructure').css('display','block');
        $('.masterCompareCloseButtonStructure').css('opacity','0');
         setTimeout(function(){ 
             $('.masterCompareButtonStructure').css('opacity','1');
        }, 10);
        setTimeout(function(){ 
            activeProductPopup.compareMasterActiveAnimation=false;
            $('.masterCompareCloseButtonStructure').css('display','none');
        }, 600);
}

activeProductPopup.showBidSection = function () {
    if($('.productInfoScroll').css('left')!=='0px'){
        activeProductPopup.hideBidSection();
        return true;
    }
    
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    $('#popupBidOrgPPCValue').html(product.ppcString);
  $('#popupBidOrgDisValue').html(product.discountString);
  $('#popupBidOrgTPValue').html(product.totalPriceString);
        $('.productInfoScroll').css('left','-100%');
    }
    
activeProductPopup.hideBidSection = function () {
        $('.productInfoScroll').css('left','0%');
        $('.productPopupBidBellowMinTitle').css('opacity','0');
}


activeProductPopup.updateFieldBids = function () {
          var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
          $('.productPopupBidBellowMinTitle').css('opacity','0');
          if($( "#bidMainInput" ).val()===''){
               activeProductPopup.resetFieldBids();
                return true;
          }
    var ppcValue=$( "#bidMainInput" ).val()/product.carat;
    var disValue=(ppcValue/product.listPrice*(100))-100;
    disValue= activeMainTool.numberWithCommas(disValue,1);
    ppcValue= activeMainTool.numberWithCommas(ppcValue);
    ppcValue='$'+ppcValue.toString();
    disValue=disValue.toString()+'%';;
  $('#popupBidPPCValue').html(ppcValue);
  $('#popupBidDisValue').html(disValue);
  if(ppcValue==="$NaN" || disValue==="NaN%"){
        $('#popupBidPPCValue').html('---');
        $('#popupBidDisValue').html('---');
    }
   else if(disValue==="Infinity%"){
        $('#popupBidDisValue').html('---');
    }
    var originalTotalPrice= product.totalPrice;
    originalTotalPrice = parseInt(originalTotalPrice.toFixed(0));
    var newBidTotalPrice= parseInt($( "#bidMainInput" ).val());
    if(Math.abs(originalTotalPrice-newBidTotalPrice)<1){
        $('.bidArrowDirection').attr('src','');
        $('.bidTitleDirection').html('');
    }
    else if(newBidTotalPrice>originalTotalPrice){
        $('.bidArrowDirection').attr('src','../assets/increaseArrow.png');
        var diffPrice=newBidTotalPrice-originalTotalPrice;
        diffPrice=activeMainTool.numberWithCommas(diffPrice);
        $('.bidTitleDirection').html('+$'+diffPrice); 
    }
    else if(newBidTotalPrice<originalTotalPrice){
        var diffPrice=originalTotalPrice-newBidTotalPrice;
        diffPrice=activeMainTool.numberWithCommas(diffPrice);
        $('.bidArrowDirection').attr('src','../assets/decreaseArrow.png');
        $('.bidTitleDirection').html('-$'+(diffPrice));
    }
    else{
        $('.bidArrowDirection').attr('src','');
        $('.bidTitleDirection').html('');
    }
                   
  //$('.productPopupBidSubmitButton').css('background-color','#00e1a6');
 
}


activeProductPopup.resetFieldBids = function () {
    $('.bidArrowDirection').attr('src','');
        $('.bidTitleDirection').html('');
        $('#popupBidPPCValue').html('---');
        $('#popupBidDisValue').html('---');
        $( "#bidMainInput" ).val('');
}

activeProductPopup.checkMinBidOffer = function (product) {
    var minBidOffer=product.totalPrice*0.93;
          if($( "#bidMainInput" ).val()<minBidOffer){  
            return false;
          }
          else{
              return true;
          }
}

activeProductPopup.sendBid = function () {
    var productId=activeProductPopup.activeProductId;
    var product=activeProductManager.productsIds[activeProductPopup.activeProductId];  
    if(!activeProductPopup.checkMinBidOffer(product)){
              $('.productPopupBidBellowMinTitle').css('opacity','1');
              return true;
          }
          $('.productPopupBidBellowMinTitle').css('opacity','0');
     var newBidPrice=$('#bidMainInput').val();
     if(newBidPrice<=0){
         return true;
     }
     activeProductPopup.alreadyBid(activeProductManager.productsIds[activeProductPopup.activeProductId],newBidPrice);
     activeBidManager.addProduct(productId,newBidPrice);
    $('.productPopupBidSubmitButton').css('background-color','#00e1a6');
    $('.productPopupBidSubmitButton').html('Submited');
    //$($('.productPopupBidInput input')[0]).css('border-color','#00e1a6');
    setTimeout(function(){ 
    activeProductPopup.hideBidSection();
    setTimeout(function(){ 
    $('.productPopupBidSubmitButton').css('background-color','black');
    $('.productPopupBidSubmitButton').html('Submit');
    $($('.productPopupBidInput input')[0]).css('border-color','black');
    }, 1000);
    }, 800);

}
