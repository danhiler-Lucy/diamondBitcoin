<!doctype html>
<html lang="en">
<head>
                    <?php include('../templates/html/head.php') ?>
                    <?php include('../templates/html/styles.php') ?>
    <link rel="stylesheet" href="../pages/login/css/style.css" />
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
                    <a href="../start" class="backButton">
                            BACK
                    </a>
            <div class="mainContentWrapper">
                    <div class="loginStructure">
                        <div class="loginLeftContent">
                            <img src="../assets/company/logo2.png" alt="Logo Image" />
                        </div>
                        <div id="loginStructure" class="loginRightContent">
                        <div class="registerContentWrapper">
                          <div class="loginMainTitle">
                                        Create an account
                              </div>
                            <div class="loginWrapper">
                                
                                    <div class="loginLeftContentInputWrapper">
                                            <div class="loginLeftContentInputWrapperTitle registerContentInputWrapperTitle">
                                                    First name:
                                            </div>
                                            <div class="loginLeftContentInputWrapperInput registerContentInputWrapperInput">
                                                    <input class="loginInputRegister registerInputRegister" id="registerFirstname" type="text"  />
                                            </div>
                                    </div>
                                <div class="loginLeftContentInputWrapper">
                                            <div class="loginLeftContentInputWrapperTitle  registerContentInputWrapperTitle">
                                                    last name:
                                            </div>
                                            <div class="loginLeftContentInputWrapperInput registerContentInputWrapperInput">
                                                    <input class="loginInputRegister registerInputRegister" id="registerLastname" type="text"  />
                                            </div>
                                    </div>
                                <div class="loginLeftContentInputWrapper">
                                        <div class="loginLeftContentInputWrapperTitle registerContentInputWrapperTitle">Gender</div>
                                        <div class="radioGroup">
                                                <label class="radio-container">MR.
                                                    <input id="genderMaleInput" type="radio" name="gender" checked>
                                                        <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-container">MRS.
                                                        <input id="genderFemaleInput" type="radio" name="gender">
                                                        <span class="checkmark"></span>
                                                </label>
                                        </div>
                                </div>
                                <div class="loginLeftContentInputWrapper">
                                            <div class="loginLeftContentInputWrapperTitle registerContentInputWrapperTitle">
                                                    Email:
                                            </div>
                                            <div class="loginLeftContentInputWrapperInput registerContentInputWrapperInput">
                                                    <input class="loginInputRegister registerInputRegister" id="registerEmail" type="email"  />
                                            </div>
                                    </div>
                                    <div class="loginLeftContentInputWrapper">
                                            <div  class="loginLeftContentInputWrapperTitle registerContentInputWrapperTitle">
                                                    Password:
                                            </div>
                                            <div class="loginLeftContentInputWrapperInput registerContentInputWrapperInput">
                                                <input class="loginInputRegister registerInputRegister" id="registerPassword"  type="password" />
                                                <div class="capslockTitle">Capslock</div>
                                            </div>
                                    </div>
                                <div class="loginLeftContentInputWrapper">
                                            <div class="loginLeftContentInputWrapperTitle registerContentInputWrapperTitle">
                                                    Confirm password:
                                            </div>
                                            <div class="loginLeftContentInputWrapperInput registerContentInputWrapperInput">
                                                <input class="loginInputRegister registerInputRegister" id="registerConfirmPassword"  type="password"  />
                                                <div class="capslockTitle">Capslock</div>
                                            </div>
                                    </div>
                                <div class="checkboxDescStructure">
                                    By clicking Next, you agree to our <a href="../terms" target="_blank">Terms and Conditions</a> and <a href="../privacypolicy" target="_blank">Privacy Policy</a>.
                            </div>
                                    <div class="loginLeftContentForgetTitle">
                                            
                                    </div>
                                    <div class="buttonsStructure">
                                        <div onclick="activeMainPage.registerMember()" id="submitRegisterButton" class="loginLeftContentContinueButton">
                                                next
                                        </div>
                                        <div onclick="activeMainPage.hideRegisterForm()" id="backButton">
                                                back
                                        </div>
                                        
                                    </div>
                          </div>
</div>
                          <div class="loginLeftContentWrapper visible">
                                <div class="forgotPasswordContentWrapper">
                                     <div class="loginLeftContentTitle">
                                                Reset password
                                     </div>
                                <div class="loginLeftContentInputWrapper">
                                        <div class="loginLeftContentInputWrapperTitle">
                                                Email address:
                                        </div>
                                        <div class="loginLeftContentInputWrapperInput">
                                                <input class="resetpassInputLogin" type="email"  id="forgotPassEmail"/>
                                        </div>
                                </div>
                                <div class="forgotPasswordContentSuccessStructure">
                                    <div class="forgotPasswordContentSuccessTitle">
                                            Sent!
                                    </div>
                                </div>
                                            <div class="buttonsStructure">
                                                <div onclick="activeMainPage.sendForgotPassword()" class="forgotPassLeftContentContinueButton">
                                                        enter
                                                </div>
                                                <div onclick="activeMainPage.hideForgotPassword()" class="forgotPassLeftContentBackButton">
                                                        back
                                                </div>
                                                
                                            </div>
                                </div>
                                <div class="loginContentWrapper">
                                <div class="loginLeftContentInputStructure">
                                    <div class="loginWrapper">
                                    <div class="loginMainTitle">
                                                Login To Your Account                                       
                                        </div>
                                    <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Email:
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                            <input class="loginInputLogin" type="email"  id="loginEmail"/>
                                                    </div>
                                            </div>
                                            <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Password:
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                        <input class="loginInputLogin" type="password"  id="loginPassword" />
                                                        <div class="capslockTitle">Capslock</div>
                                                    </div>
                                            </div>
                                <div class="loginLeftContentForgetTitle" onclick="activeMainPage.showForgotPassword()"> 
                                                    Forgot password?
                                            </div>
                                <div class="loginLeftContentRememberTitle"> 
                                                    <input id="loginLeftContentRememberCheckbox" type="checkbox" checked>
                                                    Remember Password
                                            </div>
                                
                                            <div class="buttonsWrapper">
                                                <div className="loginContinueButtonWrapper">
                                                        <div onclick="activeMainPage.loginMember()" class="loginLeftContentContinueButton">
                                                                enter
                                                        </div>
                                                </div>
                                                <div className="registerButtonWrapper">
                                                        <div onclick="activeMainPage.showRegisterForm()" class="registerButton">
                                                                register
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
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
                                Thanks for joining!
                        </div>
                    <div class="comingSoonPopupHeaderCloseButton" onclick="activeMainPage.hideApprovalPopup()">
                                CLOSE
                        </div>
                </div>
                <div class="comingSoonPopupTitle">
                        We'll notify you by mail as soon as your sign up request is processed and approved.
                </div>
                <div class="comingSoonPopupLine">

                </div>
                <div class="comingSoonPopupDesc">
                        <div class="comingSoonPopupDescMail">sales@motiganz.com</div>
                </div>
        </div>
</div>
    

    <?php include('../templates/loadingView/index.php') ?>
    <?php include('../templates/footer/index.php') ?>
   
    
    <?php include('../templates/lpui/index.php') ?>
    <?php include('../templates/html/firstScripts.php') ?>
<script src="../pages/login/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?>
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
</body>
</html> 