<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <?php include('../templates/html/head.php') ?>
	<title>dob</title>
                    <?php include('../templates/html/styles.php') ?>
        <link rel="stylesheet" href="../pages/contact/css/style.css" />
</head>
<body>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
<div class="mainPage">
            <div class="mainContentWrapper">
                <div class="contactSectionTitle">
                    CONTACT
                </div>
                <div class="citiesStructure">

                </div>
                <div class="mapStructure">
                    <div class="leftSide">
                        <div class="locationStructure">
                            <h3 id="location"></h3>
                        </div>
                        <div id="map"></div>
                    </div>
                    <div class="rightSide">
                    </div>
                </div>
                <div class="leftContentWrapper">
                    <div class="inputsStructure">
                        <div class="mainTitle" >
                            LET US GET BACK TO YOU
                        </div>
                        <div class="inputContainerStructure">
                            <div class="inputStructure">
                                <input type="text" id="contactus_name" placeholder="Name" style="background-image: url('../assets/profile.svg');">
                            </div>
                            <div class="inputStructure" style="margin-right: 0px;">
                                <input type="text" id="contactus_company" placeholder="Company" style="background-image: url(../assets/company.svg);">
                            </div>
                            <div class="inputStructure">
                                <input type="email" id="contactus_email" placeholder="Email" style="background-image: url(../assets/email.svg);">
                            </div>
                            <div class="inputStructure" style="margin-right: 0px;">
                                <input type="tel" id="contactus_phone" placeholder="Phone Number" style="background-image: url(../assets/phone.svg);">
                            </div>
                            <div class="textAreaStructure">
                                <textarea type="tel" id="contactus_message" placeholder="Write a message"></textarea>
                            </div>
                        </div>          
                        <div class="submitButton" onclick="activeMainPage.checkInputs()">
                            SUBMIT
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <?php include('../templates/footer/index.php') ?>
    <?php include('../templates/html/firstScripts.php') ?>
<script src="../pages/contact/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?>
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
<script 
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfcYvMoxMFdw5rdaQ2ApopBH_SGBp62pc
&callback=initMap">
</script>
</body>
</html> 