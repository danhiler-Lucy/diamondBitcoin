function mainPage(){
    this.pageId=5; //Profile
    this.products=[];
    this.orders=[];
    this.ordersByMonth=[];
    this.productsIds=[];
    this.productsPerMonth=[];
}

var activeMainPage = new mainPage();

activeMainPage.setProducts= function (data) {
    $('.profileInformationFullName').html(activeMemberManager.firstName+' '+activeMemberManager.lastName);
    $('.profileInformationEmail').html(activeMemberManager.email);
      var products=data;
    var content='';
     content+='<table id="productTableView3">';
         content+='<thead><tr>';
                content+='<th>ID</th>'+
                                    '<th style="display:none;">Certificate Id</th>'+
                                    '<th style="display:none;">Availability</th>'+
                                   '<th>Model</th>'+
                                   '<th>Ct.</th>'+
                                   '<th>Color</th>'+
                                   '<th>Clarity</th>'+
                                   '<th>Cut</th>'+
                                   '<th>Pol</th>'+
                                   '<th>Sym</th>'+
                                   '<th>Fluor</th>'+
                                   '<th>Depth</th>'+
                                   '<th>Table</th>'+
                                   '<th>Measure.</th>'+
                                   //'<th>Gridle </th>'+
                                  // '<th>Cert.Id</th>'+
                                   '<th>Lab</th>'+
                                   '<th>Location</th>'+
                                   '<th>Rap</th>'+
                                   '<th>PPC</th>'+
                                   '<th>Disc</th>'+
                                   '<th>Total</th>'+
                                   '<th>Order Date</th>'+
                                   '<th>Order ID</th>';
            content+='</tr></thead>';
            content+='<tbody>';
            
            for(var i=0;i<products.length;i++){
                var product=products[i];
                    content+='<tr class="resultsViewStructure3_tr itemStructure_'+product.id+'"  productId='+product.id+'>';
                    content+=
                                        '<td class="resultsViewStructure3_td_imageStructure">'+
                                        '<img class="resultsViewStructure3_td_image" src="'+product.imageSrc+'"/>'+
                                        '<div class="resultsViewStructure3_td productIdTitle">'+product.productId+'</div>'+
                                        '</td>'+
                                        '<td class="resultsViewStructure3_td" style="display:none;">'+product.certificateId+'</td>'+
                                        '<td class="resultsViewStructure3_td" style="display:none;">'+product.status+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.model+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.caratString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.color+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.clarity+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.cut+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.polish+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.symmetry+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.fluor+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.depth+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.table+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+ product.measureString+'</td>'+
                                        //'<td class="resultsViewStructure3_td">'+product.gridleCondition+'</td>'+
                                        //'<td class="resultsViewStructure3_td">'+product.certificateId+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.lab+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.location+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.listPriceString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.ppcString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.discountString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.totalPriceString+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.orderDate+'</td>'+
                                        '<td class="resultsViewStructure3_td">'+product.orderId+'</td>';
                    content+='</tr>';
                    activeMainTool.loadImage(product.imageSrc);
            }
            content+='</tr></tbody>';
            content+='</table>';
            $('.results').html(content);
            $('#userLastProductsHeaderMainTitleCount').html(products.length);
            $('#memberOrdersCount').html(activeMainPage.memberOrdersCount);
            $('#memberProductsCount').html(activeMainPage.memberProductsCount);
            
            $( ".resultsViewStructure3_td" ).click(
                function() {
                    activeProductPopup.show($(this).parents('tr').attr('productid'));
                }
              );
    $(function() {  
        var activeFileName=activeMainTool.getTitleForFileExport();
    var table=$('#productTableView3').DataTable( {
            paging: true,
            bSort: false,
             dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                title: activeFileName
            },
            {
                extend: 'pdfHtml5',
                title: activeFileName, 
                orientation: 'landscape'
            },
            {
                extend: 'csv',
                title: activeFileName
            },
            'print','copy',
        ]
        } );
         } );
        activeMainPage.setGraphs();
        $('#productTableView3_filter input').attr('placeholder','example: E VS2 EX GIA');
}

activeMainPage.getArrangeArray= function (data) {
    activeMainPage.products=[];
    activeMainPage.productsIds=[];
    for(var j=0;j<data.length;j++){
        var products=data[j].products;
        for(var i=0;i<products.length;i++){
            if(activeMainPage.productsIds.indexOf(products[i]._id)===-1){
                products[i].orderId=activeMainTool.cutString(data[j]._id,10);
                products[i].orderDate=activeMainTool.formatDateUs(data[j].createdAt);
                activeMainPage.products.push(products[i]);
                activeMainPage.productsIds.push(products[i]._id);
            }
        }
    }
    activeMainPage.memberProductsCount=activeMainPage.products.length;
    activeMainPage.memberOrdersCount=data.length;
}

activeMainPage.getData= function () {
       /*if(typeof activeMemberManager.token==='undefined' || activeMemberManager.token==='undefined'){
           activeMainTool.invalidToken();
       }*/
        $.ajax({
                url:activeMainTool.serverSrc+'orders/'+activeMemberManager.user._id,
                type: 'get',
                data: {
                    
                },
                headers: {
                    token: activeMemberManager.token 
                },
                dataType: 'json',
                success: function (data) {
                    console.log('Orders:');
                    console.log(data);
                    activeMainPage.orders=data;
                    activeMainPage.getArrangeArray(data);
                    var products = activeProductManager.setNewProducts(activeMainPage.products);
                    activeMainPage.setProducts(products);
                },
                error: function (data) {
                    console.log(data);
                    if(data.status===403 || data.status===400){
                            activeMainTool.invalidToken();
                    }
                    
                }
    });
            /* if(typeof activeCartManager.newCart==='undefined'  || activeCartManager.newCart.length===0){
        setTimeout(function(){ 
                activeRecentlyViewed.getData();
        }, 500);
        return true;
    }
    if($('#recentlyViewedResults').length>0){
        activeRecentlyViewed.setProducts(activeCartManager.newCart);
    }*/
}
activeMainPage.checkLoginStatus= function () {
    if(!activeMemberManager.loginStatus){
        activeMainTool.invalidToken();
    }
    else{
        $('body').css('opacity','1');
    }
}
activeMainPage.checkLoginStatus();

activeMainPage.arrangeGraphsData= function () {
    //arrange orders by month
    for(var i=0;i<activeMainPage.orders.length;i++){
        var month = new Date(activeMainPage.orders[i].createdAt).getMonth();
        if(typeof activeMainPage.ordersByMonth[month]==='undefined'){
            activeMainPage.ordersByMonth[month]=[];
        }
        activeMainPage.ordersByMonth[month].push(activeMainPage.orders[i]);
    }
    
    //graph1
    activeMainPage.productsPerMonth=[];
    activeMainPage.productsPerMonthMaxValue=0;
    for(var i=0;i<12;i++){
        activeMainPage.productsPerMonth[i]=0;
        if(typeof activeMainPage.ordersByMonth[i]!=='undefined'){
            for(var j=0;j<activeMainPage.ordersByMonth[i].length;j++){
                    activeMainPage.productsPerMonth[i]+=activeMainPage.ordersByMonth[i][j].products.length;
            }
            if(activeMainPage.productsPerMonthMaxValue<activeMainPage.productsPerMonth[i]){
                activeMainPage.productsPerMonthMaxValue=activeMainPage.productsPerMonth[i];
            }
        }
    }
    
    //graph2
    activeMainPage.totalPricePerMonth=[];
    activeMainPage.totalPricePerMonthMaxValue=0;
    for(var i=0;i<12;i++){
        activeMainPage.totalPricePerMonth[i]=0;
        if(typeof activeMainPage.ordersByMonth[i]!=='undefined'){
            for(var j=0;j<activeMainPage.ordersByMonth[i].length;j++){
                    activeMainPage.totalPricePerMonth[i]+=activeMainPage.ordersByMonth[i][j].totalPrice;
            }
            activeMainPage.totalPricePerMonth[i]=activeMainPage.totalPricePerMonth[i].toFixed(2);
            if(activeMainPage.totalPricePerMonthMaxValue<activeMainPage.totalPricePerMonth[i]){
                activeMainPage.totalPricePerMonthMaxValue=activeMainPage.totalPricePerMonth[i];
            }
        }
    }
}

activeMainPage.setGraphs= function () {
    activeMainPage.arrangeGraphsData();
 // configure for module loader
        //http://echarts.baidu.com/echarts2/doc/doc-en.html#Color
        $(function() {
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // use
        require(
            [
                'echarts',
                'echarts/chart/line',
                'echarts/chart/bar' // require the specific chart type
            ],
            function (ec) {
                // Initialize after dom ready
                var myChart = ec.init(document.getElementById('main')); 
                var myChart1 = ec.init(document.getElementById('main1')); 
                
                var graph1 = {
    title : {
        text: '',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['My Diamonds']
    },
    toolbox: {
        show : true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : activeMainTool.monthsShort
        }
    ],
    yAxis : [
        {
            type : 'value',
            max:activeMainPage.productsPerMonthMaxValue*1.5
        }
    ],
    series : [
        {
            name:'My Diamonds',
            type:'line',
            smooth:true,
            itemStyle: {normal: {
                    color:'black',
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data:activeMainPage.productsPerMonth
        }
    ]
};
                    
        var graph2 = {
    title : {
        text: '',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Orders Total Price']
    },
    toolbox: {
        show : true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :activeMainTool.monthsShort
        }
    ],
    yAxis : [
        {
            type : 'value',
            max:activeMainPage.totalPricePerMonthMaxValue*1.5
        }
    ],
    series : [
        {
            itemStyle: {normal: {
                    color:'black',
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            name:'Orders Total Price',
            type:'bar',
            data:activeMainPage.totalPricePerMonth
        }
    ]
};
                    
        
                // Load data into the ECharts instance 
                myChart.setOption(graph1); 
                myChart1.setOption(graph2); 
            }
        );
});
}