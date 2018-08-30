<!doctype html>
<html lang="en">
<head>
                    <?php include('../templates/html/head.php') ?>
                    <?php include('../templates/html/styles.php') ?>
                    <link rel="stylesheet" href="../pages/productview/css/style.css" />
                    <link rel="stylesheet" href="../templates/productCard/css/style.css" />
</head>
<body>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
<div class="mainPage homePage">
    <div class="loginButtonMobile">
        LOGIN
    </div>
	<div class="mainSection">
		<div class="mainTitle">
			FIND YOUR PERFECT DIAMOND
                                                            <div class="generalSearchStructure" style="position: relative;">
                                                                <input onkeyup="activeMainPage.getSearchData()" id="generalSearchInput" type="text" style="width: 700px;padding: 16px;border: none;border-radius: 120px;margin-top: 25px;font-size: 14px;    box-shadow: 0px 2px 3px 0px #f1f1f1;" placeholder="For example:   Round   VVS1   Hong Kong">
                                                                <div style="position: absolute;top: 34px;right: 16px;">
                                                                    <img onclick="TtSResume();" src="../assets/mic.png" style="width: 27px;">
                                                                </div>
                                                        </div>
                                                        <div class="generalSearchIconStructure" style="position: absolute;width: 730px;">
                                            <div class="mainFilterButton6grid filterAttrSection filterAttr_2" name="model" style="width: 545px;position: relative;margin: 0 auto;margin-top: 30px;">
                                                <div class="mainFilterButtonShapeImageStructure" type="RB">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/round-diamond-unselected-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/round-diamond-selected-new-40.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    ROUND
                                                            </div>
                                                        </div>
                                                </div>
                                                 <div class="mainFilterButtonShapeImageStructure" type="CU" style="margin-left: 0px;">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/cushion-diamond-new-40-off.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/cushion-diamond-selected-new-40.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    CUSHION
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="RA" style="
    margin-left: 1px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/radiant-diamond-new-40-off.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/radiant-diamond-selected-new-40.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    RADIANT
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="PR" style="
    margin-left: 3px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/princess-cut-diamond-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/princess-cut-diamond-new-401.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    PRINCESS
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="OV" style="
    margin-left: -1px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/oval-diamond-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/oval-diamond-new-401.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    OVAL
                                                            </div>
                                                        </div>
                                                </div>
                                               
                                                <div class="mainFilterButtonShapeImageStructure" type="HS" style="
    margin-left: -4px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/heart-diamond-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img class="heartIconActive" src="../assets/heart-diamond-new-40@3x.png">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    HEART
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="EM" style="
    margin-left: -2px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/emerald-diamond-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/emerald-diamond-new-401.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    EMERALD
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="MQ" style="
    margin-left: -8px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/pear-diamond-new-40.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/pear-diamond-new-401.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    MARQUISE
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="AS" style="
    margin-left: -5px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/ascher-diamond-new-401.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/ascher-diamond-new-40.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    ASCHER
                                                            </div>
                                                        </div>
                                                </div>
                                            <div class="mainFilterButtonShapeImageStructure" type="PS" style="
    margin-left: -4px;
">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/pear-cut-diamond-new-401.svg">
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/pear-cut-diamond-new-40.svg">
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    PEAR
                                                            </div>
                                                        </div>
                                                </div></div>
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
					VIEW ALL
				</div>
				<div class="mainTitle">
					RECOMMENDED
				</div>
				<div class="secTitle">
					According To Previous Activity
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
					RECENTLY VIEWED
				</div>
				<div class="secTitle">
					In case you’re still searching
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
    <?php include('../templates/wishList/index.php') ?>
        <div class="pageWrapperLoadingStructure">
                <div class="mainTitleStructure">
                    <div class="mainIcon"><img src="../assets/favicon-96x96.png"></div>
                    <div  class="mainTitle">
                        dob 
                    </div>
                    <div  class="secTitle">
                         
                    </div>
                </div>
        </div>
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
<script src="../pages/productview/js/script.js"></script>
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