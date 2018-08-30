activeDashboardManager.SetManagerUser = function (userId) {
    if($('#adminCheckbox_'+userId).is(":checked")){
        console.log(userId);
        console.log('to true');
        var ajaxType='put';
    }
    else{
        console.log(userId);
        console.log('to false');
        var ajaxType='delete';
    }
    
         $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/manager',
                    type: ajaxType,
                    data: {
                            id:userId
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

activeDashboardManager.getManagers = function (data) {
     $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/manager',
                    type: 'get',
                    data: {
                            
                    },
                    headers: {
                       token: activeDashboardManager.token
                    },
                    dataType: 'json',
                    success: function (data) {
                        activeDashboardManager.SetManagersTable(data);
                    },
                    error: function (data) {
                        console.log(data);
                    }
            });
}

activeDashboardManager.setActiveManagerPermissionsInModal = function (userId) {
    var user=managersArray[userId];
    $('.checkboxPermissions input').prop( "checked", false );
    for(var i=0;i<user.permissions.length;i++){
        $('#checkboxPermissions_'+user.permissions[i]+' input').prop( "checked", true );
    }
}

activeDashboardManager.openManagerPermissionsModal = function (userId) {
    var user=managersArray[userId];
    activeManagerUser=user;
    $('#checkboxPermissions_fullName').html(user.firstName+' '+user.lastName);
    activeDashboardManager.setActiveManagerPermissionsInModal(userId);
    $('#checkboxPermissionsButton').click();
}

activeDashboardManager.sendManagerPermissions = function () {
    var managerPermissions=[];
    for(var i=0;i<$('.checkboxPermissions input').length;i++){
        if($($('.checkboxPermissions input')[i]).prop( "checked")){
            managerPermissions.push($($('.checkboxPermissions input')[i]).attr('name'));
        }
    }
    managersArray[activeManagerUser._id].permissions=managerPermissions;
    $.ajax({
                    url:activeDashboardManager.serverSrc+'admin/manager',
                    type: 'post',
                    data: {
                            id:activeManagerUser._id,
                            permissions:managerPermissions
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
            $('.managersTr_'+activeManagerUser._id+' .permissionsTdValue').html(managerPermissions.toString());
    $('#checkboxPermissionsCloseButton').click();
}

activeDashboardManager.SetManagersTable = function (data) {
    console.log('Managers:');
    console.log(data);
    var dataInfo = data;
    managersArray=[];
    var contentBody='';
    var contentHead='<tr>'+
                                            '<th>First Name</th>'+
                                            '<th>Last Name</th>'+
                                            '<th>Email</th>'+
                                           // '<th>Password</th>'+
                                            '<th>Created At</th>'+
                                            '<th>Permissions</th>'+
                                            '<th>Changes</th>'+
                                    '</tr>';
                                    
    for(var i=0;i<dataInfo.length;i++){
         var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        // Create date from input value
var inputDate = new Date(dataInfo[i].createdAt);

// Get today's date
var todaysDate = new Date();

managersArray[dataInfo[i]._id]=dataInfo[i];


        contentBody+='<tr class="managersTr_'+dataInfo[i]._id+'">'+
                                  '<td>'+dataInfo[i].firstName+'</td>'+
                                '<td>'+dataInfo[i].lastName+'</td>'+
                                '<td>'+dataInfo[i].email+'</td>'+
                                '<td>'+createdAt+'</td>'+
                                '<td class="permissionsTdValue">'+dataInfo[i].permissions.toString()+'</td>'+
                                '<td onclick="activeDashboardManager.openManagerPermissionsModal('+"'"+dataInfo[i]._id+"'"+');">'+
                                    '<button type="button" class="permissionsEditButton btn btn-success" ><i class="fa fa-edit"></i></button>'+
                                '</td>'+
                            '</tr>';
    }
    $('#mainTableHead').html(contentHead);
    $('#mainTableBody').html(contentBody);
    $('.countType').html('('+dataInfo.length+')');
    init_DataTables();
}