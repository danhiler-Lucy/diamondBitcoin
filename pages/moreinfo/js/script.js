function mainPage(){
    this.pageId=16; //faq
    this.navbarTheme = 'dark';
}

var activeMainPage = new mainPage();

$(function() {
    activeMainPage.setNavbarTheme();
    activeMainPage.getSectionViewFromUrl();
});

activeMainPage.getSectionViewFromUrl = function() {
            var urlParamsS=activeMainTool.getUrlParam('section',window.location.href);
            if(urlParamsS!==null){
                activeMainPage.changeSectionView(urlParamsS);
            }
}


activeMainPage.changeSectionView = function(type) {
    $('.contentSection').css('display', 'none');     
    $('.contentSection'+type).css('display', 'block');     
    $('.contentSectionTitle').removeClass('contentSectionTitleActive');     
    $('.contentSectionTitle'+type).addClass('contentSectionTitleActive');     
}

activeMainPage.setNavbarTheme = function() {
    var theme = activeMainPage.navbarTheme;
    if(theme === 'dark') {
        $('.mainHeaderFixedWrapper .mainHeaderStructure').addClass('dark');
        $('.mainHeaderLogoWrapper .blackLogo').css('display', 'none');
        $('.mainHeaderLogoWrapper .whiteLogo').css('display', 'block');        
    }
}

activeMainPage.getData= function () {
        //activeProductManager.getProducts();
}
