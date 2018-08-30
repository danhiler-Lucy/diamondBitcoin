activeDashboardManager.getBids = function () {
    activeDashboardManager.getInfo('admin/bids',6);
}
activeDashboardManager.SetBidsTable = function (data) {
    var dataInfo = data;
    var contentBody='';
    var contentHead='<tr>'+
                             //               '<th>Id</th>'+
                                            //'<th></th>'+
                                            '<th>First Name</th>'+
                                            '<th>Last Name</th>'+
                                            '<th>Email</th>'+
                                            '<th class="statusTh">Status</th>'+
                                            '<th class="actionTh">Action</th>'+
                                           // '<th>Password</th>'+
                                            '<th>Created At</th>'+
                                            '<th>ProdutId</th>'+
                                            '<th>Markup Price</th>'+
                                          /*  '<th>Rap</th>'+
                                            '<th>Discount</th>'+*/
                                            '<th>Original Price</th>'+
                                            "<th>User's Price</th>"+
                                            "<th>User's BId</th>"+
                                            '<th>Diff</th>'+
                                      //      '<th>Last Date</th>'+
                                   //         '<th>Last Time</th>'+
                                //            '<th>Token</th>'+
                                    '</tr>';
    for(var i=0;i<dataInfo.length;i++){
        if((typeof dataInfo[i].hidden!=='undefined' && dataInfo[i].hidden) || dataInfo[i].user===null){
            
        }
        else{
         var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        var updatedAt = new Date(dataInfo[i].updatedAt).toDateString();
        var updatedAt_time = new Date(dataInfo[i].updatedAt).toTimeString();
        
        var priceOffset=dataInfo[i].user.priceOffset;
        if(priceOffset===0){
            var finalPrice=dataInfo[i].product.totalPrice;
        }
        else{
            var finalPrice=(dataInfo[i].user.priceOffset/100+1)*dataInfo[i].product.totalPrice;
        }
        var newBidClass='';
        //dataInfo[i]=activeDashboardManager.userManipulation(dataInfo[i]);
        // Create date from input value
var inputDate = new Date(dataInfo[i].createdAt);

// Get today's date
var todaysDate = new Date();

// call setHours to take the time out of the comparison
if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
    newBidClass='newBid';
    // Date equals today's date
}
if(dataInfo[i].status==='pending'){
    newBidClass+=' pendingBid';
}
else if(dataInfo[i].status==='approved'){
    newBidClass+=' approvedBid';
}
else if(dataInfo[i].status==='disapproved'){
    newBidClass+=' disapprovedBid';
}
   

    
    dataInfo[i].product=activeDashboardManager.productManipulation(dataInfo[i].product);
    
        contentBody+='<tr id="bidTr_'+dataInfo[i]._id+'" class="'+newBidClass+'" userId="'+dataInfo[i].user._id+'">'+
                                //'<td>'+dataInfo[i]._id+'</td>'+
                                
                                //'<td>'+(i+1)+'</td>'+
                                '<td>'+dataInfo[i].user.firstName+'</td>'+
                                '<td>'+dataInfo[i].user.lastName+'</td>'+
                                '<td>'+dataInfo[i].user.email+'</td>'+
                                '<td class="statusField">'+dataInfo[i].status+'</td>'+
                                        '<td>'+
                                        '<div  class="bidButtonStructure">'+
                                        '<div class="disapproveBidButton">'+
                                        '<button type="button" class="btn btn-danger" onclick="activeDashboardManager.disapproveBidById('+"'"+dataInfo[i]._id+"'"+');"><i class="fa fa-close"></i></button>'+
                                        '</div>'+
                                        '<div class="approveBidButton">'+
                                        '<button type="button" class="btn btn-success" onclick="activeDashboardManager.approveBidById('+"'"+dataInfo[i]._id+"'"+');"><i class="fa fa-check"></i></button>'+
                                        '</div>'+
                                        
                                        '</div>'+
                                        '<div class="editBidButton" >'+
                                        '<button type="button" class="btn btn-success" onclick="activeDashboardManager.editBidById('+"'"+dataInfo[i]._id+"'"+');"><i class="fa fa-edit"></i></button>'+
                                        '</div>'+
                                        '</td>'+
                                //'<td>'+dataInfo[i].password+'</td>'+
                                '<td>'+createdAt+'</td>'+
                                        '<td>'+dataInfo[i].product.productId+'</td>'+
                                        '<td>%'+priceOffset+'</td>'+
                                       /* '<td>$'+dataInfo[i].product.listPriceString+'</td>'+
                                        '<td>'+dataInfo[i].product.discountString+'</td>'+*/
                                        '<td>$'+activeDashboardManager.numberWithCommas(dataInfo[i].product.totalPrice)+'</td>'+
                                        '<td>$'+activeDashboardManager.numberWithCommas(finalPrice)+'</td>'+
                                        '<td>$'+activeDashboardManager.numberWithCommas(dataInfo[i].price)+'</td>'+
                                        '<td>'+activeDashboardManager.numberWithCommas(dataInfo[i].price-finalPrice)+'</td>'+
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
    
    activeDashboardManager.disapproveBidById= function (bidId){
    var userId=$('#bidTr_'+bidId).attr('UserId');
    activeDashboardManager.sendNotificationToUser({
        users:[userId],
        subject:"Bid disapproved",
        body:'Your bid was disapproved.'
    });
                        $('#bidTr_'+bidId).removeClass('pendingBid');
                        $('#bidTr_'+bidId).removeClass('approvedBid');
                        $('#bidTr_'+bidId).addClass('disapprovedBid');
                        $('#bidTr_'+bidId+ ' .statusField').html('disapproved');
 $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/bids/'+bidId+'/disapprove',
                    type: 'put',
                    data: {

                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}

activeDashboardManager.approveBidById= function (bidId){
    var userId=$('#bidTr_'+bidId).attr('UserId');
    activeDashboardManager.sendNotificationToUser({
        users:[userId],
        subject:"Bid approved",
        body:'Your bid was approved!'
    });
                        $('#bidTr_'+bidId+ ' .statusField').html('approved');
                        $('#bidTr_'+bidId).removeClass('pendingBid');
                        $('#bidTr_'+bidId).addClass('approvedBid');
                        $('#bidTr_'+bidId).removeClass('disapprovedBid');
 $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/bids/'+bidId+'/approve',
                    type: 'put',
                    data: {

                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        
                        
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });    
}
activeDashboardManager.editBidById= function (bidId){
    $('#bidTr_'+bidId+' .bidButtonStructure').css('display','table');
    $('#bidTr_'+bidId+' .editBidButton').css('display','none');
    
}
