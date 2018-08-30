

activeDashboardManager.getUsers = function () {
    activeDashboardManager.getInfo('admin/users',1);
}

activeDashboardManager.SetUsersTable = function (data) {
    var dataInfo = data.users;
    var contentBody='';
    var contentHead='<tr>'+
                             //               '<th>Id</th>'+
                                            //'<th></th>'+
                                            '<th>First Name</th>'+
                                            '<th>Last Name</th>'+
                                            '<th>Email</th>'+
                                            '<th>Gender</th>'+
                                           // '<th>Password</th>'+
                                            '<th>Created At</th>'+
                                            '<th>Cart</th>'+
                                            '<th>Wishlist</th>'+
                                            '<th>Manager</th>'+
                                            '<th class="markupPriceTh">M.Price</th>'+
                                            '<th class="statusTh">Status</th>'+
                                      //      '<th>Last Date</th>'+
                                   //         '<th>Last Time</th>'+
                                //            '<th>Token</th>'+
                                    '</tr>';
    for(var i=0;i<dataInfo.length;i++){
        if(typeof dataInfo[i].hidden!=='undefined' && dataInfo[i].hidden){
            
        }
        else{
         var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        var updatedAt = new Date(dataInfo[i].updatedAt).toDateString();
        var updatedAt_time = new Date(dataInfo[i].updatedAt).toTimeString();
        newUserClass='';
        dataInfo[i]=activeDashboardManager.userManipulation(dataInfo[i]);
        // Create date from input value
var inputDate = new Date(dataInfo[i].createdAt);

// Get today's date
var todaysDate = new Date();

// call setHours to take the time out of the comparison
if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
    newUserClass='newUser';
    // Date equals today's date
}
if(dataInfo[i].pending){
    newUserClass+=' pendingUser';
}
else{
    newUserClass+=' activeUser';
}
if(dataInfo[i].status==='removed'){
    newUserClass+=' removedUser';
}
var priceOffset=dataInfo[i].priceOffset;
    if(priceOffset<0){
        newUserClass+=' markupPriceNegative';
    }
    else if(priceOffset>0){
        newUserClass+=' markupPricePositive';
    }
    
    var classToAlreadyManager='';
    

    if(jQuery.inArray( 'admin', dataInfo[i].roles)!==-1){
         classToAlreadyManager='disabled';
    }
    else if(jQuery.inArray( 'manager', dataInfo[i].roles)!==-1){
         classToAlreadyManager='Checked';
    }
    
    if(typeof dataInfo[i].gender==='undefined'){
    dataInfo[i].gender='';
}
        contentBody+='<tr id="userTr_'+dataInfo[i]._id+'" class="'+newUserClass+'">'+
                                '<td>'+dataInfo[i].firstName+'</td>'+
                                '<td>'+dataInfo[i].lastName+'</td>'+
                                '<td>'+dataInfo[i].email+'</td>'+
                                '<td>'+dataInfo[i].gender+'</td>'+
                                '<td>'+createdAt+'</td>'+
                                '<td class="cursorPointer" onclick="activeDashboardManager.showUserProducts('+"'"+dataInfo[i]._id+"'"+','+"'"+'cart'+"'"+')";>'+dataInfo[i].basket.length+'</td>'+
                                '<td class="cursorPointer" onclick="activeDashboardManager.showUserProducts('+"'"+dataInfo[i]._id+"'"+','+"'"+'wishlist'+"'"+')";>'+dataInfo[i].wishlist.length+'</td>'+
                                '<td>'+
                                        '<div class="adminCheckboxStructure">'+
                                                '<input onclick="activeDashboardManager.SetManagerUser('+"'"+dataInfo[i]._id+"'"+')" type="checkbox" id="adminCheckbox_'+dataInfo[i]._id+'" '+classToAlreadyManager+'>'+
                                        '</div>'+
                                '</td>'+
                                        '<td>'+
                                        '<div class="markupInputStructure">'+
                                            '<input class="markupInput" inputId="'+dataInfo[i]._id+'" type="text" value="'+dataInfo[i].priceOffset+'" />'+
                                            '<div class="markupInputIcon">%</div>'+
                                            '<button class="markupUpdateButton markupUpdateButton'+dataInfo[i]._id+'" type="button" class="btn btn-success" onclick="activeDashboardManager.updatePriceOffsetUserById('+"'"+dataInfo[i]._id+"'"+');"><i class="fa fa-check"></i></button>'+
                                        '</div>'+
                                        '</td>'+
                                        '<td>'+
                                        '<div class="blockUserButton">'+
                                        '<button type="button" class="btn btn-danger" onclick="activeDashboardManager.blockUserById('+"'"+dataInfo[i]._id+"'"+');">Block</button>'+
                                        '</div>'+
                                        '<div class="removedUserButton">'+
                                        'Blocked'+
                                        '</div>'+
                                        '<div class="approveUserButton">'+
                                        '<button type="button" class="btn btn-success" onclick="activeDashboardManager.approveUserById('+"'"+dataInfo[i]._id+"'"+');">Approve</button>'+
                                        '</div>'+
                                        '</td>'+
                                //'<td>'+updatedAt+'</td>'+
                                //'<td>'+updatedAt_time+'</td>'+
                                //'<td>'+dataInfo[i].token+'</td>'+
                            '</tr>';
    }
    }
    
    $('#mainTableHead').html(contentHead);
    $('#mainTableBody').html(contentBody);
    $('.countType').html('('+dataInfo.length+')');
    $( ".markupInput" ).focus(function() {
        activeDashboardManager.markupInputFocusedIn(this);
  });
  
    init_DataTables();
}

activeDashboardManager.showUserProducts = function (userId,type) {
    var user=activeDashboardManager.usersArray[userId];
    if(type==='wishlist'){
        var activeArray=user.wishlist;
    }else{
        var activeArray=user.basket;
    }
    var content='';
        content+='<div class="productsOrderResultsInfo">'+
                '<div class="productsOrderResultsInfo1">'+user.firstName+' '+user.lastName+'</div>'+
                '<div class="productsOrderResultsInfo2">'+type+': '+activeArray.length+' products</div>'+
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
    var products=activeArray;
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
            
      var activeFileName='Online_'+type+'_'+user.firstName+' '+user.lastName;
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
        }
activeDashboardManager.markupInputChanged = function (userId) {
    var priceOffset=$('#userTr_'+userId+' .markupInput').val();
    if(priceOffset<0){
        $('#userTr_'+userId).removeClass('markupPricePositive');
        $('#userTr_'+userId).addClass('markupPriceNegative');
    }
    else if(priceOffset>0){
        $('#userTr_'+userId).addClass('markupPricePositive');
        $('#userTr_'+userId).removeClass('markupPriceNegative');
    }
    else{
        $('#userTr_'+userId).removeClass('markupPricePositive');
        $('#userTr_'+userId).removeClass('markupPriceNegative');
    }
}

activeDashboardManager.markupInputFocusedIn = function (elm) {
    var userId=$(elm).attr('inputId');
    console.log(elm);
    console.log(userId);
    $('.markupUpdateButton').css('display','none');
    $('.markupUpdateButton'+userId).css('display','block');
}




activeDashboardManager.updatePriceOffsetUserById = function (userId) {
    var priceOffset=$('#userTr_'+userId+' .markupInput').val();
    if(priceOffset<100 && priceOffset>-100){
        
    }
    else{
        return true;
    }
$.ajax({
                    url:activeDashboardManager.serverSrc+'admin/users/'+userId+'/set-price-offset',
                    type: 'put',
                    data: {
                            offset:priceOffset
                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        $('.markupUpdateButton').css('display','none');
                        activeDashboardManager.markupInputChanged(userId);
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}
activeDashboardManager.approveUserById = function (userId) {
$.ajax({
                    url:activeDashboardManager.serverSrc+'admin/users/'+userId+'/approve',
                    type: 'put',
                    data: {

                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        $('#userTr_'+userId).removeClass('pendingUser');
                        $('#userTr_'+userId).addClass('activeUser');
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}

activeDashboardManager.blockUserById = function (userId) {
    $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/users/'+userId+'/block',
                    type: 'put',
                    data: {

                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        $('#userTr_'+userId).addClass('removedUser');
                        $('#userTr_'+userId).removeClass('activeUser');
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}

activeDashboardManager.userManipulation = function (dataInfo) {
    
 
        if(typeof dataInfo.user==='undefined'){
            if(typeof dataInfo.firstName==='undefined'){
                dataInfo.firstName='';
            }
            if(typeof dataInfo.lastName==='undefined'){
               dataInfo.lastName='';
           }
        }
        else{
            if(dataInfo.user===null){
                console.log(dataInfo);
                dataInfo.user={};
                dataInfo.user.firstName='';
                dataInfo.user.lastName='';
            }
            if(typeof dataInfo.user.firstName==='undefined'){
            dataInfo.user.firstName='';
        }
         if(typeof dataInfo.user.lastName==='undefined'){
            dataInfo.user.lastName='';
        }
        }
         
          
         if(typeof dataInfo.email==='undefined'){
            dataInfo.email='';
        }
        if(typeof dataInfo.pending==='undefined'){
            dataInfo.pending=false;
        }
        else{
            
        }
         if(typeof dataInfo.priceOffset==='undefined'){
            dataInfo.priceOffset=0;
        }
        if(dataInfo.wishlist===null){
            dataInfo.wishlist=[];
        }
        if(dataInfo.basket===null){
            dataInfo.basket=[];
        }
        
        activeDashboardManager.usersArray[dataInfo._id]=dataInfo;
        return dataInfo;
}
