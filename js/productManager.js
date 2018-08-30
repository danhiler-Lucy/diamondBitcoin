function productManager() {
    this.template = [];
    this.productsIds = [];
    this.productsGlobal = [];
    this.nullValue = '---';
    this.lastProductsFromServer = [];
    this.bitcoinCurrentValue = 8863.48;
}

var activeProductManager = new productManager();

activeProductManager.getBitcoinPrice = function () {
    $.ajax({
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        type: 'get',
        data: {

        },
        headers: {
            
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            activeProductManager.bitcoinCurrentValue=data.bpi.USD.rate_float;
        },
        error: function (data) {
            console.log(data);
        }
    });
}
activeProductManager.getBitcoinPrice();

activeProductManager.getFilterProducts = function (query) {
    /*if(typeof activeMemberManager.token==='undefined' || activeMemberManager.token==='undefined'){
        activeMainTool.invalidToken();
    }*/
    $.ajax({
        url: activeMainTool.serverSrc + 'products?' + query,
        type: 'get',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            console.log('Products:');
            console.log(data);
            newProducts = data;
            switch (activeMainPage.pageId) {
                case 0: { //home
                    activeMainPage.setProducts(data);
                    break;
                }
                case 1: { //search
                    activeMainPage.setProducts(data);
                    break;
                }
                case 6: { //checkout
                    activeMainPage.setGlobalProducts(data);
                    break;
                }
                default:
                    console.log('default Products data');
                    break;
            }
        },
        error: function (data) {
            console.log(data);
            if (data.status === 403 || data.status === 400) {
                activeMainTool.invalidToken();
            }

        }
    });
};

activeProductManager.getProducts = function (type) {
    /* if(typeof activeMemberManager.token==='undefined' || activeMemberManager.token==='undefined'){
         activeMainTool.invalidToken();
     }*/
    $.ajax({
        url: activeMainTool.serverSrc + 'products',
        type: 'get',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            console.log('Products:');
            console.log(data);
            newProducts = data;
            switch (activeMainPage.pageId) {
                case 0: { //home
                    activeMainPage.setProducts(data);
                    break;
                }
                case 1: { //search
                    activeMainPage.setProducts(data);
                    break;
                }
                case 6: { //checkout
                    activeMainPage.setGlobalProducts(data);
                    break;
                }
                default:
                    console.log('default Products data');
                    break;
            }
        },
        error: function (data) {
            console.log(data);
            if (data.status === 403 || data.status === 400) {
                activeMainTool.invalidToken();
            }

        }
    });
};

activeProductManager.setNewProducts = function (data) {
    var products = data;
    activeProductManager.lastProductsFromServer = [];
    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        ;

        var product = products[i];
        product.id = product._id.toString();

        activeProductManager.productManipulation(product);

        newProducts.push(product);
        activeProductManager.lastProductsFromServer.push(product);
        activeProductManager.productsGlobal.push(product);
        activeProductManager.productsIds[product.id] = product;
    }
    return newProducts;
}

activeProductManager.productManipulation = function (product) {
    var directLink = product.directLink;
    product.shipping = product.location
    product.shipping = activeProductManager.nullValue;
    product.productImage ='https://s3.eu-west-2.amazonaws.com/diamonds-images/'+product.productId+'/still.jpg';
    if (typeof product.productImage === 'undefined' || product.productImage === '') {
        product.productImage = '';
        product.withImage = false;
        product.imageSrc = '../assets/company/sampleDiamond.png';
    }
    else {
        product.withImage = true;
        product.imageSrc =  product.productImage;
    }
    product.withVideo = true;
    if (typeof product.video === 'undefined') {
        product.withVideo = false;
    }
    if (typeof product.productId === 'undefined') {
        product.productId = activeProductManager.nullValue;
    }
    if (typeof product.color === 'undefined') {
        product.color = activeProductManager.nullValue;
    }
    if (typeof product.symmetry === 'undefined') {
        product.symmetry = activeProductManager.nullValue;
    }
    if (typeof product.priceListed === 'undefined') {
        product.priceListed = 0;
    }
    if (typeof product.listPrice === 'undefined') {
        product.listPrice = 0;
    }
    if (typeof product.totalPrice === 'undefined') {
        product.totalPrice = 0;
    }
    if (typeof product.gridleCondition === 'undefined') {
        product.gridleCondition = activeProductManager.nullValue;
    }
    if (typeof product.clarity === 'undefined') {
        product.clarity = activeProductManager.nullValue;
    }
    if (typeof product.fluor === 'undefined') {
        product.fluor = activeProductManager.nullValue;
    }
    if (typeof product.polish === 'undefined') {
        product.polish = activeProductManager.nullValue;
    }
    if (typeof product.depth === 'undefined') {
        product.depth = activeProductManager.nullValue;
    }
    if (typeof product.ppc === 'undefined') {
        product.ppc = 0;
    }
    if (typeof product.IHClarity === 'undefined') {
        product.IHClarity = '';
    }
    if (typeof product.IHColor === 'undefined') {
        product.IHColor = '';
    }

    if (typeof product.culet === 'undefined') {
        product.culet = activeProductManager.nullValue;
    }
    if (typeof product.flour === 'undefined') {
        product.flour = activeProductManager.nullValue;
    }
    if (typeof product.table === 'undefined') {
        product.table = activeProductManager.nullValue;
    }
    if (typeof product.cut === 'undefined') {
        product.cut = activeProductManager.nullValue;
    }
    if (typeof product.crownHeight === 'undefined') {
        product.crownHeight = activeProductManager.nullValue;
    }
    if (typeof product.crownAngle === 'undefined') {
        product.crownAngle = activeProductManager.nullValue;
    }
    if (typeof product.pavillionDepth === 'undefined') {
        product.pavillionDepth = activeProductManager.nullValue;
    }
    if (typeof product.pavillionAngle === 'undefined') {
        product.pavillionAngle = activeProductManager.nullValue;
    }
    if (typeof product.date === 'undefined') {
        product.dateProduct = activeProductManager.nullValue;
    }
    else {
        var productDate = new Date(product.date);
        var dateDay = productDate.getDate();
        var dateMonth = activeMainTool.months[productDate.getMonth()];
        var dateYear = productDate.getFullYear();
        product.dateProduct = dateMonth + ' ' + dateDay + ', ' + dateYear;
    }
    if (typeof product.status === 'undefined') {
        product.status = activeProductManager.nullValue;
    }
    if (typeof product.measurement1 !== 'undefined' && typeof product.measurement2 !== 'undefined' && typeof product.measurement3 !== 'undefined') {
        product.measureString = product.measurement1 + 'x' + product.measurement2 + 'x' + product.measurement3;
    }
    else{
        product.measureString=activeProductManager.nullValue;
    }
    if (typeof product.measurement1 === 'undefined') {
        product.measurement1 = activeProductManager.nullValue;
    }
    if (typeof product.measurement2 === 'undefined') {
        product.measurement2 = activeProductManager.nullValue;
    }
    if (typeof product.measurement3 === 'undefined') {
        product.measurement3= activeProductManager.nullValue;
    }
    
    
    if (typeof product.discount === 'undefined') {
        product.discount = (product.ppc / product.listPrice * (100)) - 100;
        if (product.discount > 0 || product.discount === -100) {
            product.discount = 0;
            product.discountString = activeProductManager.nullValue;
        }
        else {
            product.discount = activeMainTool.numberWithCommas(product.discount, 1);
            product.discountString = product.discount.toString() + '%';
        }
    }
    if (product.discount === 'NaN') {
        product.discount = activeProductManager.nullValue;
        product.discountString = activeProductManager.nullValue;
    }
    product.caratString = activeMainTool.numberWithCommas(product.carat, 2);


    if (product.ppc === 0) {
        product.ppcString = activeProductManager.nullValue;
    }
    else {
        product.ppcString = '$' + activeMainTool.numberWithCommas(product.ppc);
    }

    if (product.priceListed === 0) {
        product.priceListedString = activeProductManager.nullValue;
    }
    else {
        product.priceListedString = '$' + activeMainTool.numberWithCommas(product.priceListed);
    }

    if (product.listPrice === 0) {
        product.listPriceString = activeProductManager.nullValue;
    }
    else {
        product.listPriceString = '$' + activeMainTool.numberWithCommas(product.listPrice);
    }

    if (product.totalPrice === 0) {
        product.totalPriceString = activeProductManager.nullValue;
    }
    else {
        product.totalPriceString = '$' + activeMainTool.numberWithCommas(product.totalPrice);
    }
    product.bitcoinPriceString=product.totalPrice/activeProductManager.bitcoinCurrentValue;
    product.bitcoinPriceString=activeMainTool.numberWithCommas(product.bitcoinPriceString, 2);
    
    
    var availableLocations = ['HK', 'IL', 'JC', 'NY', 'LA', 'SH'];
    if (jQuery.inArray(product.location, availableLocations) === -1) {
        product.location = 'IL';
    }
    else if (product.location === 'SH') {
        product.location = 'HK';
    }

    if (product.sType === 'stock' || product.sType === 'Stock') {
        product.forSellStatus = 'Available';
    }
    else {
        product.forSellStatus = 'Unavailable';
    }
    if (typeof product.bidPrice === 'undefined') {
        product.finalTotalPrice = product.totalPrice;
        product.finalTotalPriceString = '$' + activeMainTool.numberWithCommas(product.finalTotalPrice);
        product.finalPPC = product.finalTotalPrice / product.carat;
        product.finalDiscount = (product.finalPPC / product.listPrice * (100)) - 100;
    }
    else {
        product.finalTotalPrice = product.bidPrice;
        product.finalTotalPriceString = '$' + activeMainTool.numberWithCommas(product.finalTotalPrice);
        product.finalPPC = product.finalTotalPrice / product.carat;
        product.finalDiscount = (product.finalPPC / product.listPrice * (100)) - 100;
    }

    activeMainTool.loadImage(product.imageSrc,product.id);
}
