function mainPage(){
    this.pageId=8; //aboutus
    this.navbarTheme = '';
}

var activeMainPage = new mainPage();

$(function() {
    activeMainPage.setNavbarTheme();
});

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
