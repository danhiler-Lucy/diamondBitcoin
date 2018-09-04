function virtualMeeting(){
    
}

var activeVirtualMeeting = new virtualMeeting();

activeVirtualMeeting.getIdFromUrl = function () {
     vmid = activeMainTool.getUrlParam('vmid', location.href);
    if(vmid!==null){
        if(vmid==='seller'){
            //activeVirtualMeeting.showVmStructure();
            activeVirtualMeeting.showSellerView();
        }
        else{
            $('#callto-id').val(vmid);
        }
    }
}
activeVirtualMeeting.showSellerView = function () {
    
    $('.vmMainDeskHeaderStructureSeller').css('display','block');
    $('.vmMainDeskHeaderStructure').css('display','none');
    $('.vmMainDeskContentWrapper').css('clear','both');
    
}
activeVirtualMeeting.callVmStructure = function () {
    activeVirtualMeeting.tryToFillContent();
    $('.vmStructure').css('display','block');
    setTimeout(function(){ 
        $('.vmStructure').css('opacity','1');
    }, 10);
    activeVirtualMeeting.getIdFromUrl();
    $('#make-call').click();
}
activeVirtualMeeting.showVmStructure = function () {
    activeVirtualMeeting.tryToFillContent();
    $('.vmStructure').css('display','block');
    $('.vmMainDeskContentWrapper').css('opacity','1');
    setTimeout(function(){ 
        $('.vmStructure').css('opacity','1');
    }, 10);
}
activeVirtualMeeting.calculateDimElm = function () {
    var deskHeight = window.innerHeight-225-63;
    $('.vmMainDeskContentStructure').css('height',deskHeight);
    
}
activeVirtualMeeting.setRecentlyViewedSection = function (data) {
     var products=data;
    var content='';
     content+='<div class="vmDeskSection3CounterStructure">RESULTS(<span class="vmDeskSection3Counter">0</span>)</div><table id="vmDeskSection3_table">';
         content+='<thead><tr>';
                content+='<th>ID</th>'+
                                '<th >Date</th>'+
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
                                   '<th>Lab</th>'+
                                   '<th>Location</th>'+
                                   '<th>Rap</th>'+
                                   '<th>PPC</th>'+
                                   '<th>Disc</th>'+
                                   '<th>Total'+
                                    '</th>';
            content+='</tr></thead>';
            content+='<tbody>';
            
            for(var i=0;i<products.length;i++){
                var product=products[i];
                    content+='<tr class="recentlyViewedResults_tr itemStructure_'+product.id+'"  productId='+product.id+'>';
                    content+=
                                        '<td class="recentlyViewedResults_td_imageStructure">'+
                                        '<img class="recentlyViewedResults_td_image" src="'+product.imageSrc+'"/>'+
                                        '<div class="recentlyViewedResults_td productIdTitle">'+product.productId+'</div>'+
                                        '</td>'+
                                        '<td class="recentlyViewedResults_td">'+activeMainTool.formatDateUs(product.createdAt)+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.model+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.caratString+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.color+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.clarity+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.cut+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.polish+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.symmetry+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.fluor+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.depth+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.table+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+ product.measureString+'</td>'+
                                        //'<td class="recentlyViewedResults_td">'+product.gridleCondition+'</td>'+
                                        //'<td class="recentlyViewedResults_td">'+product.certificateId+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.lab+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.location+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.listPriceString+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.ppcString+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+product.discountString+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+
                                               product.totalPriceString+
                                        '</td>';
                    content+='</tr>';
                    activeMainTool.loadImage(product.imageSrc,product.id);
            }
            content+='</tr></tbody>';
            content+='</table>';
            $('#vmDeskSection3').html(content);
            $('.vmDeskSection3Counter').html(products.length);
            
            $( ".recentlyViewedResults_td" ).click(
                function() {
                    activeProductPopup.show($(this).parents('tr').attr('productid'));
                }
              );
            $(function() {
                  var table=$('#vmDeskSection3_table').DataTable( {
            paging: false,
            order: [[ 1, "desc" ]],
             dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
        } );
        $('#vmDeskSection3_table_filter input').attr('placeholder','example: E VS2 EX GIA');
              });
      
        
    
}
activeVirtualMeeting.tryToFillContent = function () {
    if(activeRecentlyViewed.products.length>0){
        activeMainTool.enableScroll();
        activeVirtualMeeting.setRecentlyViewedSection(activeRecentlyViewed.products);
        activeVirtualMeeting.setDiamondView();
    }
    else{
        setTimeout(function(){ 
            activeVirtualMeeting.tryToFillContent();
        }, 2000);

    }
}

activeVirtualMeeting.changeSectionView = function (elm,section) {
    $('.vmMainDeskHeaderNavBar').removeClass('vmMainDeskHeaderNavBarActive');
    $(elm).addClass('vmMainDeskHeaderNavBarActive');
    $('.vmDeskSection').removeClass('vmDeskActiveSection');
    $('#vmDeskSection'+section).addClass('vmDeskActiveSection');
}

activeVirtualMeeting.setDiamondView = function () {
$('#vmDeskSection1').html($('#productPopupStructure').clone());
$('#vmDeskSection1').append('<div class="vmStructureAdvancedArrows" onclick="activeVirtualMeeting.showRecoDiamonds()"><img src="../../assets/expand-advanced-options-button-16.svg"></div>');

}

activeVirtualMeeting.showRecoDiamonds = function () {
    if($($('.vmDeskSection .recommendedProductPopUpItemStructure')[0]).css('display')==='block'){
        $('.vmDeskSection .recommendedProductPopUpItemStructure').css('display','none');
    }
    else{
        $('.vmDeskSection .recommendedProductPopUpItemStructure').css('display','block');
    }
}


activeVirtualMeeting.getIdFromUrl();
activeVirtualMeeting.calculateDimElm();



$( window ).resize(function() {
  activeVirtualMeeting.calculateDimElm();
});

activeVirtualMeeting.closeVmStructure = function () {
    try{
        $('#end-call').click();
    }catch(e){
        
    }
    $('.vmStructure').css('opacity','0');
    setTimeout(function(){ 
        $('.vmStructure').css('display','none');
    }, 1000);
}