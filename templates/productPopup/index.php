<div id="productPopupStructureBlur" class="productPopupStructureBlur productPopupStructureBlurHidden">
        
</div>
    
<div id="productPopupStructure" class="productPopupStructure productPopupStructureHidden">
    <div class="productPopupCertificateStructureCloseButton mobileElm" onclick="activeProductPopup.hidecertificatepopup()">BACK</div>
    <div class="copyMessageSuccessStructure">
            <div class="copyMessageSuccessTitle">
                    Copied!
            </div>
    </div>
    <div class="productPopupButtonsMobileFooter productPopupButtonsMobileFooterHidden">
                            <div class="productPopupButtonsMobile">
                                <div class="productPopupButtonsMobileStructure  productPopupButtonsMobileStructurePick" onclick="activeProductPopup.addProductToWishList()">
                                        <div class="productPopupButtonsMobileWrapper">
                                            <div class="productPopupButtonsMobileIconWrapper">
                                                <img src="../assets/if_star_384882.svg">
                                            </div>
                                            <div class="productPopupButtonsMobileTitleWrapper">
                                            ADDED
                                            </div>  
                                        </div>                                    
                                </div>
                                <div class="productPopupButtonsMobileStructureCart " onclick="activeProductPopup.addProductToCart()" >
                                        <div class="productPopupButtonsMobileWrapper">
                                            <div class="productPopupButtonsMobileIconWrapper">
                                                <img src="../assets/shopping-cart-white-nav-401.svg">
                                            </div>
                                            <div class="productPopupButtonsMobileTitleWrapper">
                                            ADDED
                                            </div>  
                                        </div>                                    
                                </div>

                                
                            </div>
                    </div>
        <div class="productPopupWrapper">
            <div class="productPopupCertificateStructureCloseButton desktopElm" onclick="activeProductPopup.hidecertificatepopup()">BACK</div>
        <div onclick="activeProductPopup.hide()" class="productPopupCloseButton">
                <div class="productPopupCloseButtonTitle">
                        <img class="desktopElm" src="../assets/icons/closeButton.png"/>
                        <img class="mobileElm" src="../assets/leftArrow.png">
                        <div class="productPopupCloseButtonSubTitle mobileElm">
                            BACK
                        </div>
                </div>
        </div>
             <div class="productImage360_zoomStructure">
                    <div class="productImage360_zoomCloseButton" onclick="activeProductPopup.hideImage360Zoom()">BACK</div>
                    <img src="" class="productImage360_zoom"  />
            </div>
            <div class="productImage360Structure">
                        <div class="productImage360_closeButton" onclick="activeProductPopup.hideImage360()">BACK</div>
                        <iframe id="productImage360" class="productImage360" width="756" height="600" src="" frameborder="0" scrolling="no" ></iframe>
                </div>
            <div class="productPopupCertificateStructure">
                    <iframe class="productPopupCertificate"  src="" ></iframe>
            </div>
         
            <div class="productInfoStructure">
                <div class="productInfoWrapper">
                    <div class="productInfoScroll">
                    <div class="productInfoWrapperLeft">
                    <div class="productImageStructure">
                    <img class="productImage" src=""  onclick="activeProductPopup.showImage360()"/>
                    <div class="compareMasterStructure">
                        <div class="compareMasterWrapper">
                                <div class="compareMasterSwitcherStructure">
                                    <div class="compareMasterSwitcherWrapper">
                                       
                                    </div>
                                </div>
                                <div class="compareMasterIconStructure">
                                        <img class="compareMasterIcon"  src="../assets/master-crown-green-bg.svg"/>
                                </div>
                                <div class="compareMasterImage360Wrapper">
                                    <iframe class="productImage360" width="756" height="600" src="" frameborder="0" scrolling="no" ></iframe>
                                </div>
                        </div>
                    </div>
                    
                    <!--<div class="productImage360Structure">
                        <iframe id="productImage360" class="productImage360" width="756" height="600" src="" frameborder="0" scrolling="no" ></iframe>
                    </div>-->
                    <div class="giaCerStructure" onclick="activeProductPopup.openGiaCert()">
                        <img class="giaCerIcon"  src="../assets/gia-badge-40.png"/>
                        <span class="giaCerIconTitle"></span>
                    </div>
                    <div class="image360ZoomIcon" onclick="activeProductPopup.showImage360Zoom()">
                        <img src="../assets/search-menu-30@3x.png" alt="Zoom In" />
                    </div>
                    <div class="image360Icon" onclick="activeProductPopup.showImage360()">
                        <img src="../assets/icons/360icon.png" style="display:none" alt="360" />
                    </div>
                    <div class="masterCompareCloseButtonStructure" onclick="activeProductPopup.showMasterStructure();">
                        <div class="masterCompareCloseButtonIcon">
                            <img src="../assets/cancel-button.svg"/>
                        </div>
                    </div>
            </div>
                    <div class="shareInputStructure">
                        <div class="shareInputStructureTitle">
                            <h4>SHARE VIA:</h4>
                        </div>
                         <div class="shareInputWhatsappStructure shareInputBubbleStructure" onclick="activeProductPopup.shareProductLinkViaWhatsApp()">
                             <img src="../assets/whatsappIcon.png">
                         </div>
                         <div class="shareInputEmailStructure shareInputBubbleStructure" onclick="activeProductPopup.shareProductLinkViaEmail()">
                             <img src="../assets/emailIcon.png" >
                         </div>
                         <div class="shareInputSmsStructure shareInputBubbleStructure" onclick="activeProductPopup.shareProductLinkViaSms()">
                             <div class="shareInputSmsStructureTitle">SMS</div>
                         </div>
                         <div class="shareInputCopyStructure shareInputBubbleStructure"  onclick="activeProductPopup.shareProductLinkViaCopy()">
                             <div id="shareInputCopyButton" class="clipboardButton" data-clipboard-target="#shareProductInput">
                            <img src="../assets/copyLinkIcon.png" alt="Copy to clipboard">
                            </div>
                             </div>
                        <input id="shareProductInput" class="shareProductInput" placeholder="" type="text" style="display:none;"> <!--onclick="this.setSelectionRange(0, this.value.length)"-->
                    </div>
                         <div class="productPopupLoginButton" onclick="activeMainTool.redirectPage(7)">
                            Get Price
                        </div>
                    <div class="productMainCostStructure">
                        <div class="productMainCostDetail">
                            <span class="productMainCostTitle">PER CT.</span><span class="productMainCost">$5599.00</span>                            
                        </div>
                        
                        <div class="productMainCostDetailDiscount">
                            <span class="productMainDiscountTitle">DISC</span><span class="productMainDiscount"></span>                                                                         
                        </div>
                        <div class="productSecondaryCostStructure ">
                            
                            <div class="productMainCostDetail productSecondaryCostStructureTotal">
                                <span class="productTotalPriceBid"></span><span class="productTotalPrice"></span><span class="productTotalPriceTitle">TOTAL</span>
                            </div>
                            
                            <div class="productPopupItemBitcoinCostStructure"> 
                                    <span class="itemCostValue"></span>
                                    <span class="itemCostBitcoinIcon"><img src="../assets/company/bitcoinIcon1blue.png"/></span>
                                </div>
                            <div class="productMainCostDetail productMainRapDetail">
                                <span class="productListPrice"></span><span class="productListPriceTitle">RAP</span>                            
                            </div>
                        </div>
                    </div>
                    <div class="productMainTitle">
                            
                    </div>
                    <div class="dobCertifiedTitle">
                        <span>
                                <img src="../assets/dob-certified-16.svg"/>
                        </span>
                            dob CERTIFIED
                    </div>
                    <div class="productMainTitlesBorders">
                        <hr /> 
                        <hr />
                    </div>
                    <div class="productStatus">
                        
                    </div>
                    <div class="productLocation">

                    </div>
              <div class="productPopupMainButtonStructure productPopupMainButtonStructureLandscape">
                    <div class="productPopupMainButton productPopupMainButtonWishList" onclick="activeProductPopup.addProductToWishList()">
                                    <img src="../assets/picknchoose-24-blue.svg"/>
                                    <div class="productPopupMainButtonTitle">
                                            COMPARE
                                    </div>
                        </div>    
                    <div class="productPopupMainButton productPopupMainButtonCart" onclick="activeProductPopup.addProductToCart()" >
                                        <img src="../assets/cartIcon.png"/>
                                        <div class="productPopupMainButtonTitle">
                                                ADD TO CART
                                        </div>
                        </div>
                 <div class="productPopupMainButton  productPopupMainButtonCall" onclick="activeVirtualMeeting.callVmStructure();" style="margin-right: 13px;opacity: 1;width: 159px;display: none;position: relative;">
                                    <img src="../assets/videoCallIcon.png" style="
    width: 22px;
    height: auto;
    position: relative;
    top: 1px;
    z-index: 2;
">
                                
                                    <div class="productPopupMainButtonTitle">VIRTUAL MEETING</div>
                        </div>
                </div>
                <div class="productAttrTableStructure">
                        <div class="productAttrTableSection">
                            <table id="productPopUpAttrTable1" class="productAttrTable">
                                
                            </table>
                        </div>
                      <div class="productAttrTableSection">
                             <table id="productPopUpAttrTable2" class="productAttrTable">
                                
                            </table>
                        </div>
                        <div class="productAttrTableSection">
                             <table id="productPopUpAttrTable3" class="productAttrTable">
                                
                            </table>
                        </div>
                </div>
                        
                 </div>
                   <div class="productInfoWrapperRight">
                       <div class="productPopupBidBackButtonStructure" onclick="activeProductPopup.hideBidSection()">
                           <div class="productPopupBidBackButtonIcon">
                               <img src="../assets/leftArrow.png" />
                           </div>
                           <div class="productPopupBidBackButtonTitle">
                               BACK
                           </div>
                        </div>
                       <div class="productPopupBidMainTitle">
                           Bid
                       </div>
                       <div class="productPopupBidMainDis">
                           
                           What happens after I complete the wire? A confirmation e-mail will be sent to you when we approve the wire.
                       
                       </div>
                        <div class="productPopupBidTr">
                            <div class="productPopupBidTd productPopupBidTd1">
                                <div class='productPopupBidThStructure'>
                                        <div class='productPopupBidTh1'>
                                    PPC:
                                        </div>
                                    <div class='productPopupBidTh1'>
                                    DISC:
                                        </div>
                                </div>
                        <div class="productPopupBidDropDownStructure">
                            <div class="productPopupBidDropDownIcon">
                                    <img src="../assets/expand-advanced-options-button-16.svg">
                            </div>
                            <div class="productPopupBidDropDownTitle">
                                    YOUR BID:
                            </div>
                            <div class="productPopupBidInput">
                                <input id="bidMainInput" type="text"  onkeyup="activeProductPopup.updateFieldBids()" />
                        </div>
                            <div id='popupBidPPCValue' class="productInfoBidTableTd2">
                                ---
                            </div>
                            <div id='popupBidDisValue' class="productInfoBidTableTd2">
                                ---
                            </div>
                        </div>
                            </div>
                            <div class="productPopupBidTd productPopupBidTd2">
                                <div class="productPopupBidOriginalTitle">
                                    ORIGINAL BID:
                            </div>
                            <div id='popupBidOrgTPValue' class="productPopupBidOriginal">
                            
                        </div>
                                <div id='popupBidOrgPPCValue' class="productInfoBidTableTd2">
                                
                            </div>
                            <div id='popupBidOrgDisValue' class="productInfoBidTableTd2">
                                
                            </div>
                                </div>
                            <div class="productPopupBidTd productPopupBidTd3">
                                <img class="bidArrowDirection"  src=''>
                                <img class=""  src='../assets/increaseArrow.png' style="display: none;">
                                <img class=""  src='../assets/decreaseArrow.png' style="display: none;">
                                
                                <div class="bidTitleDirection">
                                    
                                </div>
                                </div>
                            </div>
                       
                       <!--<div class="productInfoBidTable">
                            <div class="productInfoBidTableTd1">
                           
                            </div>
                           <div class="productInfoBidTableTd2">
                           
                            </div>
                           <div class="productInfoBidTableTd3">
                           
                            </div>
                           <div class="productInfoBidTableTd1">
                           
                            </div>
                           <div class="productInfoBidTableTd2">
                           
                            </div>
                           <div class="productInfoBidTableTd3">
                           
                            </div>
                       </div>
                    <table class="productInfoBidTable">
                        <thead>
                        <th class="productInfoBidTableTh1">
                            Type
                        </th>
                        <th class="productInfoBidTableTh2">
                            Your Bid
                        </th>
                        <th class="productInfoBidTableTh3">
                            Original
                        </th>
                            </thead>
                        </tbody>
                        <tbody>
                            <tr>
                            <td  class="productInfoBidTableTd1">PPC</td>
                            <td id='popupBidPPCValue' class="productInfoBidTableTd2"></td>
                            <td id='popupBidOrgPPCValue'  class="productInfoBidTableTd3"></td>
                        </tr>
                         <tr>
                            <td class="productInfoBidTableTd1">Discount</td>
                            <td id='popupBidDisValue' class="productInfoBidTableTd2"></td>
                            <td id='popupBidOrgDisValue' class="productInfoBidTableTd3"></td>
                        </tr>
                    </tbody>
                    </table>-->
                       <div class="productPopupBidBellowMinTitle">
                           *Bid is too low.
                       </div>
                       <div class="productPopupBidSubmitButton" onclick="activeProductPopup.sendBid()" >
                            Submit
                        </div>
                                    </div>
                        <div class="productPopupMainButtonStructure productPopupMainButtonStructureDesktop desktopElm">
                                <div class="productPopupMainButton productPopupMainButtonWishList" onclick="activeProductPopup.addProductToWishList()">
                                    <div class="productPopupMainButtonWrapper">
                                    <img src="../assets/icons/compareIconWhite.png"/>
                                    <div class="productPopupMainButtonTitle">
                                            To Wishlist
                                    </div>
                                    </div>
                        </div>
                        <div class="productPopupMainButton productPopupMainButtonCart" onclick="activeProductPopup.addProductToCart()" >
                            <div class="productPopupMainButtonWrapper">
                                        <img src="../assets/icons/cartIconWhite.png"/>
                                        <div class="productPopupMainButtonTitle">
                                                Cart
                                        </div>
                                        </div>
                        </div>
                    
                    <div class="productPopupMainButton productPopupMainButtonBid" onclick="activeProductPopup.showBidSection()">
                                    <img src="../assets/bidIcon.png"/>
                                    <div class="productPopupMainButtonTitle">
                                            BID
                                    </div>
                        </div>
                    
                 <div class="productPopupMainButton  productPopupMainButtonCall" onclick="activeVirtualMeeting.callVmStructure();" style="margin-right: 13px;opacity: 1;width: 159px;display: none;position: relative;">
                                    <img src="../assets/videoCallIcon.png" style="
    width: 22px;
    height: auto;
    position: relative;
    top: 1px;
    z-index: 2;
">
                                
                                    <div class="productPopupMainButtonTitle">VIRTUAL MEETING</div>
                        </div>
                </div>
                </div>
                </div>
                   
                
                       <div class="shareButtonStructure" onclick="activeProductPopup.openProductLinkStructure();">
                        <div class="shareIconStructure">
                            <img src="../assets/shareIconBlack.png"/>
                        </div>
                        <div class="shareButtonTitleStructure">
                            SHARE
                        </div>
                    </div>
            </div>
            <div class="productPopupSeparateLine desktopElm">
                
            </div>
            <div class="recommendedProductPopUpStructure">
                    <div class="recommendedProductPopUpTitle">
                            RECOMMENDED FOR YOU
                    </div>
                <div class="recommendedProductPopUpResultsStructure">
                <div class="recommendedProductPopUpResultsWrapper" id="recommendedProductPopUpResults"></div>
                    </div>
                <!--<div class="recommendedProductPopUpItemStructure recommendedProductPopUpItemStructureLast">
                            <div class="recommendedProductPopUpItemImage">
                                    <img src="../assets/dim.png"/>
                            </div>
                            <div class="recommendedProductPopUpItemAttrStructure">
                                    <div class="recommendedProductPopUpItemAttr">
                                            1.3 VIV.YEL  SI1 
                                    </div>
                                    <div class="recommendedProductPopUpItemCost">
                                            $5599
                                    </div>
                            </div>
                    </div>-->
            </div>
        </div>
</div>

    <?php include('../templates/diamondOnHand/index.php') ?>