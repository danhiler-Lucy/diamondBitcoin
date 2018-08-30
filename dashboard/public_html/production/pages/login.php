<!DOCTYPE html>
<html lang="en">
  <head>

    <?php include('../templates/head.php') ?>
      <link href="../css/login.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="mainPage" style="
">
        <div class="pageTitle">
            Dashboard
        </div>
        <div class="alertPopupStructure">
                                    <div class="alertPopupTitle">
                                            Please fill all the details.
                                    </div>
                                </div>
            <div class="mainContentWrapper">
                    <div class="loginStructure">
                        
                        <div class="loginLeftContent">
                            <div class="loginLeftContentWrapper">
                                <div class="loginContentWrapper">
                                    <div class="loginContentWrapperLogo">
                                        <img src="../images/lucyLogo.png"/>
                                    </div>
                              <div class="loginLeftContentTitle">
                                        Log in to your account
                              </div>
                            <div class="loginLeftContentSecTitle">
                                        I have an account.
                              </div>
                            <div class="loginLeftContentInputStructure">
                                            <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Email address
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                            <input class="loginInputLogin" type="email" id="loginEmail">
                                                    </div>
                                            </div>
                                            <div class="loginLeftContentInputWrapper">
                                                    <div class="loginLeftContentInputWrapperTitle">
                                                            Password
                                                    </div>
                                                    <div class="loginLeftContentInputWrapperInput">
                                                        <input class="loginInputLogin" type="password" id="loginPassword">
                                                        <div class="capslockTitle">Capslock</div>
                                                    </div>
                                            </div>
                                
                                
                                            <div onclick="activeloginManager.login()" class="loginLeftContentContinueButton">
                                                <span class="loginLeftContentContinueButtonTitle">
                                                    enter
                                                    </span>
                                                    <span class="loginLeftContentContinueButtonIcon">
                                                        <img src="../images/Loading_icon.gif"/>
                                                    </span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
    </div>
        
        <!-- /page content -->

        <?php include('../templates/footer.php') ?>
      </div>
    </div>


<!-- jQuery -->
    <script src="../../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>    
    <script src="../js/scripts/login.js"></script>
  </body>
</html>
