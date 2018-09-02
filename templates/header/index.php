<div id="mainHeaderWrapper" class="mainFixedHeaderWrapper desktopElm">
    <div class="mainHeaderFixedWrapper">
        <div class="mainHeaderLogoStructure">
            <div class="mainHeaderLogoWrapper">
                    <img src="../assets/company/logo2.png"/>
            </div>
        </div>
        <div class="mainHeaderStructure">
            <div class="header0_button navBarTitle"   onclick="activeMainTool.redirectPage(0)">
                Home
            </div>
            <div class="header1_button navBarTitle" onclick="activeMainTool.redirectPage(1)">
                Search
            </div>
            <div  class="header2_button navBarTitle" onclick="activeMainTool.redirectPage(5)" hidden>
                Profile
            </div>
            <div  class="header3_button navBarTitle" onclick="activeMainTool.redirectPage(8)">
                About Us
            </div>
            <div class="header4_button navBarTitle" onclick="activeMainTool.redirectPage(9)">
                Contact
            </div>
        </div> 
        </div>    
    </div>    
<div id="" class="mainHeaderWrapper desktopElm">
        <div class="mainHeaderFixedWrapper">
        <div class="mainHeaderLogoStructure">
            <div class="mainHeaderLogoWrapper">
                <img class="blackLogo" src="../assets/company/logo1.png" onclick="activeMainTool.redirectPage(0)"/>
                    <img class="whiteLogo" src="../assets/company/logo2.png" onclick="activeMainTool.redirectPage(0)"/>
            </div>
        </div>
        <div class="mainHeaderStructure">
            <div class="header0_button navBarTitle" onclick="activeMainTool.redirectPage(0)">
                Home
            </div>
            <div class="header1_button navBarTitle"  onclick="activeMainTool.redirectPage(1)">
                Search
            </div>
            <div  class="header2_button navBarTitle" onclick="activeMainTool.redirectPage(5)" hidden>
                Profile
            </div>
            <div  class="header3_button navBarTitle" onclick="activeMainTool.redirectPage(8)">
                About Us
            </div>
            <div class="header4_button navBarTitle"  onclick="activeMainTool.redirectPage(9)">
                Contact
            </div>
            <!--<div id="header5_button" class="navBarTitle" onclick="window.open('https://www.dob.com/dashboard/public_html/production/','_blank' );"  style="display: none;">
                Dashboard
            </div>-->
             
            <div  class="memberHiddenStructure rightNavBarStructure">
                <div id="header7_button" class="loginButton"  onclick="activeMainTool.redirectPage(7)">
                    LOGIN
                </div>
            </div>
            <div class="headerWidgetNews">
                             
<div class="btcwdgt-price" bw-theme="light" bw-cur="usd"></div>
                         </div>
        </div>
    </div>
</div>
           <div class="memberFloatHeader memberShowStructure rightNavBarStructure desktopElm">
                <div class="headerWidgetNews">
                             
<div class="btcwdgt-price" bw-theme="light" bw-cur="usd"></div>
                         </div>
                 <div class="memberNotificationStructure" >
                     <div class="memberNotificationWrapper">
                         <div class="memberNotificationIcon" onclick="activeProductManager.showNotifications()">
                                        <img src="../assets/icons/messageIcon.png"/>
                                        <div class="memberNotificationIconDot"></div>
                            </div>
                        
                         <div class="memberNotificationResultStructure" >
                             <div class="memberNotificationResultWrapper">
                                 <div class="memberNotificationResultMainTitleStructure">
                                     <div class="memberNotificationResultMainTitle">
                                         NOTIFICATIONS
                                     </div>
                                     <div class="memberNotificationResultMainNewResultsCounter" onclick="activeProductManager.hideNotifications()">
                                         <img src="../assets/cross-cancel-black-16.svg"/>
                                     </div>
                                 </div>
                                 <div class="memberNotificationResults" >
                                    <div class="memberNotificationResultItem"><div class="memberNotificationResultItemLeftSection"><div class="unreadNotificationIcon"></div><div class="memberNotificationResultItemImage"><img src="../assets/messageIcon.png"></div></div><div class="memberNotificationResultItemRightSection"><div class="memberNotificationResultItemTitle"></div><div class="memberNotificationResultItemDis memberNotificationResultItemDisEmpty">You don't have any notifications yet</div><div class="memberNotificationResultItemTime"></div></div></div>
        
                                     
                                     </div>
                                 <div class="memberNotificationSeeAllButtonStructure">
                                     <div class="memberNotificationSeeAllButtonTitle">
                                         SEE ALL
                                 </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="memberAccountDropdownWrapper" class="memberAccountDropdownWrapper" tabindex="0">
                        <div class="rightNavBarTitle">
                            <span class="firstNameMemberHeader" id="firstNameMemberHeader">You </span>
                            <span>
                                <img src="../assets/arrow-dropdown-8.svg"/>
                            </span>
                        </div>
                         <div class="memberShowDropdownStructure" >
                             <div class="memberShowDropdownButton" onclick="activeMemberManager.logoutUser()">
                                  <i class="fa fa-sign-out" aria-hidden="true"></i>  LOG OUT
                            </div>
                         </div>
                            </div>
                <div class="checkOutButton"  onclick="activeMainTool.redirectPage(6)">
                    CHECKOUT
                </div>
                <div class="bitpayLogo"> 

                    <div class="lockWrapper"><img src="../assets/lock.png"></div>
                    <div><img src="../assets/bitpay.png"></div>

                </div>
            </div>
<div id="mobileHeaderWrapper" class="mobileHeaderWrapper mobileElm">
    <div class="mobileHeaderStructure ">
        <div class="navBarTitle navBarTitleLeft" onclick="activeMainMenu.openMobileMenu();">
                <img src="../assets/hamburger-menu-40.svg"/>
        </div>
        
        <!--<div class="navBarTitle navBarTitleLeft" onclick="activeMainTool.redirectPage(1)">
                <img src="../assets/search-icon-40.svg"/>
        </div>
        <div class="navBarTitle navBarTitleRight navBarTitleOpacity">
                <img src="../assets/pick-n-choose-white-40.svg"/>
        </div>-->
        
         <div class="navBarTitle navBarTitleLeft" onclick="activeMainTool.redirectSearchPage(1)">
                <img src="../assets/search-icon-40.svg"/>
        </div>
        
        <div class="navBarTitle navBarTitleRight cartIconMobile" onclick="activeMiniCart.expandCart();">
                <img src="../assets/shopping-cart-white-nav-401.svg"/>
                <div class="mobileHeaderIconBubbleStructure">
                        <div class="mobileHeaderIconBubbleTitle">
                    
                        </div>
                </div>
        </div>
        <div class="navBarTitle navBarTitleRight wishlistIconMobile" onclick="activeWishList.expandWishList()">
                <img src="../assets/if_star_384882.svg"/>
                <div class="mobileHeaderIconBubbleStructure">
                        <div class="mobileHeaderIconBubbleTitle">
                    
                        </div>
                </div>
        </div>
    </div>
</div>
            
<?php include('../templates/menu/index.php') ?>