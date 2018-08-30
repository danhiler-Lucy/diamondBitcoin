<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <?php include('../templates/html/head.php') ?>
	<title>dob</title>
                    <?php include('../templates/html/styles.php') ?>
        <link rel="stylesheet" href="../pages/checkout/css/style.css" />
        <link rel="stylesheet" type="text/css" href="../css/dataTables/style.css">
</head>
<body>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
    <div class="mainPage" >
            <div class="mainContentWrapper">
                    <div class="checkoutHeaderStructure">    
                        <div class="checkoutHeaderBackButtonStructure checkoutHeaderBackButtonTo1_Structure">
                                   <!--<div class="checkoutHeaderBackButtonTitleStructure">
                                       <span class="checkoutHeaderBackButtonTitleIcon">< </span>
                                       <span class="checkoutHeaderBackButtonTitle">BACK TO CART</span>
                                   </div>-->
                            </div>
                    </div>
                <div class="checkoutMainContent">
                    <div class="mainTitle">
                            CHECKOUT
                            <div class="mobileSecuredIcon mobileElm">
                                <img src="../assets/secured-checking-icon-16.svg" style="">
                            </div>
                    </div>
                    <div class="mainSectionsStructure">
                            <div class="leftSection">
                                <div class="leftSectionWrapper"></div>
                                <div class="sectionHeaderStructure">

                                    <div class="contentSection" hidden>
                                            <div class="contentSectionTitle">
                                                EMAIL ADDRESS
                                            </div>
                                            <div id="emailAddressContent">
                                            </div>
                                    </div>
                                    <div class="contentSection">
                                        <div class="contentSectionTitle">
                                             SHIPPING COMPANY
                                        </div>
                                        <div class="shippingMethodSectionContent">
                                        <div class="shippingCompanyOptionStructure active" onclick="activeMainPage.changeShippingCompany(this)" type="FEDEX">
                                                <img src="../assets/selected-6.svg"/>
                                                <div class="optionContent">
                                                        FEDEX
                                                        <!--<div class="shippingOptionContent boldTitle600">
                                                                5 business days
                                                        </div>
                                                        <div class="shippingOptionContent boldTitle600">
                                                                Arrives by approx. 22/02/17
                                                        </div>-->
                                                    </div>
                                            </div>      
                                            <!--<div class="shippingCompanyOptionStructure" onclick="activeMainPage.changeShippingCompany(this)" type="brinks">
                                                <img src="../assets/selected-116.svg"/>
                                                <div class="optionContent">
                                                        BRINKS                                                        
                                                    </div>
                                            </div>
                                            <div class="shippingCompanyOptionStructure" onclick="activeMainPage.changeShippingCompany(this)" type="other">
                                                <img src="../assets/selected-116.svg"/>
                                                <div class="optionContent">
                                                        OTHER
                                                    </div>
                                            </div>-->                                   
                                    </div>
                                        </div>
                                    <div class="contentSection" >
                                        <div class="contentSectionTitle">
                                                SHIPPING OPTIONS
                                        </div>
                                        <div class="shippingOptionSectionContent">
                                        <div class="shippingOptionStructure active" onclick="activeMainPage.changeBundleCheckout(this)" type="true">
                                                <img src="../assets/selected-6.svg"/>
                                                <div class="shippingOptionContentStructure">
                                                        <div class="optionContent">
                                                                SHIP ALL GOODS TOGETHER
                                                        </div>
                                                        <!--<div class="shippingOptionContent boldTitle600">
                                                                5 business days
                                                        </div>
                                                        <div class="shippingOptionContent boldTitle600">
                                                                Arrives by approx. 22/02/17
                                                        </div>-->
                                                    </div>
                                            </div>
                                            <div class="shippingOptionStructure" onclick="activeMainPage.changeBundleCheckout(this)" type="false"> 
                                                <img  src="../assets/selected-116.svg"/>
                                                <div class="shippingOptionSectionContent">
                                                        <div class="optionContent">
                                                                SHIP AS SOON AS POSSIBLE
                                                        </div>
                                                    
                                                   <!--     <div class="shippingOptionContent shippingOptionBussinessDay boldTitle600">
                                                                5 business days
                                                        </div>
                                                        <div class="shippingOptionContent boldTitle600">
                                                                Arrives by approx. 22/02/17
                                                        </div>-->
                                                </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="contentSection">
                                        <div class="contentSectionTitle">
                                                SHIPPING ADDRESS
                                        </div>
                                        <div class="shippingOptionAddressMemberStructure">
                                                <div class="shippingOptionAddressMemberInputsStructure shippingOptionAddressMemberInputsStructureDisplay">
                                                    <div class="shippingOptionAddressMemberInputTitle">
                                                        <div style="height: 3px;width: 50px;background-color: #b9b9b9;float: left;/* margin-left: 10px; */margin-top: 7px;"></div>
                                                        <div style="height: 3px;width: 40px;background-color: #b9b9b9;float: left;margin-left: 10px;margin-top: 7px;"></div>
                                                        <div style="height: 3px;width: 190px;background-color: #b9b9b9;clear: both;top: 5px;position: relative;"></div>
                                                        <div style="height: 3px;width: 140px;background-color: #b9b9b9;clear: both;top: 10px;position: relative;margin-bottom: 25px;"></div>
                                                    </div>
                                                    <div class="shippingOptionAddressMemberInputTitle">
                                                            
                                                    </div>
                                                    <div class="shippingOptionAddressMemberInputTitle">
                                                            
                                                    </div>
                                                    <div class="shippingOptionAddressMemberInputTitle boldTitle700">
                                                            
                                                    </div>
                                                </div>
                                                <div id="address" class="shippingOptionAddressMemberFillInputsStructure shippingOptionAddressMemberFillInputsStructureDisplay">
                                                        <div class="shippingOptionAddressMemberFillInputTitle">
                                                                YOUR FULL ADDRESS:
                                                        </div>
                                                        <div id="locationField" class="shippingOptionAddressMemberFillInput">
                                                            <input id="autocomplete" class="" placeholder="" onFocus="geolocate()" type="text"></input>
                                                        </div>
                                                    <div class="shippingOptionAddressMemberFillInputTitle" >
                                                                Email:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input type="text" class="field" id="country" disabled="true"  placeholder=""/>
                                                        </div>
                                                     <div class="shippingOptionAddressMemberFillInputTitle">
                                                                STATE:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input type="text"  class="field" id="administrative_area_level_1" placeholder="" disabled="true"/>
                                                        </div>
                                                    <div class="shippingOptionAddressMemberFillInputTitle">
                                                                CITY:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input class="field" id="locality" disabled="true" placeholder=""  type="text" />
                                                        </div>
                                                     <div class="shippingOptionAddressMemberFillInputTitle">
                                                                ROUTE:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input type="text" class="field" id="route" disabled="true"  placeholder=""/>
                                                        </div>
                                                     <div class="shippingOptionAddressMemberFillInputTitle">
                                                                STREET NUMBER:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input  type="text"  placeholder="" class="field shippingOptionAddressMemberFillInputTitleStNum" id="street_number" disabled="true"/>
                                                        </div>
                                                     <div class="shippingOptionAddressMemberFillInputTitle ">
                                                                ZIP CODE:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                                <input type="text" placeholder="" class="field shippingOptionAddressMemberFillInputTitleZipCode" id="postal_code" disabled="true"/>
                                                        </div>
                                                        <!--<div class="shippingOptionAddressMemberFillInputTitle">
                                                                MORE:
                                                        </div>
                                                      <div class="shippingOptionAddressMemberFillInput">
                                                          <input type="text" placeholder="" id="companyName_shipping" />
                                                        </div>-->
                                                </div>
                                        </div>
                                    </div>
                                    <div class="contentSection contentSection2">
                                        <div class="contentSection2Structure">
                                                <div class="contentSection2Title">
                                                    PAYMENT METHOD
                                                </div>
                                            <div class="contentSecSection2Structure">
                                                <!--<div class="contentSecSection2Radio contentSecSection2RadioActive">
                                                    <div class="contentSecSection2RadioWrapper">
                                                    <img class="contentSecSection2RadioActive" src="../assets/selected-16-1.svg"/>
                                                    <img class="contentSecSection2RadioHidden" src="../assets/selected-16.svg"/>
                                                     WIRE
                                                    </div>
                                                </div>-->
                                                <div class="contentSecSection2Radio contentSecSection2RadioActive"  onclick="activeMainTool.comingSoonPopup()">
                                                    <div class="contentSecSection2RadioWrapper">
                                                        <img class="contentSecSection2RadioHidden" src="../assets/selected-16.svg"/>
                                                        <img class="contentSecSection2RadioActive" src="../assets/selected-16-1.svg"/>
                                                        BITCOIN
                                                    </div>
                                                </div>
                                                <div class="contentSecSection2Radio"  onclick="activeMainTool.comingSoonPopup()">
                                                    <div class="contentSecSection2RadioWrapper">
                                                    <img class="contentSecSection2RadioHidden" src="../assets/selected-16-1.svg"/>
                                                    <img class="contentSecSection2RadioActive" src="../assets/selected-16.svg"/>
                                                     CREDIT CARD
                                                     </div>
                                                </div>
                                                <div class="contentSecSection2Radio"  onclick="activeMainTool.comingSoonPopup()">
                                                    <div class="contentSecSection2RadioWrapper">
                                                        <img class="contentSecSection2RadioHidden" src="../assets/selected-16-1.svg"/>
                                                        <img class="contentSecSection2RadioActive" src="../assets/selected-16.svg"/>
                                                        PAYPAL
                                                    </div>
                                                </div>
                                                <div class="contentSection2tabStructure contentSection2tabStructure_0">
                                                    <div class="wireInfoSection">
                                                            <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr">
                                                                        <div class="contentSection2tabTableTdTitle">TO</div>
                                                                        <div class="contentSection2tabTableTdValue">dob DIAMONDS LTD</div>
                                                                    </div>              
                                                            </div>
                                                            <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr contentSection2tabTableTrWhite">
                                                                        <div class="contentSection2tabTableTdTitle">BANK</div>
                                                                        <div class="contentSection2tabTableTdValue">THE FIRST INTERNATIONAL BANK OF ISRAEL</div>
                                                                    </div>              
                                                            </div>
                                                            <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr">
                                                                        <div class="contentSection2tabTableTdTitle">Branch</div>
                                                                        <div class="contentSection2tabTableTdValue">Diamond Exchange Branch, Ramat Gan</div>
                                                                    </div>              
                                                            </div>
                                                            <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr contentSection2tabTableTrWhite">
                                                                        <div class="contentSection2tabTableTdTitle">Swift code</div>
                                                                        <div class="contentSection2tabTableTdValue">FIRBILITDEX</div>
                                                                    </div>              
                                                            </div>
                                                    <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr ">
                                                                        <div class="contentSection2tabTableTdTitle">Account number</div>
                                                                        <div class="contentSection2tabTableTdValue">026-248-101850</div>
                                                                    </div>              
                                                            </div>
                                                    <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr contentSection2tabTableTrWhite">
                                                                        <div class="contentSection2tabTableTdTitle">IBAN No</div>
                                                                        <div class="contentSection2tabTableTdValue">IL140310260000000101850</div>
                                                                    </div>              
                                                            </div>
                                                            <div class="contentSection2tabTableStructure">
                                                                    <div class="contentSection2tabTableTr">
                                                                        <div class="contentSection2tabTableTdTitle">AMOUNT</div>
                                                                        <div  id="totalCostSection1TitleValue"  class="contentSection2tabTableTdValueCost">$121,130</div>
                                                                    </div>              
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                    
                                                    <div class="wireInfoMessage">
                                                        By pressing "Send Order Request"
                                                            <div class="wireInfoSecMessage">
                                                                        Your  goods will be reserved, and one of our team members will contact you shortly to complete the order
                                                                </div>
                                                        </div>
                                                            <!--<div class="contentSection2tabButtonsStructure">
                                                                    <div class="contentSection2tabButton"  onclick="activeMainTool.comingSoonPopup()">
                                                                            SEND TO EMAIL
                                                                    </div>
                                                                    <div class="contentSection2tabButton"  onclick="activeMainTool.comingSoonPopup()">
                                                                            SAVE
                                                                    </div>
                                                                    <div class="contentSection2tabButton"  onclick="activeMainTool.comingSoonPopup()">
                                                                            PRINT
                                                                    </div>
                                                            </div>-->
                                                            <div class="checkoutSeparateLineStructure">
                                                                
                                                            </div>
                                                            <div class="contentSection2tabInfoStructure">
                                                                    <div class="contentSection2Info">
                                                                            <div class="contentSection2InfoDot">
                                                                                        
                                                                            </div>
                                                                            <div class="contentSection2InfoValue">
                                                                                        Once you press “SEND ORDER REQUEST” you have 24 hrs to complete the payment. 
                                                                            </div>
                                                                    </div>
                                                                    <div class="contentSection2Info">
                                                                            <div class="contentSection2InfoDot">
                                                                                        
                                                                            </div>
                                                                            <div class="contentSection2InfoValue">
                                                                                        The goods will be reserved for 24 hrs.
                                                                            </div>
                                                                    </div>
                                                                    <div class="contentSection2Info">
                                                                            <div class="contentSection2InfoDot">
                                                                                        
                                                                            </div>
                                                                            <div class="contentSection2InfoValue">
                                                                                        The shipment process will commence, once an order is fully paid and cleared in our account.
                                                                            </div>
                                                                    </div>
                                                                <div class="contentSection2Info">
                                                                            <div class="contentSection2InfoDot">
                                                                                        
                                                                            </div>
                                                                            <div class="contentSection2InfoValue">
                                                                                        As part of our policy, all shipping & handling will be calculated upon checkout, and will not be charged.
                                                                            </div>
                                                                    </div>
                                                                    <div class="contentSection2Info">
                                                                            <div class="contentSection2InfoDot">
                                                                                        
                                                                            </div>
                                                                            <div class="contentSection2InfoValue">
                                                                                        We provide door to door shipment via couriers such as Brinks, Malca Amit, UPS or FedEx.
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                            <div class="summeryInfoSendOrderRequestMobile summeryInfoSendOrderRequestAction mobileElm" onclick="activeMainPage.sendOrderRequest(); ">
                                                    SEND ORDER REQUEST
                                            </div>
                                    </div>
                                </div>
                                <div class="orderInProccessStructure">
                                    <div class="mainImages">
                                            <img src="../assets/checkout-white-diamond-72.svg"/>
                                            <img src="../assets/checkout-yellow-diamond-72.svg"/>
                                    </div>
                                    <div class="mainTitleSection">
                                            YOUR ORDER IS IN PROCCESS
                                    </div>
                                    <div class="secTitleSection">
                                            You Have 24hr To Complete The Wire
                                    </div>
                                    <div class="orderIdBox">
                                        <div class="orderIdWrapper">
                                            Order ID 
                                            <span id="orderIdBoxValue">
                                                    1255548541
                                            </span>
                                        </div>
                                    </div>
                                    <div class="infoContent1">
                                            An Email has been sent to 
                                            <span id="orderEmailValue"></span>
                                    </div>
                                    <div class="infoContent2">
                                            Send to another Email
                                    </div>
                                    <!--<div class="infoContent3" onclick="activeMainPage.showInfoContent4(); ">
                                            What happens after I complete the wire?
                                    </div>-->
                                    <div class="infoContent4">
                                             <div class="contentSection3Info">
                                                        <div class="contentSection3InfoDot">

                                                        </div>
                                                        <div class="contentSection3InfoValue">
                                                                    A confirmation e-mail will be sent to you when we approve the wire.
                                                        </div>
                                                </div>
                                                <div class="contentSection3Info">
                                                        <div class="contentSection3InfoDot">

                                                        </div>
                                                        <div class="contentSection3InfoValue">
                                                                    The shipment process will commence, once an order is fully paid and cleared in our account.

                                                        </div>
                                                </div>
                                        </div>
                                    <div class="continueButton" onclick="activeMainTool.redirectPage(1)">
                                            CONTINUE SHOPPING
                                    </div>
                                    
                                </div>
                                <div class="summeryInfoSendOrderRequest summeryInfoSendOrderRequestAction " onclick="activeMainPage.sendOrderRequest(); ">
                                                        SEND ORDER REQUEST
                                                </div>
                                <!--<div class="summeryInfoResumeCheckoutButton" onclick="activeMainPage.nextSection()">
                                        Send Order Request
                                    </div>-->
                            </div>
                            <div class="rightSection">
                                <div class="rightSectionMainTitle">
                                        CART
                                </div>
                                <div id="cartTableResults" class="cartTableResults">
                                            
                                        </div>
                                <div id="cartResults">
                                                    <div class="mainIconAnimation"><img src="../assets/favicon-96x96.png"></div>
                                                    <div class="emptyCartBoxStructure">
                                                               EMPTY CART
                                                        </div>
                                        </div>
                                <div class="orderSummaryStructure">
                                        <div class="itemCounterTitle">
                                                <span id="itemCounterTitleValue">0 </span>
                                                <span>ITEMS</span>
                                        </div>
                                        <div class="summeryInfoTdTotalStructure">
                                            <span class="summeryInfoTdTotalStructureTitle">TOTAL:</span>
                                                <span id="totalCostSummeryTitleValue"  class="summeryInfoRightTdTotalStructure">
                                                        $0
                                                </span>
                                        </div>
                                </div>           
                                            
                                            <!--<div class="whatsupInfoStructure">
                                                    <div class="whatsappInfoStructure">
                                                            WHATSAPP CUSTOMER SERVICE
                                                    </div>
                                                    <div class="whatsappInfoNumberStructure">
                                                        <div class="whatsappInfoIcon">
                                                                <img src="../assets/whatsapp-icon-16.svg"/>
                                                        </div>
                                                        <div class="whatsappInfoNumber">
                                                                972- 54 3335544
                                                        </div>
                                                    </div>
                                            </div>-->
                                            <div class="actionButtonsStructure">
                                                <div class="summeryInfoResumeShoppingButton" onclick="activeMainTool.redirectPage(1)">
                                                        CONTINUE SHOPPING
                                                </div>
                                                <div class="summeryInfoSendOrderRequest summeryInfoSendOrderRequestAction" onclick="activeMainPage.sendOrderRequest(); ">
                                                        SEND ORDER REQUEST
                                                </div>
                                                </div>
                                        </div>
                                </div>
                            </div>
                    
                    </div>
                </div>
            </div>
    </div>
    <?php include('../templates/footer/index.php') ?>
    <?php include('../templates/productPopup/index.php') ?>
        <?php include('../templates/html/firstScripts.php') ?>
<script src="../pages/checkout/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?> 
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
       <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0VOEGncvzBaExxxaQbhU_-xE4ccJRVGQ&libraries=places&callback=initAutocomplete&language=en"
        async defer></script>

    <script src="../js/dataTables/jquery.dataTables.js"></script>
    <script src="../js/dataTables/jszip.js"></script>
    <script src="../js/dataTables/pdfmake.js"></script>
    <script src="../js/dataTables/vfs_fonts.js"></script>
    <script src="../js/dataTables/buttons.html5.js"></script>
    <script src="../js/dataTables/buttons.print.js"></script>
    <script src="../js/dataTables/dataTables.buttons.js"></script>
    <script src="../js/dataTables/buttons.flash.js"></script>
    
</body>
</html>