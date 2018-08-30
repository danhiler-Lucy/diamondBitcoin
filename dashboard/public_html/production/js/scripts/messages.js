activeDashboardManager.getMessages = function () {
    activeDashboardManager.getInfo('admin/contacts',4);
    }
activeDashboardManager.SetContactTable = function (data) {
    console.log('messges:');
    console.log(data);
    var dataInfo = data;
    var contentBody='';
    var contentHead='<tr>'+
                                            '<th>Email</th>'+
                                            '<th>Phone</th>'+
                                            '<th>Name</th>'+
                                            '<th>User email</th>'+
                                            '<th>Created At</th>'+
                                            '<th>Company</th>'+
                                            '<th>Message</th>'+
                                    '</tr>';
    for(var i=0;i<dataInfo.length;i++){
         var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        // Create date from input value
var inputDate = new Date(dataInfo[i].createdAt);

// Get today's date
var todaysDate = new Date();
newUserClass='';

if(dataInfo[i].user===null || typeof dataInfo[i].user.email==='undefined'){
    dataInfo[i].user={};
    dataInfo[i].user.email='';
    
}
// call setHours to take the time out of the comparison
if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
    newUserClass='newUser';
    // Date equals today's date
}
        contentBody+='<tr class="'+newUserClass+'">'+
                                '<td>'+dataInfo[i].email+'</td>'+
                                '<td>'+dataInfo[i].phone+'</td>'+
                                '<td>'+dataInfo[i].name+'</td>'+
                                '<td>'+dataInfo[i].user.email+'</td>'+
                                '<td>'+createdAt+'</td>'+
                                '<td>'+dataInfo[i].company+'</td>'+
                                '<td>'+dataInfo[i].message+'</td>'+
                            '</tr>';
    }
    $('#mainTableHead').html(contentHead);
    $('#mainTableBody').html(contentBody);
    $('.countType').html('('+dataInfo.length+')');
    init_DataTables();
}
