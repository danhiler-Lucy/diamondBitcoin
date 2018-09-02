function mainPage() {
    this.pageId = 1; //search
    this.activeColorType = 'white';
    this.activeProductView = 1;
    this.activeSortType = 0;
    this.onlyImageFilter = false;
    this.filterMenuMobileStatus = false;
    this.bgmFilter = false;
    this.activeFilterQueryId = 0;
    this.activeSortTypeDirection = 1; //low to high, 1=:high to low
    this.advancedBoxFilter = {
        open: false,
        inactive: false
    };
    this.newFilters = {}
    this.newFiltersMapping = {
        Color: { 1: 'D', 2: 'E', 3: 'F', 4: 'G', 5: 'H', 6: 'I', 7: 'J', 8: 'K', 9: 'L', 10: 'M', 11: 'N' },
        Clarity: { 1: 'IF', 2: 'VVS1', 3: 'VVS2', 4: 'VS1', 5: 'VS2', 6: 'SI1', 7: 'SI2' },
        Cut: { 1: 'F', 2: 'G', 3: 'VG', 4: 'EX' }
    }
    this.newModelchosen = ""
}

var activeMainPage = new mainPage();

//----------------- new filters implementation
$('.newFilterStep,#newFilterCarat,#newFilterPrice').on('slideStop', (e) => {
    activeMainPage.newFiltersUpdated()
})

$('#newMinPrice,#newMaxPrice,#newMinCarat,#newMaxCarat').on('focusout', (e) => {//manual input update
    const newValue = e.target.value
    const attName = e.target.getAttribute('ID')
    // $('#'+attName).val("$" + newValue)

    switch (attName) {
        case 'newMinPrice':
            activeMainPage.newFilters.fromPpc = newValue;
            break
        case 'newMaxPrice':
            activeMainPage.newFilters.toPpc = newValue;
            break
        case 'newMinCarat':
            activeMainPage.newFilters.fromCarat = newValue;
            break
        case 'newMaxPrice':
            activeMainPage.newFilters.toCarat = newValue;
            break
        default:
            break
        // $('#newFilterCarat').attr('data-slider-value')=newValue

    }

    activeMainPage.newFiltersUpdated()
})
$(".mainFilterButtonShapeImageStructure").on('click', (e) => {
    let modelsArr = (activeMainPage.newFilters.model) ? activeMainPage.newFilters.model.split(',') : []

    let modelClicked = e.currentTarget.getAttribute('type')
    const index = modelsArr.findIndex((model) => model === modelClicked)
    if (index !== -1) {
        modelsArr.splice(index, 1)
    } else {
        modelsArr.push(modelClicked)
    }

    activeMainPage.newFilters.model = modelsArr.join(',')
    activeMainPage.newFiltersUpdated()
})
document.querySelector('.report').addEventListener('click', (e) => {
    $('.report div').removeClass('selected')
    e.target.classList.add('selected')
    activeMainPage.newFilters.lab = e.target.innerHTML;

    activeMainPage.newFiltersUpdated()

})
$('.newFilterStep').on('slide', (e) => {
    let queryStr = "";
    for (let i = e.value[0]; i <= e.value[1]; i++) {
        queryStr += activeMainPage.newFiltersMapping[e.target.name][i] + ","
    }
    queryStr = queryStr.slice(0, -1)//remove last comma
    activeMainPage.newFilters[e.target.name] = queryStr

})

$('#newFilterCarat').on('slide', (e) => {
    $('#newMinCarat').val(e.value[0] + " ct")
    $('#newMaxCarat').val(e.value[1] + " ct")
    activeMainPage.newFilters.fromCarat = e.value[0];
    activeMainPage.newFilters.toCarat = e.value[1];

})
$('#newFilterPrice').on('slide', (e) => {
    $('#newMinPrice').val("$" + e.value[0])
    $('#newMaxPrice').val("$" + e.value[1])

    activeMainPage.newFilters.fromPpc = e.value[0];
    activeMainPage.newFilters.toPpc = e.value[1];

})
$('#newMinPrice,#newMaxPrice').on('keyUp', (e) => {
    console.log(e.target.value)
})

activeMainPage.newFiltersUpdated = function () {
    //building query
    let query = ""
    for (let attr in activeMainPage.newFilters) {
        if (activeMainPage.newFilters[attr])
            query += attr + "=" + activeMainPage.newFilters[attr] + "&"
    }
    query = query.slice(0, -1)//remove last comma

    activeProductManager.getFilterProducts(query)
}
//-------------------------


activeMainPage.getData = function () {
    //activeProductManager.getProducts();
}

activeMainPage.getData = function () {
    //activeProductManager.getProducts();
}


activeMainPage.checkIfMobile = function () {
    if (activeMainTool.viewType === 1) {
        //activeMainTool.comingSoonPopup();
        var contentScale = window.innerWidth / 990;
        $('.mainPage').css('transform', 'scale(' + contentScale + ')');
    }
}

$(window).resize(function () {
    //activeMainPage.checkIfMobile();
});

$(function () {
    //activeMainPage.checkIfMobile();
    activeMainPage.filterByUrlQuery();
    //activeMainPage.changeProductsView(3);

});


activeMainPage.config = function () {

    this.filterQuery = [];

    this.colorTypeYellowArray = [];
    this.colorTypeYellowArray['FY'] = 'FY';
    this.colorTypeYellowArray['FBY'] = 'FBY';
    this.colorTypeYellowArray['FLBGY'] = 'FLBGY';
    this.colorTypeYellowArray['Q-R'] = 'Q-R';
    this.colorTypeYellowArray['U-V'] = 'U-V';
    this.colorTypeYellowArray['W-X'] = 'W-X';
    this.colorTypeYellowArray['FVY'] = 'FVY';
    this.colorTypeYellowArray['FIY'] = 'FIY';
    this.colorTypeYellowArray['FLY'] = 'FLY';
    this.colorTypeYellowArray['Y-Z'] = 'Y-Z,W-X';
    this.colorTypeYellowArray['OTHERS'] = 'FY-B,FYB,FVLG,FP,FLGY,FLBY,FLBGY,FIOY,FDYB';
    this.filterTypeConfig = {
        type1: ['white', 'yellow'], //color
        type2: ['heart', 'heart', 'heart', 'heart', 'heart'], //shapes
        type3: ['intense', 'intense', 'intense', 'intense', 'intense'], //itensity
    }
    this.filterConfig = {
        type1: 0, //color
        type2: {
            clicked: 0,
            active: false,
            modelsArray: [],
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            minValue: 0,
            maxValue: 0,
            showHoverValue: false
        },
        type3: [1], //itensity
        type14: {
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            minValue: 0,
            maxValue: 0,
            showHoverValue: false
        }, //carat
        type4: {
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type5: {
            clicked: 0,
            active: false,
            min: -1,
            max: -1,
            inputFilter: false,
            hoverActive: false,
            showHoverValue: true
        },
        type6: {
            clicked: 0,
            active: false,
            min: -1,
            hoverActive: false,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type7: { //POLISH
            clicked: 0,
            hoverActive: false,
            active: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type8: { //symmetry
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type9: { //flour
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type10: { //lab
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type11: { //ppc
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type12: { //discount
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: false
        },
        type13: { //location
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
        type15: { //productid
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: false
        },
        type16: { //total price
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type17: { //depth
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type18: { //table
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type19: { //m1
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type20: { //m2
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type21: { //m3
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type22: { //crown height
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type23: { //crown angle
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type24: { //pavilion depth
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type25: { //pavilion angle
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: true,
            showHoverValue: true
        },
        type26: { //availability
            clicked: 0,
            active: false,
            hoverActive: false,
            min: -1,
            max: -1,
            inputFilter: false,
            showHoverValue: true
        },
    };
    this.filterConfig.type = [
        this.filterConfig.type0,
        this.filterConfig.type1,
        this.filterConfig.type2,
        this.filterConfig.type3,
        this.filterConfig.type4,
        this.filterConfig.type5,
        this.filterConfig.type6,
        this.filterConfig.type7,
        this.filterConfig.type8,
        this.filterConfig.type9,
        this.filterConfig.type10,
        this.filterConfig.type11,
        this.filterConfig.type12,
        this.filterConfig.type13,
        this.filterConfig.type14,
        this.filterConfig.type15,
        this.filterConfig.type16,
        this.filterConfig.type17,
        this.filterConfig.type18,
        this.filterConfig.type19,
        this.filterConfig.type20,
        this.filterConfig.type21,
        this.filterConfig.type22,
        this.filterConfig.type23,
        this.filterConfig.type24,
        this.filterConfig.type25,
        this.filterConfig.type26
    ]

    this.headerTitlesSort = [
        'price',
        'carat',
        'color',
        'clarity',
        'cut'
    ]

};
activeMainPage.config();

activeMainPage.checkLoginStatus = function () {
    if (!activeMemberManager.loginStatus) {
        var filterUrlQuery = activeMainTool.getUrlParam('productId', location.href);
        if (filterUrlQuery) {
            location.href = window.location.origin + '/productview?productid=' + filterUrlQuery;
        } else {
            activeMainTool.invalidToken();
        }
    } else {
        $('body').css('opacity', '1');
    }
}
activeMainPage.checkLoginStatus();

activeMainPage.setProducts = function (data) {
    var products = activeProductManager.setNewProducts(data);
    activeMainPage.activeSortTypeDirection = 0;
    products = activeMainPage.getBySortType(products);
    activeMainPage.showContentProducts(products);

}

var tryOpenProductPopupById = 20;
activeMainPage.openProductPopupById = function () {
    tryOpenProductPopupById--;
    if ($('.resultsViewStructure1 .itemImage').length === 1) {
        $('.resultsViewStructure1 .itemImage').click();
    } else {
        if (tryOpenProductPopupById <= 0) {
            tryOpenProductPopupById = 20;
        } else {
            setTimeout(function () {
                activeMainPage.openProductPopupById();
            }, 200);
            return false;
        }
    }
}

activeMainPage.filterByUrlQuery = function () {
    var filterUrlQuery = activeMainTool.getUrlParam('productId', location.href);
    var smartSearchValues = localStorage.getItem('smartSearchValue');
    if (filterUrlQuery) {
        $('#mainFilterType15Input').val(filterUrlQuery);
        activeMainPage.setFilter15();
        activeMainPage.openProductPopupById();
        $('.mainFilterAdvancedButton').click();
    } else if (smartSearchValues !== null) {
        $('#generalSearchInput').val(smartSearchValues);
        localStorage.removeItem('smartSearchValue');
        activeSmartSearchManager.clickInputManually();
    }

}

activeMainPage.showContentProducts = function (products) {
    var content = '';
    var resultsLength = activeMainTool.pageProductsLength;
    if (activeMainTool.pageProductsLength > products.length) {
        resultsLength = products.length;
    }
    for (var i = 0; i < resultsLength; i++) {
        content += activeProductCard.template1(products[i]);
        activeMainTool.loadImage(products[i].imageSrc);
    }

    activeMainPage.setProductsView3(products);
    $('.results').html(content);
    activeProductCard.checkAlreadyCartProducts();
    activeProductCard.checkAlreadyWishListCartProducts();
    activeMainTool.hideWrapper();
}

activeMainPage.changeSortTypeTitle = function () {
    activeMainTool.simulateClickOnElm('#sortFilterSelect');
}

activeMainPage.changeSortTypeDirection = function () {
    if (activeMainPage.activeSortType === 0) { //price
        $('#viewTable3TPriceTh').click();
    } else if (activeMainPage.activeSortType === 1) { //carat
        $('#viewTable3CaratTh').click();
    } else if (activeMainPage.activeSortType === 2) { //color
        $('#viewTable3ColorTh').click();
    }


    if (activeMainPage.activeSortTypeDirection === 1) { //change to high to low
        activeMainPage.activeSortTypeDirection = 0;
        $('.highToLowIcons .unactiveIcon').removeClass('displayNone');
        $('.lowToHighIcons .activeIcon').removeClass('displayNone');
        $('.highToLowIcons .activeIcon').addClass('displayNone');
        $('.lowToHighIcons .unactiveIcon').addClass('displayNone');
    } else {
        activeMainPage.activeSortTypeDirection = 1;
        $('.highToLowIcons .unactiveIcon').addClass('displayNone');
        $('.lowToHighIcons .activeIcon').addClass('displayNone');
        $('.highToLowIcons .activeIcon').removeClass('displayNone');
        $('.lowToHighIcons .unactiveIcon').removeClass('displayNone');
    }
    //activeMainPage.showBySortType();
}

activeMainPage.showBySortType = function () {
    var products = activeMainPage.getBySortType(activeProductManager.lastProductsFromServer);
    activeMainPage.setLoadingResults();
    activeMainPage.showContentProducts(products);
}

activeMainPage.getBySortType = function (products) {
    switch (activeMainPage.activeSortType) {
        case 0:
            { //price
                if (activeMainPage.activeSortTypeDirection === 0) {
                    return activeMainPage.sortArrayByhighestPrice(products);
                } else {
                    return activeMainPage.sortArrayByLowestPrice(products);
                }
                break;
            }
        case 1:
            { //carat
                if (activeMainPage.activeSortTypeDirection === 0) {
                    return activeMainPage.sortArrayByhighestCarat(products);
                } else {
                    return activeMainPage.sortArrayByLowestCarat(products);
                }
                break;
            }
        case 2:
            { //color
                if (activeMainPage.activeSortTypeDirection === 0) {
                    return products;
                } else {
                    return products;
                }
                break;
            }
        default:
            {
                break;
            }
    }
}

activeMainPage.getExValuesUrl = function () {
    var colorType = activeMainTool.getUrlParam('colorType', location.href);
    var activeTab = activeMainTool.getUrlParam('activeTab', location.href);
    if (colorType !== null) {
        if (colorType === '1') { //yellow
            $('#mainFilter_type1_1').click();

            return true;
        }
    }
    if (activeTab === 'recentlyViewed') {
        activeMainPage.changeProductsView(4);
    }
    $('#mainFilter_type1_0').click();

}

activeMainPage.setHeaderTitlesSort = function (index) {
    if (index === 0) { //price
        $('#viewTable3TPriceTh').click();
        $('#sortActionTypeButton').html(' price');
    } else if (index === 1) { //carat
        $('#viewTable3CaratTh').click();
        $('#sortActionTypeButton').html(' carat');
    } else if (index === 2) { //color
        $('#viewTable3ColorTh').click();
        $('#sortActionTypeButton').html(' color');
    }
    var activeButton = activeMainPage.activeSortType;
    $($('.searchHeaderResultsStructure .searchHeaderResultsButtonTitle')[activeButton]).removeClass('searchHeaderResultsButtonTitleActive');
    $($('.searchHeaderResultsStructure .searchHeaderResultsButtonTitle')[index]).addClass('searchHeaderResultsButtonTitleActive');
    activeMainPage.activeSortType = index;
    //activeMainPage.showBySortType();
}


activeMainPage.updateFilterQuery = function (type, value, sendToServer) {
    if (typeof sendToServer === 'undefined') {
        sendToServer = true;
    }
    var filterName = $('.filterAttr_' + type).attr('name');
    try {
        if (value.length === 0 || (value[0][0] === 0 && value[0][1] === 0)) {
            activeMainPage.filterQuery[filterName] = [];
        } else {
            activeMainPage.filterQuery[filterName] = value;
        }
    } catch (e) {
        console.log('updateFilterQuery err');
        activeMainPage.filterQuery[filterName] = value;
    }


    if ($('.filterAttr_' + type).attr('filterType') === '0') {
        if (type === '26') {
            if (activeMainPage.filterQuery[filterName].length === 2) {
                $('.mainFilterRangeBox_' + type + ' .mainFilterRangeBoxTitleSeparateMin').html('ALL');
            } else {
                $('.mainFilterRangeBox_' + type + ' .mainFilterRangeBoxTitleSeparateMin').html(activeMainPage.filterQuery[filterName].toString());
            }
        } else {
            $('.mainFilterRangeBox_' + type + ' .mainFilterRangeBoxTitleSeparateMin').html(activeMainPage.filterQuery[filterName].toString());
        }

    }
    if (sendToServer) {
        activeMainPage.setFiltersQueryToServer();
    }
}

activeMainPage.clearInputFilter = function () {
    activeMainPage.setFiltersQueryToServer();
}


activeMainPage.setColorsType = function (type) {
    var indexType = '4';
    for (var i = 0; i <= $('.mainFilterRangeButton_' + indexType).length; i++) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonHover');
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
    }
    activeMainPage.filterConfig.type[indexType].clicked = 2;
    activeMainPage.filterConfig.type[indexType].active = true;

    if (type === 0) { //white
        activeMainPage.filterConfig.type[indexType].min = 0;
        activeMainPage.filterConfig.type[indexType].max = 14;
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', ' inline-block');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').html('D');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').html('U-V');
    } else { //yellow
        activeMainPage.filterConfig.type[indexType].min = 15;
        activeMainPage.filterConfig.type[indexType].max = 19;
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', ' inline-block');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').html('FVY');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').html('OTHERS');
        activeMainPage.activeColorType === 'yellow';
    }
    $('.mainFilterRangeBox_' + indexType).addClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
    for (var i = activeMainPage.filterConfig.type[indexType].min; i < activeMainPage.filterConfig.type[indexType].max + 1; i++) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonHover');
        $($('.mainFilterRangeButton_' + indexType)[i]).addClass('mainFilterRangeButtonActive');
    }
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleHover');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').removeClass('mainFilterRangeBoxTitleHover');
    activeMainPage.setFilterQuery(indexType);
}

activeMainPage.clearFiltersInput = function () {
    activeMainPage.setDefaultFilter(4);
}

activeMainPage.showFiltersForWhite = function () {
    $('.filterAttr_12').css('display', 'block');
    $('.filterAttr_6').css('display', 'block');
    $('.mainFilterShortCutButtonWrapper').css('display', 'block');
    $('.filterAttr_7').css({ 'margin-right': '18px', 'margin-left': '0px' });

    if (window.innerWidth > 1020) {
        $('.mainFilterRangeBoxStructure_4').removeClass('mainFilterGridHoverBoxWrapperShow');
        $('.mainFilterRangeBoxStructure_4').removeClass('mainFilterRangeBoxStructure_4_show');
        $('.mainFilterRangeBox_4').removeClass('mainFilterRangeBox_4_show');
        $('.mainFilterRangeButton_4').removeClass('mainFilterRangeButton_4_show');
        //$('.mainFilterRangeBox_13').removeClass('mainFilterButton1gridLast');
        //$('.mainFilterRangeBox_13').addClass('mainFilterButton1gridSm');
        $('.filterAttr_4 .mainFilter1gridTitle').css('display', 'block');
        $('.mainFilterRangeBox_5').removeClass('mainFilterButton1gridLast');

        $('.mainFilterRangeBox_19').addClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_23').addClass('mainFilterButton1gridLast');

        $('.mainFilterRangeBox_18').removeClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_22').removeClass('mainFilterButton1gridLast');
    } else {
        $('.mainFilterRangeBox_19').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_19').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_23').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_23').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_25').addClass('mobileMainFilterButtonLast');

        $('.mainFilterRangeBox_18').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_20').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_22').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_24').removeClass('mobileMainFilterButtonLast');

    }

}

activeMainPage.openFilterRangePopUp = function () {
    $('.mainFilterShortCutButtonWrapper').css('display', 'none');
}

activeMainPage.showFiltersForYellow = function () {
    //$('.filterAttr_12').css('display', 'none');
    //$('.filterAttr_6').css('display', 'none');
    $('.filterAttr_7').css({ 'margin-right': '10px', 'margin-left': '10px' });

    $('.mainFilterShortCutButtonWrapper').css('display', 'none');
    activeMainPage.clearInputFilter12();
    activeMainPage.setDefaultFilter(6, false);





    if (window.innerWidth > 1020) {
        $('.mainFilterRangeBox_11').removeClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_5').addClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_17').removeClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_21').removeClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_18').addClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBox_22').addClass('mainFilterButton1gridLast');
        $('.mainFilterRangeBoxStructure_4').addClass('mainFilterGridHoverBoxWrapperShow');
        $('.mainFilterRangeBoxStructure_4').addClass('mainFilterRangeBoxStructure_4_show');
        $('.mainFilterRangeBox_4').addClass('mainFilterRangeBox_4_show');
        $('.mainFilterRangeButton_4').addClass('mainFilterRangeButton_4_show');
        $('.filterAttr_4 .mainFilter1gridTitle').css('display', 'none');
    } else {
        $('.mainFilterRangeBox_17').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_19').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_21').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_18').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_20').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_22').addClass('mobileMainFilterButtonLast');

        $('.mainFilterRangeBox_23').removeClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_24').addClass('mobileMainFilterButtonLast');
        $('.mainFilterRangeBox_25').removeClass('mobileMainFilterButtonLast');
    }
    //$('.mainFilterRangeBox_13').addClass('mainFilterButton1gridLast');
    //$('.mainFilterRangeBox_13').removeClass('mainFilterButton1gridSm');
}


activeMainPage.updateFilterValue = function (type, value) {
    switch (type) {
        case 1: //color
            if (value === 0) { //white
                activeMainPage.activeColorType = 'white';
                activeMainPage.showFiltersForWhite();
                //activeMainPage.setDefaultFilter(4);
                $('#mainFilter_type1_0').addClass('mainFilterButtonColorWhiteActive');
                $('#mainFilter_type1_1').removeClass('mainFilterButtonColorYellowActive');
                activeMainPage.filterConfig.type1 = 0;
                //activeMainPage.updateFilterQuery(1,'white');
                $('.mainFilterColorWhite').removeClass('displayNone');
                $('.mainFilterColorYellow').removeClass('displayBlock');
                var filterUrlQuery = activeMainTool.getUrlParam('productId', location.href);
                if (filterUrlQuery) {
                    return true;
                }
                activeMainPage.clearFiltersInput();
                //activeMainPage.setFiltersQueryToServer();
                //activeMainPage.setColorsType(0);

            } else if (value === 1) { //yellow
                activeMainPage.showFiltersForYellow();
                activeMainPage.activeColorType = 'yellow';

                $('#mainFilter_type1_0').removeClass('mainFilterButtonColorWhiteActive');
                $('#mainFilter_type1_1').addClass('mainFilterButtonColorYellowActive');
                activeMainPage.filterConfig.type1 = 1;

                $('.mainFilterColorWhite').addClass('displayNone');
                $('.mainFilterColorYellow').addClass('displayBlock');
                activeMainPage.clearFiltersInput();


            }
            break;
        case 2:
            if ($.inArray(value, activeMainPage.filterConfig.type2.modelsArray) !== -1) {
                activeMainPage.filterConfig.type2.modelsArray = activeMainTool.removeValueFromArray(activeMainPage.filterConfig.type2.modelsArray, value);
            } else {
                activeMainPage.filterConfig.type2.modelsArray.push(value);
            }
            if (activeMainPage.filterConfig.type2.modelsArray.length > 0) {
                $('.filterAttr_2 .mainFilter1gridTitleIcon').html(activeMainPage.filterConfig.type2.modelsArray.length);
                $('.filterAttr_2 .mainFilter1gridTitleIcon').css('display', 'block');
                $('.filterAttr_2 .mainFilter1gridTitle').css('color', 'black');
            } else {
                $('.filterAttr_2 .mainFilter1gridTitleIcon').html('');
                $('.filterAttr_2 .mainFilter1gridTitleIcon').css('display', 'none');
                $('.filterAttr_2 .mainFilter1gridTitle').css('color', '#a6adb8');
            }
            activeMainPage.updateFilterQuery(2, activeMainPage.filterConfig.type2.modelsArray, false);
            break;
        case 3:
            if ($('#mainFilter_type3_' + value).hasClass('mainFiltertype3Active')) {
                $('#mainFilter_type3_' + value).removeClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3 = activeMainTool.removeValueFromArray(activeMainPage.filterConfig.type3, value);
            } else {
                $('#mainFilter_type3_' + value).addClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3.push(value);
            }
            break;
        case 14:
            if ($('#mainFilter_type3_' + value).hasClass('mainFiltertype3Active')) {
                $('#mainFilter_type3_' + value).removeClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3 = activeMainTool.removeValueFromArray(activeMainPage.filterConfig.type3, value);
            } else {
                $('#mainFilter_type3_' + value).addClass('mainFiltertype3Active');
                activeMainPage.filterConfig.type3.push(value);
            }
            break;
        default:
            break;
    }
};


//Start: Shapes//
//setActiveShape
$(".mainFilterButtonShapeImageStructure").click(
    function () {
        var elm = $(this);
        var elmValue = elm.attr('type');
        if ($.inArray(elmValue, activeMainPage.filterConfig.type2.modelsArray) !== -1) {
            $($(elm).find('.mainFilterButtonShapeImage')[0]).removeClass('mainFilterButtonShapeImageHidden');
            $($(elm).find('.mainFilterButtonShapeImageActive')[0]).removeClass('mainFilterButtonShapeImageActiveClicked');
            $($(elm).find('.mainFilterButtonShapeImageActiveTitle')[0]).removeClass('mainFilterButtonShapeImageActiveTitleHidden');
        } else {
            $($(elm).find('.mainFilterButtonShapeImage')[0]).addClass('mainFilterButtonShapeImageHidden');
            $($(elm).find('.mainFilterButtonShapeImageActive')[0]).addClass('mainFilterButtonShapeImageActiveClicked');
            $($(elm).find('.mainFilterButtonShapeImageActiveTitle')[0]).addClass('mainFilterButtonShapeImageActiveTitleHidden');
        }
        activeMainPage.updateFilterValue(2, elmValue);
    }
);


activeMainPage.updateFilterValueFromDropdown = function (elm, filterNum, value) {
    if ($(elm).hasClass('searchHeaderResultsButtonTitleActive')) {
        $(elm).removeClass('searchHeaderResultsButtonTitleActive');
    } else {
        $(elm).addClass('searchHeaderResultsButtonTitleActive');
    }

    activeMainPage.updateFilterValue(filterNum, value);
}

activeMainPage.clearFilter2 = function () {
    $('.filterAttr_2 .mainFilter1gridTitleIcon').html('');
    $('.filterAttr_2 .mainFilter1gridTitleIcon').css('display', 'none');
    $('.filterAttr_2 .mainFilter1gridTitle').css('color', '#a6adb8');
    var elms = $('.mainFilterButtonShapeImageStructure');
    for (var i = 0; i < elms.length; i++) {
        $($(elms[i]).find('.mainFilterButtonShapeImage')[0]).removeClass('mainFilterButtonShapeImageHidden');
        $($(elms[i]).find('.mainFilterButtonShapeImageActive')[0]).removeClass('mainFilterButtonShapeImageActiveClicked');
        $($(elms[i]).find('.mainFilterButtonShapeImageActiveTitle')[0]).removeClass('mainFilterButtonShapeImageActiveTitleHidden');
    }

    for (var i = 0; i < $('#moreModelsButton .searchHeaderResultsButtonTitle').length; i++) {
        $($('#moreModelsButton .searchHeaderResultsButtonTitle')[i]).removeClass('searchHeaderResultsButtonTitleActive');
    }
    activeMainPage.filterConfig.type2.modelsArray = [];
    activeMainPage.updateFilterQuery(2, activeMainPage.filterConfig.type2.modelsArray);
}



//setHoverShape
$(".mainFilterButtonShapeImageStructure").hover(
    function () {
        var elm = $(this);
        $($(elm).find('.mainFilterButtonShapeImage')[0]).addClass('mainFilterButtonShapeImagePaddingTop');
        $($(elm).find('.mainFilterButtonShapeImageActive')[0]).addClass('mainFilterButtonShapeImageActiveDisplay');
    },
    function () {
        var elm = $(this);
        $($(elm).find('.mainFilterButtonShapeImage')[0]).removeClass('mainFilterButtonShapeImagePaddingTop');
        $($(elm).find('.mainFilterButtonShapeImageActive')[0]).removeClass('mainFilterButtonShapeImageActiveDisplay');
    }
);

//End: Shapes//

activeMainPage.setHoverRangeWrapper = function (indexType, thisElm) {
    var elm = $(thisElm);
    activeMainPage.filterConfig.type[indexType].hoverActive = true;
    $('.mainFilterRangeBox_' + indexType).removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');

    // $($(elm).find( '.mainFilter1gridHoverBoxStructure')[0]).css('display','block');
    $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).addClass('mainFilterRangeBoxStructureDisplay');
    setTimeout(function () {
        $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).addClass('mainFilterRangeBoxStructureOpacity');
        $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).addClass('mainFilterRangeBoxStructureHeight');
    }, 10);

    setTimeout(function () {
        if ($(elm).is(":hover")) {

        } else {
            activeMainPage.setUnHoverRangeWrapper(indexType, thisElm);
        }
    }, 1000);
}

activeMainPage.setUnHoverRangeWrapper = function (indexType, thisElm) {
    var elm = $(thisElm);
    activeMainPage.filterConfig.type[indexType].hoverActive = false;
    //$( '.mainFilterRangeBoxStructure_'+indexType).removeClass('mainFilterRangeBoxStructureDisplay');
    $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).removeClass('mainFilterRangeBoxStructureOpacity');

    if (activeMainPage.filterConfig.type[indexType].showHoverValue) {
        if (activeMainPage.filterConfig.type[indexType].clicked === 0) {
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            //$('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMax').html('');
            //$('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxTitleSeparateMin').html('');
        } else if (activeMainPage.filterConfig.type[indexType].clicked === 1) {
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').html('');
        } else {

        }

        //$('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxSumTitleActive').html('D - L');
    }

    if (activeMainPage.filterConfig.type[indexType].active) {
        $('.mainFilterRangeBox_' + indexType).addClass('mainFilterRangeBoxActive');
        $('.mainFilterRangeBox_' + indexType).addClass('mainFilterRangeBoxActive');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');

        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');

    } else {
        $('.mainFilterRangeBox_' + indexType).removeClass('mainFilterRangeBoxActive');
        $('.mainFilterRangeBox_' + indexType).removeClass('mainFilterRangeBoxActive');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');

    }
    setTimeout(function () {
        if (!$($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).hasClass('mainFilterRangeBoxStructureOpacity')) {
            $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).removeClass('mainFilterRangeBoxStructureHeight');
            $($(elm).find('.mainFilterRangeBoxStructure_' + indexType)[0]).removeClass('mainFilterRangeBoxStructureDisplay');
        }
    }, 600);
    for (var i = activeMainPage.filterConfig.type[indexType].min - 1; i >= 0; i--) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonHover');
    }
    for (var i = activeMainPage.filterConfig.type[indexType].max + 1; i < 9; i++) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonHover');
    }
    var activeTitleButton = '';
    if (indexType === '15') {
        var productid = $('#mainFilterType15Input').val();
        if (productid === '') {
            activeMainPage.setFilter15();
        }
        return true;
    }
    if (activeMainPage.filterConfig.type[indexType].min !== -1) {
        if (indexType === '14') {
            //var minFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('min');
        } else {
            var minFilter = $($('.mainFilterRangeButton_' + indexType)[activeMainPage.filterConfig.type[indexType].min]).attr('name');
        }

        activeTitleButton += minFilter;
    }
    if (activeMainPage.filterConfig.type[indexType].max !== -1) {
        if (indexType === '14') {
            //var maxFilter = $($('.mainFilterRangeButton_'+indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('max');
        } else {
            var maxFilter = $($('.mainFilterRangeButton_' + indexType)[activeMainPage.filterConfig.type[indexType].max]).attr('name');
        }
        activeTitleButton += ' - ' + maxFilter;
    }
    if (activeMainPage.filterConfig.type[indexType].inputFilter) {
        return true;
    }
    if (indexType !== '14') {
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
    }


}

//setHoverCaratStructure
$(".mainFilterRangeBoxTitle").click(
    function () {
        var thisElm = $(this).parents()[0];
        var type = $(thisElm).attr("type");
        if (activeMainPage.filterConfig.type[type].hoverActive) {
            activeMainPage.setUnHoverRangeWrapper(type, thisElm);
            return true;
        }
        activeMainPage.setHoverRangeWrapper(type, thisElm);
    }
);

activeMainPage.closeFilterRangePopUp = function (indexType) {
    var thisElm = $('.filterAttr_' + indexType);
    var type = $(thisElm).attr("type");
    if (activeMainPage.filterConfig.type[type].hoverActive) {
        activeMainPage.setUnHoverRangeWrapper(type, thisElm);
        return true;
    }
}

activeMainPage.setValueOfHoverRangeButton = function (indexType, thisElm) {
    var elm = $(thisElm);
    var value = parseInt($(thisElm).attr('value'));
    if (activeMainPage.filterConfig.type[indexType].showHoverValue) {
        if (activeMainPage.filterConfig.type[indexType].clicked === 0) { //is min
            var nameElm = $($('.mainFilterRangeButton_' + indexType)[value]).attr('name');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').addClass('mainFilterRangeBoxTitleHover');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').html(nameElm);
        } else if (activeMainPage.filterConfig.type[indexType].clicked === 1) { //is max
            var nameElm = $($('.mainFilterRangeButton_' + indexType)[value]).attr('name');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleHover');
            $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').html(nameElm);
        } else {


        }
    }
}



activeMainPage.setActiveRangeButton_14 = function (indexType, thisElm) {
    var elm = $(thisElm);
    var value = parseInt($(thisElm).attr('value'));
    activeMainPage.filterConfig.type14.clicked++
    if (activeMainPage.filterConfig.type14.clicked === 2 && activeMainPage.filterConfig.type14.min === value) {
        activeMainPage.filterConfig.type14.clicked = 3;
    }
    if (activeMainPage.filterConfig.type14.clicked === 3) {
        //if($($('.mainFilterRangeButton_'+indexType)[value]).hasClass('mainFilterRangeButtonActive')){
        //$($('.mainFilterRangeButton_'+indexType)[value]).removeClass('mainFilterRangeButtonActive');
        var minValue = '';
        var maxValue = '';
        activeMainPage.filterConfig.type[indexType].minValue = 0;
        activeMainPage.filterConfig.type[indexType].maxValue = 0;
        activeMainPage.filterConfig.type14.active = false;
        activeMainPage.filterConfig.type14.clicked = 0;
        activeMainPage.filterConfig.type14.min = 0;
        activeMainPage.filterConfig.type14.max = 0;
        var activeTitleButton = '';
        for (var i = 0; i < $('.mainFilterRangeButton_' + indexType).length; i++) {
            $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
        }
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
        activeMainPage.setFilterQuery(indexType);
        return true;
        //}
    } else if (activeMainPage.filterConfig.type14.clicked === 1) {
        //else{
        for (var i = 0; i < $('.mainFilterRangeButton_' + indexType).length; i++) {
            $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
        }
        $($('.mainFilterRangeButton_' + indexType)[value]).addClass('mainFilterRangeButtonActive');
        activeMainPage.filterConfig.type14.min = value
        activeMainPage.filterConfig.type14.max = value
        var minValue = $($('.mainFilterRangeButton_' + indexType)[value]).attr('min');
        var maxValue = $($('.mainFilterRangeButton_' + indexType)[value]).attr('max');
        activeMainPage.filterConfig.type[indexType].minValue = minValue;
        activeMainPage.filterConfig.type[indexType].maxValue = maxValue;
        // }
    } else if (activeMainPage.filterConfig.type14.clicked === 2) {
        if (activeMainPage.filterConfig.type14.min > value) {
            var minElm = activeMainPage.filterConfig.type14.min;
            activeMainPage.filterConfig.type14.min = value;
            activeMainPage.filterConfig.type14.max = minElm;
        } else {
            activeMainPage.filterConfig.type14.max = value;
        }
        for (var i = activeMainPage.filterConfig.type14.min; i <= activeMainPage.filterConfig.type14.max; i++) {
            $($('.mainFilterRangeButton_' + indexType)[i]).addClass('mainFilterRangeButtonActive');
        }
        //$($('.mainFilterRangeButton_'+indexType)[value]).addClass('mainFilterRangeButtonActive');
        var minValue = $($('.mainFilterRangeButton_' + indexType)[activeMainPage.filterConfig.type14.min]).attr('min');
        var maxValue = $($('.mainFilterRangeButton_' + indexType)[activeMainPage.filterConfig.type14.max]).attr('max');
        activeMainPage.filterConfig.type[indexType].minValue = minValue;
        activeMainPage.filterConfig.type[indexType].maxValue = maxValue;

    }
    minValue = activeMainTool.numberWithCommas(minValue, 2);
    maxValue = activeMainTool.numberWithCommas(maxValue, 2);
    $('#mainFilterType14MinInput').val(minValue);
    $('#mainFilterType14MaxInput').val(maxValue);
    $('#mainFilterType14MaxInput').val(maxValue).change();

}

activeMainPage.setActiveRangeButton = function (indexType, thisElm) {
    var elm = $(thisElm);

    activeMainPage.filterConfig.type[indexType].hoverActive = true;
    var value = parseInt($(thisElm).attr('value'));
    activeMainPage.filterConfig.type[indexType].active = true;
    var activeButtonsLength = $('.filterAttr_' + indexType + ' .mainFilterRangeButtonActive').length;
    if (indexType === '14') {
        activeMainPage.setActiveRangeButton_14(indexType, thisElm);
        return true;
    }
    if ($($('.mainFilterRangeButton_' + indexType)[value]).hasClass('mainFilterRangeButtonActive')) {
        $($('.mainFilterRangeButton_' + indexType)[value]).removeClass('mainFilterRangeButtonActive');
    } else {
        $($('.mainFilterRangeButton_' + indexType)[value]).addClass('mainFilterRangeButtonActive');
    }
    var activeButtonsLength = $('.filterAttr_' + indexType + ' .mainFilterRangeButtonActive').length;
    if (activeButtonsLength === 0) {
        activeMainPage.filterConfig.type[indexType].active = false;
    }


    activeMainPage.setInputsValues(indexType);
    activeMainPage.setFilterQuery(indexType);

}

activeMainPage.setDefaultFilter = function (indexType, sendToServer) {
    if (typeof sendToServer === 'undefined') {
        sendToServer = true;
    }
    for (var i = 0; i <= $('.mainFilterRangeButton_' + indexType).length; i++) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonHover');
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
    }
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMin').html('');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitleSeparateMax').html('');
    $('.mainFilterRangeBox_' + indexType).removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    activeMainPage.filterConfig.type[indexType].min = -1;
    activeMainPage.filterConfig.type[indexType].clicked = 0;
    activeMainPage.filterConfig.type[indexType].max = -1;
    activeMainPage.filterConfig.type[indexType].active = false;
    activeMainPage.setInputsValues(indexType);
    activeMainPage.setFilterQuery(indexType, sendToServer);
}

activeMainPage.setFilterQuery = function (indexType, sendToServer) {
    if (typeof sendToServer === 'undefined') {
        sendToServer = true;
    }
    var activeButtonsLength = $('.filterAttr_' + indexType + ' .mainFilterRangeButtonActive').length;
    var activeButtonsArray = $('.filterAttr_' + indexType + ' .mainFilterRangeButtonActive');
    var activeValues = [];
    if (indexType === '15') {
        var minValue = activeMainPage.filterConfig.type[indexType].minValue;
        activeValues.push(minValue);
    } else if ($('.filterAttr_' + indexType).attr('filterType') === '1') { // min:0.5-1.5 -max:12.5-14.5 
        var minValue = activeMainPage.filterConfig.type[indexType].minValue;
        var maxValue = activeMainPage.filterConfig.type[indexType].maxValue;
        var values = [minValue, maxValue];
        activeValues.push(values);
    } else if (indexType === '4' && activeMainPage.activeColorType === 'yellow') {
        //          var minValue = activeMainPage.filterConfig.type[indexType].min;
        // var maxValue = activeMainPage.filterConfig.type[indexType].max;
        //if(minValue>maxValue){
        //   maxValue=minValue;
        // }

        for (var i = 0; i < $('.mainFilterColorYellow .mainFilterRangeButtonActive').length; i++) {
            activeValues.push(activeMainPage.colorTypeYellowArray[$(activeButtonsArray[i]).attr('name')]);
        }

    } else if (indexType === '14') {
        var minValue = activeMainPage.filterConfig.type[indexType].minValue;
        var maxValue = activeMainPage.filterConfig.type[indexType].maxValue;
    } else {
        for (var i = 0; i < activeButtonsLength; i++) {
            if ($('.filterAttr_' + indexType).attr('filterType') === '0') { // D-F
                activeValues.push($(activeButtonsArray[i]).attr('name'));
            }
        }
    }

    activeMainPage.updateFilterQuery(indexType, activeValues, sendToServer);
}

activeMainPage.openFilterAdvancedBox = function () {
    if (this.advancedBoxFilter.inactive) {
        return true;
    }
    if (this.advancedBoxFilter.open) { //needToClose
        //$('.mainFilterAdvancedWrapper').removeClass('mainFilterAdvancedButtonActive');
        //$('.mainFilterAdvancedStructure').addClass('mainFilterAdvancedButtonHidden');
        //$('.mainFiltersWrapper').removeClass('mainFiltersWrapperActive');
        //$('.mainfilterStructure').removeClass('mainfilterStructureOpened');
        //$('.mainfilterStructure').css('overflow','hidden');
        this.advancedBoxFilter.inactive = true;
        //if(window.innerWidth<1020){
        $('.mainFilterAdvancedStructure').removeClass('mainFilterAdvancedStructureDisplay');
        $('.mainFilterAdvancedStructure').css('overflow', 'hidden');
        //}
        setTimeout(function () {
            activeMainPage.advancedBoxFilter.inactive = false;
            // $('.mainFilterAdvancedStructure').removeClass('mainFilterAdvancedStructureDisplay');
        }, 600);
        this.advancedBoxFilter.open = false;
    } else {
        if (window.innerWidth < 1020) {
            $('body').scrollTop(0);
        }

        //$('.mainFilterAdvancedStructure').removeClass('mainFilterAdvancedButtonHidden');
        //     $('.mainFiltersWrapper').addClass('mainFiltersWrapperActive');
        //  $('.mainFilterAdvancedWrapper').addClass('mainFilterAdvancedButtonActive');

        //  $('.mainfilterStructure').addClass('mainfilterStructureOpened');
        $('.mainFilterAdvancedStructure').addClass('mainFilterAdvancedStructureDisplay');
        //$('.mainfilterStructure').css('overflow','hidden');
        this.advancedBoxFilter.inactive = true;
        setTimeout(function () {
            activeMainPage.advancedBoxFilter.inactive = false;
            $('.mainFilterAdvancedStructure').css('overflow', 'visible');
        }, 600);
        this.advancedBoxFilter.open = true;
    }
};


activeMainPage.clickExportAction = function (type) {
    var activeWrapper = '#productTableView3_wrapper';
    if (activeMainPage.activeProductView === 4) {
        var activeWrapper = '#recentlyViewedResultsTable_wrapper';
    }
    switch (type) {
        case 0:
            {
                $(activeWrapper + ' .exportSelectedButton').click();
                break;
            }
        case 1:
            {
                $(activeWrapper + ' .exportExcelButton').click();
                break;
            }
        case 2:
            {
                $(activeWrapper + ' .buttons-csv').click();
                break;
            }
        case 3:
            {
                $(activeWrapper + ' .buttons-pdf').click();
                break;
            }
        case 4:
            {
                $(activeWrapper + ' .buttons-print').click();
                break;
            }
        case 5:
            {
                $(activeWrapper + ' .buttons-copy').click();
                break;
            }
        default:
            {
                break;
            }
    }
}

activeMainPage.toggleActionPopup = function (type, toClose) {
    if (typeof toClose === 'undefined') {
        toClose = false;
    }
    if (toClose) {
        $('#sortActionButton .resultsActionButtonContent').css('display', 'none');
        $('#exportActionButton .resultsActionButtonContent').css('display', 'none');
        return true;
    } else {
        var isSortVisible = $('#sortActionButton .resultsActionButtonContent').css('display') === 'block';
        var isExportVisible = $('#exportActionButton .resultsActionButtonContent').css('display') === 'block';
        var isModelsVisible = $('#moreModelsButton .resultsActionButtonContent').css('display') === 'block';
    }


    if (type === 1) {
        if (isExportVisible) {
            $('#exportActionButton .resultsActionButtonContent').css('display', 'none');
        }
        if (isSortVisible) {
            $('#sortActionButton .resultsActionButtonContent').css('display', 'none');
        } else {
            $('#sortActionButton .resultsActionButtonContent').css('display', 'block');
        }
    } else if (type === 2) { //export
        if (activeMainPage.activeProductView === 4) { //recently viewed
            $('.searchHeaderResultsButtonTitlePrint').css('display', 'none');
            $('.searchHeaderResultsButtonTitleCopy').css('display', 'none');
            $('.searchHeaderResultsButtonTitleSelected').css('display', 'none');
        } else {
            $('.searchHeaderResultsButtonTitlePrint').css('display', 'block');
            $('.searchHeaderResultsButtonTitleCopy').css('display', 'block');
            $('.searchHeaderResultsButtonTitleSelected').css('display', 'block');
        }
        if (isSortVisible) {
            $('#sortActionButton .resultsActionButtonContent').css('display', 'none');
        }
        if (isExportVisible) {
            $('#exportActionButton .resultsActionButtonContent').css('display', 'none');
        } else {
            $('#exportActionButton .resultsActionButtonContent').css('display', 'block')
        }
    } else if (type === 3) { //models
        if (isModelsVisible) {
            $('#moreModelsButton .resultsActionButtonContent').css('display', 'none');
        } else {
            $('#moreModelsButton .resultsActionButtonContent').css('display', 'block');
        }
    }
}

$(".mainFilterAdvancedButton").click(
    function () {
        if (window.innerWidth > 1020) {
            activeMainPage.openFilterAdvancedBox();
        }
    }
);

//setHoverCaratStructure
$(".mainFilterRangeBox").hover(
    function () {

    },
    function () {
        var type = $(this).attr("type");
        if (typeof type === 'undefined') {

        } else {
            activeMainPage.setUnHoverRangeWrapper(type, this);
        }


    }
);

$(".filterAttr_14 input").click(
    function () {
        var type = $(this).attr("type");
        var indexType = '14';
        for (var i = 0; i < $('.mainFilterRangeButton_' + indexType).length; i++) {
            $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
        }
        activeMainPage.filterConfig.type14.clicked = 0;
    }
);
//setActiveCaratInputs
$(".mainFilterRangeButton").click(
    function () {
        var type = $(this).attr("type");
        activeMainPage.setActiveRangeButton(type, this);
        /*
   var elm=$(this);
    var value=parseInt($(this).attr('value'));
    activeMainPage.filterConfig.type14.active = true;
    if(activeMainPage.filterConfig.type14.clicked===0){ //value is min
        //for(var i=value;i<valu;i++){
            $($('.mainFilter1gridHoverBoxTableTd')[value]).removeClass('mainFilter1gridHoverBoxTableTdHover');
            $($('.mainFilter1gridHoverBoxTableTd')[value]).addClass('mainFilter1gridHoverBoxTableTdActive');
        //}
        activeMainPage.filterConfig.type14.min=value;
        activeMainPage.filterConfig.type14.clicked++;
    }
    else if(activeMainPage.filterConfig.type14.clicked===1){ //value is max
          if(activeMainPage.filterConfig.type14.min>value){
            for(var i=value;i<activeMainPage.filterConfig.type14.min;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.clicked++;
            activeMainPage.filterConfig.type14.max=activeMainPage.filterConfig.type14.min;
            activeMainPage.filterConfig.type14.min=value;
        }
        else{
             for(var i=value;i>activeMainPage.filterConfig.type14.min;i--){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.clicked++;
            activeMainPage.filterConfig.type14.max=value;
            
        }
            
            
    }
    else{
        activeMainPage.filterConfig.type14.clicked=2;
        if(value===activeMainPage.filterConfig.type14.min || value===activeMainPage.filterConfig.type14.max){
            for(var i=0;i<=9;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
           
            activeMainPage.filterConfig.type14.min=0;
            activeMainPage.filterConfig.type14.clicked=0;
            activeMainPage.filterConfig.type14.max=0;
            activeMainPage.filterConfig.type14.active = false;
        }
        else if(value>activeMainPage.filterConfig.type14.max){
            for(var i=value;i>=activeMainPage.filterConfig.type14.max;i--){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.max=value;
        }
        else if(value>activeMainPage.filterConfig.type14.min){
            for(var i=value+1;i<=activeMainPage.filterConfig.type14.max;i++){
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdActive');
            }
            activeMainPage.filterConfig.type14.max=value;
        }
        else if(value<activeMainPage.filterConfig.type14.min){
                for(var i=value;i<activeMainPage.filterConfig.type14.min;i++){
                    $($('.mainFilter1gridHoverBoxTableTd')[i]).removeClass('mainFilter1gridHoverBoxTableTdHover');
                    $($('.mainFilter1gridHoverBoxTableTd')[i]).addClass('mainFilter1gridHoverBoxTableTdActive');
                }
                activeMainPage.filterConfig.type14.min=value;
            }
            
        }
        activeMainPage.setInputsValues();
        
*/
    }
);

//End: carat//
activeMainPage.setInputsValues = function (indexType) {
    maxIndex = activeMainPage.filterConfig.type[indexType].max;
    if (activeMainPage.filterConfig.type[indexType].min > activeMainPage.filterConfig.type[indexType].max) {
        var maxIndex = activeMainPage.filterConfig.type[indexType].min;
    }

    var minValue = $($('.mainFilter1gridHoverBoxTableTd')[activeMainPage.filterConfig.type[indexType].min]).attr('min');
    var maxValue = $($('.mainFilter1gridHoverBoxTableTd')[maxIndex]).attr('max');
    if (activeMainPage.filterConfig.type[indexType].min === -1) {
        var minValue = 0;
        var maxValue = 0;
    }

    /*if(indexType==='14'){
        $('#mainFilterType14MinInput').val(minValue);
        $('#mainFilterType14MaxInput').val(maxValue);
    }*/

    activeMainPage.filterConfig.type[indexType].minValue = minValue;
    activeMainPage.filterConfig.type[indexType].maxValue = maxValue;

}

//setActivePPCInputs
$(".mainFilterRangeBoxStructure_11 input").change(
    function () {
        var minValue = $('#mainFilterType11MinInput').val();
        var maxValue = $('#mainFilterType11MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[11].minValue = minValue;
            activeMainPage.filterConfig.type[11].maxValue = maxValue;
            activeMainPage.filterConfig.type11.active = true;
            activeMainPage.filterConfig.type11.clicked = 0;
            activeMainPage.setFilterQuery(11);
            $('.mainFilterRangeBox_11').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox11 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[11].minValue = 0;
            activeMainPage.filterConfig.type[11].maxValue = 0;
            activeMainPage.filterConfig.type11.active = false;
            activeMainPage.filterConfig.type11.clicked = 0;
            activeMainPage.setFilterQuery(11);
            $('.mainFilterRangeBox_11').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox11 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_11 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter11 = function () {
    $('#mainFilterType11MinInput').val('0');
    $('#mainFilterType11MaxInput').val('0');
    activeMainPage.filterConfig.type[11].minValue = 0;
    activeMainPage.filterConfig.type[11].maxValue = 0;
    activeMainPage.filterConfig.type11.active = false;
    activeMainPage.filterConfig.type11.clicked = 0;
    activeMainPage.setFilterQuery(11, false);
    $('.mainFilterRangeBox_11').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_11 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox11 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_11 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_11 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_16 input").change(
    function () {
        var minValue = $('#mainFilterType16MinInput').val();
        var maxValue = $('#mainFilterType16MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[16].minValue = minValue;
            activeMainPage.filterConfig.type[16].maxValue = maxValue;
            activeMainPage.filterConfig.type16.active = true;
            activeMainPage.filterConfig.type16.clicked = 0;
            activeMainPage.setFilterQuery(16);
            $('.mainFilterRangeBox_16').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[16].minValue = 0;
            activeMainPage.filterConfig.type[16].maxValue = 0;
            activeMainPage.filterConfig.type16.active = false;
            activeMainPage.filterConfig.type16.clicked = 0;
            activeMainPage.setFilterQuery(16);
            $('.mainFilterRangeBox_16').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter16 = function () {
    $('#mainFilterType16MinInput').val('0');
    $('#mainFilterType16MaxInput').val('0');
    activeMainPage.filterConfig.type[16].minValue = 0;
    activeMainPage.filterConfig.type[16].maxValue = 0;
    activeMainPage.filterConfig.type16.active = false;
    activeMainPage.filterConfig.type16.clicked = 0;
    activeMainPage.setFilterQuery(16, false);
    $('.mainFilterRangeBox_16').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_16 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_16 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_16 input").change(
    function () {
        var minValue = $('#mainFilterType16MinInput').val();
        var maxValue = $('#mainFilterType16MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[16].minValue = minValue;
            activeMainPage.filterConfig.type[16].maxValue = maxValue;
            activeMainPage.filterConfig.type16.active = true;
            activeMainPage.filterConfig.type16.clicked = 0;
            activeMainPage.setFilterQuery(16);
            $('.mainFilterRangeBox_16').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[16].minValue = 0;
            activeMainPage.filterConfig.type[16].maxValue = 0;
            activeMainPage.filterConfig.type16.active = false;
            activeMainPage.filterConfig.type16.clicked = 0;
            activeMainPage.setFilterQuery(16);
            $('.mainFilterRangeBox_16').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_16 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter18 = function () {
    $('#mainFilterType18MinInput').val('0');
    $('#mainFilterType18MaxInput').val('0');
    activeMainPage.filterConfig.type[18].minValue = 0;
    activeMainPage.filterConfig.type[18].maxValue = 0;
    activeMainPage.filterConfig.type18.active = false;
    activeMainPage.filterConfig.type18.clicked = 0;
    activeMainPage.setFilterQuery(18, false);
    $('.mainFilterRangeBox_18').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_18 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_18 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_18 input").change(
    function () {
        var minValue = $('#mainFilterType18MinInput').val();
        var maxValue = $('#mainFilterType18MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[18].minValue = minValue;
            activeMainPage.filterConfig.type[18].maxValue = maxValue;
            activeMainPage.filterConfig.type18.active = true;
            activeMainPage.filterConfig.type18.clicked = 0;
            activeMainPage.setFilterQuery(18);
            $('.mainFilterRangeBox_18').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[18].minValue = 0;
            activeMainPage.filterConfig.type[18].maxValue = 0;
            activeMainPage.filterConfig.type18.active = false;
            activeMainPage.filterConfig.type18.clicked = 0;
            activeMainPage.setFilterQuery(18);
            $('.mainFilterRangeBox_18').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_18 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_17 input").change(
    function () {
        var minValue = $('#mainFilterType17MinInput').val();
        var maxValue = $('#mainFilterType17MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[17].minValue = minValue;
            activeMainPage.filterConfig.type[17].maxValue = maxValue;
            activeMainPage.filterConfig.type17.active = true;
            activeMainPage.filterConfig.type17.clicked = 0;
            activeMainPage.setFilterQuery(17);
            $('.mainFilterRangeBox_17').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[17].minValue = 0;
            activeMainPage.filterConfig.type[17].maxValue = 0;
            activeMainPage.filterConfig.type17.active = false;
            activeMainPage.filterConfig.type17.clicked = 0;
            activeMainPage.setFilterQuery(17);
            $('.mainFilterRangeBox_17').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_17 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter17 = function () {
    $('#mainFilterType17MinInput').val('0');
    $('#mainFilterType17MaxInput').val('0');
    activeMainPage.filterConfig.type[17].minValue = 0;
    activeMainPage.filterConfig.type[17].maxValue = 0;
    activeMainPage.filterConfig.type17.active = false;
    activeMainPage.filterConfig.type17.clicked = 0;
    activeMainPage.setFilterQuery(17, false);
    $('.mainFilterRangeBox_17').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_17 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_17 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_17 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_19 input").change(
    function () {
        var minValue = $('#mainFilterType19MinInput').val();
        var maxValue = $('#mainFilterType19MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[19].minValue = minValue;
            activeMainPage.filterConfig.type[19].maxValue = maxValue;
            activeMainPage.filterConfig.type19.active = true;
            activeMainPage.filterConfig.type19.clicked = 0;
            activeMainPage.setFilterQuery(19);
            $('.mainFilterRangeBox_19').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[19].minValue = 0;
            activeMainPage.filterConfig.type[19].maxValue = 0;
            activeMainPage.filterConfig.type19.active = false;
            activeMainPage.filterConfig.type19.clicked = 0;
            activeMainPage.setFilterQuery(19);
            $('.mainFilterRangeBox_19').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_19 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter19 = function () {
    $('#mainFilterType19MinInput').val('0');
    $('#mainFilterType19MaxInput').val('0');
    activeMainPage.filterConfig.type[19].minValue = 0;
    activeMainPage.filterConfig.type[19].maxValue = 0;
    activeMainPage.filterConfig.type19.active = false;
    activeMainPage.filterConfig.type19.clicked = 0;
    activeMainPage.setFilterQuery(19, false);
    $('.mainFilterRangeBox_19').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_19 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_19 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_19 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_20 input").change(
    function () {
        var minValue = $('#mainFilterType20MinInput').val();
        var maxValue = $('#mainFilterType20MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[20].minValue = minValue;
            activeMainPage.filterConfig.type[20].maxValue = maxValue;
            activeMainPage.filterConfig.type20.active = true;
            activeMainPage.filterConfig.type20.clicked = 0;
            activeMainPage.setFilterQuery(20);
            $('.mainFilterRangeBox_20').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[20].minValue = 0;
            activeMainPage.filterConfig.type[20].maxValue = 0;
            activeMainPage.filterConfig.type20.active = false;
            activeMainPage.filterConfig.type20.clicked = 0;
            activeMainPage.setFilterQuery(20);
            $('.mainFilterRangeBox_20').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_20 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter20 = function () {
    $('#mainFilterType20MinInput').val('0');
    $('#mainFilterType20MaxInput').val('0');
    activeMainPage.filterConfig.type[20].minValue = 0;
    activeMainPage.filterConfig.type[20].maxValue = 0;
    activeMainPage.filterConfig.type20.active = false;
    activeMainPage.filterConfig.type20.clicked = 0;
    activeMainPage.setFilterQuery(20, false);
    $('.mainFilterRangeBox_20').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_20 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_20 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_20 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_21 input").change(
    function () {
        var minValue = $('#mainFilterType21MinInput').val();
        var maxValue = $('#mainFilterType21MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[21].minValue = minValue;
            activeMainPage.filterConfig.type[21].maxValue = maxValue;
            activeMainPage.filterConfig.type21.active = true;
            activeMainPage.filterConfig.type21.clicked = 0;
            activeMainPage.setFilterQuery(21);
            $('.mainFilterRangeBox_21').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[21].minValue = 0;
            activeMainPage.filterConfig.type[21].maxValue = 0;
            activeMainPage.filterConfig.type21.active = false;
            activeMainPage.filterConfig.type21.clicked = 0;
            activeMainPage.setFilterQuery(21);
            $('.mainFilterRangeBox_21').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_21 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter21 = function () {
    $('#mainFilterType21MinInput').val('0');
    $('#mainFilterType21MaxInput').val('0');
    activeMainPage.filterConfig.type[21].minValue = 0;
    activeMainPage.filterConfig.type[21].maxValue = 0;
    activeMainPage.filterConfig.type21.active = false;
    activeMainPage.filterConfig.type21.clicked = 0;
    activeMainPage.setFilterQuery(21, false);
    $('.mainFilterRangeBox_21').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_21 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_21 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_21 .mainFilterRangeBoxSumTitleActive').html('');
}

$(".mainFilterRangeBoxStructure_22 input").change(
    function () {
        var minValue = $('#mainFilterType22MinInput').val();
        var maxValue = $('#mainFilterType22MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[22].minValue = minValue;
            activeMainPage.filterConfig.type[22].maxValue = maxValue;
            activeMainPage.filterConfig.type22.active = true;
            activeMainPage.filterConfig.type22.clicked = 0;
            activeMainPage.setFilterQuery(22);
            $('.mainFilterRangeBox_22').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[22].minValue = 0;
            activeMainPage.filterConfig.type[22].maxValue = 0;
            activeMainPage.filterConfig.type22.active = false;
            activeMainPage.filterConfig.type22.clicked = 0;
            activeMainPage.setFilterQuery(22);
            $('.mainFilterRangeBox_22').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_22 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter22 = function () {
    $('#mainFilterType22MinInput').val('0');
    $('#mainFilterType22MaxInput').val('0');
    activeMainPage.filterConfig.type[22].minValue = 0;
    activeMainPage.filterConfig.type[22].maxValue = 0;
    activeMainPage.filterConfig.type22.active = false;
    activeMainPage.filterConfig.type22.clicked = 0;
    activeMainPage.setFilterQuery(22, false);
    $('.mainFilterRangeBox_22').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_22 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_22 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_22 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_23 input").change(
    function () {
        var minValue = $('#mainFilterType23MinInput').val();
        var maxValue = $('#mainFilterType23MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[23].minValue = minValue;
            activeMainPage.filterConfig.type[23].maxValue = maxValue;
            activeMainPage.filterConfig.type23.active = true;
            activeMainPage.filterConfig.type23.clicked = 0;
            activeMainPage.setFilterQuery(23);
            $('.mainFilterRangeBox_23').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[23].minValue = 0;
            activeMainPage.filterConfig.type[23].maxValue = 0;
            activeMainPage.filterConfig.type23.active = false;
            activeMainPage.filterConfig.type23.clicked = 0;
            activeMainPage.setFilterQuery(23);
            $('.mainFilterRangeBox_23').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_23 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter23 = function () {
    $('#mainFilterType23MinInput').val('0');
    $('#mainFilterType23MaxInput').val('0');
    activeMainPage.filterConfig.type[23].minValue = 0;
    activeMainPage.filterConfig.type[23].maxValue = 0;
    activeMainPage.filterConfig.type23.active = false;
    activeMainPage.filterConfig.type23.clicked = 0;
    activeMainPage.setFilterQuery(23, false);
    $('.mainFilterRangeBox_23').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_23 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_23 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_23 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_24 input").change(
    function () {
        var minValue = $('#mainFilterType24MinInput').val();
        var maxValue = $('#mainFilterType24MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[24].minValue = minValue;
            activeMainPage.filterConfig.type[24].maxValue = maxValue;
            activeMainPage.filterConfig.type24.active = true;
            activeMainPage.filterConfig.type24.clicked = 0;
            activeMainPage.setFilterQuery(24);
            $('.mainFilterRangeBox_24').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[24].minValue = 0;
            activeMainPage.filterConfig.type[24].maxValue = 0;
            activeMainPage.filterConfig.type24.active = false;
            activeMainPage.filterConfig.type24.clicked = 0;
            activeMainPage.setFilterQuery(24);
            $('.mainFilterRangeBox_24').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_24 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter24 = function () {
    $('#mainFilterType24MinInput').val('0');
    $('#mainFilterType24MaxInput').val('0');
    activeMainPage.filterConfig.type[24].minValue = 0;
    activeMainPage.filterConfig.type[24].maxValue = 0;
    activeMainPage.filterConfig.type24.active = false;
    activeMainPage.filterConfig.type24.clicked = 0;
    activeMainPage.setFilterQuery(24, false);
    $('.mainFilterRangeBox_24').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_24 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_24 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_24 .mainFilterRangeBoxSumTitleActive').html('');
}
//setActivePPCInputs
$(".mainFilterRangeBoxStructure_25 input").change(
    function () {
        var minValue = $('#mainFilterType25MinInput').val();
        var maxValue = $('#mainFilterType25MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[25].minValue = minValue;
            activeMainPage.filterConfig.type[25].maxValue = maxValue;
            activeMainPage.filterConfig.type25.active = true;
            activeMainPage.filterConfig.type25.clicked = 0;
            activeMainPage.setFilterQuery(25);
            $('.mainFilterRangeBox_25').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[25].minValue = 0;
            activeMainPage.filterConfig.type[25].maxValue = 0;
            activeMainPage.filterConfig.type25.active = false;
            activeMainPage.filterConfig.type25.clicked = 0;
            activeMainPage.setFilterQuery(25);
            $('.mainFilterRangeBox_25').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_25 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);

activeMainPage.clearInputFilter25 = function () {
    $('#mainFilterType25MinInput').val('0');
    $('#mainFilterType25MaxInput').val('0');
    activeMainPage.filterConfig.type[25].minValue = 0;
    activeMainPage.filterConfig.type[25].maxValue = 0;
    activeMainPage.filterConfig.type25.active = false;
    activeMainPage.filterConfig.type25.clicked = 0;
    activeMainPage.setFilterQuery(25, false);
    $('.mainFilterRangeBox_25').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_25 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_25 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_25 .mainFilterRangeBoxSumTitleActive').html('');
}



activeMainPage.clearInputFilter12 = function () {
    $('#mainFilterType12MinInput').val('0');
    $('#mainFilterType12MaxInput').val('0');
    activeMainPage.filterConfig.type[12].minValue = 0;
    activeMainPage.filterConfig.type[12].maxValue = 0;
    activeMainPage.filterConfig.type12.active = false;
    activeMainPage.filterConfig.type12.clicked = 0;
    //$('#mainFilterType12MaxInput').val('100');
    activeMainPage.setFilterQuery(12, false);
    $('.mainFilterRangeBox_12').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_12 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
    $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_12 .mainFilterRangeBoxSumTitleActive').html('');
}

//setActivePPCInputs
$(".mainFilterRangeBoxStructure_12 input").change(
    function () {
        var minValue = $('#mainFilterType12MinInput').val();
        var maxValue = $('#mainFilterType12MaxInput').val();
        if (parseInt(minValue) <= parseInt(maxValue)) {
            activeMainPage.filterConfig.type[12].minValue = minValue;
            activeMainPage.filterConfig.type[12].maxValue = maxValue;
            activeMainPage.filterConfig.type12.active = true;
            activeMainPage.filterConfig.type12.clicked = 0;
            activeMainPage.setFilterQuery(12);
            $('.mainFilterRangeBox_12').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparate').css('display', 'inline-block');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparateMax').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxSumTitleActive').html(minValue + '-' + maxValue);
        } else {
            activeMainPage.filterConfig.type[12].minValue = 0;
            activeMainPage.filterConfig.type[12].maxValue = 0;
            activeMainPage.filterConfig.type12.active = false;
            activeMainPage.filterConfig.type12.clicked = 0;
            //$('#mainFilterType12MaxInput').val('100');
            activeMainPage.setFilterQuery(12);
            $('.mainFilterRangeBox_12').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparate').css('display', 'none');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxTitleSeparateMax').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_12 .mainFilterRangeBoxSumTitleActive').html('');
        }
    }
);


//setActiveCaratInputs
$(".mainFilterRangeBoxStructure_14 input").change(
    function () {
        var indexType = '14';
        /*
                        activeMainPage.filterConfig.type14.active=true;
                        activeMainPage.filterConfig.type14.clicked=0;
                        activeMainPage.filterConfig.type14.min=0;
                        activeMainPage.filterConfig.type14.max=0;

                        var minValue = Number($('#mainFilterType14MinInput').val());
                        var maxValue = Number($('#mainFilterType14MaxInput').val());

                        if(minValue>maxValue){
                        activeMainPage.filterConfig.type[indexType].minValue=0;
                        activeMainPage.filterConfig.type[indexType].maxValue=0;
                        activeMainPage.filterConfig.type14.active=false;
                        activeMainPage.filterConfig.type14.clicked=0;
                        activeMainPage.filterConfig.type14.min=0;
                        activeMainPage.filterConfig.type14.max=0;
                        var activeTitleButton='';
                        $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
                            return true;
                        }
                        activeMainPage.filterConfig.type[indexType].minValue=activeMainTool.numberWithCommas(minValue,2);
                    activeMainPage.filterConfig.type[indexType].maxValue=activeMainTool.numberWithCommas(maxValue,2);
                    
                        var activeTitleButton=activeMainPage.filterConfig.type[indexType].minValue+' - '+activeMainPage.filterConfig.type[indexType].maxValue;
                        $('.mainFilterRangeBox_'+indexType+' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
                */
        var minValue = Number($('#mainFilterType14MinInput').val());
        var maxValue = Number($('#mainFilterType14MaxInput').val());
        activeMainPage.filterConfig.type[indexType].minValue = activeMainTool.numberWithCommas(minValue, 2);
        activeMainPage.filterConfig.type[indexType].maxValue = activeMainTool.numberWithCommas(maxValue, 2);
        var activeTitleButton = activeMainPage.filterConfig.type[indexType].minValue + ' - ' + activeMainPage.filterConfig.type[indexType].maxValue;
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
        if (minValue <= maxValue) {
            $('.mainFilterRangeBox_14').addClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_14 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_14 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');
            activeMainPage.filterConfig.type14.active = true;
            activeMainPage.setFilterQuery(indexType);
        } else {
            activeMainPage.filterConfig.type[14].minValue = 0;
            activeMainPage.filterConfig.type[14].maxValue = 0;
            activeMainPage.filterConfig.type14.active = false;
            activeMainPage.filterConfig.type14.clicked = 0;
            activeMainPage.filterConfig.type14.min = 0;
            activeMainPage.filterConfig.type14.max = 0;
            $('.mainFilterRangeBox_14').removeClass('mainFilterRangeBoxActive');
            $('.mainFilterRangeBox_14 .mainFilterRangeBoxSumTitleActive').html('');
            $('.mainFilterRangeBox_14 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
            $('.mainFilterRangeBox_14 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
            activeMainPage.setFilterQuery(indexType);
        }
    }
);

activeMainPage.clearInputFilter14 = function () {
    var indexType = '14';
    activeMainPage.filterConfig.type[14].minValue = 0;
    activeMainPage.filterConfig.type[14].maxValue = 0;
    activeMainPage.filterConfig.type14.active = false;
    activeMainPage.filterConfig.type14.clicked = 0;
    activeMainPage.filterConfig.type14.min = 0;
    activeMainPage.filterConfig.type14.max = 0;
    $('#mainFilterType14MinInput').val('0.5');
    $('#mainFilterType14MaxInput').val('1.5');
    $('.mainFilterRangeBox_14').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_14 .mainFilterRangeBoxSumTitleActive').html('');
    $('.mainFilterRangeBox_14 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_14 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    for (var i = 0; i < $('.mainFilterRangeButton_' + indexType).length; i++) {
        $($('.mainFilterRangeButton_' + indexType)[i]).removeClass('mainFilterRangeButtonActive');
    }
    activeMainPage.filterConfig.type14.clicked = 0
    activeMainPage.setFilterQuery(14, false);
}


activeMainPage.setFilter15 = function () {
    var indexType = '15';
    activeMainPage.filterConfig.type15.active = true;
    activeMainPage.filterConfig.type15.clicked = 0;
    activeMainPage.filterConfig.type15.min = 0;
    activeMainPage.filterConfig.type15.max = 0;

    var productid = $('#mainFilterType15Input').val();

    if (productid === '') {
        activeMainPage.filterConfig.type[indexType].minValue = '';
        activeMainPage.filterConfig.type[indexType].maxValue = 0;
        activeMainPage.filterConfig.type15.active = false;
        activeMainPage.filterConfig.type15.clicked = 0;
        activeMainPage.filterConfig.type15.min = 0;
        activeMainPage.filterConfig.type15.max = 0;
        var activeTitleButton = '';
        $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
        $('.mainFilterRangeBox_15').removeClass('mainFilterRangeBoxActive');
        $('.mainFilterRangeBox_15 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
        $('.mainFilterRangeBox_15 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
        activeMainPage.setFilterQuery(indexType);
        return true;
    }

    $('.mainFilterRangeBox_15').addClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_15 .mainFilterRangeBoxTitle').addClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_15 .mainFilterRangeBoxIcon').addClass('mainFilterRangeBoxIconDisplay');

    activeMainPage.filterConfig.type[indexType].minValue = productid;


    var activeTitleButton = activeMainPage.filterConfig.type[indexType].minValue;
    $('.mainFilterRangeBox_' + indexType + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);

    activeMainPage.setFilterQuery(indexType);
}

activeMainPage.clearInputFilter15 = function () {
    $('#mainFilterType15Input').val('');
    activeMainPage.filterConfig.type[15].minValue = 0;
    activeMainPage.filterConfig.type[15].maxValue = 0;
    activeMainPage.filterConfig.type15.active = false;
    activeMainPage.filterConfig.type15.clicked = 0;
    activeMainPage.filterConfig.type15.min = 0;
    activeMainPage.filterConfig.type15.max = 0;
    var activeTitleButton = '';
    $('.mainFilterRangeBox_' + 15 + ' .mainFilterRangeBoxSumTitleActive').html(activeTitleButton);
    $('.mainFilterRangeBox_15').removeClass('mainFilterRangeBoxActive');
    $('.mainFilterRangeBox_15 .mainFilterRangeBoxTitle').removeClass('mainFilterRangeBoxTitleActive');
    $('.mainFilterRangeBox_15 .mainFilterRangeBoxIcon').removeClass('mainFilterRangeBoxIconDisplay');
    activeMainPage.setFilterQuery(15);
}

//setProductid
$('#mainFilterType15Input').on('input', function () {
    setTimeout(function () {
        activeMainPage.setFilter15();
    }, 10);
});


activeMainPage.setLoadingResults = function () {
    var content = '<div class="mainIconAnimation" style="    padding-top: 100px;padding-bottom: 500px;"><img src="../assets/favicon-96x96.png"></div>';
    $('.results').html(content);
    $('#tableViewResultsView3').html(content);

}

activeMainPage.filterArrayManipulation = function (filterCategories, fromSmartSearch) {
    filterCategories = filterCategories.split("&");
    arrangeFiltersArray = [];
    for (var i = 0; i < filterCategories.length; i++) {
        //filterCategories[i]=filterCategories[i].split(filterCategories[i].indexOf('='));
        var FilterName = filterCategories[i].slice(0, filterCategories[i].indexOf('=')).replace('?', '');
        var FilterValues = filterCategories[i].values = filterCategories[i].slice(filterCategories[i].indexOf('=') + 1, filterCategories[i].length).replace('?', '');
        if (typeof arrangeFiltersArray[FilterName] === 'undefined') {
            arrangeFiltersArray[FilterName] = FilterValues;
        } else {
            arrangeFiltersArray[FilterName] += ',' + FilterValues;
        }
    }
    if (!fromSmartSearch && filterCategories.length > 1) {
        //activeSmartSearchManager.appendValuesInInputs(arrangeFiltersArray);
    }
    var arrangeFiltersString = '';
    for (var key in arrangeFiltersArray) {
        if (arrangeFiltersArray[key] !== activeProductManager.nullValue) {
            arrangeFiltersString += key + '=' + arrangeFiltersArray[key] + '&';
        }
    }
    arrangeFiltersString = arrangeFiltersString.replace('=&', '');
    return arrangeFiltersString;
}

activeMainPage.getFiltersResults = function (ProductsFiltersArray, filterQueryId, fromSmartSearch) {
    activeMainPage.setLoadingResults();
    if (typeof fromSmartSearch === 'undefined') {
        fromSmartSearch = false;
    }
    if (typeof activeAnalyticsManager === 'undefined') {

    } else {
        activeAnalyticsManager.member.filterArray = ProductsFiltersArray;
        mixpanel.track("Query Filter", activeAnalyticsManager.member);
    }
    if (ProductsFiltersArray !== activeSmartSearchManager.activeValues) {
        activeSmartSearchManager.moreValues = ProductsFiltersArray;
        ProductsFiltersArray += '&' + activeSmartSearchManager.activeValues;
    }
    ProductsFiltersArray = activeMainPage.filterArrayManipulation(ProductsFiltersArray, fromSmartSearch);
    ProductsFiltersArray = ProductsFiltersArray.replace('=,&', '');

    /*if(ProductsFiltersArray.length!==0){
        console.log('getFiltersResults was Stopped');
        return true;
    }*/
    $.ajax({
        url: activeMainTool.serverSrc + 'products?' + ProductsFiltersArray,
        type: 'get',
        data: {

        },
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            if (activeMainPage.activeFilterQueryId !== filterQueryId) {
                return true;
            }
            if (data.length === 0) {
                $('#headerResultsStructureCounter').html(' (0)');
                $('#headerResultsStructureCounterMobile').html(' (0)');
                $('.results').html(activeMainTool.temp_noProductsResults());
                $('#tableViewResultsView3').html(activeMainTool.temp_noProductsResults());
                activeMainTool.hideWrapper();
                return true;
            }
            $('.resultsTitle span').html('RESULTS (' + data.length + ')');
            activeMainPage.setProducts(data);
            console.log('Products:');
            console.log(data);
        },
        error: function (data) {
            console.log(data);
            if (data.status === 403 || data.status === 400) {
                activeMainTool.invalidToken();
            }

        }
    });
}

activeMainPage.setFiltersQueryToServer = function () {
    var filterQueryId = Math.floor((Math.random() * 1000000) + 1);
    activeMainPage.activeFilterQueryId = filterQueryId;
    var queryFilterString = '';
    var queryFilterArray = [];
    for (var key in activeMainPage.filterQuery) {
        // skip loop if the property is from prototype
        if (!activeMainPage.filterQuery.hasOwnProperty(key)) continue;

        var obj = activeMainPage.filterQuery[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            queryFilterArray[key] = [];
            queryFilterArray[key].push(obj);




            // console.log(prop);
            //console.log(key);
            //console.log( obj[prop]);
        }
    }

    for (var key in queryFilterArray) {
        if (key === 'length' || !queryFilterArray.hasOwnProperty(key)) continue;

        if ((key === 'discount' || key === 'cut') && activeMainPage.activeColorType === 'yellow') {

        } else if (key === 'carat') {
            queryFilterString += 'fromCarat=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toCarat=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'ppc') {
            queryFilterString += 'fromPpc=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toPpc=' + queryFilterArray[key][0][0][1] + '&';
            }
            /*
             * queryFilterString+= 'fromPrice='+queryFilterArray[key][0][0][0]+'&';
            if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                queryFilterString+= 'toPrice='+queryFilterArray[key][0][0][1]+'&';
            }
             */
        } else if (key === 'totalPrice') {
            queryFilterString += 'fromPrice=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toPrice=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'availability') {

            /* if(queryFilterArray[key][0].length>1){
                 
             }
             else{
                 if(queryFilterArray[key][0][0]==='YES'){
                     queryFilterString+= 'sType=Stock&';
                 }
                 else{
                     queryFilterString+= 'sType=Memo&';
                 }
                 
             }*/

        } else if (key === 'table') {
            queryFilterString += 'fromTable=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toTable=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'measurements1') {
            queryFilterString += 'fromLength=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toLength=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'measurements2') {
            queryFilterString += 'fromWidth=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toWidth=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'measurements3') {
            queryFilterString += 'fromHeight=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toHeight=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'crownHeight') {
            queryFilterString += 'fromCrownHeight=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toCrownHeight=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'crownAngle') {
            queryFilterString += 'fromCrownAngle=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toCrownAngle=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'pavilionDepth') {
            queryFilterString += 'fromPavillionDepth=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toPavillionDepth=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'pavilionAngle') {
            queryFilterString += 'fromPavillionAngle=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toPavillionAngle=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'depth') {
            queryFilterString += 'fromDepth=' + queryFilterArray[key][0][0][0] + '&';
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'toDepth=' + queryFilterArray[key][0][0][1] + '&';
            }
        } else if (key === 'discount') {
            /*queryFilterString+= 'fromDiscount='+(100-parseInt(queryFilterArray[key][0][0][0])).toString()+'&';
            if(queryFilterArray[key][0][0].length>1 && queryFilterArray[key][0][0][1]>0){
                queryFilterString+= 'toDiscount='+(100-parseInt(queryFilterArray[key][0][0][1])).toString()+'&';
            }*/
            if (queryFilterArray[key][0][0].length > 1 && queryFilterArray[key][0][0][1] > 0) {
                queryFilterString += 'fromDiscount=' + (100 - parseInt(queryFilterArray[key][0][0][1])).toString() + '&';
                queryFilterString += 'toDiscount=' + (100 - parseInt(queryFilterArray[key][0][0][0])).toString() + '&';
            } else {
                if (parseInt(queryFilterArray[key][0][0][0]).toString() === '0') {

                } else {
                    queryFilterString += 'fromDiscount=' + (100 - parseInt(queryFilterArray[key][0][0][0])).toString() + '&';
                }

            }


        } else {
            queryFilterString += key + '=' + queryFilterArray[key].toString() + '&';
        }

    }
    if (activeMainPage.onlyImageFilter) {
        queryFilterString += 'image=' + activeMainPage.onlyImageFilter + '&';
    }
    if (activeMainPage.availabilityFilter) {
        queryFilterString += 'sType=Stock&';
    }
    if (activeMainPage.bgmFilter) {
        queryFilterString += 'BGM=False&';
    }

    queryFilterString = queryFilterString.slice(0, -1);
    if (queryFilterString.length === 0) {
        queryFilterString = '';
    } else {
        queryFilterString = '&' + queryFilterString;
    }

    activeMainPage.getFiltersResults(queryFilterString, filterQueryId);
}


activeMainPage.changeProductsView = function (type) {
    activeMainPage.toggleActionPopup('1', true);
    if (activeMainPage.activeProductView === type) {
        return true;
    }
    $('.resultsViewStructure' + activeMainPage.activeProductView).css('display', 'none');
    $('.resultsViewStructure' + type).css('display', 'block');
    $('#productsViewButton' + type + ' .notActiveButtonFilterView').css('display', 'none');
    $('#productsViewButton' + type + ' .activeButtonFilterView').css('display', 'block');
    //$('#productsViewButton'+activeMainPage.activeProductView+' .notActiveButtonFilterView').css('display','block');
    //$('#productsViewButton'+activeMainPage.activeProductView+' .activeButtonFilterView').css('display','none');
    activeMainPage.activeProductView = type;
    if (type === 3 || type === 4) {
        $('.filterImageIconStructure').addClass('filterImageIconStructureView3');
        $('.searchHeaderResultsButtonViewTypeImage').css('display', 'none');
        $('.highToLowIcons').css('display', 'none');
        $('.lowToHighIcons').css('display', 'none');
    } else {
        $('.searchHeaderResultsButtonViewTypeImage').css('display', 'block');
        $('.filterImageIconStructure').removeClass('filterImageIconStructureView3');
        $('.highToLowIcons').css('display', 'block');
        $('.lowToHighIcons').css('display', 'block');
    }
    if (type === 4) {
        $('.resultsTitle').addClass('resultsTitleNotActive');
        $('.recentlyResultsTitle').addClass('recentlyResultsTitleActive');
    } else {
        $('.resultsTitle').removeClass('resultsTitleNotActive');
        $('.recentlyResultsTitle').removeClass('recentlyResultsTitleActive');
    }
    if (type === 3) {
        //    $('.searchHeaderResultsStructure').addClass('tableViewHeaderStructure');
        $('.searchHeaderResultsButton').removeClass('active');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonGrid').addClass('active');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonGrid .activeButtonFilterView').css('display', 'block');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonGrid .notActiveButtonFilterView').css('display', 'none');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonLeft .activeButtonFilterView').css('display', 'none');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonLeft .notActiveButtonFilterView').css('display', 'block');
    } else if (type === 1) {
        // $('.searchHeaderResultsStructure').removeClass("tableViewHeaderStructure");
        $('.searchHeaderResultsButton').removeClass('active');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonLeft').addClass('active');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonGrid .activeButtonFilterView').css('display', 'none');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonGrid .notActiveButtonFilterView').css('display', 'block');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonLeft .activeButtonFilterView').css('display', 'block');
        $('.searchHeaderResultsButton.searchHeaderResultsButtonLeft .notActiveButtonFilterView').css('display', 'none');
    } else {
        //$('.searchHeaderResultsStructure').removeClass("tableViewHeaderStructure");        
    }

}

activeMainPage.setProductsView3 = function (data) {
    var products = data;
    var content = '';
    content += '<table id="productTableView3">';
    content += '<thead><tr>';
    content += '<th style="display:none;">Db_ID</th>' +
        '<th class="desktopElm" style="opacity: 0;user-select: none;width: 0px;">Sl.</th>' +
        '<th class="id-header" >ID</th>' +
        '<th class="resultsViewStructure3_tdDisplayNone" style="display:none;">Certificate Id</th>' +
        //'<th class="resultsViewStructure3_tdDisplayNone" style="display:none;">Availability</th>' +
        '<th class="resultsViewStructure3_tdDisplayNone" style="display:none;">Image</th>' +
        //'<th class="resultsViewStructure3_tdDisplayNone" style="display:none;">Video</th>' +
        '<th class="model-header">Model</th>' +
        '<th id="viewTable3CaratTh">Ct.</th>' +
        '<th id="viewTable3ColorTh">Color</th>' +
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
        '<th>location</th>';
    /*if (activeMainPage.activeColorType === 'white') {
        content += '<th>Rap</th>' +
            '<th>Disc</th>';
    }*/

    content += '<th>PPC</th>' +
        '<th id="viewTable3TPriceTh">Total' +
        '</th>';
    content += '</tr></thead>';
    content += '<tbody>';

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        content += '<tr class="resultsViewStructure3_tr itemStructure_' + product.id + '"  productId=' + product.id + '>';
        content += '<td class="resultsViewStructure3_td resultsViewStructure3_tdDisplayNone" style="display:none;" style="display:none;">' + product.id + '</td>';
        content += '<td class="selectedRow desktopElm" > <div class="checkboxSelectedRow"><img src="../assets/checkIcon.png"/></div></td>';
        content +=
            '<td>' +
            '<div class="resultsViewStructure3_td">' + product.productId + '</div>' +
            '<div class="resultsViewStructure3_trButton">' +
            '<div class="floatButtonStructure">' +
            '<div class="wishListIcon floatButtonIcon" onclick="activeWishListManager.addProduct(' + "'" + product.id + "'" + ')">' +
            '<img src="../assets/icons/compareIcon.png">' +
            '</div>' +
            '<div onclick="activeCartManager.addProduct(' + "'" + product.id + "'" + ')" class="cartIcon floatButtonIcon">' +
            '<img src="../assets/icons/cartIcon.png">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</td>' +
            '<td class="resultsViewStructure3_td resultsViewStructure3_tdDisplayNone" style="display:none;">' + product.certificateId + '</td>' +
            //'<td class="resultsViewStructure3_td resultsViewStructure3_tdDisplayNone" style="display:none;">' + product.forSellStatus + '</td>' +
            '<td class="resultsViewStructure3_td resultsViewStructure3_tdDisplayNone" style="display:none;">' + product.imageSrc + '</td>' +
            //'<td class="resultsViewStructure3_td resultsViewStructure3_tdDisplayNone" style="display:none;">' + product.imageSrc+ '</td>' +
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
            '<td class="resultsViewStructure3_td">' + product.location + '</td>';

        /*        if (activeMainPage.activeColorType === 'white') {
                    content += '<td class="resultsViewStructure3_td">' + product.listPriceString + '</td>' +
                        '<td class="resultsViewStructure3_td">' + product.discountString + '</td>';
        
                }*/

        content += '<td class="resultsViewStructure3_td">' + product.ppcString + '</td>' +
            '<td >' +
            '<div class="resultsViewStructure3_td">' + product.totalPriceString + '</div>' +
            '<div class="itemAlreadyCartStructure">' +
            '<img src="../assets/cart-24-pink-oval-40.svg"/>' +
            '</div>' +
            '<div class="itemAlreadyWishListStructure">' +
            '<img src="../assets/picknchoose-blue-bg-40.svg"/>' +
            '</div>' +
            '</td>';
        content += '</tr>';
    }
    content += '</tr></tbody>';
    content += '</table>';
    $('#tableViewResultsView3').html(content);
    $(".resultsViewStructure3_td").click(
        function () {
            activeProductPopup.show($(this).parents('tr').attr('productid'));
        }
    );
    $(function () {
        var activeFileName = activeMainTool.getTitleForFileExport();
        var table = $('#productTableView3').DataTable({
            paging: false,
            "columnDefs": [{
                "targets": 0,
                "orderable": false
            }],
            "order": [
                [1, "desc"]
            ],
            dom: 'Bfrtip',
            buttons: [{
                extend: 'excelHtml5',
                className: 'exportExcelButton',
                title: activeFileName
            },
            {
                extend: 'excelHtml5',
                text: 'Export selected',
                className: 'exportSelectedButton',
                exportOptions: {
                    columns: ':visible:not(.not-exported)',
                    modifier: {
                        selected: true
                    }
                },
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
                'print', 'copy'
            ],
            select: {
                style: "multi"
            }
        });

        $('#productTableView3').DataTable().on('search.dt', function () {
            //filtered rows data as arrays
            activeMainPage.showProductsView2BySearchSort($('#productTableView3').DataTable().rows({
                filter: 'applied'
            }).data());
        })
    });
    $('#tableViewResultsView3 input').attr('placeholder', 'example: E VS2 EX GIA');
}

activeMainPage.showProductsView2BySearchSort = function (data) {
    console.log(data);
    $('.productCardStructure .itemSection').css('display', 'none');
    for (var i = 0; i < data.length; i++) {
        var elm = $($('.productCardStructure .itemStructure_' + data[i][0]).parent()[0]).clone();
        $($('.productCardStructure .itemStructure_' + data[i][0]).parent()[0]).remove();
        $('.resultsViewStructure1').append(elm);
        $('.productCardStructure .itemStructure_' + data[i][0]).css('display', 'block');
    }
}

activeMainPage.sortArrayByLowestPrice = function (originalArray) {
    var arrangedArray = [];
    var getArrangedArray = originalArray.slice();
    var lowestPrice = 9999999999;
    for (var i = 0; i < originalArray.length; i++) {
        lowestPrice = 9999999999;
        lowestPriceIndex = 0;
        for (var j = 0; j < getArrangedArray.length; j++) {
            if (lowestPrice > getArrangedArray[j].ppc && getArrangedArray[j].ppc !== 0) {
                lowestPrice = getArrangedArray[j].ppc;
                lowestPriceIndex = j;
            }
        }
        arrangedArray.push(getArrangedArray[lowestPriceIndex]);
        getArrangedArray.splice(lowestPriceIndex, 1);
    }
    return arrangedArray;
};

activeMainPage.sortArrayByhighestPrice = function (originalArray) {
    var arrangedArray = [];
    var getArrangedArray = originalArray.slice();
    var highestPrice = 1;
    for (var i = 0; i < originalArray.length; i++) {
        highestPrice = 1;
        highestPriceIndex = 0;
        for (var j = 0; j < getArrangedArray.length; j++) {
            if (highestPrice < getArrangedArray[j].ppc && getArrangedArray[j].ppc !== 0) {
                highestPrice = getArrangedArray[j].ppc;
                highestPriceIndex = j;
            }
        }
        arrangedArray.push(getArrangedArray[highestPriceIndex]);
        getArrangedArray.splice(highestPriceIndex, 1);
    }
    return arrangedArray;
}

activeMainPage.sortArrayByLowestCarat = function (originalArray) {
    var arrangedArray = [];
    var getArrangedArray = originalArray.slice();
    var lowestCarat = 9999999999;
    for (var i = 0; i < originalArray.length; i++) {
        lowestCarat = 9999999999;
        lowestCaratIndex = 0;
        for (var j = 0; j < getArrangedArray.length; j++) {
            if (lowestCarat > getArrangedArray[j].carat && getArrangedArray[j].carat !== 0) {
                lowestCarat = getArrangedArray[j].carat;
                lowestCaratIndex = j;
            }
        }
        arrangedArray.push(getArrangedArray[lowestCaratIndex]);
        getArrangedArray.splice(lowestCaratIndex, 1);
    }
    return arrangedArray;
};

activeMainPage.sortArrayByhighestCarat = function (originalArray) {
    var arrangedArray = [];
    var getArrangedArray = originalArray.slice();
    var highstCarat = 9999999999;
    for (var i = 0; i < originalArray.length; i++) {
        highestCarat = 0.01;
        highestCaratIndex = 0;
        for (var j = 0; j < getArrangedArray.length; j++) {
            if (highestCarat < getArrangedArray[j].carat && getArrangedArray[j].carat !== 0) {
                highestCarat = getArrangedArray[j].carat;
                highestCaratIndex = j;
            }
        }
        arrangedArray.push(getArrangedArray[highestCaratIndex]);
        getArrangedArray.splice(highestCaratIndex, 1);
    }
    return arrangedArray;
};

activeMainPage.clearInputFilter26 = function () {
    var filterCheckBoxName = 'availabilityFilterInputWrapper';
    var elm = $('#' + filterCheckBoxName);
    $(elm).attr('checked', false);
    var imageSrcNameOff = 'homeIconOff.png';
    $('.' + filterCheckBoxName + ' .checkBoxTitleStructure img').attr('src', '../assets/' + imageSrcNameOff);
    $('.' + filterCheckBoxName + ' .checkBoxTitleStructure .checkBoxTitle').css('color', '#a6adb8');
    activeMainPage.availabilityFilter = $(elm).is(':checked');
}

activeMainPage.clearInputFilterImageOnly = function () {
    if (activeMainPage.onlyImageFilter) {
        $('.segomaIdFilterInputStructure').click();
    }
    /*var filterCheckBoxName = 'segomaIdFilterInput';
    var elm = $('#' + filterCheckBoxName);
    $(elm).attr('checked', false);
    var imageSrcNameOff = 'cameraIconOff.png';
    $('.' + filterCheckBoxName + 'Structure .checkBoxTitleStructure img').attr('src', '../assets/' + imageSrcNameOff);
    $('.' + filterCheckBoxName + 'Structure  .checkBoxTitle').css('color', '#a6adb8');
    activeMainPage.onlyImageFilter = $(elm).is(':checked');*/
}

activeMainPage.clearInputFilterBGM = function () {
    var filterCheckBoxName = 'bgmFilterInput';
    var elm = $('#' + filterCheckBoxName);
    $(elm).attr('checked', false);
    $('.' + filterCheckBoxName + 'Structure  .checkBoxTitle').css('color', '#a6adb8');
    activeMainPage.bgmFilter = $(elm).is(':checked');
}

var ChangeCheckBoxInputInAction = false;
activeMainPage.ChangeCheckBoxInput = function (filterCheckBoxName) {
    if (ChangeCheckBoxInputInAction) {
        return true;
    }
    ChangeCheckBoxInputInAction = true;
    setTimeout(function () {
        ChangeCheckBoxInputInAction = false;
    }, 200);
    var elm = $('#' + filterCheckBoxName);
    var elmChecked = $(elm).is(':checked');
    var withImageIcon = false;
    if (filterCheckBoxName === 'segomaIdFilterInput') {
        var imageSrcName = 'cameraIcon.png';
        var imageSrcNameOff = 'cameraIconOff.png';
        withImageIcon = true;
    } else if (filterCheckBoxName === 'availabilityFilterInput') {
        var imageSrcName = 'homeIcon.png';
        var imageSrcNameOff = 'homeIconOff.png';
        withImageIcon = true;
    } else if (filterCheckBoxName === 'bgmFilterInput') {
        withImageIcon = false;
    }


    if (!elmChecked) {
        $(elm).attr('checked', true);
        $(elm).trigger("change");
        if (withImageIcon) {
            $('.' + filterCheckBoxName + 'Wrapper .checkBoxTitleStructure img').attr('src', '../assets/' + imageSrcName);
        }
        $('.' + filterCheckBoxName + 'Wrapper  .checkBoxTitle').css('color', 'black');
    } else {
        $(elm).attr('checked', false);
        if (withImageIcon) {
            $('.' + filterCheckBoxName + 'Wrapper .checkBoxTitleStructure img').attr('src', '../assets/' + imageSrcNameOff);
        }
        $('.' + filterCheckBoxName + 'Wrapper  .checkBoxTitle').css('color', '#a6adb8');
    }
    if (filterCheckBoxName === 'segomaIdFilterInput') {
        activeMainPage.onlyImageFilter = $(elm).is(':checked');
    } else if (filterCheckBoxName === 'availabilityFilterInput') {
        activeMainPage.availabilityFilter = $(elm).is(':checked');
    } else if (filterCheckBoxName === 'bgmFilterInput') {
        activeMainPage.bgmFilter = $(elm).is(':checked');
    }

    activeMainPage.setFiltersQueryToServer();
    //console.log($(elm).is(':checked'));
}
/*
$(document).ready(function() {
    //set initial state.
    
    $('#checkBoxInput').mousedown(function() {
        if (!$(this).is(':checked')) {
            $(this).trigger("change");
        }
           console.log($(this).is(':checked'));
    });
});
*/

activeMainPage.setExValues = function () {
    activeMainPage.setDefaultFilter(6, false);
    activeMainPage.setDefaultFilter(7, false);
    activeMainPage.setDefaultFilter(8, false);

    $($('.filterAttr_6 .mainFilterRangeButton_6')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(6, $(".filterAttr_6"));
    $($('.filterAttr_7 .mainFilterRangeButton_7')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(7, $(".filterAttr_7"));
    $($('.filterAttr_8 .mainFilterRangeButton_8')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(8, $(".filterAttr_8"));
}

activeMainPage.openFilterMenuMobile = function () {
    if (activeMainPage.filterMenuMobileStatus) { //need to close
        if (activeMainPage.advancedBoxFilter.open) { //needToClose
            activeMainPage.openFilterAdvancedBox();
        }
        //activeMainTool.enableScroll();
        $('body').css('overflow', 'auto');
        $('.mainfilterOpenButtonStructure').removeClass('mainfilterOpenButtonStructureOpened');
        $('.mainfilterStructure').removeClass('mainfilterStructureMobileOpened');
        $('.mainfilterWrapper').removeClass('mainfilterWrapperMobileOpened');
        $('.mainfilterStructureBlur').css('opacity', '0');
        setTimeout(function () {
            $('.mainfilterStructureBlur').css('display', 'none');
        }, 600);

        activeMainPage.filterMenuMobileStatus = false;

    } else {
        //activeMainTool.disableScroll();
        $('body').css('overflow', 'hidden');
        $('.mainfilterOpenButtonStructure').addClass('mainfilterOpenButtonStructureOpened');
        $('.mainfilterStructure').addClass('mainfilterStructureMobileOpened');
        $('.mainfilterWrapper').addClass('mainfilterWrapperMobileOpened');
        $('.mainfilterStructureBlur').css('display', 'block');
        setTimeout(function () {
            $('.mainfilterStructureBlur').css('opacity', '1');
        }, 10);
        activeMainPage.filterMenuMobileStatus = true;
    }
}

activeMainPage.changeSortFilter = function () {
    var activeSelectValue = $('#sortFilterSelect').val();
    if (activeSelectValue === 'PRICE') {
        activeMainPage.setHeaderTitlesSort(0);
        $('#sortFilterSelectStructureResult').html('Price');
    } else if (activeSelectValue === 'CARAT') {
        activeMainPage.setHeaderTitlesSort(1);
        $('#sortFilterSelectStructureResult').html('Carat');
    }
}

activeMainPage.setVgValues = function () {
    activeMainPage.setDefaultFilter(6, false);
    activeMainPage.setDefaultFilter(7, false);
    activeMainPage.setDefaultFilter(8, false);

    $($('.filterAttr_6 .mainFilterRangeButton_6')[1]).click();
    activeMainPage.setUnHoverRangeWrapper(6, $(".filterAttr_6"));
    $($('.filterAttr_6 .mainFilterRangeButton_6')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(6, $(".filterAttr_6"));
    $($('.filterAttr_7 .mainFilterRangeButton_7')[1]).click();
    activeMainPage.setUnHoverRangeWrapper(7, $(".filterAttr_7"));
    $($('.filterAttr_7 .mainFilterRangeButton_7')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(7, $(".filterAttr_7"));
    $($('.filterAttr_8 .mainFilterRangeButton_8')[1]).click();
    activeMainPage.setUnHoverRangeWrapper(8, $(".filterAttr_8"));
    $($('.filterAttr_8 .mainFilterRangeButton_8')[0]).click();
    activeMainPage.setUnHoverRangeWrapper(8, $(".filterAttr_8"));
}


activeMainPage.clearSmartSearchInput = function () {
    $('#generalSearchInput').val('');
    activeSmartSearchManager.activeValues = '';
    activeSmartSearchManager.moreValues = '';
}



activeMainPage.clearAllFilters = function () {
    activeMainPage.setDefaultFilter(4, false);
    activeMainPage.setDefaultFilter(5, false);
    activeMainPage.setDefaultFilter(6, false);
    activeMainPage.setDefaultFilter(7, false);
    activeMainPage.setDefaultFilter(8, false);
    activeMainPage.setDefaultFilter(9, false);
    activeMainPage.setDefaultFilter(10, false);
    activeMainPage.clearInputFilter11();
    activeMainPage.clearInputFilter12();
    activeMainPage.setDefaultFilter(13, false);
    activeMainPage.clearInputFilter14();
    activeMainPage.clearInputFilter15();
    activeMainPage.clearInputFilter16();
    activeMainPage.clearInputFilter17();
    activeMainPage.clearInputFilter18();
    activeMainPage.clearInputFilter19();
    activeMainPage.clearInputFilter20();
    activeMainPage.clearInputFilter21();
    activeMainPage.clearInputFilter22();
    activeMainPage.clearInputFilter23();
    activeMainPage.clearInputFilter24();
    activeMainPage.clearInputFilter25();
    activeMainPage.clearInputFilterImageOnly();
    activeMainPage.clearInputFilterBGM();
    activeMainPage.clearInputFilter26();
    activeMainPage.clearSmartSearchInput();
    //activeMainPage.setDefaultFilter(26,false);
    activeMainPage.clearFilter2();
}

activeMainPage.getExValuesUrl();


$("#sortFilterSelect").change(function () {
    activeMainPage.changeSortFilter();
});

$("#searchInuptView3Input").keyup(function () {
    $($('.resultsViewStructure3 .dataTables_filter input')[0]).val($("#searchInuptView3Input").val());
    $($('.resultsViewStructure3 .dataTables_filter input')[0]).keyup()
});


$("#generalSearchInput").keyup(function (event) {
    if (event.keyCode == 13) {
        activeSmartSearchManager.getValues($('#generalSearchInput')[0]);
    }
});