function productCard(){
    this.visibility = false;
    this.openedCard=-1;
}

var activeProductCard = new productCard();



activeProductCard.template1 = function (product) {
var itemClass='';
if(!product.withImage){
    itemClass='productCardDefaultImage';
}
else{
    
}

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
    /*
    $('.productMainTitle').html(
            model+'    '+caratString+'    '+ color+'    '+ clarity+'    '+ cut+'    '+
            polish+'    '+symmetry+'    '+fluor
            );*/

var content=
'<div class="productCardStructure '+itemClass+'">'+
    '<div class="itemSection itemStructure itemStructure_'+product.id+'" id="itemStructure_'+product.id+'">'+
        '<div class="itemWrapper">'+
        '<div class="moreDetailsFloatIcon" onclick="activeProductPopup.show('+"'"+product.id+"'"+')">'+
                            'DETAILS'+
                    '</div>'+
                    '<div class="productCardPlaceHolderTitleStructure">'+
                        '<div class="productCardPlaceHolderTitle">'+
                                'Sample Image'+
                        '</div>'+
                    '</div>'+
                    '<div class="itemFloatButtonsStructure" >'+
                        '<div class="itemFloatButton itemFloatCompareButton" onclick="activeWishListManager.addProduct('+"'"+product.id+"'"+')">'+
                            '<img src="../assets/if_star_384882Black.svg"/>'+
                    '</div>'+
                            '<div class="itemFloatButton itemFloatCartButton" onclick="activeCartManager.addProduct('+"'"+product.id+"'"+')">'+
                            '<img src="../assets/icons/cartIcon.png"/>'+
                    '</div>'+
                '</div>'+
            '<div class="itemVideoButtonStructure" onclick="activeProductCard.show360('+"'"+product.id+"'"+')">'+
                        '<img src="../assets/icons/360icon.png"/>'+
                '</div>'+
            '<div class="itemAlreadyCartStructure">'+
                        '<img src="../assets/icons/cartIcon.png"/>'+
                '</div>'+
                 '<div class="itemAlreadyWishListStructure">'+
                        '<img src="../assets/if_star_384882Black.svg"/>'+
                '</div>'+
                    '<div class="floatButtonStructure desktopElm">'+
                        '<div onclick="activeWishListManager.addProduct('+"'"+product.id+"'"+')"  class="wishListIcon floatButtonIcon" onclick="activeMainTool.comingSoonPopup()">'+
                            '<img src="../assets/picknchoose-24-blue.svg"/>'+
                        '</div>'+ 
                        '<div onclick="activeCartManager.addProduct('+"'"+product.id+"'"+')" class="cartIcon floatButtonIcon">'+
                            '<img src="../assets/cart-24-pink.svg"/>'+
                        '</div>'+
                    '</div>'+
                    '<div class="loadingImage360">'+
                            '<img src="../assets/favicon-96x96_black.png">'+
                     '</div>'+
                     '<div class="floatButtonStructure floatButtonStructureImage360">'+
                     '<div onclick="activeProductCard.show360('+"'"+product.id+"'"+')" class="image360Icon floatButtonIcon desktopElm">'+
                            '<div class="image360IconTitleCard">360°</div>'+
                        '</div>'+
                        '</div>'+
                    '<div class="itemWrapperBox">'+ //onclick="activeProductCard.openSmallCard('+"'"+product.id+"'"+' )"
                '<div class="itemImage" style="background-image:url('+product.sampleImageModel+')" onclick="activeProductPopup.show('+"'"+product.id+"'"+')">'+
                                '<img src="'+product.imageSrc+'"/>'+
                '</div>'+
                '<div class="itemAttrStructure" onclick="activeProductPopup.show('+"'"+product.id+"'"+')">'+
                        '<div class="itemCost"> '+
                                product.totalPriceString+
                                //'<span class="itemCostTitle">Per Ct.</span>'+
                        '<span class="itemBitcoinCostStructure"> '+
                                '<span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>'+
                            '<span class="itemCostValue">'+product.bitcoinPriceString+'</span>'+
                        '</span>'+
                        '</div>'+
                        
                        '<div class="itemDiscount"> '+
                                discount+
                        '</div>'+
                        '<div class="itemAttrLeftStructure">'+
                        '<div class="itemAttr">'+
                                caratString+
                        '</div>'+
                        '<div class="itemAttr">'+
                                color+
                        '</div>'+
                        '<div class="itemAttr">'+
                                clarity+
                        '</div>'+
                        '<div class="itemAttr">'+
                                cut+
                        '</div>'+
                       /* '<div class="itemAttr">'+
                                polish+
                        '</div>'+
                         '<div class="itemAttr">'+
                                symmetry+
                        '</div>'+
                         '<div class="itemAttr">'+
                                fluor+
                        '</div>'+*/
                        '</div>'+
                         
                '</div>'+
                '</div>'+
                '<div class="itemCardAttrStructure" onclick="activeProductPopup.show('+"'"+product.id+"'"+')">'+
                    '<div class="itemAttrTable">'+
                        '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'MODEL'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.model+
                                '</div>'+
                        '</div>'+
                        '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'Ct.'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.caratString+
                                '</div>'+
                        '</div>'+
                    '</div>'+
                      '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'COLOR'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.color+
                                '</div>'+
                    '</div>'+
                    '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'CLARITY'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.clarity+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'CUT'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.cut+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'POLISH'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.polish+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'SYMMETRY'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.symmetry+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'FLUOR'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.fluor+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'DEPTH'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.depth+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'TABLE'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.table+
                                '</div>'+
                    '</div>'+
                     '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'MEASURE.'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.measureString+
                                '</div>'+
                    '</div>'+
                      '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'LAB'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.lab+
                                '</div>'+
                    '</div>'+
                      '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'LOCATION'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.location+
                                '</div>'+
                    '</div>'+
                      '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'RAP'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.listPriceString+
                                '</div>'+
                    '</div>'+
                      '<div class="itemAttrTr">'+
                                '<div class="itemAttrTd">'+
                                        'DISC'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.discountString+
                                '</div>'+
                    '</div>'+
                    '<div class="itemAttrTr itemAttrTrWhite">'+
                                '<div class="itemAttrTd">'+
                                        'TOTAL'+
                                '</div>'+
                                '<div class="itemAttrTd itemAttrTdRight">'+
                                        product.totalPriceString+
                                '</div>'+
                    '</div>'+
                    
                    '<div class="itemCardMoreDetailsButton">'+
                            '<div class="itemCardMoreDetailsButtonTitle">'+
                                    'MORE DETAILS'+
                            '</div>'+
                            '<div class="itemCardMoreDetailsButtonIcon">'+
                                    '<img src="../assets/rightArrow.png"/>'+
                            '</div>'+
                    '</div>'+
                '</div>'+
        '</div>'+
'</div>'+
'</div>';
return content;
}

activeProductCard.checkAlreadyCartProducts = function () {
    
    $('.itemAlreadyCartStructure').removeClass('itemAlreadyCartStructureActive');
    for(var i=0;i<activeCartManager.newCart.length;i++){
        for(var j=0;j<$('.itemStructure_'+activeCartManager.newCart[i].id+' .itemAlreadyCartStructure').length;j++){
            $($('.itemStructure_'+activeCartManager.newCart[i].id+' .itemAlreadyCartStructure')[j]).addClass('itemAlreadyCartStructureActive');
        }
    }
}

activeProductCard.checkAlreadyWishListCartProducts = function () {
$('.itemAlreadyWishListStructure').removeClass('itemAlreadyWishListActive');
    for(var i=0;i<activeWishListManager.newCart.length;i++){
        for(var j=0;j<$('.itemStructure_'+activeWishListManager.newCart[i].id+' .itemAlreadyWishListStructure').length;j++){
            $($('.itemStructure_'+activeWishListManager.newCart[i].id+' .itemAlreadyWishListStructure')[j]).addClass('itemAlreadyWishListActive');
        }
    }
}
activeProductCard.hideOthers = function (productId) {
    if(productId===activeProductCard.openedCard){
        return true;
    }
    $('#itemStructure_'+activeProductCard.openedCard).click();
}


activeProductCard.openSmallCard = function (productId) {
    
    var product=activeProductManager.productsIds[productId];
    
    
    setTimeout(function(){
                //var image360src = 'http://segoma.com/v.php?type=iframe&id='+product.segomaId;
                //$('.productPopupStructure .productImage360').attr('src',image360src);         
        }, 600);
    
    var elm=$('#itemStructure_'+productId);
    if($($(elm).find( '.itemWrapper')[0]).hasClass('itemWrapperFloat')){ //hide
        activeProductCard.hideSmallCard(productId);
    }
    else{ //show
        //activeProductCard.hideOthers(productId);
        activeProductCard.openedCard=productId;
       
        
        $($(elm).find( '.itemWrapper')[0]).addClass('itemWrapperFloatZindex');
         setTimeout(function(){
                $($(elm).find( '.itemCardAttrStructure')[0]).addClass('itemCardAttrStructureDisplay');
                setTimeout(function(){
                    if($($(elm).find( '.itemCardAttrStructure')[0]).hasClass('itemCardAttrStructureDisplay')){ 
                           $($(elm).find( '.itemCardAttrStructure')[0]).addClass('itemCardAttrStructureOpacity');
                   }
               }, 10);
               $(elm).addClass('itemStructureFloat');
               $($(elm).find( '.itemWrapper')[0]).addClass('itemWrapperFloat');
        }, 150);
    }
}


activeProductCard.hideSmallCard = function (productId) {
    var elm=$('#itemStructure_'+productId);
    $($(elm).find( '.itemCardAttrStructure')[0]).removeClass('itemCardAttrStructureOpacity');
         setTimeout(function(){
             if(!$($(elm).find( '.itemCardAttrStructure')[0]).hasClass('itemCardAttrStructureOpacity')){
                    $($(elm).find( '.itemCardAttrStructure')[0]).removeClass('itemCardAttrStructureDisplay');
                    $($(elm).find( '.itemWrapper')[0]).removeClass('itemWrapperFloatZindex');
                }
        }, 600);
            $(elm).removeClass('itemStructureFloat');
            $($(elm).find( '.itemWrapper')[0]).removeClass('itemWrapperFloat');
}

activeProductCard.show360= function (productId) {
    var product=activeProductManager.productsIds[productId];
    if($('.itemStructure_'+productId+' .itemImage .productCardImage360').length!==0){
        $('.itemStructure_'+productId+' .itemImage .productCardImage360').remove();
        $('.itemStructure_'+productId+' .itemImage img').css('display','block');
        $('.itemStructure_'+productId+' .itemImage img').css('opacity','1');
        $('.itemStructure_'+productId+' .itemImage .productCardImage360').css('display','none');
        $('.itemStructure_'+productId+' .loadingImage360').css('display','none');
        $('.itemStructure_'+productId+' .image360IconTitleCard').html('360°');
        $('.itemStructure_'+productId+' .moreDetailsFloatIcon').css('display','none');
        return true;
    }
    $('.itemStructure_'+productId+' .itemImage img').css('opacity','0.3');
    var content = '<iframe class="productCardImage360" onload="activeProductCard.show360Iframe('+"'"+product.id+"'"+')"  src="https://segoma.com/v.php?type=iframe&id='+product.segomaId+'" frameborder="0" scrolling="no" ></iframe>';
    $('.itemStructure_'+productId+' .itemImage').append(content);
    $('.itemStructure_'+productId+' .loadingImage360').css('display','block');
    $('.itemStructure_'+productId+' .image360IconTitleCard').html('Image');
    $('.itemStructure_'+productId+' .moreDetailsFloatIcon').css('display','block');
}

activeProductCard.show360Iframe= function (productId) {
    var delay=1000;
    if($('.productCardImage360').length>2){
        delay=2500;
    }
    setTimeout(function(){ 
        if($('.itemStructure_'+productId+' .loadingImage360').css('display')!=='block'){
            return true;
        }
        $('.itemStructure_'+productId+' .itemImage img').css('display','none');
        $('.itemStructure_'+productId+' .itemImage img').css('opacity','1');
        $('.itemStructure_'+productId+' .itemImage .productCardImage360').css('display','block');
        $('.itemStructure_'+productId+' .loadingImage360').css('display','none');
    }, delay);
    
}