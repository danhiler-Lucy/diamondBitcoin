function mainPage() {
    this.pageId = 6; //checkout
    this.contentSectionActive = 0
    this.contentSectionlength = 3;
    this.shippingCost = 50;
    this.totalCost = 0;
    this.productsCost = 0;
    this.updateSummeryContent = true;
    this.approveNextSection = true;
    this.shippingObj = {};
    this.stopNext = false;
    this.sendAsBundle = true;
    this.shippingCompany = '';
}

var activeMainPage = new mainPage();

$(function () {
    
});

activeMainPage.getData = function () {
    activeProductManager.getProducts();
    activeMainPage.inflateFields();
}

activeMainPage.checkLoginStatus = function () {
    if (!activeMemberManager.loginStatus) {
        activeMainTool.invalidToken();
    }
    else {
        $('body').css('opacity', '1');
    }
}
activeMainPage.checkLoginStatus();

activeMainPage.inflateFields = function () {
    var email = activeMemberManager.user.email;
    console.log('Inflating email field with: ' + email);
    $('#emailAddressContent').html(email);
}

activeMainPage.setGlobalProducts = function (data) {
    var products = activeProductManager.setNewProducts(data);
}

activeMainPage.setSummeryInfo = function () {
    if (!activeMainPage.updateSummeryContent) {
        return true;
    }
    var shippingCost = activeMainPage.shippingCost;

    $('#itemCounterTitleValue').html(activeCartManager.cart.length);
    $('#mobileCountItems').html('(' + activeCartManager.cart.length + ')');
    $('.mobileCountItemsStructure').css('visibility', 'visible');
    $('#subTotalCostTitleValue').html('$' + activeMainTool.numberWithCommas(activeMainPage.productsCost, 2));
    activeMainPage.totalCost = activeMainPage.productsCost;
    $('#totalCostSummeryTitleValue').html('$' + activeMainTool.numberWithCommas(activeMainPage.totalCost, 2));
    $('#totalCostSection1TitleValue').html('$' + activeMainTool.numberWithCommas(activeMainPage.totalCost, 2));

    if (activeMainPage.totalCost <= 50000) {
        shippingCost = 70;
    }
    else {
        shippingCost = 100;
    }
    if (activeCartManager.cart.length === 0) {
        shippingCost = 0;
    }
    $('#shippingCostTitleValue').html('$' + activeMainTool.numberWithCommas(shippingCost, 2));
    if (activeCartManager.cart.length === 0) {
        $('.leftSectionWrapper').css('display', 'block');
        $('.summeryInfoResumeShoppingButton').css({ 'background-color': '#00e1a6', 'color': 'white' });
    }

}

activeMainPage.setEmptyCart = function () {
    $('.productsLoadingIcon').addClass('displayNone');
    $('#cartResults').html('<div class="emptyCartBoxStructure">EMPTY CART</div>');
    $('#productTableView3_wrapper .dt-buttons').addClass('displayNone');
    $('.emptyCartBoxStructure').addClass('displayBlock');
    activeMainPage.productsCost = 0;
    activeMainPage.setSummeryInfo();
    activeMainPage.approveNextSection = false;
}

activeMainPage.changeBundleCheckout = function (elm) {
    $('.shippingOptionStructure').removeClass('active');
    $('.shippingOptionStructure img').attr('src', '../assets/selected-116.svg');
    $(elm).addClass('active');
    $($(elm).children()[0]).attr('src', '../assets/selected-6.svg');
    activeMainPage.sendAsBundle = $(elm).attr('type');
}
activeMainPage.changeShippingCompany = function (elm) {
    $('.shippingCompanyOptionStructure').removeClass('active');
    $('.shippingCompanyOptionStructure img').attr('src', '../assets/selected-116.svg');
    $(elm).addClass('active');
    $($(elm).children()[0]).attr('src', '../assets/selected-6.svg');
    activeMainPage.shippingCompany = $(elm).attr('type');
}

activeMainPage.setCartSection = function () {
    var content = '';
    var contentTable = '';
    var totalCost = 0;
    var totalCount = activeCartManager.cart.length;
    if (totalCount === 0) {
        activeMainPage.setEmptyCart();
        return true;
    }
    else {
        $('.summeryInfoResumeCheckoutButton').css('opacity', '1');
    }
    $('#productTableView3_wrapper .dt-buttons').removeClass('displayNone');
    contentTable += '<table id="productTableView3">';
    contentTable += '<thead><tr>';
    contentTable += '<th>ID</th>' +
        '<th style="display:none;">Certificate Id</th>' +
        '<th style="display:none;">Availability</th>' +
        '<th>Model</th>' +
        '<th>Ct.</th>' +
        '<th>Color</th>' +
        '<th>Clarity</th>' +
        '<th>Cut</th>' +
        '<th>Pol</th>' +
        '<th>Sym</th>' +
        '<th>Fluor</th>' +
        '<th>Depth</th>' +
        '<th>Table</th>' +
        '<th>Measure.</th>' +
        //'<th>Gridle </th>'+
        // '<th>Cert.Id</th>'+
        '<th>lab</th>' +
        '<th>location</th>' +
        '<th>Rap</th>' +
        '<th>Disc</th>' +
        '<th>PPC</th>' +
        '<th>Total' +
        '</th>';
    contentTable += '</tr></thead>';
    contentTable += '<tbody>';
    for (var i = 0; i < activeCartManager.cart.length; i++) {
        var product = activeCartManager.cart[i];
        activeProductManager.productManipulation(product);
        if (product.segomaId === '') {
            var imageSrc = '../assets/default-image-small.png';
        }
        else {
            var imageSrc = product.imageSrc;
        }
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



        totalCost += product.finalTotalPrice;
        content += '<div class="itemStructure">' +
            '<div class="itemWrapper" onclick="activeProductPopup.show(' + "'" + product.id + "'" + ')">' +
            '<div class="itemImage">' +
            '<img src="' + imageSrc + '">' +
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
            '</span> ' +
            /*'<span>' +
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
            //   '5 '+
            '</span>' +
            '<span>' +
            //   'Buisness Days'+
            '</span>' +
            '</div>' +
            '<div class="itemStructureTdInfo4">' +
            '<span class="itemBitcoinCostStructure"> '+
                                '<span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>'+
                            '<span class="itemCostValue">'+product.bitcoinPriceString+'</span>'+
                        '</span>'+
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="itemStructureTdInfo5">' +
            '$' + activeMainTool.numberWithCommas(product.finalTotalPrice, 2) +
            '</div>' +
            '</div>' +
            '<div class="itemStructureRemoveIcon" onclick="activeMainPage.removeProductCheckout(' + "'" + product.id + "'" + ')"><img src="../assets/cross-cancel-black-16.svg"></div>' +
            '</div>';





        contentTable += '<tr class="resultsViewStructure3_tr itemStructure_' + product.id + '"  productId=' + product.id + '>';
        contentTable +=
            '<td >' +
            '<div class="resultsViewStructure3_td">' + product.productId + '</div>' +
            '</td>' +
            '<td class="resultsViewStructure3_td" style="display:none;">' + product.certificateId + '</td>' +
            '<td class="resultsViewStructure3_td" style="display:none;">' + product.status + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.model + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.caratString + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.color + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.clarity + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.cut + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.polish + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.symmetry + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.fluor + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.depth + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.table + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.measureString + '</td>' +
            //'<td class="resultsViewStructure3_td">'+product.gridleCondition+'</td>'+
            //'<td class="resultsViewStructure3_td">'+product.certificateId+'</td>'+
            '<td class="resultsViewStructure3_td">' + product.lab + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.location + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.listPriceString + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.discountString + '</td>' +
            '<td class="resultsViewStructure3_td">' + product.ppcString + '</td>' +
            '<td>' +
            '<div class="resultsViewStructure3_td">' + product.totalPriceString + '</div>' +
            '</td>';
        contentTable += '</tr>';
        activeMainTool.loadImage(product.imageSrc);
    }
    $('#cartResults').html(content);
    activeMainPage.productsCost = totalCost;

    activeMainPage.setSummeryInfo();

    contentTable += '</tr></tbody>';
    contentTable += '</table>';
    $('#cartTableResults').html(contentTable);

    $(".resultsViewStructure3_td").click(
        function () {
            activeProductPopup.show($(this).parents('tr').attr('productid'));
        }
    );
    $(function () {
        var activeFileName = activeMainTool.getTitleForFileExport();
        var table = $('#productTableView3').DataTable({
            paging: true,
            bSort: false,
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: activeFileName
                },
                {
                    extend: 'pdfHtml5',
                    title: activeFileName,
                    orientation: 'landscape'
                },
                {
                    extend: 'csv',
                    title: activeFileName
                },
                'print', 'copy',
            ]
        });
    });
}

activeMainPage.removeProductCheckout = function (productId) {
    activeCartManager.removeProduct(productId);
    //location.reload();
}

activeMainPage.updateActiveContent = function (index) {
    if (!activeMainPage.approveNextSection) {
        return true;
    }
    /* hardcode shipping
    if(index===1){
            index=2;
        }*/
    for (var i = 0; i < 3; i++) {
        $('.contentSection' + i).addClass('contentSectionHidden');
        $('.sectionHeaderButtonTitleStructureType' + i).removeClass('sectionHeaderButtonTitleActive');
    }
    $('.contentSection' + index).removeClass('contentSectionHidden');
    $('.sectionHeaderButtonTitleStructureType' + index).addClass('sectionHeaderButtonTitleActive');
    $('.sectionHeaderButtonTitleStructureType' + index + ' .sectionHeaderButtonIconUnActive').addClass('displayNone');
    $('.sectionHeaderButtonTitleStructureType' + index + ' .sectionHeaderButtonIconActive').removeClass('displayNone');
    $('.sectionHeaderButtonTitle' + index).removeClass('sectionHeaderButtonTitleComplete');
    $('.sectionHeaderButtonIconComplete' + index).removeClass('displayBlock');

    this.contentSectionActive = index;
    //$('.sectionHeaderButtonIconComplete1').addClass('displayBlock');
    if (this.contentSectionActive === this.contentSectionlength - 1) {
        $('.summeryInfoResumeCheckoutButton').addClass('summeryInfoResumeCheckoutButtonHidden');
        $('.summeryInfoSendOrderRequestAction').addClass('displayBlock');
        $('.summeryInfoResumeShoppingButton').addClass('displayNone');
    }
    else {
        $('.summeryInfoResumeCheckoutButton').removeClass('summeryInfoResumeCheckoutButtonHidden');
        $('.summeryInfoSendOrderRequestAction').removeClass('displayBlock');
        $('.summeryInfoResumeShoppingButton').removeClass('displayNone');
    }
    for (var i = index - 1; i >= 0; i--) {
        $('.sectionHeaderButtonIconComplete' + i).addClass('displayBlock');
        $('.sectionHeaderButtonIcon' + i).addClass('displayNone');
        $('.sectionHeaderButtonTitle' + i).addClass('sectionHeaderButtonTitleComplete');
    }
    for (var i = index + 1; i < 3; i++) {
        $('.sectionHeaderButtonTitleStructureType' + i + ' .sectionHeaderButtonIconUnActive').removeClass('displayNone');
        $('.sectionHeaderButtonTitleStructureType' + i + ' .sectionHeaderButtonIconActive').addClass('displayNone');
        $('.sectionHeaderButtonTitle' + i).removeClass('sectionHeaderButtonTitleComplete');
        $('.sectionHeaderButtonIconComplete' + i).removeClass('displayBlock');
    }
};
// activeMainPage.changeAddress = function () {
//     activeMainPage.approveNextSection = false;
//     $('.shippingOptionAddressMemberInputsStructure').addClass('shippingOptionAddressMemberInputsStructureDisplay');
//     $('.shippingOptionAddressMemberChangeButton').addClass('shippingOptionAddressMemberChangeButtonDisplay');
//     $('.shippingOptionAddressMemberFillInputsStructure').addClass('shippingOptionAddressMemberFillInputsStructureDisplay');
//     $('.summeryInfoResumeCheckoutButton').addClass('summeryInfoResumeCheckoutButtonNotActive');

// };
activeMainPage.closeAddress = function () {
    activeMainPage.approveNextSection = true;
    $('.summeryInfoResumeCheckoutButton').removeClass('summeryInfoResumeCheckoutButtonNotActive');
    $('.shippingOptionAddressMemberInputsStructure').removeClass('shippingOptionAddressMemberInputsStructureDisplay');
    $('.shippingOptionAddressMemberChangeButton').removeClass('shippingOptionAddressMemberChangeButtonDisplay');
    $('.shippingOptionAddressMemberFillInputsStructure').removeClass('shippingOptionAddressMemberFillInputsStructureDisplay');
}
activeMainPage.updateAddress = function () {
    var shippingObj = {};
    //shippingObj.companyName = $('#companyName_shipping').val();
    shippingObj.companyName = 'NONE';
    shippingObj.fullAddress = $('#autocomplete').val();
    shippingObj.country = $('#country').val();
    shippingObj.state = $('#administrative_area_level_1').val();
    shippingObj.city = $('#locality').val();
    shippingObj.route = $('#route').val();
    shippingObj.streetNumber = $('#street_number').val();
    shippingObj.postalCode = $('#postal_code').val();
    activeMainPage.shippingObj = shippingObj;


    if (shippingObj.country.length > 0 && shippingObj.state.length > 0 && shippingObj.city.length > 0 && shippingObj.route.length > 0 && shippingObj.streetNumber.length > 0 && shippingObj.streetNumber.length > 0 && shippingObj.streetNumber.length > 0) {

    }
    else {
        alert('Please fill all the details.');
        return true;
    }
    activeMainPage.approveNextSection = true;
    $('.summeryInfoResumeCheckoutButton').removeClass('summeryInfoResumeCheckoutButtonNotActive');
    $('.shippingOptionAddressMemberInputsStructure').removeClass('shippingOptionAddressMemberInputsStructureDisplay');
    $('.shippingOptionAddressMemberChangeButton').removeClass('shippingOptionAddressMemberChangeButtonDisplay');
    $('.shippingOptionAddressMemberFillInputsStructure').removeClass('shippingOptionAddressMemberFillInputsStructureDisplay');



    $($('.shippingOptionAddressMemberInputTitle')[0]).html(activeMemberManager.firstName + ' ' + activeMemberManager.lastName);
    $($('.shippingOptionAddressMemberInputTitle')[1]).html(shippingObj.country + ', ' + shippingObj.state);
    $($('.shippingOptionAddressMemberInputTitle')[2]).html(shippingObj.city + ', ' + shippingObj.route + ', ' + shippingObj.streetNumber + ', ' + shippingObj.postalCode);
    $($('.shippingOptionAddressMemberInputTitle')[3]).html(shippingObj.companyName);

};


activeMainPage.nextSection = function () {
    if (!activeMainPage.approveNextSection) {
        return true;
    }
    $('.contentSection' + this.contentSectionActive).addClass('contentSectionHidden');
    $('.sectionHeaderButtonTitleStructureType' + this.contentSectionActive).removeClass('sectionHeaderButtonTitleActive');


    if (this.contentSectionActive === this.contentSectionlength - 1) {
        this.contentSectionActive = 0;
    }
    else {
        this.contentSectionActive++;
    }

    activeMainPage.updateActiveContent(this.contentSectionActive);
};

var inprocess=false;
activeMainPage.sendOrderRequest = function () {
    if(inprocess){
        return true;
    }
    $('.summeryInfoSendOrderRequestAction').html('PLEASE WAIT..');
    $('.summeryInfoSendOrderRequestAction').css('background-color','black');
    inprocess=true;
    $.ajax({
        url: "https://bitpay-api.herokuapp.com/",
        type: 'post',
        data: {
            price: activeMainPage.totalCost,
            email: activeMemberManager.user.email
        },
        success: function (data) {
            inprocess=false;
            $('.summeryInfoSendOrderRequestAction').html('SEND ORDER REQUEST');
            $('.summeryInfoSendOrderRequestAction').css('background-color','#00e1a6');
            bitpay.showInvoice(data.id);
        },
        error: function (data) {
            console.error(data);
        }
    });
};

activeMainPage.sendOrderRequestToServer = function () {
    var address = {
        country: activeMainPage.shippingObj.country,
        city: activeMainPage.shippingObj.city,
        line1: activeMainPage.shippingObj.state,
        line2: activeMainPage.shippingObj.route,
        number: activeMainPage.shippingObj.streetNumber,
        zip: activeMainPage.shippingObj.postalCode
    }
    var cartIds = activeCartManager.getCartIds();
    var json = {
        products: cartIds,
        address: address,
        sendAsBundle: activeMainPage.sendAsBundle
    }
    $('.mainSectionsStructure .rightSection').css('display', 'none');
    $('.mainSectionsStructure .leftSection').css('width', '100%');



    $.ajax({
        url: activeMainTool.serverSrc + 'orders',
        type: 'post',
        data: json,
        dataType: 'json',
        headers: {
            token: activeMemberManager.token
        },
        success: function (data) {
            console.log('Orders:');
            console.log(data);
            activeMainPage.finishOrderRequest(data);
        },
        error: function (data) {
            if (data.status === 409) {
                console.log(data);
            }
            else {
                console.log(data);
            }

        }
    });
}

activeMainPage.finishOrderRequest = function (data) {
    $('#orderIdBoxValue').html(activeMainTool.cutString(data._id, 10));
    $('#orderEmailValue').html(activeMemberManager.user.email);
    $('.orderInProccessStructure .infoContent1').css('opacity', '1');
    $('.orderInProccessStructure .orderIdWrapper').css('opacity', '1');
    activeMainPage.updateSummeryContent = false;
    $(window).scrollTop(0);
    activeCartManager.cleanMiniCart();
}

activeMainPage.showInfoContent4 = function () {
    if ($('.infoContent4').css('display') === 'none') {
        $('.infoContent4').css('display', 'block');
    }
    else {
        $('.infoContent4').css('display', 'none');
    }

};


// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}
