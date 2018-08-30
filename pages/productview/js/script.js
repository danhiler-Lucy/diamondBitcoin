function mainPage(){
    this.pageId=14; //home
}

var activeMainPage = new mainPage();

$(function() {
    activeMainTool.hideWrapper();
    activeMainPage.getProduct();
});

activeMainPage.getData= function () {
    
}
activeMainPage.getProduct= function () {
    var filterUrlQuery = activeMainTool.getUrlParam('productid', location.href);
    if(filterUrlQuery===null){
        return true;
    }
      $.ajax({
                        url:activeMainTool.serverSrc+'guest/product/'+filterUrlQuery,
                        type: 'get',
                        data: {

                        },
                        headers: {
                            
                        },
                        dataType: 'json',
                        success: function (data) {
                                console.log('product:');
                                console.log(data);
                                activeMainPage.showProduct(data);
                        },
                        error: function (data) {
                                    if(data.status===403 || data.status===400){
                                            activeMainTool.invalidToken();
                                    }

                        }

                });
}

activeMainPage.showProduct= function (product) {
    activeProductManager.productManipulation(product);
    activeProductManager.productsGlobal.push(product);
    activeProductManager.productsIds[product._id] = product;
    product.listPrice=0;
    product.totalPriceString='---';
    product.ppcString='---';
    product.listPriceString='---';
    activeProductPopup.show(product._id);
}
