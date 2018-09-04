function mainPage(){
    this.pageId=1; //search
    this.activeColorType='white';
    this.activeProductView=3;
    this.activeSortType=0;
    this.activeSortTypeDirection=0; //low to high, 1=:high to low
    this.advancedBoxFilter={
        open:false
    };
}

var activeMainPage = new mainPage();

activeMainPage.getData= function () {
        //activeProductManager.getProducts();
}



activeMainPage.config = function () {
        
        this.filterQuery =[];
        
        this.colorTypeYellowArray=[];
        this.colorTypeYellowArray['FVY']='FVY';
        this.colorTypeYellowArray['FIY']='FIY';
        this.colorTypeYellowArray['FY']='FY';
        this.colorTypeYellowArray['FLY']='FLY';
        this.colorTypeYellowArray['OTHERS']='Y-Z,W-X','FY-B','FYB','FVLG','FP','FLGY','FLBY','FLBGY','FIOY','FDYB';
        this.filterTypeConfig = {
            type1:['white','yellow'], //color
            type2:['heart','heart','heart','heart','heart'], //shapes
            type3:['intense','intense','intense','intense','intense'], //itensity
        }
       this.filterConfig = {
            type1: 0, //color
            type2:[], //shapes
            type3: [1], //itensity
            type14: {
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                minValue:0,
                maxValue:0,
                showHoverValue:false
            }, //carat
            type4: {
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
            type5: {
                clicked:0,
                active:false,
                min:-1,
                max:-1,
                hoverActive:false,
                showHoverValue:true
            },
            type6: {
                clicked:0,
                active:false,
                min:-1,
                hoverActive:false,
                max:-1,
                showHoverValue:true
            },
             type7: { //POLISH
                clicked:0,
                hoverActive:false,
                active:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
            type8: { //symmetry
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
            type9: { //flour
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
            type10: { //lab
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
             type11: { //ppc
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            },
            type12: { //discount
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:false
            },
            type13: { //location
                clicked:0,
                active:false,
                hoverActive:false,
                min:-1,
                max:-1,
                showHoverValue:true
            }
       };
       this.filterConfig.type=[
           this.filterConfig.type0,
           this.filterConfig.type1,
           this.filterConfig.type2,
           this.filterConfig.type3,
           this.filterConfig.type4,
           this.filterConfig.type5,
           this.filterConfig.type6,
           this.filterConfig.type7,
           this.filterConfig.type8,
           this.filterConfig.type9,
           this.filterConfig.type10,
           this.filterConfig.type11,
           this.filterConfig.type12,
           this.filterConfig.type13,
           this.filterConfig.type14
       ]
       
       this.headerTitlesSort=[
                'price',
                'carat',
                'color',
                'clarity',
                'cut'
       ]
       
};
activeMainPage.config();

activeMainPage.checkLoginStatus= function () {
    if(!activeMemberManager.loginStatus){
        activeMainTool.invalidToken();
    }
}
activeMainPage.checkLoginStatus();

activeMainPage.setProducts= function (data) {
        var products = activeProductManager.setNewProducts(data);
        products = activeMainPage.getBySortType(products);
        activeMainPage.showContentProducts(products);
       
}

activeMainPage.showContentProducts= function (products) {
        var content = '';
        var resultsLength=activeMainTool.pageProductsLength;
        if(activeMainTool.pageProductsLength>products.length){
             resultsLength=products.length;
        }
        for(var i=0;i<resultsLength;i++){
            content+=  activeProductCard.template1(products[i]);
            activeMainTool.loadImage(products[i].imageSrc,products[i].id);
        }
        $('#headerResultsStructureCounter').html(resultsLength);
         activeMainPage.setProductsView3(products);
        $('.results').html(content);
        activeProductCard.checkAlreadyCartProducts();
}



activeMainPage.changeSortTypeDirection= function () {
    if(activeMainPage.activeSortTypeDirection===0){ //change to high to low
        activeMainPage.activeSortTypeDirection=1;
        $('.highToLowIcons .unactiveIcon').removeClass('displayNone');
        $('.lowToHighIcons .activeIcon').removeClass('displayNone');
        $('.highToLowIcons .activeIcon').addClass('displayNone');
        $('.lowToHighIcons .unactiveIcon').addClass('displayNone');
    }
    else{
        activeMainPage.activeSortTypeDirection=0;
           $('.highToLowIcons .unactiveIcon').addClass('displayNone');
        $('.lowToHighIcons .activeIcon').addClass('displayNone');
        $('.highToLowIcons .activeIcon').removeClass('displayNone');
        $('.lowToHighIcons .unactiveIcon').removeClass('displayNone');
    }
    activeMainPage.showBySortType();
}

activeMainPage.showBySortType= function () {
    var products = activeMainPage.getBySortType(activeProductManager.lastProductsFromServer);
    activeMainPage.setLoadingResults();
    activeMainPage.showContentProducts(products);
}

activeMainPage.getBySortType= function (products) {
    switch( activeMainPage.activeSortType) {
            case 0: { //price
                    if(activeMainPage.activeSortTypeDirection===0){ 
                            return activeMainPage.sortArrayByhighestPrice(products);
                    }
                    else{
                        return activeMainPage.sortArrayByLowestPrice(products);
                    }
                break;
            }
            case 1: { //carat
                    if(activeMainPage.activeSortTypeDirection===0){ 
                            return activeMainPage.sortArrayByhighestCarat(products);
                    }
                    else{
                        return activeMainPage.sortArrayByLowestCarat(products);
                    }
                break;
            }
            default:{
                break;            
            }
    }
}

activeMainPage.getExValuesUrl= function () {
   var colorType = activeMainTool.getUrlParam('colorType', location.href);
   if(colorType!==null){
       if(colorType==='1'){ //yellow
           $('#mainFilter_type1_1').click(); 
           
           return true;
       }
   }
   $('#mainFilter_type1_0').click();
   
}

activeMainPage.setHeaderTitlesSort= function (index) {
    var activeButton = activeMainPage.activeSortType;
    $($('.searchHeaderResultsStructure .searchHeaderResultsButtonTitle')[activeButton]).removeClass('searchHeaderResultsButtonTitleActive');
    $($('.searchHeaderResultsStructure .searchHeaderResultsButtonTitle')[index]).addClass('searchHeaderResultsButtonTitleActive');
    activeMainPage.activeSortType=index;
    activeMainPage.showBySortType();
}


activeMainPage.updateFilterQuery = function (type,value) {
    var filterName = $('.filterAttr_'+type).attr('name');
    activeMainPage.filterQuery[filterName]=value;
    activeMainPage.setFiltersQueryToServer();
}

activeMainPage.setColorsType= function (type) {
    var indexType='4';
    for(var i=0;i<=$('.mainFilterRangeButton_'+indexType).length;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonActive');
            }
            activeMainPage.filterConfig.type[indexType].clicked=2;
            activeMainPage.filterConfig.type[indexType].active = true;
            
    if(type===0){ //white
        activeMainPage.filterConfig.type[indexType].min=0;
        activeMainPage.filterConfig.type[indexType].max=14;
         $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display',' inline-block');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('D');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('U-V');
    }
    else{ //yellow
        activeMainPage.filterConfig.type[indexType].min=15;
        activeMainPage.filterConfig.type[indexType].max=19;
        $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display',' inline-block');
        $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('FVY');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('OTHERS');
            activeMainPage.activeColorType==='yellow';
    }
    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');  
    for(var i=activeMainPage.filterConfig.type[indexType].min;i<activeMainPage.filterConfig.type[indexType].max+1;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonActive');
            }
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleHover');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').removeClass('mainFilterRangeBoxTitleHover');
       activeMainPage.setFilterQuery(indexType);
}

activeMainPage.clearFiltersInput = function () {
    activeMainPage.setDefaultFilter(4);
    
        
}

activeMainPage.updateFilterValue = function (type,value) {
    switch(type) {
        case 1: //color
            if(value===0){ //white
                activeMainPage.activeColorType='white';
                //activeMainPage.setDefaultFilter(4);
                $('#mainFilter_type1_0').addClass('mainFilterButtonColorWhiteActive');
                $('#mainFilter_type1_1').removeClass('mainFilterButtonColorYellowActive');
                activeMainPage.filterConfig.type1 = 0;
                //activeMainPage.updateFilterQuery(1,'white');
                $('.mainFilterColorWhite').removeClass('displayNone');
                $('.mainFilterColorYellow').removeClass('displayBlock');
                activeMainPage.clearFiltersInput();
                activeMainPage.setFiltersQueryToServer();
                //activeMainPage.setColorsType(0);
                
            }
            else if(value===1){ //yellow
                activeMainPage.activeColorType='yellow';
                //activeMainPage.setDefaultFilter(4);
                $('#mainFilter_type1_0').removeClass('mainFilterButtonColorWhiteActive');
                $('#mainFilter_type1_1').addClass('mainFilterButtonColorYellowActive');
                activeMainPage.filterConfig.type1 = 1;
                //activeMainPage.updateFilterQuery(1,'yellow');
                $('.mainFilterColorWhite').addClass('displayNone');
                $('.mainFilterColorYellow').addClass('displayBlock');
                activeMainPage.clearFiltersInput();
                activeMainPage.setFiltersQueryToServer();
                //activeMainPage.setColorsType(1);
                
            }
            break;
            case 2:
            if($.inArray(value, activeMainPage.filterConfig.type2)!==-1){
                activeMainPage.filterConfig.type2 = activeMainTool.removeValueFromArray (activeMainPage.filterConfig.type2,value);
            }
            else{
                activeMainPage.filterConfig.type2.push(value);
            }
            activeMainPage.updateFilterQuery(2,activeMainPage.filterConfig.type2);
            break;
        case 3:
            if($('#mainFilter_type3_'+value).hasClass('mainFiltertype3Active')){
                $('#mainFilter_type3_'+value).removeClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3 = activeMainTool.removeValueFromArray (activeMainPage.filterConfig.type3,value);
            }
            else{
                $('#mainFilter_type3_'+value).addClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3.push(value);
            }
            break;
            case 14:
            if($('#mainFilter_type3_'+value).hasClass('mainFiltertype3Active')){
                $('#mainFilter_type3_'+value).removeClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3 = activeMainTool.removeValueFromArray (activeMainPage.filterConfig.type3,value);
            }
            else{
                $('#mainFilter_type3_'+value).addClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3.push(value);
            }
            break;
        default:
            break;
    }
};


//Start: Shapes//
//setActiveShape
$( ".mainFilterButtonShapeImageStructure" ).click(
  function() {
     var elm=$(this);
    var elmValue=elm.attr('type');
    if($.inArray(elmValue, activeMainPage.filterConfig.type2)!==-1){
        $($(elm).find( '.mainFilterButtonShapeImage')[0]).removeClass('mainFilterButtonShapeImageHidden');
        $($(elm).find( '.mainFilterButtonShapeImageActive')[0]).removeClass('mainFilterButtonShapeImageActiveClicked');
        $($(elm).find( '.mainFilterButtonShapeImageActiveTitle')[0]).removeClass('mainFilterButtonShapeImageActiveTitleHidden');
    }
    else{
        $($(elm).find( '.mainFilterButtonShapeImage')[0]).addClass('mainFilterButtonShapeImageHidden');
        $($(elm).find( '.mainFilterButtonShapeImageActive')[0]).addClass('mainFilterButtonShapeImageActiveClicked');
        $($(elm).find( '.mainFilterButtonShapeImageActiveTitle')[0]).addClass('mainFilterButtonShapeImageActiveTitleHidden');
    }
    activeMainPage.updateFilterValue(2,elmValue);
  }
);

//setHoverShape
$( ".mainFilterButtonShapeImageStructure" ).hover(
  function() {
    var elm=$(this);
    $($(elm).find( '.mainFilterButtonShapeImage')[0]).addClass('mainFilterButtonShapeImagePaddingTop');
    $($(elm).find( '.mainFilterButtonShapeImageActive')[0]).addClass('mainFilterButtonShapeImageActiveDisplay');
  }, function() {
      var elm=$(this);
    $($(elm).find( '.mainFilterButtonShapeImage')[0]).removeClass('mainFilterButtonShapeImagePaddingTop');
    $($(elm).find( '.mainFilterButtonShapeImageActive')[0]).removeClass('mainFilterButtonShapeImageActiveDisplay');
  }
);

//End: Shapes//

activeMainPage.setHoverRangeWrapper = function (indexType,thisElm) {
    var elm=$(thisElm);
    activeMainPage.filterConfig.type[indexType].hoverActive=true;
   $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
   $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');  
    
  // $($(elm).find( '.mainFilter1gridHoverBoxStructure')[0]).css('display','block');
  $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).addClass('mainFilterRangeBoxStructureDisplay');
   setTimeout(function(){
           $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).addClass('mainFilterRangeBoxStructureOpacity');
           $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).addClass('mainFilterRangeBoxStructureHeight');
   }, 10);
   
   setTimeout(function(){
           if($(elm).is(":hover")){
               
           }
           else{
               activeMainPage.setUnHoverRangeWrapper(indexType,thisElm);
           }
   }, 1000);
 }  
         
activeMainPage.setUnHoverRangeWrapper = function (indexType,thisElm) {
       var elm=$(thisElm);
      activeMainPage.filterConfig.type[indexType].hoverActive=false;
       //$( '.mainFilterRangeBoxStructure_'+indexType).removeClass('mainFilterRangeBoxStructureDisplay');
         $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).removeClass('mainFilterRangeBoxStructureOpacity');

       if(activeMainPage.filterConfig.type[indexType].showHoverValue){
           if(activeMainPage.filterConfig.type[indexType].clicked===0){
               $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','none');
               $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('');
               $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('');
           }
           else if(activeMainPage.filterConfig.type[indexType].clicked===1){
               $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','none');
               $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('');
           }
           else{
               
           }
               
            //$('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxSumTitleActive').html('D - L');
       }
        
       if(activeMainPage.filterConfig.type[indexType].active){
         $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
        
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');  
        
       }
       else{
           $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');  
        
       }
       setTimeout(function(){
               if(!$($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).hasClass('mainFilterRangeBoxStructureOpacity')){
                   $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).removeClass('mainFilterRangeBoxStructureHeight');
                   $($(elm).find( '.mainFilterRangeBoxStructure_'+indexType)[0]).removeClass('mainFilterRangeBoxStructureDisplay');
               }
       }, 600);
       for(var i=activeMainPage.filterConfig.type[indexType].min-1;i>=0;i--){
                   $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
               }
       for(var i=activeMainPage.filterConfig.type[indexType].max+1;i<9;i++){
           $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
       }
        var activeTitleButton = '';
                if(activeMainPage.filterConfig.type[indexType].min!==-1){
                    if(indexType==='14'){
                        var minFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('min');
                    }
                    else{
                        var minFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name');
                    }
                    
                     activeTitleButton+=minFilter;
                }
                if(activeMainPage.filterConfig.type[indexType].max!==-1){
                    if(indexType==='14'){
                        var maxFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('max');
                    }
                    else{
                        var maxFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('name');
                    }
                    activeTitleButton+=' - '+maxFilter;
                }
                 if(indexType==='11' || indexType==='12'){
                    return true;
                }
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
                
}

//setHoverCaratStructure
$( ".mainFilterRangeBoxTitle" ).click(
  function() {
      var thisElm = $(this).parents()[0];
      var type = $(thisElm).attr("type");
      if(activeMainPage.filterConfig.type[type].hoverActive){
        activeMainPage.setUnHoverRangeWrapper(type,thisElm);
        return true;
    }
      activeMainPage.setHoverRangeWrapper(type,thisElm);
  }
);

//setHoverCaratStructure
$( ".mainFilterRangeBox" ).hover(
  function() {
      
  }, function() {
      var type = $(this).attr("type");
      activeMainPage.setUnHoverRangeWrapper(type,this);

  }
);

activeMainPage.setValueOfHoverRangeButton = function (indexType,thisElm) {
    var elm=$(thisElm);
    var value=parseInt($(thisElm).attr('value'));
    if(activeMainPage.filterConfig.type[indexType].showHoverValue){
        if(activeMainPage.filterConfig.type[indexType].clicked===0){ //is min
            var nameElm=$($('.mainFilterRangeButton_'+indexType)[value]).attr('name');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').addClass('mainFilterRangeBoxTitleHover');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html(nameElm);
        }
        else if(activeMainPage.filterConfig.type[indexType].clicked===1){ //is max
            var nameElm=$($('.mainFilterRangeButton_'+indexType)[value]).attr('name');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','inline-block');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleHover');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html(nameElm);
        }
        else{
            
            
        }
    }
}

activeMainPage.setHoverRangeButton = function (indexType,thisElm) {
      var elm=$(thisElm);
    var value=parseInt($(thisElm).attr('value'));
    activeMainPage.setValueOfHoverRangeButton(indexType,thisElm);
    if(activeMainPage.filterConfig.type[indexType].clicked>0){ //value is min
        if(value>activeMainPage.filterConfig.type[indexType].min){
            for(var i=value;i>activeMainPage.filterConfig.type[indexType].min;i--){
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonHover');
                //$($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
            for(var i=activeMainPage.filterConfig.type[indexType].min;i>0;i--){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                //$($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
             for(var i=value+1;i<9;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                //$($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
        }
        if(value<=activeMainPage.filterConfig.type[indexType].min){
            for(var i=activeMainPage.filterConfig.type[indexType].max;i<9;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                //$($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
            for(var i=value;i<activeMainPage.filterConfig.type[indexType].min;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonHover');
                //$($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
        }
    }
    else{
         $($('.mainFilterRangeButton_'+indexType)[value]).addClass('mainFilterRangeButtonHover');
    }
}

activeMainPage.setUnHoverRangeButton = function (indexType,thisElm) {
    var elm=$(thisElm);
        $(elm).removeClass('mainFilterRangeButtonHover');
}

//setHoverCaratInputs

$( ".mainFilterRangeButton" ).hover(
  function() {
      var type = $(this).attr("type");
      if(activeMainTool.touchDevice){
            return true;
        }
      activeMainPage.setHoverRangeButton(type,this);

  }, function() {
      var type = $(this).attr("type");
      if(activeMainTool.touchDevice){
            return true;
        }
      activeMainPage.setUnHoverRangeButton(type,this);
      
  }
);

activeMainPage.setActiveRangeButton = function (indexType,thisElm) {
    var elm=$(thisElm);
    
    activeMainPage.filterConfig.type[indexType].hoverActive=true;
    
    var value=parseInt($(thisElm).attr('value'));
    var activeValues=[];
    activeMainPage.filterConfig.type[indexType].active = true;
    if(activeMainPage.filterConfig.type[indexType].clicked===0){ //value is min
        //for(var i=value;i<valu;i++){
            $($('.mainFilterRangeButton_'+indexType)[value]).removeClass('mainFilterRangeButtonHover');
            $($('.mainFilterRangeButton_'+indexType)[value]).addClass('mainFilterRangeButtonActive');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').removeClass('mainFilterRangeBoxTitleHover');
            
        //}
        activeMainPage.filterConfig.type[indexType].min=value;
        activeMainPage.filterConfig.type[indexType].clicked++;
    }
    else if(activeMainPage.filterConfig.type[indexType].clicked===1){ //value is max
          if(activeMainPage.filterConfig.type[indexType].min>value){
            for(var i=value;i<activeMainPage.filterConfig.type[indexType].min;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonActive');
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleHover');
            }
            activeMainPage.filterConfig.type[indexType].clicked++;
            activeMainPage.filterConfig.type[indexType].max=activeMainPage.filterConfig.type[indexType].min;
            activeMainPage.filterConfig.type[indexType].min=value;
        }
        else{
             for(var i=value;i>activeMainPage.filterConfig.type[indexType].min;i--){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonActive');
                
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleHover');
            }
            activeMainPage.filterConfig.type[indexType].clicked++;
            activeMainPage.filterConfig.type[indexType].max=value;
            
        }
        
        
            
            
    }
    else{
        activeMainPage.filterConfig.type[indexType].clicked=2;
        if(value===activeMainPage.filterConfig.type[indexType].min || value===activeMainPage.filterConfig.type[indexType].max){
            for(var i=0;i<=$('.mainFilterRangeButton_'+indexType).length;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonActive');
            }
           $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','none');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('');
            activeMainPage.filterConfig.type[indexType].min=-1;
            activeMainPage.filterConfig.type[indexType].clicked=0;
            activeMainPage.filterConfig.type[indexType].max=-1;
            activeMainPage.filterConfig.type[indexType].active = false;
            
        }
        else if(value>activeMainPage.filterConfig.type[indexType].max){
            for(var i=value;i>=activeMainPage.filterConfig.type[indexType].max;i--){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonActive');
            }
            activeMainPage.filterConfig.type[indexType].max=value;
        }
        else if(value>activeMainPage.filterConfig.type[indexType].min){
            for(var i=value+1;i<=activeMainPage.filterConfig.type[indexType].max;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonActive');
            }
            activeMainPage.filterConfig.type[indexType].max=value;
        }
        else if(value<activeMainPage.filterConfig.type[indexType].min){
                for(var i=value;i<activeMainPage.filterConfig.type[indexType].min;i++){
                    $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).addClass('mainFilterRangeButtonActive');
                }
                activeMainPage.filterConfig.type[indexType].min=value;
            }
            
        }
        if(activeMainPage.filterConfig.type[indexType].showHoverValue){
            if(activeMainPage.filterConfig.type[indexType].clicked<2){
                    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name'));
            }
            else{
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name'));
                $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','inline-block');
                    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('name'));
                
            }
            /*
                if($('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html()===''){
                    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name'));
                }
                else{
                    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name'));
                    $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html($($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('name'));
                }*/
                
            }
        activeMainPage.setInputsValues(indexType);
        activeMainPage.setFilterQuery(indexType);
        
    }
    
activeMainPage.setDefaultFilter = function (indexType) {    
    for(var i=0;i<=$('.mainFilterRangeButton_'+indexType).length;i++){
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonActive');
            }
           $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparate').css('display','none');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');  
            activeMainPage.filterConfig.type[indexType].min=-1;
            activeMainPage.filterConfig.type[indexType].clicked=0;
            activeMainPage.filterConfig.type[indexType].max=-1;
            activeMainPage.filterConfig.type[indexType].active = false;
            activeMainPage.setInputsValues(indexType);
            activeMainPage.setFilterQuery(indexType);
}

activeMainPage.setFilterQuery = function (indexType) {
    var activeButtonsLength = $('.filterAttr_'+indexType+' .mainFilterRangeButtonActive').length;
        var activeButtonsArray = $('.filterAttr_'+indexType+' .mainFilterRangeButtonActive');
        var activeValues=[];
        if($('.filterAttr_'+indexType).attr('filterType')==='1'){ // min:0.5-1.5 -max:12.5-14.5 
            var minValue = activeMainPage.filterConfig.type[indexType].minValue;
            var maxValue = activeMainPage.filterConfig.type[indexType].maxValue;
                var values = [minValue,maxValue];
                activeValues.push(values);
            }
            if(indexType==='4'  && activeMainPage.activeColorType==='yellow'){ 
                    var minValue = activeMainPage.filterConfig.type[indexType].min;
            var maxValue = activeMainPage.filterConfig.type[indexType].max;
            if(minValue>maxValue){
                maxValue=minValue;
            }
                for(var i=0;i<maxValue-minValue+1;i++){
                    activeValues.push(activeMainPage.colorTypeYellowArray[$(activeButtonsArray[i]).attr('name')]);
                }
                
            }
            else{
                for(var i=0;i<activeButtonsLength;i++){
                    if($('.filterAttr_'+indexType).attr('filterType')==='0'){ // D-F
                        activeValues.push($(activeButtonsArray[i]).attr('name'));
                    }
                }
            }
        
        activeMainPage.updateFilterQuery(indexType,activeValues);
}

activeMainPage.openFilterAdvancedBox = function () {
    if(this.advancedBoxFilter.open){ //needToClose
            $('.mainfilterStructure').removeClass('mainfilterStructureOpened');
            this.advancedBoxFilter.open = false;
    }
    else{
        $('.mainfilterStructure').addClass('mainfilterStructureOpened');
        this.advancedBoxFilter.open = true;
    }
   
};

$( ".mainFilterAdvancedButton" ).click(
  function() {
      activeMainPage.openFilterAdvancedBox();
  }
);

//setActiveCaratInputs
$( ".mainFilterRangeButton" ).click(
  function() {
      var type = $(this).attr("type");
      activeMainPage.setActiveRangeButton(type,this);
      /*
   var elm=$(this);
    var value=parseInt($(this).attr('value'));
    activeMainPage.filterConfig.type14.active = true;
    if(activeMainPage.filterConfig.type14.clicked===0){ //value is min
        //for(var i=value;i<valu;i++){
            $($('.mainFilter1gridHoverBoxTableTd')[value]).removeClass('mainFilter1gridHoverBoxTableTdHover');
            $($('.mainFilter1gridHoverBoxTableTd')[value]).addClass('mainFilter1gridHoverBoxTableTdActive');
        //}
        activeMainPage.filterConfig.type14.min=value;
        activeMainPage.filterConfig.type14.clicked++;
    }
    else if(activeMainPage.filterConfig.type14.clicked===1){ //value is max
          if(activeMainPage.filterConfig.type14.min>value){
            for(var i=value;i<activeMainPage.filterConfig.type14.min;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.clicked++;
            activeMainPage.filterConfig.type14.max=activeMainPage.filterConfig.type14.min;
            activeMainPage.filterConfig.type14.min=value;
        }
        else{
             for(var i=value;i>activeMainPage.filterConfig.type14.min;i--){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.clicked++;
            activeMainPage.filterConfig.type14.max=value;
            
        }
            
            
    }
    else{
        activeMainPage.filterConfig.type14.clicked=2;
        if(value===activeMainPage.filterConfig.type14.min || value===activeMainPage.filterConfig.type14.max){
            for(var i=0;i<=9;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
           
            activeMainPage.filterConfig.type14.min=0;
            activeMainPage.filterConfig.type14.clicked=0;
            activeMainPage.filterConfig.type14.max=0;
            activeMainPage.filterConfig.type14.active = false;
        }
        else if(value>activeMainPage.filterConfig.type14.max){
            for(var i=value;i>=activeMainPage.filterConfig.type14.max;i--){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.max=value;
        }
        else if(value>activeMainPage.filterConfig.type14.min){
            for(var i=value+1;i<=activeMainPage.filterConfig.type14.max;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.max=value;
        }
        else if(value<activeMainPage.filterConfig.type14.min){
                for(var i=value;i<activeMainPage.filterConfig.type14.min;i++){
                    $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                    $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
                }
                activeMainPage.filterConfig.type14.min=value;
            }
            
        }
        activeMainPage.setInputsValues();
        
*/
  }
);

//End: carat//
activeMainPage.setInputsValues = function (indexType) {
    maxIndex= activeMainPage.filterConfig.type[indexType].max;
    if(activeMainPage.filterConfig.type[indexType].min>activeMainPage.filterConfig.type[indexType].max){
        var maxIndex = activeMainPage.filterConfig.type[indexType].min;
    }
    
    var minValue = $($('.mainFilter1gridHoverBoxTableTd')[activeMainPage.filterConfig.type[indexType].min]).attr('min');
    var maxValue = $($('.mainFilter1gridHoverBoxTableTd')[maxIndex]).attr('max');
    if(activeMainPage.filterConfig.type[indexType].min===-1){
        var minValue = 0;
        var maxValue = 0;
    }
    
    if(indexType==='14'){
        $('#mainFilterType14MinInput').val(minValue);
        $('#mainFilterType14MaxInput').val(maxValue);
    }
    
    activeMainPage.filterConfig.type[indexType].minValue=minValue;
     activeMainPage.filterConfig.type[indexType].maxValue=maxValue;
    
}

//setActivePPCInputs
$( ".mainFilterRangeBoxStructure_11 input" ).change(
        function() {
                                var minValue=$('#mainFilterType11MinInput').val();
                                var maxValue=$('#mainFilterType11MaxInput').val();
                                if(parseInt(minValue)<=parseInt(maxValue)){
                                    activeMainPage.filterConfig.type[11].minValue=minValue;
                                    activeMainPage.filterConfig.type[11].maxValue=maxValue;
                                    activeMainPage.filterConfig.type11.active=true;
                                    activeMainPage.filterConfig.type11.clicked=0;
                                    activeMainPage.setFilterQuery(11);
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');  
                                    $('.mainFilterRangeBox11 .mainFilterRangeBoxTitleSeparate').css('display','inline-block');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxSumTitleActive').html(minValue+'-'+maxValue);
                                }
                                else{
                                    activeMainPage.filterConfig.type[11].minValue=0;
                                    activeMainPage.filterConfig.type[11].maxValue=0;
                                    activeMainPage.filterConfig.type11.active=false;
                                    activeMainPage.filterConfig.type11.clicked=0;
                                    activeMainPage.setFilterQuery(11);
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');  
                                    $('.mainFilterRangeBox11 .mainFilterRangeBoxTitleSeparate').css('display','none');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_11 .mainFilterRangeBoxSumTitleActive').html('');
                                }
                      }
  );
  
  //setActivePPCInputs
$( ".mainFilterRangeBoxStructure_12 input" ).change(
        function() {
                                var minValue=$('#mainFilterType12MinInput').val();
                                var maxValue=$('#mainFilterType12MaxInput').val();
                                if(parseInt(minValue)<=parseInt(maxValue)){
                                    activeMainPage.filterConfig.type[12].minValue=minValue;
                                    activeMainPage.filterConfig.type[12].maxValue=maxValue;
                                    activeMainPage.filterConfig.type12.active=true;
                                    activeMainPage.filterConfig.type12.clicked=0;
                                    activeMainPage.setFilterQuery(12);
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');  
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparate').css('display','inline-block');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxSumTitleActive').html(minValue+'-'+maxValue);
                                }
                                else{
                                    activeMainPage.filterConfig.type[12].minValue=0;
                                    activeMainPage.filterConfig.type[12].maxValue=0;
                                    activeMainPage.filterConfig.type12.active=false;
                                    activeMainPage.filterConfig.type12.clicked=0;
                                    //$('#mainFilterType12MaxInput').val('100');
                                    activeMainPage.setFilterQuery(12);
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');  
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparate').css('display','none');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
                                    $('.mainFilterRangeBox_12 .mainFilterRangeBoxSumTitleActive').html('');
                                }
                      }
  );
    

//setActiveCaratInputs
$( ".mainFilterRangeBoxStructure_14 input" ).change(
          function() {
              var indexType='14';
                activeMainPage.filterConfig.type14.active=true;
                activeMainPage.filterConfig.type14.clicked=0;
                activeMainPage.filterConfig.type14.min=0;
                activeMainPage.filterConfig.type14.max=0;
                for(var i=0;i<9;i++){
                    $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonHover');
                    $($('.mainFilterRangeButton_'+indexType)[i]).removeClass('mainFilterRangeButtonActive');
                }
                var minValue = Number($('#mainFilterType14MinInput').val());
                var maxValue = Number($('#mainFilterType14MaxInput').val());
                for(var i=0;i<9;i++){
                    var elmMinValue =Number($($('.mainFilterRangeButton_'+indexType)[i]).attr('min'));
                    var elmMaxValue =Number($($('.mainFilterRangeButton_'+indexType)[i]).attr('max'));
                    if(minValue>=elmMinValue && minValue<=elmMaxValue){
                        $('.mainFilter1gridHoverBoxTableTd')[i].click();
                        break;
                    }
                    
                }
                if(minValue>maxValue){
                    return true;
                }
                for(var i=8;i>=0;i--){
                    var elmMinValue =Number($($('.mainFilterRangeButton_'+indexType)[i]).attr('min'));
                    var elmMaxValue =Number($($('.mainFilterRangeButton_'+indexType)[i]).attr('max'));
                    if(maxValue>=elmMinValue && maxValue<=elmMaxValue){
                        $($('.mainFilterRangeButton_'+indexType)[i]).click();
                        break;
                    }
                    
                }
          }
  );

activeMainPage.setLoadingResults = function () {
    var content='<div class="productsLoadingIcon"><i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></div>';
    $('.results').html(content);
    $('.resultsViewStructure3').html(content);
    
}

activeMainPage.getFiltersResults = function (ProductsFiltersArray) {
        activeMainPage.setLoadingResults();
         $.ajax({
                url:activeMainTool.serverSrc+'products?colorType='+activeMainPage.activeColorType+ProductsFiltersArray,
                type: 'get',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    if(data.length===0){
                        $('#headerResultsStructureCounter').html('0');
                        $('.results').html(activeMainTool.temp_noProductsResults());
                        $('.resultsViewStructure3').html(activeMainTool.temp_noProductsResults());
                        return true;
                    }
                    activeMainPage.setProducts(data);
                            console.log(data);
                },
                error: function (data) {
                    console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }
                    
                }
        });
}

activeMainPage.setFiltersQueryToServer = function () {
    var queryFilterString='';
    var queryFilterArray=[];
    for (var key in activeMainPage.filterQuery) {
        // skip loop if the property is from prototype
        if (!activeMainPage.filterQuery.hasOwnProperty(key)) continue;

        var obj = activeMainPage.filterQuery[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;
            queryFilterArray[key]=[];
            queryFilterArray[key].push(obj);
            
            
            

           // console.log(prop);
            //console.log(key);
            //console.log( obj[prop]);
        }
    }
    
    for (var key in queryFilterArray) {
        if (key === 'length' || !queryFilterArray.hasOwnProperty(key)) continue;
            
            if((key==='discount' || key==='cut') && activeMainPage.activeColorType==='yellow'){
                
            }
            else if(key==='carat'){
                queryFilterString+= 'fromCarat='+queryFilterArray[key][0][0][0]+'&';
                if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                    queryFilterString+= 'toCarat='+queryFilterArray[key][0][0][1]+'&';
                }
            }
            else if(key==='ppc'){
                queryFilterString+= 'fromPpc='+queryFilterArray[key][0][0][0]+'&';
                if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                    queryFilterString+= 'toPpc='+queryFilterArray[key][0][0][1]+'&';
                }
                /*
                 * queryFilterString+= 'fromPrice='+queryFilterArray[key][0][0][0]+'&';
                if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                    queryFilterString+= 'toPrice='+queryFilterArray[key][0][0][1]+'&';
                }
                 */
            }
            else if(key==='discount'){
                /*queryFilterString+= 'fromDiscount='+(100-parseInt(queryFilterArray[key][0][0][0])).toString()+'&';
                if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                    queryFilterString+= 'toDiscount='+(100-parseInt(queryFilterArray[key][0][0][1])).toString()+'&';
                }*/
             if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                    queryFilterString+= 'fromDiscount='+(100-parseInt(queryFilterArray[key][0][0][1])).toString()+'&';
                    queryFilterString+= 'toDiscount='+(100-parseInt(queryFilterArray[key][0][0][0])).toString()+'&';
                }
                else{
                    if(parseInt(queryFilterArray[key][0][0][0]).toString()==='0'){
                        
                    }
                    else{
                        queryFilterString+= 'fromDiscount='+(100-parseInt(queryFilterArray[key][0][0][0])).toString()+'&';
                    }
                    
                }
            
               
            }
            else{
                queryFilterString+= key+'='+queryFilterArray[key].toString()+'&';
            }
            
        }
    queryFilterString=queryFilterString.slice(0, -1);
    if(queryFilterString.length===0){
        queryFilterString='';
    }
    else{
        queryFilterString='&'+queryFilterString;
    }
    
    activeMainPage.getFiltersResults(queryFilterString);
}

activeMainPage.getExValuesUrl();

activeMainPage.changeProductsView = function (type) {
    $('.resultsViewStructure'+activeMainPage.activeProductView).css('display','none');
    $('.resultsViewStructure'+type).css('display','block');
    $('#productsViewButton'+type+' .notActiveButtonFilterView').css('display','none');
    $('#productsViewButton'+type+' .activeButtonFilterView').css('display','block');
    $('#productsViewButton'+activeMainPage.activeProductView+' .notActiveButtonFilterView').css('display','block');
    $('#productsViewButton'+activeMainPage.activeProductView+' .activeButtonFilterView').css('display','none');
    activeMainPage.activeProductView=type;
}

activeMainPage.setProductsView3= function (data) {
    var products=data;
    var content='';
     content+='<table>';
         content+='<thead><tr>';
                content+='<th>Id</th>'+
                                   '<th>Model</th>'+
                                   '<th>Ct.</th>'+
                                   '<th>Color</th>'+
                                   '<th>Clarity</th>'+
                                   '<th>Cut</th>'+
                                   '<th>Pol</th>'+
                                   '<th>Sym</th>'+
                                   '<th>Fluor</th>'+
                                   '<th>Depth</th>'+
                                   '<th>Table</th>'+
                                   '<th>Measure.</th>'+
                                   //'<th>Gridle </th>'+
                                  // '<th>Cert.Id</th>'+
                                   '<th>lab</th>'+
                                   '<th>location</th>'+
                                   '<th>Rap</th>'+
                                   '<th>PPC</th>'+
                                   '<th>Disc</th>'+
                                   '<th>Total</th>';
            content+='</tr></thead>';
            content+='<tbody>';
            
            for(var i=0;i<products.length;i++){
                var product=products[i];
                    content+='<tr class="resultsViewStructure3_tr itemStructure_'+product.id+'"  productId='+product.id+'>';
                    content+=
                                        '<td >'+
                                        '<div class="resultsViewStructure3_td">'+product.productId+'</div>'+
                                                  '<div class="resultsViewStructure3_trButton">'+
                                            '<div class="floatButtonStructure">'+
                                                '<div class="wishListIcon floatButtonIcon" onclick="activeMainTool.comingSoonPopup()">'+
                                                    '<img src="../assets/picknchoose-24-blue.svg">'+
                                                '</div>'+
                                                '<div onclick="activeCartManager.addProduct('+"'"+product.id+"'"+')" class="cartIcon floatButtonIcon">'+
                                                    '<img src="../assets/cart-24-pink.svg">'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.model+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.caratString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.color+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.clarity+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.cut+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.polish+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.symmetry+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.fluor+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.depth+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.table+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+ product.measureString+'</td>'+
                                        //'<td class="resultsViewStructure3_td">'+product.gridleCondition+'</td>'+
                                        //'<td class="resultsViewStructure3_td">'+product.certificateId+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.lab+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.location+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.listPriceString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.ppcString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.discountString+'</td>'+
                                        '<td>'+
                                               '<div class="resultsViewStructure3_td">'+ product.totalPriceString+'</div>'+
                                                 '<div class="itemAlreadyCartStructure">'+
                                                    '<img src="../assets/cart-24-pink-oval-40.svg"/>'+
                                                '</div>'+
                                        '</td>';
                    content+='</tr>';
            }
            content+='</tr></tbody>';
            content+='</table>';
            $('.resultsViewStructure3').html(content);
            $( ".resultsViewStructure3_td" ).click(
                function() {
                    activeProductPopup.show($(this).parents('tr').attr('productid'));
                }
              );
    
}


activeMainPage.sortArrayByLowestPrice = function (originalArray) {
      var arrangedArray=[];
      var getArrangedArray=originalArray.slice();
      var lowestPrice=9999999999;
      for(var i=0;i<originalArray.length;i++){
           lowestPrice=9999999999;
           lowestPriceIndex=0;
        for(var j=0;j<getArrangedArray.length;j++){
            if(lowestPrice>getArrangedArray[j].ppc && getArrangedArray[j].ppc!==0){
                lowestPrice=getArrangedArray[j].ppc;
                lowestPriceIndex=j;
            }
        }
        arrangedArray.push(getArrangedArray[lowestPriceIndex]);
        getArrangedArray.splice(lowestPriceIndex, 1 );
      }
      return arrangedArray;
};

activeMainPage.sortArrayByhighestPrice = function (originalArray) {
    var arrangedArray=[];
      var getArrangedArray=originalArray.slice();
      var highestPrice=1;
      for(var i=0;i<originalArray.length;i++){
           highestPrice=1;
           highestPriceIndex=0;
        for(var j=0;j<getArrangedArray.length;j++){
            if(highestPrice<getArrangedArray[j].ppc && getArrangedArray[j].ppc!==0){
                highestPrice=getArrangedArray[j].ppc;
                highestPriceIndex=j;
            }
        }
        arrangedArray.push(getArrangedArray[highestPriceIndex]);
        getArrangedArray.splice(highestPriceIndex, 1 );
      }
      return arrangedArray;
}

activeMainPage.sortArrayByLowestCarat = function (originalArray) {
      var arrangedArray=[];
      var getArrangedArray=originalArray.slice();
      var lowestCarat=9999999999;
      for(var i=0;i<originalArray.length;i++){
           lowestCarat=9999999999;
           lowestCaratIndex=0;
        for(var j=0;j<getArrangedArray.length;j++){
            if(lowestCarat>getArrangedArray[j].carat && getArrangedArray[j].carat!==0){
                lowestCarat=getArrangedArray[j].carat;
                lowestCaratIndex=j;
            }
        }
        arrangedArray.push(getArrangedArray[lowestCaratIndex]);
        getArrangedArray.splice(lowestCaratIndex, 1 );
      }
      return arrangedArray;
};

activeMainPage.sortArrayByhighestCarat = function (originalArray) {
      var arrangedArray=[];
      var getArrangedArray=originalArray.slice();
      var highstCarat=9999999999;
      for(var i=0;i<originalArray.length;i++){
           highestCarat=0.01;
           highestCaratIndex=0;
        for(var j=0;j<getArrangedArray.length;j++){
            if(highestCarat<getArrangedArray[j].carat && getArrangedArray[j].carat!==0){
                highestCarat=getArrangedArray[j].carat;
                highestCaratIndex=j;
            }
        }
        arrangedArray.push(getArrangedArray[highestCaratIndex]);
        getArrangedArray.splice(highestCaratIndex, 1 );
      }
      return arrangedArray;
};