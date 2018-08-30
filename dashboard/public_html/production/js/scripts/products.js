
activeDashboardManager.getProducts = function () {
    activeDashboardManager.getInfo('admin/products',2);
}

activeDashboardManager.productsManipulation= function (data) {
    activeDashboardManager.nullValue='';
    for(var i=0;i<data.products.length;i++){
        var product=data.products[i];
         product=activeDashboardManager.productManipulation(product);

    }
    
    
}

activeDashboardManager.SetProductsTable= function (data) {
    console.log(data);
    activeDashboardManager.productsManipulation(data);
        var dataInfo = data.products;
    var contentBody='';
    var contentHead='<tr>'+
                                            '<th>Product ID</th>'+
                                            '<th>Status</th>'+
                                            '<th>Segoma ID</th>'+
                                            '<th>Live</th>'+
                                            '<th>SegImg</th>'+
                                            '<th>PPC</th>'+
                                            '<th>Rap</th>'+
                                            '<th>Discount</th>'+
                                            '<th>Total Price</th>'+
                                            '<th>carat</th>'+
                                            '<th>certificateId</th>'+
                                            '<th>clarity</th>'+
                                            '<th>color</th>'+
                                            '<th>createdAt</th>'+
                                            '<th>crownHeight</th>'+
                                            '<th>crownAngle</th>'+
                                            '<th>pavillionDepth</th>'+
                                            '<th>pavillionAngle</th>'+
                                            '<th>depth</th>'+
                                            '<th>fancyColor</th>'+
                                            '<th>fancy intensity</th>'+
                                            '<th>fluor</th>'+
                                            '<th>lab</th>'+
                                            '<th>location</th>'+
                                            '<th>measurement</th>'+
                                            '<th>model</th>'+
                                            '<th>polish</th>'+
                                            '<th>sType</th>'+
                                            '<th>status</th>'+
                                            '<th>symmetry</th>'+
                                            '<th>table</th>'+
                                            '<th>updatedAt</th>'+
                                            '<th>DB ID</th>'+
                                    '</tr>';
    for(var i=0;i<dataInfo.length;i++){
         var createdAt = new Date(dataInfo[i].createdAt).toDateString();
        var updatedAt = new Date(dataInfo[i].updatedAt).toDateString();
        var updatedAt_time = new Date(dataInfo[i].updatedAt).toTimeString();
        newProductClass='';
        //dataInfo[i]=activeDashboardManager.userManipulation(dataInfo[i]);
        // Create date from input value
var inputDate = new Date(dataInfo[i].createdAt);

// Get today's date
var todaysDate = new Date();

// call setHours to take the time out of the comparison
if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
    newProductClass='newProduct';
    // Date equals today's date
}
        contentBody+='<tr class="'+newProductClass+'">'+
                                '<td>'+dataInfo[i].productId+'</td>'+
                                '<td>'+dataInfo[i].status+'</td>'+
                                '<td>'+dataInfo[i].segomaId+'</td>'+
                                '<td>'+dataInfo[i].isLive+'</td>'+
                                '<td>'+dataInfo[i].imageInclude+'</td>'+
                                '<td>'+dataInfo[i].ppcString+'</td>'+
                                '<td>'+dataInfo[i].priceListed+'</td>'+
                                '<td>'+dataInfo[i].discountString+'</td>'+
                                '<td>'+dataInfo[i].totalPriceString+'</td>'+
                                '<td>'+dataInfo[i].carat+'</td>'+
                                '<td>'+dataInfo[i].certificateId+'</td>'+
                                '<td>'+dataInfo[i].clarity+'</td>'+
                                '<td>'+dataInfo[i].color+'</td>'+
                                '<td>'+dataInfo[i].createdAt+'</td>'+
                                '<td>'+dataInfo[i].crownHeight+'</td>'+
                                '<td>'+dataInfo[i].crownAngle+'</td>'+
                                '<td>'+dataInfo[i].pavillionDepth+'</td>'+
                                '<td>'+dataInfo[i].pavillionAngle+'</td>'+
                                '<td>'+dataInfo[i].depth+'</td>'+
                                '<td>'+dataInfo[i].fancyColor+'</td>'+
                                '<td>'+dataInfo[i].fancyIntensity+'</td>'+
                                '<td>'+dataInfo[i].fluor+'</td>'+
                                '<td>'+dataInfo[i].lab+'</td>'+
                                '<td>'+dataInfo[i].location+'</td>'+
                                '<td>'+dataInfo[i].measurement1+'x'+dataInfo[i].measurement2+'x'+dataInfo[i].measurement3+'</td>'+
                                '<td>'+dataInfo[i].model+'</td>'+
                                '<td>'+dataInfo[i].polish+'</td>'+
                                '<td>'+dataInfo[i].sType+'</td>'+
                                '<td>'+dataInfo[i].status+'</td>'+
                                '<td>'+dataInfo[i].symmetry+'</td>'+
                                '<td>'+dataInfo[i].table+'</td>'+
                                '<td>'+dataInfo[i].updatedAt+'</td>'+
                                '<td>'+dataInfo[i]._id+'</td>'+
                            '</tr>';
    }
    $('#mainTableHead').html(contentHead);
    $('#mainTableBody').html(contentBody);
    $('.countType').html('('+dataInfo.length+')');
    init_DataTables();
}
activeDashboardManager.productManipulation = function (product) {
    product.id=product._id;
 var directLink = product.directLink;
            product.shipping=product.location
            product.shipping=activeDashboardManager.nullValue;
            product.imageInclude='Segoma Image';
            if(typeof product.segomaId==='undefined' || product.segomaId===''){
                product.imageInclude='Default Image';
            }
            product.imageSrc='https://static1.segoma.com/ws/public/GetPhoto/First/0/'+product.segomaId;
            if(typeof product.segomaId==='undefined'){
            product.imageSrc='https://dob.com/assets/default-image-small.png';
            }
            
            if(typeof product.symmetry==='undefined'){
                product.symmetry =activeDashboardManager.nullValue;
            }
            if(typeof product.priceListed==='undefined'){
                product.priceListed = 0;
            }
            if(typeof product.listPrice==='undefined'){
                product.listPrice = 0;
            }
            if(typeof product.totalPrice==='undefined'){
                product.totalPrice = 0;
            }
            if(typeof product.gridleCondition==='undefined'){
                product.gridleCondition =activeDashboardManager.nullValue;
            }
            if(typeof product.clarity==='undefined'){
                product.clarity =activeDashboardManager.nullValue;
            }
             if(typeof product.fluor==='undefined'){
                product.fluor =activeDashboardManager.nullValue;
            }
            if(typeof product.polish==='undefined'){
                product.polish =activeDashboardManager.nullValue;
            }
            if(typeof product.depth==='undefined'){
                product.depth =activeDashboardManager.nullValue;
            }
            if(typeof product.ppc==='undefined'){
                product.ppc =0;
            }
            if(typeof product.culet==='undefined'){
                product.culet =activeDashboardManager.nullValue;
            }
             if(typeof product.flour==='undefined'){
                product.flour =activeDashboardManager.nullValue;
            }
            if(typeof product.crownHeight==='undefined'){
                product.crownHeight ='';
            }
            if(typeof product.crownAngle==='undefined'){
                product.crownAngle ='';
            }
            if(typeof product.pavillionDepth==='undefined'){
                product.pavillionDepth ='';
            }
            if(typeof product.segomaId==='undefined'){
                product.segomaId ='';
            }
            if(typeof product.pavillionAngle==='undefined'){
                product.pavillionAngle ='';
            }
            if(typeof product.table==='undefined'){
                product.table =activeDashboardManager.nullValue;
            }
            if(typeof product.cut==='undefined'){
                product.cut =activeDashboardManager.nullValue;
            }

            if(typeof product.status==='undefined'){
                product.status =activeDashboardManager.nullValue;
            }
            product.measureString= product.measurement1+'x'+product.measurement2+'x'+product.measurement3;
             if(typeof product.discount==='undefined'){
                product.discount = (product.ppc/product.listPrice*(100))-100;
                if(product.discount>0 || product.discount===-100){
                    product.discount=0;
                    product.discountString=activeDashboardManager.nullValue;
                }
                else{
                    product.discount = activeDashboardManager.numberWithCommas(product.discount,2);
                    product.discountString=product.discount.toString()+'%';
                }
            }
            if(product.discount==='NaN'){
                product.discount=activeDashboardManager.nullValue;
                product.discountString=activeDashboardManager.nullValue;
            }            
            product.caratString = activeDashboardManager.numberWithCommas(product.carat,2);
            
            
            if(product.ppc===0){
                product.ppcString=activeDashboardManager.nullValue;
            }
            else{
                product.ppcString='$'+activeDashboardManager.numberWithCommas(product.ppc);
            }
            
            if(product.priceListed===0){
                product.priceListedString=activeDashboardManager.nullValue;
            }
            else{
                product.priceListedString='$'+activeDashboardManager.numberWithCommas(product.priceListed);
            }
            
            if(product.listPrice===0){
                product.listPriceString=activeDashboardManager.nullValue;
            }
            else{
                product.listPriceString='$'+activeDashboardManager.numberWithCommas(product.listPrice);
            }
            
             if(product.totalPrice===0){
                product.totalPriceString=activeDashboardManager.nullValue;
            }
            else{
                product.totalPriceString='$'+activeDashboardManager.numberWithCommas(product.totalPrice);
            }
            if(product.segomaId!==''){
                product.isLive='Live';
            }
            else{
                product.isLive='hidden';
            }
            

            product.caratString = activeDashboardManager.numberWithCommas(product.carat,2);
            product.measureString= product.measurement1+'x'+product.measurement2+'x'+product.measurement3;
            product.ppcString = activeDashboardManager.numberWithCommas(product.ppc);
            product.priceListedString=activeDashboardManager.numberWithCommas(product.priceListed);
            product.listPriceString=activeDashboardManager.numberWithCommas(product.listPrice);
            product.discount = (product.ppc/product.listPrice*(100))-100;
            product.discount = activeDashboardManager.numberWithCommas(product.discount,2);
            product.discountString=product.discount.toString()+'%';
            product.totalPriceString=activeDashboardManager.numberWithCommas(product.totalPrice,2);
            return product;
}

