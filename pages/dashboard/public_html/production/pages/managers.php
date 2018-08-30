<!DOCTYPE html>
<html lang="en">
  <head>

    
    <?php include('../templates/head.php') ?>
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
         <?php include('../templates/menu.php') ?>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
          <?php include('../templates/header.php') ?>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Managers <small class="countType"></small></h3>
              </div>

            </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <!--<div class="x_title">
                    <h2>Button Example <small>Users</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>-->
                  <div class="x_content">
                    <!--<p class="text-muted font-13 m-b-30">
                      The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
                    </p>-->
                    <table id="datatable-buttons" class="table table-striped table-bordered" >
                      <thead id="mainTableHead">
                      </thead>


                      <tbody id="mainTableBody">
                          
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                  
                  <button type="button" id="checkboxPermissionsButton" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg" style="position: absolute;display: none;">Large modal</button>
                  <div class="checkboxModalPermissionsStructure modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">

                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel">Permissions</h4>
                        </div>
                        <div class="modal-body">
                          <h4 id="checkboxPermissions_fullName">Tomer Levi</h4>
                          <div class="checkboxPermissionsStructure">
                              <div class="checkboxPermissions" id="checkboxPermissions_home">
                                  <input type="checkbox" name="home">
                                  <div class="checkboxPermissionsTitle">
                                        Home
                                  </div>
                              </div>
                              <div class="checkboxPermissions" id="checkboxPermissions_bids">
                                  <input type="checkbox" name="bids">
                                  <div class="checkboxPermissionsTitle">
                                        Bids
                                  </div>
                              </div><div class="checkboxPermissions" id="checkboxPermissions_orders">
                                  <input type="checkbox" name="orders">
                                  <div class="checkboxPermissionsTitle">
                                        Orders
                                  </div>
                              </div><div class="checkboxPermissions" id="checkboxPermissions_users">
                                  <input type="checkbox" name="users">
                                  <div class="checkboxPermissionsTitle">
                                        Users
                                  </div>
                              </div><div class="checkboxPermissions" id="checkboxPermissions_products">
                                  <input type="checkbox" name="products">
                                  <div class="checkboxPermissionsTitle">
                                        products
                                  </div>
                              </div>
                              <div class="checkboxPermissions" id="checkboxPermissions_messages">
                                  <input type="checkbox" name="messages">
                                  <div class="checkboxPermissionsTitle">
                                        messages
                                  </div>
                              </div>
                          </div>
                          
                        </div>
                        <div class="modal-footer">
                          <button id="checkboxPermissionsCloseButton"  type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button  type="button" class="btn btn-primary" onclick="activeDashboardManager.sendManagerPermissions()">Save changes</button>
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
<script>
        function init_DataTables() {
				
				console.log('run_datatables');
				
				if( typeof ($.fn.DataTable) === 'undefined'){ return; }
				console.log('init_DataTables');
				
				var handleDataTableButtons = function() {
				  if ($("#datatable-buttons").length) {
					$("#datatable-buttons").DataTable({
					  dom: "Bfrtip",
                                                                                                        
				  'order': [[ 3, 'desc' ]],
				  'columnDefs': [
					{ orderable: false }
				  ],
                                                                            "iDisplayLength": 50,
				
					  buttons: [
						{
						  extend: "copy",
						  className: "btn-sm"
						},
						{
						  extend: "csv",
						  className: "btn-sm"
						},
						{
						  extend: "excel",
						  className: "btn-sm"
						},
						{
						  extend: "pdfHtml5",
						  className: "btn-sm"
						},
						{
						  extend: "print",
						  className: "btn-sm"
						},
					  ],
					  responsive: true
					});
				  }
				};

				TableManageButtons = function() {
				  "use strict";
				  return {
					init: function() {
					  handleDataTableButtons();
					}
				  };
				}();

				$('#datatable').dataTable();

				$('#datatable-keytable').DataTable({
				  keys: true
				});

				$('#datatable-responsive').DataTable();

				$('#datatable-scroller').DataTable({
				  ajax: "js/datatables/json/scroller-demo.json",
				  deferRender: true,
				  scrollY: 380,
				  scrollCollapse: true,
				  scroller: true
				});

				$('#datatable-fixed-header').DataTable({
				  fixedHeader: true
				});

				var $datatable = $('#datatable-checkbox');

				$datatable.dataTable({
				  'order': [[ 1, 'asc' ]],
				  'columnDefs': [
					{ orderable: false, targets: [0] }
				  ]
				});
				$datatable.on('draw.dt', function() {
				  $('checkbox input').iCheck({
					checkboxClass: 'icheckbox_flat-green'
				  });
				});

				TableManageButtons.init();
				
			};
    </script>

<?php include('../templates/scripts.php') ?>
    <script>
            activeDashboardManager.getManagers();
    </script>
  </body>
</html>