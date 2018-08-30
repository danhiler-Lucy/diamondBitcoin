// Dashboard 1 Morris-chart
$( function () {
	"use strict";


	// Extra chart
	Morris.Area( {
		element: 'extra-area-chart',
		data: [ {
				period: '2011',
				RB: 0,
				CU: 0,
				HS: 90,
				RD: 0,
				OV: 0
        }, {
				period: '2012',
				RB: 10,
				CU: 60,
				HS: 40,
				RD: 80,
				OV: 120
        }, {
				period: '2013',
				RB: 120,
				CU: 10,
				HS: 90,
				RD: 30,
				OV: 50
        }, {
				period: '2014',
				RB: 0,
				CU: 0,
				HS: 120,
				RD: 0,
				OV: 0
        }, {
				period: '2015',
				RB: 0,
				CU: 0,
				HS: 0,
				RD: 150,
				OV: 0
        }, {
				period: '2016',
				RB: 160,
				CU: 75,
				HS: 30,
				RD: 60,
				OV: 90
        }, {
				period: '2017',
				RB: 10,
				CU: 120,
				HS: 40,
				RD: 60,
				OV: 30
        }


        ],
		lineColors: [ '#26DAD2', '#fc6180', '#62d1f3', '#ffb64d', '#4680ff' ],
		xkey: 'period',
		ykeys: [ 'RB', 'CU', 'HS', 'RD', 'OV' ],
		labels: [ 'RB', 'CU', 'HS', 'RD', 'OV' ],
		pointSize: 0,
		lineWidth: 0,
		resize: true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		hideHover: 'auto'

	} );



} );
