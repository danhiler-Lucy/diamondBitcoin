<!doctype html>
<html lang="en">
<head>
                    <?php include '../templates/html/head.php'?>
                    <?php include '../templates/html/styles.php'?>
                    <link rel="stylesheet" href="../pages/search/css/style.css" />
                    <link rel="stylesheet" href="../templates/productCard/css/style.css" />
                    <link rel="stylesheet" href="../templates/productCard/css/style.css" />
                    <link rel="stylesheet" type="text/css" href="../css/dataTables/style.css">
                

</head>
<body>
    <?php include '../templates/loadingView/index.php'?>
<?php include '../templates/wrapper/start.php'?>
<?php include '../templates/logo/index.php'?>
<?php include '../templates/header/index.php'?>
<div class="mainPage searchPage">
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
    <div class="mainfilterStructureBlur mobileElm" onclick="activeMainPage.openFilterMenuMobile()">

    </div>
    <div class="mainfilterOpenButtonStructure mobileElm" onclick="activeMainPage.openFilterMenuMobile()">
                                        <div class="mainfilterOpenButton">
                                            <img src="../assets/filtersIcon.png"/>
                                        </div>
                                </div>
	<div class="mainfilterStructure">
        <div class="generalSearchWrapper" >
                                                        <div class="generalSearchStructure " style="position: relative;">
                                                                <?php include '../templates/smartSearch/index.php'?>
                                                                <div class="generalSearchbuttonIconStructure">
                                                                    VIEW ALL
                                                                </div>
                                                        </div>
                </div>
                            <div class="mainfilterWrapper">
                                    <div class="mainfilterHeaderStructure">
                                        <div class="resultsTitle mobileElm" onclick="activeMainPage.changeProductsView(1)">
                                            <span>RESULTS</span>
                                    </div>
                                        <div class="clearButtonFiltersMobile mobileElm" onclick="activeMainPage.clearAllFilters()">
                                            Clear
                                        </div>
                                            <div class="mainfilterSearchTitleStructure">
                                                    <div class="mainfilterSearchTitle">
                                                            NEW SEARCH
                                                            <span><img src="../assets/arrow-new-search-dropdown.svg"></span>
                                                    </div>
                                            </div>
                                        <!--<div class="mainfilterSearchSaveButton"  onclick="activeMainTool.comingSoonPopup()">
                                                    SAVE SEARCH
                                            </div>-->
                                            <div class="poweredByLabel" >
                                                    Powered by <img src="http://www.motiganz.com/wp-content/uploads/2017/04/cropped-motigaz-1.png" />
                                            </div>
                                            <div class="mainfilterSearchClearButton"  onclick="activeMainPage.clearAllFilters()">
                                                    CLEAR
                                            </div>
                                    </div>
                                 <div class="mainFilterButtonStructure">
                                        <div class="mainFilterButtonWrapper">
                                            <div class="mainFiltersWrapper">
                                            <div class="mainTopFiltersContainer">
                                            <div class="mainFilterButtonCategories mainFilterButton2grid filterAttrSection filterAttr_1" name="colorType">
                                                <div onclick="activeMainPage.updateFilterValue(1,0)" id="mainFilter_type1_0" name="white" class="mainFilterButtonColor mainFilterButtonColorWhite mainFilterButtonColorWhiteActive">
                                                        WHITE DIAMONDS
                                                </div>
                                                <div onclick="activeMainPage.updateFilterValue(1,1)"  id="mainFilter_type1_1" name="yellow" class="mainFilterButtonColor mainFilterButtonColorYellow " hidden><!-- mainFilterButtonColorYellowActive -->
                                                        YELLOW
                                                </div>
                                            </div>
                                            <div class="mainFilterButton6grid filterAttrSection filterAttr_2" name="model" filterType="1"  type="2" >
                                                <div class="mainFilter1gridTitle mainFilterRangeBoxTitle mobileElm" >
                                                    <div class="mainFilter1gridTitleIcon">

                                                    </div>
                                                            MODEL
                                                            <!--<div class="mainFilterRangeBoxSumTitleActive">

                                                            </div>-->
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>

                                                <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_2">
                                                        <div class="mainFilterBasisHoverBoxWrapper mainFilterBasisHoverBoxModelWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox" >
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    MODEL
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(2)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="BR">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/round-diamond-unselected-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/round-diamond-selected-new-40.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    ROUND
                                                            </div>
                                                        </div>
                                                </div>
                                                 <div class="mainFilterButtonShapeImageStructure" type="CU">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/cushion-diamond-new-40-off.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/cushion-diamond-selected-new-40.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    CUSHION
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="RA">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/radiant-diamond-new-40-off.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/radiant-diamond-selected-new-40.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    RADIANT
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="PR">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/princess-cut-diamond-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/princess-cut-diamond-new-401.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    PRINCESS
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="OV">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/oval-diamond-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/oval-diamond-new-401.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    OVAL
                                                            </div>
                                                        </div>
                                                </div>
                                               <div class="mainFilterButtonShapeImageStructure" type="MQ">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/pear-diamond-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/pear-diamond-new-401.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    MARQUISE
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="HS">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/heart-diamond-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img class='heartIconActive' src="../assets/heart-diamond-new-401.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    HEART
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="EM">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/emerald-diamond-new-40.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/emerald-diamond-new-401.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    EMERALD
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mainFilterButtonShapeImageStructure" type="PS">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/pear-cut-diamond-new-401.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/pear-cut-diamond-new-40.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    PEAR
                                                            </div>
                                                        </div>
                                                </div>
                                                <!--<div class="mainFilterButtonShapeImageStructure" type="AS">
                                                        <div class="mainFilterButtonShapeImage">
                                                            <img src="../assets/ascher-diamond-new-401.svg"/>
                                                        </div>
                                                        <div class="mainFilterButtonShapeImageActive">
                                                            <img src="../assets/ascher-diamond-new-40.svg"/>
                                                            <div class="mainFilterButtonShapeImageActiveTitle">
                                                                    ASCHER
                                                            </div>
                                                        </div>
                                                </div>-->
                                                            
                                                           <div id="moreModelsButton" class="resultsActionButton resultsActionMoreModelsButton" >
                                                               <div class="resultsActionButtonWrapper" onclick="activeMainPage.toggleActionPopup(3)">MORE
                                            <img src="../assets/arrowUp.png" alt="Dropdown">
                                            </div>
                                            <div class="resultsActionButtonContent" style="display: none;">
                                            <div class="section2">
                                <div class="desktopElm">
                                    <!--<div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'ct');" class="searchHeaderResultsButtonTitle">
                                            CUT
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'sq');" class="searchHeaderResultsButtonTitle">
                                            SQUARE
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'nv');" class="searchHeaderResultsButtonTitle">
                                            novelty
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'ol');" class="searchHeaderResultsButtonTitle">
                                            octagonal
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'rt');" class="searchHeaderResultsButtonTitle">
                                            rectangular
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'sd');" class="searchHeaderResultsButtonTitle">
                                            shield
                                    </div>
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'tl');" class="searchHeaderResultsButtonTitle">
                                            trilliant
                                    </div>-->
                                    <div onclick="activeMainPage.updateFilterValueFromDropdown(this,2,'tr');" class="searchHeaderResultsButtonTitle">
                                            triangular
                                    </div>
                                    <!--<div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            COLOR
                                    </div>
                                    <div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            CLARITY
                                    </div>
                                    <div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            CUT
                                    </div>-->
                                    </div>
                            </div>
                        </div>
                                            </div> 
                                                            
                                                            
                                              <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(2)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                            </div>
                                            
                                        
                                                    
<div class="filtersWrapper">                                            
<div class="newFilterWrapper">
<div class="newFilterLabel">
Color:
</div>
<div class="newFilterBox">
<input class='newFilterStep'
	type="text"
	name="Color"
	data-provide="slider"
	data-slider-ticks="[1, 2, 3,4,5,6,7,8,9,10,11]"
	data-slider-ticks-labels='["D", "E", "F","G", "H", "I","J","K","L","M","N"]'
	data-slider-min="1"
	data-slider-max="9"
	data-slider-step="1"
	data-slider-value="1"
	data-slider-tooltip="hide"
        data-slider-range="true"
>
</div>
</div>
<div class="newFilterWrapper">
<div class="newFilterLabel">
Cut:
</div>
<div class="newFilterBox">
<input class='newFilterStep'
	type="text"
	name="Cut"
	data-provide="slider"
	data-slider-ticks="[1, 2, 3,4]"
	data-slider-ticks-labels='["F",  "G","VG","EX"]'
	data-slider-min="1"
	data-slider-max="4"
	data-slider-step="1"
	data-slider-value="1"
	data-slider-tooltip="hide"
        data-slider-range="true"
>
</div>
</div>
<div class="newFilterWrapper">
<div class="newFilterLabel">
Clarity:
</div>
<div class="newFilterBox">
<input class='newFilterStep'
	type="text"
	name="Clarity"
	data-provide="slider"
	data-slider-ticks="[1, 2, 3,4,5,6,7]"
	data-slider-ticks-labels='["IF", "VVS1", "VVS2","VS1","VS2","SI1","SI2"]'
	data-slider-min="1"
	data-slider-max="7"
	data-slider-step="1"
	data-slider-value="1"
	data-slider-tooltip="hide"
        data-slider-range="true"
>
</div>
</div>
<div class="newFilterWrapper">
<div class="newFilterLabel">
Price:
</div>
<div class="newFilterBox flexCol">
        <div class="priceRange">
<input id="newFilterPrice"
	type="text"
	name="Price"
	data-provide="slider"
	

	data-slider-min="100"
	data-slider-max="50000"
	data-slider-step="1"
	data-slider-value="100"
	data-slider-tooltip="hide"
        data-slider-range="true"
>
</div>

<div class="priceInputBoxes">
        <div class="priceInput"><input type="text" value="$100" id="newMinPrice"></div>
        <div><input type="text" value="$500000" id="newMaxPrice"></div>
</div>
</div>
</div>
<div class="newFilterWrapper">
<div class="newFilterLabel">
Carat:
</div>
<div class="newFilterBox flexCol">
        <div class="priceRange">
<input  id="newFilterCarat"
	type="text"
	name="Carat"
	data-provide="slider"
	

	data-slider-min="0"
	data-slider-max="9"
	data-slider-step="0.01"
	data-slider-value="0"
	data-slider-tooltip="hide"
        data-slider-range="true"
>
</div>


<div class="priceInputBoxes">
        <div class="priceInput"> <input type="text" id="newMinCarat" value="0 ct"></div>
        <div><input type="text" id="newMaxCarat" value="9 ct"></div
</div>
</div>
</div>
</div>

<div class="newFilterWrapper ">
<div class="newFilterLabel">
Report:
</div>
<div class="newFilterBox report">
<div>GIA</div>
<div>IGI</div>
<div>HRD</div>


</div>
</div>
                                        <div class="filtersRowStructure" style="display:none" >
                                            <div filterType="1"  type="14" class="mainFilterButton1grid mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_14 filterAttrSection filterAttr_14" name="carat">
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            CARAT
                                                            <div class="mainFilterRangeBoxSumTitleActive">

                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_14">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    CARAT
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(14)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>
                                                            <div class="mainFilter1gridHoverBoxInputStructure mainFilter1gridHoverBoxInputCenterStructure">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                            <input id="mainFilterType14MinInput" type="number" min="0.5" step=100" max="250000" value="0.5">
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType14MaxInput" type="number" min="0.5" step=100" max="250000" value="1.5">
                                                                    </div>
                                                            </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                          <div type="14" min="0.00" max="0.69"  value="0" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            0.00-0.69
                                                                    </div>
                                                                    <div type="14" min="0.70" max="0.89" value="1" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            0.70-0.89
                                                                    </div>
                                                                    <div type="14" min="0.90" max="0.99" value="2" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            0.90-0.99
                                                                    </div>
                                                                    <div type="14" min="1.00" max="1.49" value="3" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            1.00-1.49
                                                                    </div>
                                                                    <div type="14" min="1.50" max="1.99" value="4" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            1.50-1.99
                                                                    </div>
                                                                    <div type="14" min="2.00" max="2.99" value="5" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            2.00-2.99
                                                                    </div>
                                                                    <div type="14" min="3.00" max="3.99" value="6" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            3.00-3.99
                                                                    </div>
                                                                    <div type="14" min="4.00" max="4.99" value="7" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            4.00-4.99
                                                                    </div>
                                                                    <div type="14" min="5.00" max="5.99" value="8" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            5.00-5.99
                                                                    </div>
                                                                    <div type="14" min="6.00" max="9.99" value="9" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            6.00-9.99
                                                                    </div>
                                                                    <div type="14" min="10.00" max="99.00" value="10" class="mainFilter1gridHoverBoxTableTd mainFilterRangeButton mainFilterRangeButton_14">
                                                                            +10.00
                                                                    </div>

                                                            </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(14)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                            <div type="4" class="mobileMainFilterButtonLast mainFilterButton1grid mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_4 filterAttr_4" name="color" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            COLOR
                                                            <!--<div class="mainFilterRangeBoxSumTitleActive">

                                                            </div>-->
        
                                        
                
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_4">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    COLOR
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(4)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mainFilter1gridHoverBoxWrapper">
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                <div id="mainFilterColorWhite" class="mainFilterColorWhite">
                                                                        <div type="4" name="D"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            D
                                                                    </div>
                                                                    <div type="4" name="E"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            E
                                                                    </div>
                                                                    <div type="4" name="F"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            F
                                                                    </div>
                                                                    <div type="4" name="G"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            G
                                                                    </div>
                                                                    <div type="4" name="H"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            H
                                                                    </div>
                                                                    <div type="4"  name="I"  value="5" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            I
                                                                    </div>
                                                                    <div type="4" name="J"   value="6" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            J
                                                                    </div>
                                                                    <div type="4" name="K"  value="7" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            K
                                                                    </div>
                                                                    <div type="4"  name="L"  value="8" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            L
                                                                    </div>
                                                                    <div type="4"  name="M"  value="9" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            M
                                                                    </div>
                                                                    <div type="4"  name="N"  value="10" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            N
                                                                    </div>
                                                                        </div>

                                                                <div id="mainFilterColorYellow" class="mainFilterColorYellow">
                                                                    <div type="4" name="FY"   value="11" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FY
                                                                    </div>
                                                                    <div type="4" name="FLY"   value="12" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLY
                                                                    </div>
                                                                    <div type="4" name="FBY"   value="13" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FBY
                                                                    </div>
                                                                    <div type="4" name="FLBGY"   value="14" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLBGY
                                                                    </div>
                                                                    <div type="4" name="Q-R"   value="15" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            Q-R
                                                                    </div>
                                                                    <div type="4" name="U-V"   value="16" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            U-V
                                                                    </div>
                                                                    <div type="4" name="W-X"   value="17" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            W-X
                                                                    </div>
                                                                    <div type="4" name="OTHERS"   value="18" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            OTHERS
                                                                    </div>
                                                                    <!--
                                                                    <div type="4" name="FVY"  value="15" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FVY
                                                                    </div>
                                                                    <div type="4" name="FIY"  value="16" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FIY
                                                                    </div>
                                                                    <div type="4" name="FY"   value="17" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FY
                                                                    </div>
                                                                    <div type="4" name="FLY"   value="18" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLY
                                                                    </div>
                                                                    <div type="4" name="Y-Z"   value="19" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            Y-Z
                                                                    </div>
                                                                    <div type="4"  name="W-X"  value="20" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            W-X
                                                                    </div>
                                                                    <div type="4" name="FY-B"   value="21" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FY-B
                                                                    </div>
                                                                    <div type="4" name="FYB"  value="22" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FYB
                                                                    </div>
                                                                    <div type="4"  name="FVLG"  value="23" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FVLG
                                                                    </div>
                                                                    <div type="4"  name="FP"  value="24" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FP
                                                                    </div>
                                                                    <div type="4"  name="FLGY"  value="25" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLGY
                                                                    </div>
                                                                    <div type="4"  name="FLBY"  value="26" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLBY
                                                                    </div>
                                                                    <div type="4"  name="FLBGY"  value="27" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FLBGY
                                                                    </div>
                                                                    <div type="4"  name="FIOY"  value="28" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FIOY
                                                                    </div>
                                                                    <div type="4"  name="FDYB"  value="29" class=" mainFilterRangeButton mainFilterRangeButton_4">
                                                                            FDYB
                                                                    </div>-->
                                                                </div>
                                                            </div>
                                                         </div>
                                                        <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(4)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                            </div>
                                            <div type="5" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_5 filterAttr_5" name="clarity" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            CLARITY
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_5">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    CLARITY
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(5)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                          <div type="5" name="FL"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            FL
                                                                    </div>
                                                                    <div type="5" name="IF"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            IF
                                                                    </div>
                                                                    <div type="5" name="VVS1"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            VVS1
                                                                    </div>
                                                                    <div type="5" name="VVS2"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            VVS2
                                                                    </div>
                                                                    <div type="5" name="VS1"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            VS1
                                                                    </div>
                                                                    <div type="5" name="VS2"   value="5" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            VS2
                                                                    </div>
                                                                    <div type="5"  name="SI1"  value="6" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            SI1
                                                                    </div>
                                                                    <div type="5" name="SI2"   value="7" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            SI2
                                                                    </div>
                                                                    <div type="5" name="SI3"  value="8" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            SI3
                                                                    </div>
                                                                    <div type="5"  name="I1"  value="9" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            I1
                                                                    </div>
                                                                    <div type="5"  name="I2"  value="10" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            I2
                                                                    </div>
                                                                    <!--<div type="5"  name="I3"  value="11" class=" mainFilterRangeButton mainFilterRangeButton_5">
                                                                            I3
                                                                    </div>-->

                                                            </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(5)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>

                                                <div type="7" class="mainFilterButton1grid mainFilterButton1gridSm mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_7 filterAttr_7" name="polish" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            POLISH
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_7">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    POLISH
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(7)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                    <div type="7" name="EX"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_7">
                                                                            EX
                                                                    </div>
                                                                    <div type="7" name="VG"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_7">
                                                                            VG
                                                                    </div>
                                                                    <div type="7" name="G"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_7">
                                                                            G
                                                                    </div>
                                                                    <div type="7" name="F"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_7">
                                                                            F
                                                                    </div>
                                                                    <div type="7" name="P"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_7">
                                                                            P
                                                                    </div>
                                                            </div>
                                                         <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(7)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div type="8" class="mobileMainFilterButtonLast mainFilterButton1grid mainFilterButton1gridSm mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_8 filterAttr_8" name="symmetry" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            SYMMETRY
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_8">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    SYMMETRY
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(8)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                    <div type="8" name="EX"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_8">
                                                                            EX
                                                                    </div>
                                                                    <div type="8" name="VG"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_8">
                                                                            VG
                                                                    </div>
                                                                    <div type="8" name="G"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_8">
                                                                            G
                                                                    </div>
                                                                    <div type="8" name="F"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_8">
                                                                            F
                                                                    </div>
                                                                    <div type="8" name="P"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_8">
                                                                            P
                                                                    </div>
                                                            </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(8)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="filtersRowStructure" style="display:none">
                                                    <div class="mobileElm section2TitleFilters">
                                                        Advanced Filters:
                                                    </div>
                                                    <div type="11" class="mobileMainFilterButtonLast mainFilterButton1grid  mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_11 filterAttr_11"  name="ppc" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            PPC
                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_11">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    PPC
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(11)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTablePPC" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <div class="gridHoverBoxTablePPCsym">$</div><input id="mainFilterType11MinInput" type="number" min="0" step=100" max="250000" value="0">
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <div class="gridHoverBoxTablePPCsym">$</div><input id="mainFilterType11MaxInput" type="number" min="0" step=100" max="250000" value="0">
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter11();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(11)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                    <div type="16" class="mobileMainFilterButtonLast mainFilterButton1grid mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_16 filterAttr_16"  name="totalPrice" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            TOTAL PRICE
                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_16">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    TOTAL PRICE
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(16)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTablePPC" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <div class="gridHoverBoxTablePPCsym">$</div><input id="mainFilterType16MinInput" type="number" min="0" step=100" max="250000" value="0">
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <div class="gridHoverBoxTablePPCsym">$</div><input id="mainFilterType16MaxInput" type="number" min="0" step=100" max="250000" value="0">
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter16();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(16)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>

                                                    <div type="12" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_symbol mainFilterRangeBox_12 filterAttr_12"  name="discount" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            DISCOUNT

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_12">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    DISCOUNT
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(12)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType12MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType12MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter12();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(12)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                             <div type="9" class="mainFilterButton1grid mainFilterButton1gridSm mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_9 filterAttr_9" name="fluor" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            FLUOR
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_9">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    FLUOR
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(9)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                    <div type="9" name="N"  value="0" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_9">
                                                                            NONE
                                                                    </div>
                                                                    <div type="9" name="F"  value="1" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_9">
                                                                            FAINT
                                                                    </div>
                                                                    <div type="9" name="M"   value="2" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_9">
                                                                            MEDIUM
                                                                    </div>
                                                                    <div type="9" name="S"   value="3" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_9">
                                                                            STRONG
                                                                    </div>
                                                                    <div type="9" name="VS"   value="4" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_9">
                                                                            VERY STRONG
                                                                    </div>
                                                            </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(9)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                    <div type="6" class="mobileMainFilterButtonLast mainFilterButton1gridSm mainFilterButton1grid mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_6 filterAttr_6"  name="cut" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            CUT
                                                            <!--<div class="mainFilterRangeBoxSumTitleActive">

                                                            </div>-->
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                           <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_6">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    CUT
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(6)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                          <div type="6" name="EX"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_6">
                                                                            EX
                                                                    </div>
                                                                    <div type="6" name="VG"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_6">
                                                                            VG
                                                                    </div>
                                                                    <div type="6" name="G"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_6">
                                                                            G
                                                                    </div>
                                                                    <div type="6" name="F"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_6">
                                                                            F
                                                                    </div>
                                                                    <div type="6" name="P"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_6">
                                                                            P
                                                                    </div>

                                                            </div>
                                                          <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(6)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>

                                                                               <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_13">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    LOCATION
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(13)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                          <div type="13" name="HK"  value="0" class=" mainFilterRangeButton mainFilterRangeButton_13">
                                                                            HK
                                                                    </div>
                                                                    <div type="13" name="IL"  value="1" class=" mainFilterRangeButton mainFilterRangeButton_13">
                                                                            IL
                                                                    </div>
                                                                    <div type="13" name="NY"   value="2" class=" mainFilterRangeButton mainFilterRangeButton_13">
                                                                            NY
                                                                    </div>
                                                                    <div type="13" name="LA"   value="3" class=" mainFilterRangeButton mainFilterRangeButton_13">
                                                                            LA
                                                                    </div>
                                                                    <div type="13" name="JC"   value="4" class=" mainFilterRangeButton mainFilterRangeButton_13">
                                                                            JC
                                                                    </div>
                                                            </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(13)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>



                                                </div>
                                            </div>

                                        <!--    <div type="26" class="mainFilterButton1grid mainFilterButton1gridLast  mainFilterButton1gridSm mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_26 filterAttr_26" name="availability" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            AVAILABILITY
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_26">
                                                        <div class="mainFilter1gridHoverBoxWrapper">
                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                    <div type="26" name="YES"  value="0" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_26">
                                                                            YES
                                                                    </div>
                                                                    <div type="26" name="NO"  value="1" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_26">
                                                                            NO
                                                                    </div>

                                                            </div>
                                                         </div>
                                                    </div>-->
                                               <div class="filtersRowStructure togglersRow" style="display:none">
                                                        <!--<div class="leftSection" hidden>
                                                        <div class="mobileMainFilterButtonLast filterAvailabilityFilterInputStructure filterAttr_1 mainFilterButton1gridLast availabilityFilterInputStructure mainFilterButton1gridRangeNumbers" name="availability" >
                                                                <div class='availabilityFilterInputWrapper toogleButtonTitle' onclick="activeMainPage.ChangeCheckBoxInput('availabilityFilterInput')">
                                                                        Available Only
                                                                </div>
                                                                <input name="lucySlideCheckbox" type="checkbox" id="test1" />
                                                                <label for="test1"> </label>
                                                        </div>
                                                        <div class="mobileMainFilterButtonLast filterAvailabilityFilterInputStructure filterAttr_1 onlyImageFilterInputStructure mainFilterButton1gridRangeNumbers" >
                                                                <div class="filterImageIconStructure filterAttr_1 segomaIdFilterInputStructure" name="segomaId" onclick="activeMainPage.ChangeCheckBoxInput('segomaIdFilterInput')" >
                                                                        <div class='segomaIdFilterInputWrapper toogleButtonTitle'>
                                                                                Images only
                                                                        </div>
                                                                        <input name="lucySlideCheckbox" type="checkbox" id="segomaIdFilterInput" />
                                                                        <label for="test2"> </label>
                                                                </div>
                                                        </div>
                                                </div>-->
                                                <!--<div class="rightSection" hidden>
                                                   <div class="mobileMainFilterButtonLast noBgmToggler filterAvailabilityFilterInputStructure filterAttr_1 availabilityFilterInputStructure mainFilterButton1gridRangeNumbers" >
                                                        <div class="bgmFilterInputStructure filterAttr_1 " name="BGM" onclick="activeMainPage.ChangeCheckBoxInput('bgmFilterInput')" >
                                                                <div class='bgmFilterInputWrapper'>
                                                                        <div class="checkBoxInputStructure">
                                                                             <input id="bgmFilterInput" type="checkbox">
                                                                     </div>
                                                                     <div class="checkBoxTitleStructure">
                                                                         
                                                                     </div>
                                                                        <div class="checkBoxTitle toogleButtonTitle">
                                                                                             NO BGM
                                                                        </div>
                                                                    <input name="lucySlideCheckbox" type="checkbox" id="test3" />
                                                                        <label for="test3"> </label>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                <div class="mainFilterShortCutButton mainFilterShortCutButtonEx" onclick="activeMainPage.setExValues()">
                                                                        3EX+
                                                                </div>
                                                                <div class="mainFilterShortCutButton mainFilterShortCutButtonVg"  onclick="activeMainPage.setVgValues()">
                                                                        3VG+
                                                                </div>
                                                        </div>-->
                                                        </div>
                                                </div>
                                                </div>
                                            <!--</div>-->

                                            <!--<div class="mainFilterButton1gridSm mainFilterButton1gridSmLeftMargin">
                                                    <div class="mainFilter1gridSmTitle">
                                                            CLARITY
                                                    </div>
                                            </div>
                                            <div class="mainFilterButton1gridSm mainFilterButton1gridSmLast">
                                                    <div class="mainFilter1gridSmTitle">
                                                            CLARITY
                                                    </div>
                                            </div>-->
                                           <div class="mainFilterSeparateLine">

                                            </div>
                                            <div class="mainFilterAdvancedWrapper" style="display:none">
                                            <div class="mainFilterAdvancedButton">
                                                        <img src="../assets/icons/arrowDown.png"/>
                                            </div>
                                            <div class="mainFilterAdvancedStructure">
                                                    <div type="15" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_15 filterAttr_15" name="productId" filtertype="1">
                                                        <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                                PRODUCT ID

                                                                <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                                 <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                         <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                         <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                    <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                                </div>
                                                                <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                        <img src="../assets/arrows-dropdown-16.svg">
                                                                </div>
                                                        </div>
                                                        <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_15">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    PRODUCT ID
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(15)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                                  <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                        SELECT / TYPE A RANGE
                                                                </div>-->
                                                                <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                        <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                            <input id="mainFilterType15Input" type="text" placeholder="example: 627">
                                                                        </div>
                                                                </div>

                                                             <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter15();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(15)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>


                                                <div type="17" class="mobileMainFilterButtonLast mainFilterButton1grid  mainFilterButton1gridRangeNumbers   mainFilterRangeBox mainFilterRangeBox_17 filterAttr_17 mainFilterRangeBox_symbol"  name="depth" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            DEPTH

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_17">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    DEPTH
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(17)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType17MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType17MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter17();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(17)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="18" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_18 filterAttr_18 mainFilterRangeBox_symbol"  name="table" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            TABLE

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_18">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    TABLE
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(18)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType18MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType18MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter18();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(18)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="19" class="mobileMainFilterButtonLast mainFilterButton1gridLast mainFilterButton1grid  mainFilterButton1gridRangeNumbers   mainFilterRangeBox mainFilterRangeBox_19 filterAttr_19 mainFilterRangeBox_symbol"  name="measurements1" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            MEASUREMENT 1

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_19">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    MEASUREMENT 1
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(19)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount mainFilter1gridHoverBoxTableMm" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType19MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType19MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter19();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(19)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="20" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_20 filterAttr_20 mainFilterRangeBox_symbol"  name="measurements2" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            MEASUREMENT 2

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_20">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    MEASUREMENT 2
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(20)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount mainFilter1gridHoverBoxTableMm" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType20MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType20MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter20();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(20)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="21" class="mobileMainFilterButtonLast mainFilterButton1grid  mainFilterButton1gridRangeNumbers   mainFilterRangeBox mainFilterRangeBox_21 filterAttr_21 mainFilterRangeBox_symbol"  name="measurements3" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            MEASUREMENT 3

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_21">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    MEASUREMENT 3
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(21)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount mainFilter1gridHoverBoxTableMm" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType21MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType21MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">mm</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter21();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(21)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="22" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers   mainFilterRangeBox mainFilterRangeBox_22 filterAttr_22 mainFilterRangeBox_symbol"  name="crownHeight" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            CROWN HEIGHT

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_22">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    CROWN HEIGHT
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(22)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType22MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType22MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter22();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                         <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(22)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                <div type="23" class="mobileMainFilterButtonLast mainFilterButton1grid mainFilterButton1gridLast  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_23 filterAttr_23 mainFilterRangeBox_symbol"  name="crownAngle" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            CROWN ANGLE

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_23">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    CROWN ANGLE
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(23)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType23MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType23MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter23();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(23)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                 <div type="24" class="mainFilterButton1grid  mainFilterButton1gridRangeNumbers  mainFilterRangeBox mainFilterRangeBox_24 filterAttr_24 mainFilterRangeBox_symbol"  name="pavilionDepth" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            PAVILION DEPTH

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_24">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    PAVILION DEPTH
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(24)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType24MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType24MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter24();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                          <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(24)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                 <div type="25" class="mobileMainFilterButtonLast mainFilterButton1grid  mainFilterButton1gridRangeNumbers   mainFilterRangeBox mainFilterRangeBox_25 filterAttr_25 mainFilterRangeBox_symbol"  name="pavilionAngle" filterType="1" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            PAVILION ANGLE

                                                            <div class="mainFilterRangeBoxSumTitleActive"></div>
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_25">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    PAVILION ANGLE
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(25)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                              <!--<div class="mainFilter1gridHoverBoxTitle">
                                                                    SELECT / TYPE A RANGE
                                                            </div>-->
                                                            <div class="mainFilter1gridHoverBoxTableDiscount" style="">
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMin">
                                                                        <input id="mainFilterType25MinInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                                <div class="mainFilter1gridHoverBoxInputSeparateLine">
                                                                    -
                                                                </div>
                                                                    <div class="mainFilter1gridHoverBoxInput mainFilter1gridHoverBoxInputMax">
                                                                            <input id="mainFilterType25MaxInput" type="number" min="0" step=100" max="250000" value="0"><div class="gridHoverBoxTableDiscountSym">%</div>
                                                                    </div>
                                                            </div>
                                                              <div class="mainFilterGridClearTitle" onclick="activeMainPage.clearInputFilter25();activeMainPage.clearInputFilter();">
                                                                  CLEAR
                                                              </div>
                                                         <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(25)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>

                                             <div type="10" class="mobileMainFilterButtonLast mainFilterButton1grid mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_10 filterAttr_10" name="lab" filterType="0" >
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            LAB
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class=" mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg"/>
                                                            </div>
                                                    </div>
                                                    <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_10">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    LAB
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(10)">
                                                                    <img src="../assets/closing-cross-15@3x.png"/>
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                    <div type="10" name="GIA"  value="0" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_10">
                                                                            GIA
                                                                    </div>
                                                                    <div type="10" name="IGI"  value="1" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_10">
                                                                            IGI
                                                                    </div>
                                                                <div type="10" name="HRD"  value="2" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_10">
                                                                            HRD
                                                                    </div>
                                                                <div type="10" name="FM"  value="3" class=" mainFilterRangeButton mainFilterRangeButtonFullWidth mainFilterRangeButton_10">
                                                                            FM
                                                                    </div>

                                                            </div>
                                                            <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(10)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
                                                                </div>
                                                        </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    <div type="13" class="mainFilterButton1grid mainFilterButton1gridLast mainFilterButton1gridRangeNumbers mainFilterRangeBox mainFilterRangeBox_13 filterAttr_13" name="location" filtertype="0">
                                                    <div class="mainFilter1gridTitle mainFilterRangeBoxTitle">
                                                            LOCATION
                                                            <!--<div class="mainFilterRangeBoxSumTitleActive">
                                                                
                                                            </div>-->
                                                             <div class="mainFilter1gridHoverBoxInputStructure mainFilterRangeBoxSumTitle">
                                                                     <span class="mainFilterRangeBoxTitleSeparateMin"></span>
                                                                     <span class="mainFilterRangeBoxTitleSeparate" style="display: none;"> - </span>
                                                                <span class=" mainFilterRangeBoxTitleSeparateMax"></span>
                                                            </div>
                                                            <div class="mainFilterType141gridIcon mainFilterRangeBoxIcon">
                                                                    <img src="../assets/arrows-dropdown-16.svg">
                                                            </div>
                                                    </div>
                                        <div class="mainFilterBasisHoverBox mainFilter1gridHoverBoxStructure mainFilterRangeBoxStructure mainFilterRangeBoxStructure_13">
                                                        <div class="mainFilterBasisHoverBoxWrapper">
                                                        <div class="mobileElm mainFilterPopUpBox">
                                                            <div class="mainFilterPopUpBoxHeader">
                                                                <div class="mainFilterPopUpBoxTitle">
                                                                    LOCATION
                                                                </div>
                                                                <div class="mainFilterPopUpBoxCancelIconImage" onclick="activeMainPage.closeFilterRangePopUp(13)">
                                                                    <img src="../assets/closing-cross-15@3x.png">
                                                                </div>
                                                                <div class="mainFilterBasisHoverBoxDesc">
                                                                    <div class="mainFilterRangeBoxTitleSeparateMin">
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                            <div class="mainFilter1gridHoverBoxTable" style="">
                                                                          <div type="13" name="HK" value="0" class="mainFilterRangeButton mainFilterRangeButton_13">
                                                                            HK
                                                                    </div>  
                                                                    <div type="13" name="IL" value="1" class="mainFilterRangeButton mainFilterRangeButton_13">
                                                                            IL
                                                                    </div>
                                                                    <div type="13" name="NY" value="2" class="mainFilterRangeButton mainFilterRangeButton_13">
                                                                            NY
                                                                    </div>
                                                                    <div type="13" name="LA" value="3" class="mainFilterRangeButton mainFilterRangeButton_13">
                                                                            LA
                                                                    </div>
                                                                    <div type="13" name="JC" value="4" class="mainFilterRangeButton mainFilterRangeButton_13">
                                                                            JC
                                                                    </div>
                                                            </div>
                                                           <div class="mobileElm mainFilterPopUpBoxFooter" onclick="activeMainPage.closeFilterRangePopUp(13)">
                                                                <div class="mainFilterPopUpBoxFooterButton">
                                                                        SUBMIT
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
	<div class="mainContentWrapper searchResultsStructure">
                        <div class= "searchHeaderResultsStructure headerResultsStructure tableViewHeaderStructure" >
                            <div class="section1">
                                    <div class="resultsTitle" onclick="activeMainPage.changeProductsView(1)">
                                            <span>RESULTS</span>
                                    </div>
                                    <div onclick="activeMainPage.changeProductsView(4)" class="recentlyResultsTitle">
                                            RECENTLY VIEWED
                                            (<span class="recentlyViewedCounter">0</span>)
                                    </div>
                            </div>
                            <div class="searchHeaderResultsButtonWrapper desktopElm">
                                        <div class="searchHeaderResultsButton lowToHighIcons" onclick="activeMainPage.changeSortTypeDirection()" >
                                        <img class="unactiveIcon"  src="../assets/arrow-low-to-high-unactive.png"/>
                                        <img class="activeIcon displayNone"  src="../assets/arrow-low-to-high-active.png"/>
                                    </div>
                                    <div class="searchHeaderResultsButton highToLowIcons" onclick="activeMainPage.changeSortTypeDirection()" >
                                        <img class="unactiveIcon displayNone" src="../assets/arrow-high-to-low-unactive.png"/>
                                        <img class="activeIcon" src="../assets/arrow-high-to-low-active.png"/>
                                    </div>
                                </div>
                            <div class="section3" >
                                <!--<div id='productsViewButton2' class="searchHeaderResultsButton searchHeaderResultsButtonGrid desktopElm" onclick="activeMainTool.comingSoonPopup()">
                                        <img src="../assets/thumbnail-view-big-unselected-16.svg"/>
                                    </div>-->
                                <div id='productsViewButton1' class="searchHeaderResultsButton searchHeaderResultsButtonLeft active" onclick="activeMainPage.changeProductsView(1)">
                                        <img class='notActiveButtonFilterView' style="display:none;" src="../assets/thumbnail-view-16.svg"/>
                                        <img class='activeButtonFilterView' src="../assets/icons/thumbnail-view-white.png"/>
                                        <span>Image View</span>
                                    </div>
                                <div id='productsViewButton3'  class="searchHeaderResultsButton searchHeaderResultsButtonGrid" onclick="activeMainPage.changeProductsView(3)">
                                        <img class='activeButtonFilterView' style="display:none;" src="../assets/icons/list-view-unselected-16.svg"/>
                                        <img class='notActiveButtonFilterView' src="../assets/list-view-unselected-16.png"/>
                                        <span>List View</span>                                        
                                    </div>
                                <!--<div class="searchHeaderResultsButton searchHeaderResultsButtonGrid searchHeaderResultsButtonViewTypeImage desktopElm" onclick="activeMainTool.comingSoonPopup()">
                                        <img src="../assets/diamond-little-16.svg"/>
                                    </div>
                                <div class="searchHeaderResultsButton searchHeaderResultsButtonLeft searchHeaderResultsButtonViewTypeImage desktopElm" onclick="activeMainTool.comingSoonPopup()">
                                        <img src="../assets/oval-diamond-icon-16.svg"/>
                                    </div>-->
                            <!--<div class="filterImageIconStructure filterAttr_1 segomaIdFilterInputStructure" name="segomaId" onclick="activeMainPage.ChangeCheckBoxInput('segomaIdFilterInput')" style="display: none;">
                                                <div class="checkBoxInputStructure">
                                                        <input id="segomaIdFilterInput" type="checkbox">
                                                </div>
                                                <div class="checkBoxTitleStructure">
                                                    <img src="../assets/cameraIconOff.png"/>
                                                </div>
                                </div>-->
                                <div class="searchInuptView3structure">
                                            <div class="searchInuptView3Wrapper">
                                                    <input id="searchInuptView3Input" type="text" placeholder="example: E VS2 EX GIA">
                                            </div>
                                    </div>
                            </div>
                            <div class="section4">
                                    <div id="sortActionButton" class="resultsActionButton" onclick="activeMainPage.toggleActionPopup(1)">
                                        Sort by <span id="sortActionTypeButton"> price</span>
                                            <img src="../assets/arrowUp.png" alt="Dropdown">
                                            <div class="resultsActionButtonContent resultsActionButtonSortByContent">
                                            <div class="section2">
                                <div class="mobileElm sortFilterSelectStructure" >
                                    <div class="sortFilterSelectStructureTitleStructure">
                                        <div class="sortFilterSelectStructureTitle" onclick="activeMainPage.changeSortTypeTitle()">
                                            <span id="sortFilterSelectStructureResult">Price</span>
                                        </div>
                                          <div class="searchHeaderResultsButtonWrapper mobileElm">
                                        <div class="searchHeaderResultsButton lowToHighIcons" onclick="activeMainPage.changeSortTypeDirection()">
                                        <img class="unactiveIcon"  src="../assets/arrow-low-to-high-unactive.png"/>
                                        <img class="activeIcon displayNone"  src="../assets/arrow-low-to-high-active.png"/>
                                    </div>
                                    <div class="searchHeaderResultsButton highToLowIcons" onclick="activeMainPage.changeSortTypeDirection()">
                                        <img class="unactiveIcon displayNone" src="../assets/arrow-high-to-low-unactive.png"/>
                                        <img class="activeIcon" src="../assets/arrow-high-to-low-active.png"/>
                                    </div>
                                </div>
                                    </div>
                                    <select name="sortFilters" id="sortFilterSelect" style="    position: absolute;z-index: -5;opacity:0;">
                                            <option  value="PRICE">PRICE</option>
                                            <option  value="CARAT">CARAT</option>
                                        </select>
                                </div>
                                <div class="desktopElm">
                                    <div  class="searchHeaderResultsSortTitle ">
                                            SORT BY:
                                    </div>
                                    <div onclick="activeMainPage.setHeaderTitlesSort(0)" class="searchHeaderResultsButtonTitle searchHeaderResultsButtonTitleActive">
                                            PRICE
                                    </div>
                                    <div onclick="activeMainPage.setHeaderTitlesSort(1)" class="searchHeaderResultsButtonTitle">
                                            CARAT
                                    </div>
                                    <div onclick="activeMainPage.setHeaderTitlesSort(2)" class="searchHeaderResultsButtonTitle">
                                            COLOR
                                    </div>
                                    <!--<div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            COLOR
                                    </div>
                                    <div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            CLARITY
                                    </div>
                                    <div onclick="activeMainTool.comingSoonPopup()" class="searchHeaderResultsButtonTitle">
                                            CUT
                                    </div>-->
                                    </div>
                            </div>
                        </div>
                                            </div>
                                    <div id="exportActionButton" class="resultsActionButton" onclick="activeMainPage.toggleActionPopup(2)">
                                            Export
                                            <img src="../assets/arrowUp.png" alt="Dropdown">                                     
                                            <div id="exportActionContent" class="resultsActionButtonContent">
                                               <div onclick="activeMainPage.clickExportAction(0)" class="searchHeaderResultsButtonTitle searchHeaderResultsButtonTitleSelected">
                                                    SELECTED
                                            </div>
                                                <div onclick="activeMainPage.clickExportAction(1)" class="searchHeaderResultsButtonTitle">
                                                    EXCEL
                                                </div>
                                                <div onclick="activeMainPage.clickExportAction(2)" class="searchHeaderResultsButtonTitle">
                                                    CSV
                                                </div>
                                                <div onclick="activeMainPage.clickExportAction(3)" class="searchHeaderResultsButtonTitle">
                                                    PDF
                                                </div>
                                                <div onclick="activeMainPage.clickExportAction(4)" class="searchHeaderResultsButtonTitle searchHeaderResultsButtonTitlePrint">
                                                    PRINT
                                                </div>
                                                <div onclick="activeMainPage.clickExportAction(5)" class="searchHeaderResultsButtonTitle searchHeaderResultsButtonTitleCopy">
                                                    COPY
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                                <div class="resultsViewStructure1 results">
                                      <div class="mainIconAnimation"><img src="../assets/favicon-96x96.png"></div>
                                </div>
                                <div class="resultsViewStructure3">
                                    <!--<div class="searchInuptView3structure">
                                            <div class="searchInuptView3Wrapper">
                                                    <input id="searchInuptView3Input" type="text" placeholder="example: E VS2 EX GIA">
                                            </div>
                                    </div>-->
                                    <div id="tableViewResultsView3">

                                    </div>
                                </div>
                                <div class="resultsViewStructure4">
                                       <?php include '../templates/recentlyViewed/index.php'?>
                                </div>
                    </div>
    </div>
    <?php include '../templates/footer/index.php'?>
    <?php include '../templates/productPopup/index.php'?>
    <?php include '../templates/miniCart/index.php'?>
    <?php include '../templates/miniBidsList/index.php'?>
    <?php include '../templates/wishList/index.php'?>



    <?php include '../templates/lpui/index.php'?>
    <?php include '../templates/html/firstScripts.php'?>
    <script src="../pages/search/js/script.js"></script>
    <?php include '../templates/html/scripts.php'?>
    <?php include '../templates/wrapper/end.php'?>
    <?php include '../templates/popup/index.php'?>



    <script src="../js/dataTables/jquery.dataTables.js"></script>

    <script src="../js/dataTables/jszip.js"></script>
    <script src="../js/dataTables/pdfmake.js"></script>
    <script src="../js/dataTables/vfs_fonts.js"></script>
    <script src="../js/dataTables/buttons.html5.js"></script>
    <script src="../js/dataTables/buttons.print.js"></script>
    <script src="../js/dataTables/dataTables.buttons.js"></script>
    <script src="../js/dataTables/buttons.flash.js"></script>
    <script src="../js/dataTables/dataTables.select.js"></script>
    <!--
     <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>
    -->


    <script>
        $(function() {
        jQuery.extend( jQuery.fn.dataTableExt.oSort, {
            "date-uk-pre": function ( a ) {
                if (a == null || a == "") {
                    return 0;
                }
                var ukDatea = a.split('/');
                return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
            },

            "date-uk-asc": function ( a, b ) {
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            },

            "date-uk-desc": function ( a, b ) {
                return ((a < b) ? 1 : ((a > b) ? -1 : 0));
            }
        } );
        });
</script>
</body>
</html>
