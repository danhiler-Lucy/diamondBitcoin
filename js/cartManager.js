function cartManager() {
    this.cart = [];
    this.newCart = [];
}

var activeCartManager = new cartManager();


activeCartManager.getCart = function () {
    $.ajax({
        url: activeMainTool.serverSrc + 'users/' + activeMemberManager.user._id + '/basket',
        type: 'get',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            activeCartManager.newCart = data;
            activeCartManager.setMiniCart();
            try {
                activeProductCard.checkAlreadyCartProducts();
            }
            catch (e) {
                console.log('checkAlreadyCartProducts not execute');
            }
            console.log('Basket:');
            console.log(data);
        },
        error: function (data) {
            /*console.log(data);
            if(data.status===403 || data.status===400){
                    activeMainTool.invalidToken();
            }*/

        }
    });
}



activeCartManager.checkProductStatus = function (productId, typeView) {
    return true;
    var product = activeProductManager.productsIds[productId];
    console.log('Product added to cart:');
    console.log(product);
    if (product.forSellStatus === 'Unavailable') {
        if (typeView === 'general') {
            activeProductPopup.unavailableProductAdded();
        }
        else if (typeView === 'productPopup') {
            activeProductPopup.unavailableProductAdded();
        }

        return false;
    }
    else {
        return true;
    }
}

activeCartManager.addProduct = function (productId) {
    if (!activeMemberManager.loginStatus) {
        activeMainTool.redirectPage(7); //login
    }
    if ($($('.itemStructure_' + productId + ' .itemAlreadyCartStructure')[0]).hasClass('itemAlreadyCartStructureActive')) {
        activeCartManager.removeProduct(productId);
        return true;
    }
    if (!activeCartManager.checkProductStatus(productId, 'general')) {
        activeProductPopup.show(productId);
        activeCartManager.checkProductStatus(productId, 'productPopup');
        return true;
    }

    $.ajax({
        url: activeMainTool.serverSrc + 'users/' + activeMemberManager.user._id + '/basket/' + productId,
        type: 'post',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            activeCartManager.newCart = data;
            activeCartManager.setMiniCart();
            activeCartManager.animationForAdded();
            activeMiniCart.updateDimCart();
            try {
                activeProductCard.checkAlreadyCartProducts();
            }
            catch (e) {

            }
            console.log('Basket:');
            console.log(data);
        },
        error: function (data) {
            /*console.log(data);
            if(data.status===403 || data.status===400){
                    activeMainTool.invalidToken();
            }*/

        }
    });
}

activeCartManager.removeProduct = function (productId) {
    if (!activeMemberManager.loginStatus) {
        activeMainTool.redirectPage(7); //login
    }
    $.ajax({
        url: activeMainTool.serverSrc + 'users/' + activeMemberManager.user._id + '/basket/' + productId,
        type: 'delete',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            activeCartManager.newCart = data;
            activeCartManager.setMiniCart();
            activeCartManager.animationForAdded();
            activeMiniCart.updateDimCart();
            try {
                activeProductCard.checkAlreadyCartProducts();
            }
            catch (e) {

            }
            console.log('Basket:');
            console.log(data);
        },
        error: function (data) {
            /*console.log(data);
            if(data.status===403 || data.status===400){
                    activeMainTool.invalidToken();
            }*/

        }
    });
}

activeCartManager.animationForAdded = function () {
    $('#miniCartTotalItemsTitle').html(activeCartManager.newCart.length);
    $('.miniCartTotalItemsButton').addClass('miniCartMainTitleCountAdded');
    setTimeout(function () {
        $('.miniCartTotalItemsButton').removeClass('miniCartMainTitleCountAdded');
    }, 600);

}

activeCartManager.setNewProducts = function () {
    activeCartManager.cart = [];
    for (var i = 0; i < activeCartManager.newCart.length; i++) {
        var product = activeCartManager.newCart[i];

        product.id = product._id.toString();

        activeProductManager.productManipulation(product);

        activeCartManager.cart.push(product);
        activeProductManager.productsIds[product.id] = product;
    }
}
activeCartManager.getCartIds = function () {
    var cartIds = [];
    for (var i = 0; i < activeCartManager.newCart.length; i++) {
        if (typeof activeCartManager.newCart[i].id === 'undefined') {
            activeCartManager.newCart[i].id = activeCartManager.newCart[i]._id;
        }
        cartIds.push(activeCartManager.newCart[i].id);
    }
    return cartIds;
}

activeCartManager.cleanMiniCart = function () {
    var cartIds = activeCartManager.getCartIds();
    for (var i = 0; i < cartIds.length; i++) {
        activeCartManager.removeProduct(cartIds[i]);
    }
}

activeCartManager.checkIfExist = function (productId) {
    var cartIds = activeCartManager.getCartIds();
    if (cartIds.indexOf(productId) > -1) {
        return true;
    }
    else {
        return false;
    }
}

activeCartManager.setMiniCart = function () {
    activeCartManager.setNewProducts();
    if (activeMainPage.pageId === 6) {
        activeMainPage.setCartSection();
        return true;
    }
    var content = '';
    var totalCost = 0;
    var totalCount = activeCartManager.cart.length;
    for (var i = 0; i < activeCartManager.cart.length; i++) {
        var product = activeCartManager.cart[i];

        totalCost += product.finalTotalPrice;

        var model = product.model;
        var caratString = product.caratString;
        var color = product.color;
        var clarity = product.clarity;
        var cut = product.cut;
        var polish = product.polish;
        var symmetry = product.symmetry;
        var fluor = product.fluor;
        var discount = product.discountString
        if (model === '---') {
            model = '';
        }
        if (caratString === '---') {
            caratString = '';
        }
        if (color === '---') {
            color = '';
        }
        if (clarity === '---') {
            clarity = '';
        }
        if (cut === '---') {
            cut = '';
        }
        if (polish === '---') {
            polish = '';
        }
        if (symmetry === '---') {
            symmetry = '';
        }
        if (fluor === '---') {
            fluor = '';
        }
        if (discount === '---') {
            discount = '';
        }

        content += '<div class="itemStructure">' +
            '<div onclick="activeProductPopup.show(' + "'" + product.id + "'" + ')">' +
            '<div class="itemImage">' +
            '<img src="' + product.imageSrc + '">' +
            '</div>' +
            '<div class="itemStructureTd_2">' +
            '<div class="itemStructureTdInfo1">' +
            '<span>' +
            caratString +
            '</span> ' +
            '<span>' +
            color +
            '</span> ' +
            '<span>' +
            clarity +
            '</span> ' +
            '<span>' +
            cut +
            /*'</span> ' +
            '<span>' +
            polish +
            '</span> ' +
            '<span>' +
            symmetry +
            '</span> ' +
            '<span>' +
            fluor +
            '</span> ' +*/

            '</div>' +
            '<div class="itemStructureTdInfo2">' +
            '<span>' +
            'ID ' +
            '</span>' +
            '<span>' +
            product.productId +
            '</span>' +
            '</div>' +
            '<div class="itemStructureTdInfo3">' +
            '<span>' +
            '5 ' +
            '</span>' +
            '<span>' +
            'Buisness Days' +
            '</span>' +
            '</div>' +
            '<div class="itemStructureTdInfo4">' +
            '<span class="itemBitcoinCostStructure"> '+
                                '<span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>'+
                            '<span class="itemCostValue">'+product.bitcoinPriceString+'</span>'+
                        '</span>'+
            '</div>' +
            '</div>' +
            '<div class="itemStructureTdInfo5">' +
            product.finalTotalPriceString +
            '</div>' +
            '</div>' +
            '<div class="itemStructureRemoveIcon" onclick="activeCartManager.removeProduct(' + "'" + product.id + "'" + ')">' +
            '<img src="../assets/cross-cancel-black-16.svg"/>' +
            '</div>' +
            '</div>';
    }
    $('#miniCartTotalItemsTitle').html(totalCount);

    totalCost = activeMainTool.numberWithCommas(totalCost);
    $('.miniCartTotalButton').html('$' + totalCost);
    $('.footerCartTotalCount').html('$' + totalCost);
    $('.miniCartResults').html(content);
    $('.miniCartStructure').css('opacity', '1');
    if (totalCount === 0) {
        $('.cartIconMobile .mobileHeaderIconBubbleStructure').css('opacity', '0');
    }
    else {
        $('.cartIconMobile .mobileHeaderIconBubbleTitle').html(totalCount);
        $('.cartIconMobile .mobileHeaderIconBubbleStructure').css('opacity', '1');
    }
    $('.cartIconMobile .mobileHeaderIconBubbleStructure').addClass('mobileHeaderIconBubbleStructureActive');
    setTimeout(function () {
        $('.cartIconMobile .mobileHeaderIconBubbleStructure').removeClass('mobileHeaderIconBubbleStructureActive');
    }, 300);



    //activeMiniCart.updateCartPosition();
}

