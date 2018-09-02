<!doctype html>
<html lang="en">
<head>
                    <?php include('../templates/html/head.php') ?>
                    <?php include('../templates/html/styles.php') ?>
                    <link rel="stylesheet" href="../pages/home/css/style.css" />
                    <link rel="stylesheet" href="../templates/productCard/css/style.css" />
</head>
<body>
    <?php include('../templates/loadingView/index.php') ?>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
<div class="mainPage homePage">
	<div class="mainSection">
		<div class="mainTitle">
                    <div class="boxSectionCenter">
                        <div class="boxSectionCenterWrapper">
                            <div class="boxSectionCenterTitle">
                                Buy diamonds with 
                            </div>
                        <div class="boxSectionCenterImg">
                                <img src="../assets/company/bitcoinLogoBlue.png">
                            </div>
                            </div>
                    </div>
                    <!--
                                                            <div class="mainTitleStructure">
                                                                    SEARCH YOUR OWN DIAMOND:
                                                            </div>
                                                            <div class="generalSearchStructure" >
                                                                <?php include('../templates/smartSearch/index.php') ?>
                                                                <div class="generalSearchbuttonIconStructure" onclick="activeMainPage.setUrlParamsToSearch();">
                                                                    SEARCH
                                                                </div>
                                                        </div>
                    -->
                        <div class="boxSection2grids">
                        <div class="boxSection2gridsWrapper">
                            <div class="boxSection2gridsWrapperLeft">
                        <div class="boxSection2gridsWrapperImg">
                                <img src="../assets/diamonds-start-page.png">
                            </div>
                                </div>
                            <div class="boxSection2gridsWrapperRight">
                            <div class="boxSectiongridsWrapperTitle">
                                Convert bitcoin to high value tangible goods
                            </div>
                                <div class="boxSectiongridsWrapperDescription">
                                -Diamonds manufacture over 65 years<br/>
-35 Years Sightholder with Debeers<br/>
-Shipping all over the world<br/>
-High quality with fair price
                            </div>
      
                                </div>
                            </div>
                    </div>
        </div>
        


        
		<div class="buttonDiamondWrapper">
			<div class="buttonDiamond buttonDiamondWhite" onclick="activeMainTool.redirectPageWithEx(1,'?colorType=0')">
				WHITE
			</div>
			<div class="buttonDiamond buttonDiamondYellow" onclick="activeMainTool.redirectPageWithEx(1,'?colorType=1')">
				YELLOW
			</div>
		</div>
	</div>
	<div class="mainContentWrapper">
		<div class="recommendedSection">
				<div class="buttonViewMore desktopElm" onclick="activeMainTool.redirectPage(1)">
					MORE
				</div>
				<div class="mainTitle">
                                                                                        POPULAR SEARCHES | <span>BY LAST 24 HOURS</span>
				</div>
                                                                                <div class="resultsStructure">
				<div class="results">
                                                                                        
                                                                                </div>
                                                                                    </div>
                                                                                <div class="buttonViewMore mobileElm" onclick="activeMainTool.redirectPage(1)">
					VIEW ALL
				</div>
                                                                                <div class="results1Structure mobileElm">
                                                                                    <div class="results1">

                                                                                    </div>
                                                                                </div>
		</div>
                                         <div class="recentlyViewedSection">
				<div class="buttonViewMore desktopElm" onclick="activeMainTool.redirectPageWithEx(1,'?activeTab=recentlyViewed')">
					VIEW ALL
				</div>
                                                                            <div class="mainTitle">
                                                                                        RECENTLY VIEWED | <span>In case you’re still searching</span>
				</div>
				<div class="secTitle">
					
				</div>
                                                                                <div class="recentlyViewedResultsStructure">
                                                                                        <div class="recentlyViewedResults smallCard">
                                                                                                
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
		</div>
	</div>
   <div class="teaserSectionStructure" style="">
        <div class="teaserSectionWrapper">
                <div class="teaserSectionTitle">NEW
                    <div class="teaserSectionSecTitle">COLLECTION</div>
                </div>
                <div class="teaserSectionButtonImg">
                                <img src="../assets/diamond image.png"/>
                </div>
                <div class="teaserSectionButton" onclick="activeMainTool.redirectPage(1)">
                        <div class="teaserSectionButtonTitle"> VIEW MORE</div>
                </div>
        </div>
    </div>
</div>
    <?php include('../templates/footer/index.php') ?>
    <?php include('../templates/productPopup/index.php') ?>
    <?php include('../templates/miniCart/index.php') ?>
<?php include('../templates/miniBidsList/index.php') ?>
    <?php include('../templates/wishList/index.php') ?>


<div class="mobileAlertBlurStructure mobileElm" onclick="activeMainPage.changeMobileAlertPopupView(1)">
</div>
<div class="mobileAlertStructure mobileElm">
    <div class="mobileAlertWrapper">
            <div class="mobileAlertHeaderSturcture">
                    <div class="mobileAlertHeaderTitle">
                        Oops
                    </div>
                <div class="mobileAlertHeaderButton">
                    <img src="../assets/closing-cross-15@3x.png" />
                    </div>
            </div>
        <div class="mobileAlertBody mobileElm">
                    <div class="mobileAlertBodyTitle">
                        
                    </div>
                    <div class="mobileAlertBodyDesc">
                                Our site isn't  mobile friendly yet.
                    </div>
            </div>
        <div class="mobileAlertButtonStructure" onclick="activeMainPage.changeMobileAlertPopupView(1)">
                    <div class="mobileAlertButton">
                            Ok, got it!
                    </div>
            </div>
    </div>
</div>
<?php include('../templates/lpui/index.php') ?>
<?php include('../templates/html/firstScripts.php') ?>
<script src="../pages/home/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?>
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
    <?php
    if (isset($_GET['vm'])) {
        include('../templates/vm/index.php');
    }else{
        // Fallback behaviour goes here
    }
     ?>

    
</body>
</html>