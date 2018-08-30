function diamondOnHand(){
    
}

var activeDiamondOnHand = new diamondOnHand();

activeDiamondOnHand.show = function () {
    $('.diamondOnHandStructure').css('display','block');
    $('.productPopupCloseButton').css('display','none');
    setTimeout(function(){ 
            $('.diamondOnHandStructure').css('opacity','1');
    }, 10);
    activeDiamondOnHand.setRange();
}

activeDiamondOnHand.hide = function () {
    $('.diamondOnHandStructure').css('opacity','0');
    $('.productPopupCloseButton').css('display','block');
    setTimeout(function(){ 
            $('.diamondOnHandStructure').css('display','none');
    }, 600);
    activeDiamondOnHand.setRange();
}

activeDiamondOnHand.setRange = function () {
var product=activeProductManager.productsIds[activeProductPopup.activeProductId]; 
var rangeSliderValueElement = document.getElementById('rangeSliderDiamondOnHandTitleValue');
activeDiamondOnHand.elm.set(activeMainTool.numberWithCommas(product.carat,2));

rangeSlider.noUiSlider.on('update', function( values, handle ) {
    var imageScalingMax=3;
    var imageScaling=values[handle]*1+0.8;
    $('.diamondOnHandObjectImage').css('transform','scale('+imageScaling+')');
	rangeSliderValueElement.innerHTML = values[handle]+' CT';
});
}

$(function() {
     rangeSlider = document.getElementById('rangeSliderDiamondOnHand');
    
    activeDiamondOnHand.elm = noUiSlider.create(rangeSlider, {
	start: [ 1 ],
	range: {
		'min': [  0.2 ],
		'max': [ 3]
	}
    });   
   
        
});


