function mainMenu(){
    this.status = false; //close
    this.animationStatus = false; //not active
}

var activeMainMenu = new mainMenu();

activeMainMenu.openMobileMenu = function () {
    if(activeMainHeader.status || activeMainHeader.animationStatus){
        return true;
    }
    activeMainHeader.animationStatus=true;
    activeMainHeader.status=true;
    $('.mainMenuWrapper').css('visibility','visible');
    $('body').css('overflow','hidden');
            //activeMainTool.disableScroll();
        activeMainHeader.animationStatus=false;
        $('.mainMenuStructure').css('left','0px');
        $('.mainMenuCloseButtonStructure').css('opacity','1');
};

activeMainMenu.setUserDetails = function () {
    if(typeof activeMemberManager.firstName==='undefined'){
        var content= 'USER';
    }
    else if(typeof activeMemberManager.lastName==='undefined'){
        var content=activeMemberManager.firstName;
    }
    else{
        var content =  activeMemberManager.firstName+'. '+ activeMemberManager.lastName[0];
    }
    
    $('.mainMenuStructure .mainMenuFullName').html(content);
}
activeMainMenu.setUserDetails();

activeMainMenu.closeMobileMenu = function () {
    if(!activeMainHeader.status || activeMainHeader.animationStatus){
        return true;
    }
    //activeMainTool.enableScroll();
    activeMainHeader.status=false;
    activeMainHeader.animationStatus=true;
    $('.mainMenuStructure').css('left','-70%');
    $('body').css('overflow','auto');
    $('.mainMenuCloseButtonStructure').css('opacity','0');
      activeMainHeader.animationStatus=false;
        $('.mainMenuWrapper').css('visibility','hidden');

};