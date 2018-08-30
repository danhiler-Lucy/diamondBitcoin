<!doctype html>
<html lang="en">
<head>
                    <?php include('../templates/html/head.php') ?>
                    <?php include('../templates/html/styles.php') ?>
    <link rel="stylesheet" href="../pages/resetpass/css/style.css" />
</head>
<body>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
    <div class="mainPage" >
        <div class="alertPopupStructure">
                                    <div class="alertPopupTitle">
                                            Please fill all the details.
                                    </div>
                                </div>
            <div class="mainContentWrapper">
                    <div class="loginStructure">
                        <div class="loginMainTitleStructure">
                                <div class="loginMainTitle">
                                       RESET PASSWORD
                               </div>
                                <div class="loginSecTitle">
                                       Log in for your account info
                               </div>
                        </div>
                        <div class="loginLeftContent">
                            <div class="loginLeftContentWrapper">
                                <div class="loginContentWrapper">
                            <div class="loginLeftContentInputStructure">
                                            <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Password
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                            <input class="loginInputLogin" type="password"  id="resetPassword"/>
                                                    </div>
                                            </div>
                                            <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Repeat Password
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                        <input class="loginInputLogin" type="password"  id="repeatResetPassword" />
                                                        <div class="capslockTitle">Capslock</div>
                                                    </div>
                                            </div>
                                            <div onclick="activeMainPage.resetpass()" class="loginLeftContentContinueButton">
                                                    reset
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>

    <div  class="approvalPopupStructureBlur"  onclick="activeMainPage.hideApprovalPopup()"></div>
        
    </div>
    <div id="approvalPopupStructure" class="comingSoonPopupStructure">
        <div class="comingSoonPopupWrapper">
                <div class="comingSoonPopupHeaderStructure">
                        <div class="comingSoonPopupHeaderTitle">
                                Password reset successful!
                        </div>
                    <div class="comingSoonPopupHeaderCloseButton" onclick="activeMainPage.hideApprovalPopup()">
                                CLOSE
                        </div>
                </div>
                <div class="comingSoonPopupTitle">
                        Return to the login page to log in the platform
                </div>
                <div class="comingSoonPopupLine">

                </div>
                <div class="comingSoonPopupDesc">
                        Subscribe us for free news and updates to your Email:
                        <div class="comingSoonPopupDescMail">sales@motiganz.com</div>
                </div>
        </div>
</div>
    
        <div class="pageWrapperLoadingStructure pageWrapperLoadingStructureHidden">
                <div class="mainTitleStructure">
                    <div class="mainIcon"><img src="../assets/favicon-96x96.png"></div>
                    <div  class="mainTitle">
                        dob 
                    </div>
                    <div  class="secTitle">
                         
                    </div>
                </div>
        </div>
    <?php include('../templates/footer/index.php') ?>
   
    
    <?php include('../templates/lpui/index.php') ?>
    <?php include('../templates/html/firstScripts.php') ?>
<script src="../pages/resetpass/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?>
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
</body>
</html> 