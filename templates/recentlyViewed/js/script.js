function recentlyViewed(){
    this.products=[]
    this.productsIds=[]
}

var activeRecentlyViewed = new recentlyViewed();

activeRecentlyViewed.setProducts= function (data) {
    if(activeMainPage.pageId===0){
        activeMainPage.setRecentlyViewedProducts(data);
        return true;
    }
      var products=data;
    var content='';
     content+='<table id="recentlyViewedResultsTable">';
         content+='<thead><tr>';
                content+='<th>ID</th>'+
                         '<th style="display:none;">Certificate Id</th>'+
                                    '<th style="display:none;">Availability</th>'+
                                '<th >Last Seen</th>'+
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
                                        '<td class="recentlyViewedResults_td" style="display:none;">'+product.certificateId+'</td>'+
                                        '<td class="recentlyViewedResults_td" style="display:none;">'+product.status+'</td>'+
                                        '<td class="recentlyViewedResults_td">'+activeMainTool.formatDateRegular(product.recentlyViewedDate)+'</td>'+
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
                    activeMainTool.loadImage(product.imageSrc);
            }
            content+='</tr></tbody>';
            content+='</table>';
            $('#recentlyViewedResults').html(content);
            $('.recentlyViewedCounter').html(products.length);
            
            $( ".recentlyViewedResults_td" ).click(
                function() {
                    activeProductPopup.show($(this).parents('tr').attr('productid'));
                }
              );
      var activeFileName=activeMainTool.getTitleForFileExport();
      var table=$('#recentlyViewedResultsTable').DataTable( {
            paging: false,
            order: [[ 1, "desc" ]],
                    columnDefs: [
               { type: 'date-uk', targets: 1 }
             ],
             dom: 'Bfrtip',
       buttons: [
            {
                extend: 'excelHtml5',
                title: activeFileName
            },
            {
                extend: 'pdfHtml5',
                title: activeFileName, 
                text: 'PDF', 
                orientation: 'landscape'
            },
            {
                extend: 'csv',
                title: activeFileName
            },
            'copy'
        ]
        } );
        
        
        $('#recentlyViewedResultsTable_filter input').attr('placeholder','example: E VS2 EX GIA');
}




activeRecentlyViewed.addProduct= function (productId) {
    if(activeMainPage.pageId===14){//productview
        return true;
    }
       if(typeof activeMemberManager.token==='undefined' || activeMemberManager.token==='undefined'){
           return true;
       }
        $.ajax({
                url:activeMainTool.serverSrc+'seen/'+activeMemberManager.user._id+'/products/'+activeProductManager.productsIds[productId]._id,
                type: 'post',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                     console.log('RecentlyViewed Products:');
                    console.log(data);
                    activeRecentlyViewed.getArrangeArray(data);
                    var products = activeProductManager.setNewProducts(activeRecentlyViewed.products);
                        switch(activeMainPage.pageId) {
                            case 0: { //home
                                     activeRecentlyViewed.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                            case 1: { //search
                                     activeRecentlyViewed.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                            case 5: { //profile
                                    //activeMainPage.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                             default:
                                    console.log('default Products data');
                                    break;
                            }
                },
                error: function (data) {
                    console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }
                    
                }
    });
            /* if(typeof activeCartManager.newCart==='undefined'  || activeCartManager.newCart.length===0){
        setTimeout(function(){ 
                activeRecentlyViewed.getData();
        }, 500);
        return true;
    }
    if($('#recentlyViewedResults').length>0){
        activeRecentlyViewed.setProducts(activeCartManager.newCart);
    }*/
}

activeRecentlyViewed.getArrangeArray= function (data) {
    activeRecentlyViewed.products=[];
    activeRecentlyViewed.productsIds=[];
    for(var i=0;i<data.length;i++){
        data[i].product.recentlyViewedDate=data[i].createdAt;
        if(activeRecentlyViewed.productsIds.indexOf(data[i].product._id)===-1){
            activeRecentlyViewed.products.push(data[i].product);
            activeRecentlyViewed.productsIds.push(data[i].product._id);
        }
        
    }
}

activeRecentlyViewed.getData= function () {
       /*if(typeof activeMemberManager.token==='undefined' || activeMemberManager.token==='undefined'){
           activeMainTool.invalidToken();
       }*/
        $.ajax({
                url:activeMainTool.serverSrc+'seen/'+activeMemberManager.user._id,
                type: 'get',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    activeRecentlyViewed.getArrangeArray(data);
                    var products = activeProductManager.setNewProducts(activeRecentlyViewed.products);
                        switch(activeMainPage.pageId) {
                            case 0: { //home
                                     activeRecentlyViewed.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                            case 1: { //search
                                     activeRecentlyViewed.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                            case 5: { //profile
                                    //activeMainPage.setProducts(activeRecentlyViewed.products);
                                    break;
                            }
                             default:
                                    console.log('default Products data');
                                    break;
                            }
                },
                error: function (data) {
                    console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }
                    
                }
    });
            /* if(typeof activeCartManager.newCart==='undefined'  || activeCartManager.newCart.length===0){
        setTimeout(function(){ 
                activeRecentlyViewed.getData();
        }, 500);
        return true;
    }
    if($('#recentlyViewedResults').length>0){
        activeRecentlyViewed.setProducts(activeCartManager.newCart);
    }*/
}
//activeRecentlyViewed.getData();


