activeDashboardManager.getOrders = function () {
    activeDashboardManager.getInfo('admin/orders',3);
}


activeDashboardManager.showOrderProducts = function (orderId) {
    var content='';
        content+='<div class="productsOrderResultsInfo">'+
                '<div class="productsOrderResultsInfo1">$'+ordersArray[orderId].totalPriceString+'</div>'+
                '<div class="productsOrderResultsInfo2">('+ordersArray[orderId].products.length+' products)</div>'+
                '</div>';
         content+='<table id="productsOrderResultsTable">';
         content+='<thead><tr>';
                content+='<th>Image</th>'+
                        '<th>ID</th>'+
                         '<th >Certificate Id</th>'+
                                    '<th >Location</th>'+
                                    '<th >Stype</th>'+
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
    var products=ordersArray[orderId].products;
    for(var i=0;i<products.length;i++){
        var product = products[i];
         var directLink = product.directLink;
          product=activeDashboardManager.productManipulation(product);

                    content+='<tr class="productsOrderResultsTable_tr itemStructure_'+product.id+'"  productId='+product.id+'>';
                    content+=
                                        '<td class="productsOrderResults_td_imageStructure">'+
                                        '<img class="productsOrderResults_td_image" src="'+product.imageSrc+'"/>'+
                                        '</td>'+
                                        '<td class="productsOrderResults_td">'+
                                        '<div class="productsOrderResults_td productIdTitle">'+product.productId+'</div>'+
                                        '</td>'+
                                        '<td class="productsOrderResults_td">'+product.certificateId+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.location+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.sType+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.model+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.caratString+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.color+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.clarity+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.cut+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.polish+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.symmetry+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.fluor+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.depth+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.table+'</td>'+
                                        '<td class="productsOrderResults_td">'+ product.measureString+'</td>'+
                                        //'<td class="recentlyViewedResults_td">'+product.gridleCondition+'</td>'+
                                        //'<td class="recentlyViewedResults_td">'+product.certificateId+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.lab+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.location+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.listPriceString+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.ppcString+'</td>'+
                                        '<td class="productsOrderResults_td">'+product.discountString+'</td>'+
                                        '<td class="productsOrderResults_td">'+
                                               product.totalPriceString+
                                        '</td>';
                    content+='</tr>';
            }
            content+='</tr></tbody>';
            content+='</table>';
            
      var activeFileName='OnlineOrder_'+orderId;
       $('.productsPopupContent').html(content);
                        $('.productsPopupStructure').css('display','block');
    $('.productPopupStructureBlur').css('display','block');
    $('html').css('overflow','hidden');
      var table=$('#productsOrderResultsTable').DataTable( {
            paging: false,
            order: [[ 21, "desc" ]],
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
          /*
         content+='<div class="productStructure productPopupStructure">'+
                                    '<div class="productImageStructure">'+
                                        '<img class="productImage" src="'+product.imageSrc+'">'+
                                        
                                        '<div window.open('+"'"+'https://b.dob.com/barak/Output/Certificates/'+product.cartificateId+'.pdf?target=main'+"'"+'); class="giaCerIcon">Cert</div>'+
                                        
                                '</div>'+
                            '<div class="productInfoStructure">'+
                    '<div class="productMainCost">'+
                    product.totalPriceString+
                    '$</div>'+
                    '<div class="productMainTitle">'+
                            product.carat+' '+product.model+' '+product.clarity+' '+product.fluor+' '+product.polish+
                    '</div>'+
                    '<div class="productIdMainTitle">'+
                           product.productId+
                    '</div>'+
                    
                
                '<div class="productAttrTableStructure">'+
                        '<div class="productAttrTableSection productAttrTableLeftSection">'+
                            '<table id="productPopUpAttrTable1" class="productAttrTable">'+
                                    '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'PRICE/CARAT'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.ppcString+'$'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'SHIPPING'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.shipping+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CARAT'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.carat+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'INTENSITY'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.model+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CLARITY'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.clarity+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'SYM/POL'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.polish+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'DEPTH'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.depth+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'FLOUR'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.fluor+
                                        '</td>'+
                                    '</tr>'+
                            '</table>'+
                        '</div>'+
                      '<div class="productAttrTableSection">'+
                             '<table id="productPopUpAttrTable2" class="productAttrTable">'+
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
                                            'GIRDLE'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.gridleCondition+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CULET'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.culet+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'MEASURE'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.measurement1+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CROWN HIGH'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.model+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'CROWN ANG'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.polish+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'PAVILLION DEP'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.depth+
                                        '</td>'+
                                    '</tr>'+
                                     '<tr class="productAttrTableTr productAttrTableTrWhite">'+
                                        '<td class="productAttrTableTitleTd">'+
                                            'PAVILLION ANG'+
                                        '</td>'+
                                        '<td class="productAttrTableValueTd">'+
                                            product.table+
                                        '</td>'+
                                    '</tr>'+
                            '</table>'+
                        '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
    
   
                            
                            
                            
                        }*/
                       
}

activeDashboardManager.hideOrderProductsPopup= function () {
    $('.productsPopupStructure').css('display','none');
    $('.productPopupStructureBlur').css('display','none');
    $('html').css('overflow','auto');
}

activeDashboardManager.SetOrdersTable = function (data) {
    var dataInfo = data.orders;
    var contentBody='';
     ordersArray=[];
    var contentHead='<tr>'+
                                            '<th>Status</th>'+
                                            '<th>Info</th>'+
                                            '<th>First Name</th>'+
                                            '<th>Last Name</th>'+
                                            '<th>Email</th>'+
                                            '<th>Total Price</th>'+
                                            '<th>Created At</th>'+
                                            '<th>Shipping</th>'+
                                            '<th>Bundle</th>'+
                                            '<th>Products</th>'+
                                            //'<th>Id</th>'+
                                    '</tr>';
    for(var i=0;i<dataInfo.length;i++){
        var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        var updatedAt = new Date(dataInfo[i].updatedAt).toDateString();
        var updatedAt_time = new Date(dataInfo[i].updatedAt).toTimeString();
         var newOrderClass='';
         if(dataInfo[i].status==='pending'){
               newOrderClass='newOrder';
           }
       dataInfo[i]=activeDashboardManager.userManipulation(dataInfo[i]);
       dataInfo[i]=activeDashboardManager.productManipulation(dataInfo[i]);
    
    if(typeof dataInfo[i].address==='undefined'){
        dataInfo[i].address='';
    }
    else{
        dataInfo[i].address=JSON.stringify(dataInfo[i].address);
    }
    
        contentBody+='<tr class="'+newOrderClass+' tr_'+dataInfo[i]._id+'">'+
                                '<td>'+dataInfo[i].status+'</td>'+
                                '<td onclick="activeDashboardManager.showOrderProducts('+"'"+dataInfo[i]._id+"'"+')"><div class="showOrderProductsIcon">i</div></td>'+
                                '<td>'+dataInfo[i].user.firstName+'</td>'+
                                '<td>'+dataInfo[i].user.lastName+'</td>'+
                                '<td >'+dataInfo[i].user.email+'</td>'+
                                '<td>'+dataInfo[i].totalPriceString+'$</td>'+
                                '<td>'+createdAt+'</td>'+
                                /*'<td>'+updatedAt+'</td>'+
                                '<td>'+updatedAt_time+'</td>'+*/
                                '<td>'+dataInfo[i].address+'</td>'+
                                '<td>'+dataInfo[i].sendAsBundle+'</td>'+
                                '<td class="pointerDiv" onclick="activeDashboardManager.showOrderProducts('+"'"+dataInfo[i]._id+"'"+')">'+dataInfo[i].products.length+'</td>'+
                                //'<td ><span onclick="activeDashboardManager.showOrderProducts('+"'"+dataInfo[i]._id+"'"+')">'+dataInfo[i]._id+'</span></td>'+
                            '</tr>';
                            ordersArray[dataInfo[i]._id]=dataInfo[i];
    }
    
    $('#mainTableHead').html(contentHead);
    $('#mainTableBody').html(contentBody);
    $('.countType').html('('+dataInfo.length+')');
    init_DataTables();
    
}

