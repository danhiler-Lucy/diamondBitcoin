<!doctype html>
<html lang="en">
<head>
                    <?php include('../templates/html/head.php') ?>
                    <?php include('../templates/html/styles.php') ?>
    <link rel="stylesheet" href="../pages/profile/css/style.css" />
                    <link rel="stylesheet" href="../templates/productCard/css/style.css" />
                    <link rel="stylesheet" type="text/css" href="../css/dataTables/style.css">
</head>
<body>
<?php include('../templates/wrapper/start.php') ?>
<?php include('../templates/logo/index.php') ?>
<?php include('../templates/header/index.php') ?>
<div class="mainPage">
       <div class="mainSection">
           <div class="mainContentWrapper">
           <div class="profileInformationStructure">
               <div class="profileInformationWrapper">
                    <div class="profileInformationImageStructure">
                        <img src="../assets/userIcon.png"/>
                    </div>
                   <div class="profileInformationInfo1">
    <div class="profileInformationFullName">
        <div class="mainIconNoAnimation"><img src="../assets/favicon-96x96.png"></div>
        </div><div class="profileInformationEmail">
        
        </div>
        <!--<div>
                       
<div style="
    width: 230px;
    height: 3px;
    background-color: rgba(202, 202, 202, 0.57);
    margin-top: 15px;
    float: left;
    margin-left: 0px;
"></div>
    <div style="
    width: 109px;
    height: 3px;
    background-color: rgba(202, 202, 202, 0.57);
    margin-top: 16px;
    clear: both;
    float: left;
"></div>
    <div style="
    width: 98px;
    height: 3px;
    background-color: rgba(202, 202, 202, 0.57);
    margin-top: 3px;
    /* clear: both; */
    clear: both;
    float: left;
"></div>
    <div style="
    width: 120px;
    height: 3px;
    background-color: rgba(202, 202, 202, 0.57);
    margin-top: 3px;
    clear: both;
    float: left;
"></div>
    
                       
                       
                       
                       
        </div>-->
                        
                   </div>
                </div>
               <div class="memberInformationStructure">
               <div class="memberRatingStructure">
                        <div class="memberRatingMainTitle">
                                GOLD MEMBER
                        </div>
                        <div class="memberRatingProccessLineStructure">
                            <div class="memberRatingActiveProccessLine">
                            </div>
                        </div>
                   <div class="memberRatingTotalCreditsStructure">
                       YOU HAVE 5 pt
                   </div>
               </div><div class="memberHistoryInfoStructure">
                        <div class="memberHistoryInfoMainTitle">
                                ORDERS
                        </div>
                        <div class="memberHistoryInfoSecTitle" id="memberOrdersCount">
                                0
                        </div>
                        
               </div>
               <div class="memberHistoryInfoStructure">
                        <div class="memberHistoryInfoMainTitle">
                                PRODUCTS
                        </div>
                        <div class="memberHistoryInfoSecTitle" id="memberProductsCount">
                                0
                        </div>
                        
               </div>
               
                   </div>
               </div>
               <div class="graphBoxStructure">
                    <div class="graphStructure graphStructure1" id="main"></div>
                    <div class="graphStructure graphStructure2" id="main1"></div>
               </div>
               <div class="userLastProductsHeaderStructure">
            <div class="userLastProductsHeaderWrapper">
                <div class="userLastProductsHeaderMainTitle">
                    RESULTS(<span id="userLastProductsHeaderMainTitleCount">0</span>)
                </div>
                <div id="results" class="results">
                        <div id="productTableView3_wrapper" class="productTableView3_wrapperLoading dataTables_wrapper no-footer"><div class="dt-buttons"><a class="dt-button buttons-copy buttons-html5" tabindex="0" aria-controls="productTableView3" href="#"><span>Copy</span></a><a class="dt-button buttons-csv buttons-html5" tabindex="0" aria-controls="productTableView3" href="#"><span>CSV</span></a><a class="dt-button buttons-excel buttons-html5" tabindex="0" aria-controls="productTableView3" href="#"><span>Excel</span></a><a class="dt-button buttons-pdf buttons-html5" tabindex="0" aria-controls="productTableView3" href="#"><span>PDF</span></a><a class="dt-button buttons-print" tabindex="0" aria-controls="productTableView3" href="#"><span>Print</span></a></div><div id="productTableView3_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="productTableView3"></label></div><table id="productTableView3" class="dataTable no-footer" role="grid" aria-describedby="productTableView3_info"><thead><tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending" style="width: 129px;">ID</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Model: activate to sort column ascending" style="width: 41px;">Model</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Ct.: activate to sort column ascending" style="width: 50px;">Ct.</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Color: activate to sort column ascending" style="width: 35px;">Color</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Clarity: activate to sort column ascending" style="width: 55px;">Clarity</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Cut: activate to sort column ascending" style="width: 39px;">Cut</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Pol: activate to sort column ascending" style="width: 40px;">Pol</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Sym: activate to sort column ascending" style="width: 39px;">Sym</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Fluor: activate to sort column ascending" style="width: 35px;">Fluor</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Depth: activate to sort column ascending" style="width: 50px;">Depth</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Table: activate to sort column ascending" style="width: 38px;">Table</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Measure.: activate to sort column ascending" style="width: 122px;">Measure.</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Lab: activate to sort column ascending" style="width: 46px;">Lab</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Location: activate to sort column ascending" style="width: 57px;">Location</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Rap: activate to sort column ascending" style="width: 74px;">Rap</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="PPC: activate to sort column ascending" style="width: 66px;">PPC</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Disc: activate to sort column ascending" style="width: 77px;">Disc</th><th class="sorting" tabindex="0" aria-controls="productTableView3" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending" style="width: 75px;">Total</th></tr></thead><tbody><tr class="resultsViewStructure3_tr itemStructure_592b2b2dfd4b01e029ef19d6 odd" productid="592b2b2dfd4b01e029ef19d6" role="row"><td class="resultsViewStructure3_td_imageStructure sorting_1"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td></tr><tr class="resultsViewStructure3_tr itemStructure_592b2b2dfd4b01e029ef2293 even" productid="592b2b2dfd4b01e029ef2293" role="row"><td class="resultsViewStructure3_td_imageStructure sorting_1"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td></tr><tr class="resultsViewStructure3_tr itemStructure_592b2b2dfd4b01e029ef263b odd" productid="592b2b2dfd4b01e029ef263b" role="row"><td class="resultsViewStructure3_td_imageStructure sorting_1"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td><td class="resultsViewStructure3_td"></td></tr></tbody></table><div class="dataTables_info" id="productTableView3_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div>
                </div>
            </div>
       </div>
        
    </div>
</div>
    <?php include('../templates/footer/index.php') ?>
    <?php include('../templates/productPopup/index.php') ?>
    <?php include('../templates/miniCart/index.php') ?>
    <?php include('../templates/wishList/index.php') ?>
    <?php include('../templates/html/firstScripts.php') ?>
    <script src="../pages/profile/js/script.js"></script>
    <?php include('../templates/html/scripts.php') ?>
    <?php include('../templates/wrapper/end.php') ?>
    <?php include('../templates/popup/index.php') ?>
    

    
        <script src="../js/dataTables/jquery.dataTables.js"></script>
    <script src="../js/dataTables/jszip.js"></script>
    <script src="../js/dataTables/pdfmake.js"></script>
    <script src="../js/dataTables/vfs_fonts.js"></script>
    <script src="../js/dataTables/buttons.html5.js"></script>
    <script src="../js/dataTables/buttons.print.js"></script>
        <script src="../js/dataTables/dataTables.buttons.js"></script>
    <script src="../js/dataTables/buttons.flash.js"></script>
    
    <script src="../pages/profile/js/echarts.js"></script>
    <script src="../pages/profile/js/line.js"></script>
    <script src="../pages/profile/js/bar.js"></script>
</body>
</html>