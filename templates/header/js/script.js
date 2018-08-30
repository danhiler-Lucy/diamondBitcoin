$(function () {
    $(window).scroll(function () {
        activeMainHeader.updateHeaderSize();
    });
    activeMainHeader.updateHeaderSize();
});

function mainHeader() {
    this.activePage = 0; //default
    this.minSize = false;
}

var activeMainHeader = new mainHeader();

activeMainHeader.updateMemberButtons = function () {
    if (activeMemberManager.loginStatus) { //member
        var firstName = activeMemberManager.getLocalStorage('firstName');
        var lastName = activeMemberManager.getLocalStorage('lastName');
        var gender = activeMemberManager.getLocalStorage('gender');
        var genderNickname='MR';
        if(typeof gender==='undefined'){
            genderNickname='MR';
        }
        else if(gender==='male'){
            genderNickname='MR';
        }
        else{
            genderNickname='MRS';
        }
        $('.memberShowStructure').css('display', 'block');
        $('.memberHiddenStructure').css('display', 'none');
        $('#firstNameMemberHeader').html(genderNickname+'. ' + lastName);
    }
    else{
        $('.memberShowStructure').css('display', 'none');
        $('.memberHiddenStructure').css('display', 'block');
    }
};
activeMainHeader.updateMemberButtons();

//start: updateActiveButton //
activeMainHeader.updateActiveButton = function () {
    var activePageId = activeMainPage.pageId;
    switch (activePageId) {
        case 0:
            $(".header0_button").addClass("navBarTitleActive");
            break;
        case 1:
            $(".header1_button").addClass("navBarTitleActive");
            break;
        case 5:
            $(".header2_button").addClass("navBarTitleActive");
            break;
        case 8:
            $(".header3_button").addClass("navBarTitleActive");
            break;
        case 7:
            $(".header7_button").addClass("loginButton_navBarTitleActive");
            break;
        case 9:
            $(".header4_button").addClass("navBarTitleActive");
            break;
        default:
        //$("#header0_button").addClass("navBarTitleActive");
    }
};
activeMainHeader.updateActiveButton();

activeMainHeader.updateActiveButton = function () {
    if (window.scrollY === 0) {
        this.full();
    }
    else {
        this.min();
    }
};
//end: updateActiveButton //

//start: updateHeaderSize //
activeMainHeader.min = function () {
    $(".mainLogoStructure").addClass("mainLogoMinStructure");
    $('#mainLogoTitle').addClass("mainLogoStructureMainTitle");
    $('#mainLogoSecTitle').addClass("mainLogoStructureSecTitleMin");
    $('#mainHeaderWrapper').addClass("mainHeaderMinWrapper");
    this.minSize = true;
};

activeMainHeader.full = function () {
    if (typeof activeProductPopup !== 'undefined') {
        if (activeProductPopup.visibility) {
            return true;
        }
    }
    $(".mainLogoStructure").removeClass("mainLogoMinStructure");
    $('#mainLogoTitle').removeClass("mainLogoStructureMainTitle");
    $('#mainLogoSecTitle').removeClass("mainLogoStructureSecTitleMin");
    $('#mainHeaderWrapper').removeClass("mainHeaderMinWrapper");
    this.minSize = false;
};

activeMainHeader.updateHeaderSize = function () {
    var scrollTop = window.scrollY;
    if (typeof scrollTop === 'undefined') {
        scrollTop = document.documentElement.scrollTop;
    }
    if (scrollTop === 0) {
        activeMainHeader.full();
    }
    else {
        activeMainHeader.min();
    }
};
//end: updateHeaderSize //
$("#memberAccountDropdownWrapper").click(function () {
    if ($('.memberShowDropdownStructure').hasClass('memberShowDropdownStructureActive')) {
        $('.memberShowDropdownStructure').removeClass('memberShowDropdownStructureActive');
    }
    else {
        $('.memberShowDropdownStructure').addClass('memberShowDropdownStructureActive');
    }

});

