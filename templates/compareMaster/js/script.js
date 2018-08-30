function compareMaster(){
    this.active = false;
    this.activePopupMaster = 0;
}

var activeCompareMaster = new compareMaster();

activeCompareMaster.getMasters = function () {
    
}

activeCompareMaster.setMasters = function () {
    activeCompareMaster.main=[
        {
            type:'FIY',
            src:'https://segoma.com/v.php?type=iframe&id=CGU65B9DGG'
        },
        {
            type:'FVY',
            src:'https://segoma.com/v.php?type=iframe&id=GY22XJSK11'
        },
        {
            type:'FY',
            src:'https://segoma.com/v.php?type=iframe&id=M9T6HHIXYY'
        },
        {
            type:'FLY',
            src:'https://segoma.com/v.php?type=iframe&id=B32DP9KD66'
        },
        {
            type:'E',
            src:'https://segoma.com/v.php?type=iframe&id=YHDZD0ICKK'
        },
        {
            type:'G',
            src:'https://segoma.com/v.php?type=iframe&id=U5ACFNTYDD'
        },
        {
            type:'H',
            src:'https://segoma.com/v.php?type=iframe&id=D438DAGX55'
        },
        
        {
            type:'I',
            src:'https://segoma.com/v.php?type=iframe&id=TW3OE0OFZZ'
        },
        {
            type:'J',
            src:'https://segoma.com/v.php?type=iframe&id=5HYF6M5GOO'
        },
        {
            type:'K',
            src:'https://segoma.com/v.php?type=iframe&id=QNM1T3U2SS'
        },
        {
            type:'L',
            src:'https://segoma.com/v.php?type=iframe&id=6K2G8TYPGG'
        },
        {
            type:'M',
            src:'https://segoma.com/v.php?type=iframe&id=NOSISHLLRR'
        }
    ];
}
activeCompareMaster.setMasters();

activeCompareMaster.setMasterProducts = function () {
    //$($('.productPopupStructure .compareMasterImage360Wrapper .productImage360')[0]).attr('src','https://segoma.com/v.php?type=iframe&id=NI7SHB18GG');
    //activeCompareMaster.setTypesProductPopup();
}

activeCompareMaster.hideMasterProducts = function () {
    $($('.productPopupStructure .compareMasterImage360Wrapper .productImage360')[0]).attr('src','');
}

activeCompareMaster.setTypesProductPopup = function (indexFoundMaster) {
    var lengthBeforeAfter=2;
    var countBeforeAfter=0;
    var countTotal=0;
    var content='';
    if(indexFoundMaster!==0 && activeCompareMaster.main[indexFoundMaster].type!=='E'){
        for(var i=indexFoundMaster-1;i>0;i--){
            countBeforeAfter++;
            if(countBeforeAfter>2){
                break;
            }
            countTotal++;
            content='<div class="compareMasterSwitcherButton compareMasterSwitcherButton'+countTotal+'">'+
                                                    '<div class="compareMasterSwitcherButtonSmTitle" onclick="activeCompareMaster.changeTypeProductPopup(this,'+i+');">'+
                                                            activeCompareMaster.main[i].type+
                                                    '</div>'+
                                                    '<div class="compareMasterSwitcherButtonTitle">INTENSIVE</div>'+
                                            '</div>'+content;
        }
    }
    countTotal++;
    activeCompareMaster.activePopupMaster = activeCompareMaster.main[indexFoundMaster].type;
     content+='<div class="compareMasterSwitcherButton compareMasterSwitcherButton'+countTotal+'">'+
                                                    '<div class="compareMasterSwitcherButtonSmTitle compareMasterSwitcherButtonActive" onclick="activeCompareMaster.changeTypeProductPopup(this,'+indexFoundMaster+');">'+
                                                            activeCompareMaster.main[indexFoundMaster].type+
                                                    '</div>'+
                                                    '<div class="compareMasterSwitcherButtonTitle">INTENSIVE</div>'+
                                            '</div>';
    $($('.productPopupStructure .compareMasterImage360Wrapper .productImage360')[0]).attr('src',activeCompareMaster.main[indexFoundMaster].src);
    if(indexFoundMaster+1!==activeCompareMaster.main.length  && activeCompareMaster.main[indexFoundMaster].type!=='FLY'){
        countBeforeAfter=0;
        for(var i=indexFoundMaster+1;i<activeCompareMaster.main.length;i++){
        countBeforeAfter++;
        if(countBeforeAfter>2){
            break;
        }
        content+='<div class="compareMasterSwitcherButton compareMasterSwitcherButton'+countTotal+'">'+
                                                    '<div class="compareMasterSwitcherButtonSmTitle" onclick="activeCompareMaster.changeTypeProductPopup(this,'+i+');">'+
                                                            activeCompareMaster.main[i].type+
                                                    '</div>'+
                                                    '<div class="compareMasterSwitcherButtonTitle">INTENSIVE</div>'+
                                            '</div>';
        }
    }
    

                                        
        $('.compareMasterSwitcherWrapper').html(content);
}

activeCompareMaster.changeTypeProductPopup = function (thisElm,index) {
    if(activeCompareMaster.main[index].type===activeCompareMaster.activePopupMaster){
        return true;
    }
    activeCompareMaster.activePopupMaster=activeCompareMaster.main[index].type;
    $('.compareMasterSwitcherButtonSmTitle').removeClass('compareMasterSwitcherButtonActive');
    $(thisElm).addClass('compareMasterSwitcherButtonActive');
    $($('#productImage360')[0]).attr('src',$($('#productImage360')[0]).attr('src'));
    $($('.productPopupStructure .compareMasterImage360Wrapper .productImage360')[0]).attr('src',activeCompareMaster.main[index].src);
}

activeCompareMaster.getMasterProducts = function (product) {
    var foundMaster=false;
    var indexFoundMaster=0;
    for(var i=0;i<activeCompareMaster.main.length;i++){
        if(product.color===activeCompareMaster.main[i].type){
           foundMaster=true; 
           indexFoundMaster=i;
            break;
        }
    }
    if(foundMaster){
        $('.masterCompareButtonStructure').css('visibility','visible');
        $('.masterCompareCloseButtonStructure').css('visibility','visible');
        $('.compareMasterWrapper').css('display','block');
        activeCompareMaster.setTypesProductPopup(indexFoundMaster);
        return activeCompareMaster.main[indexFoundMaster];
    }
    else{
        $('.masterCompareButtonStructure').css('visibility','hidden');
        $('.masterCompareCloseButtonStructure').css('visibility','hidden');
        $('.compareMasterWrapper').css('display','none');
        
        return false;
    }
}