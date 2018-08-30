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
                <h3>Analytics <small class="countType"></small></h3>
              </div>

            </div>

              <div class="col-md-12 col-sm-12 col-xs-12 mainAnalyticsPage">
                  <iframe src="../admin" scrolling="no" ></iframe>
              </div>
         
              
              </div>
            </div>
        <div id="popupUser" style="
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999999999;
    background-color: #00000082;
    text-align: center;
    height: 100%;
    width: 100%;
    display: none;
    opacity: 0;
        -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -ms-transition: all .6s ease;
    -o-transition: all .6s ease;
    transition: all .6s ease;
" onclick="hidepopupUser();">
            <div style="
    width: 70%;
    top: 4%;
    position: relative;
    /* top: 4%; */
    position: relative;
    margin: 0 auto;
    padding: 8px;
    background-color: #f1f1ef;
    border-radius: 5px;
    box-shadow: 0px 8px 8px 0px #00000036;
"> <img src="../admin/icons/popup.png" style="
    width: 100%;
    /* top: 4%; */
    /* position: relative; */
"></div>
        </div>
        <!-- /page content -->
        <div  onclick="showpopupUser()">
       <?php include('../templates/footer.php') ?>
            </div>
      </div>
    </div>
<script>
   
    </script>

<?php include('../templates/scripts.php') ?>
    <script>
            function showpopupUser(){
                $('#popupUser').css('display','block');
                $('window').css('overflow','hidden');
                setTimeout(function(){ 
                $('#popupUser').css('opacity','1');
                }, 500);
            }
            function hidepopupUser(){
                
                $('#popupUser').css('opacity','0');
                $('window').css('overflow','auto');
                setTimeout(function(){ 
                $('#popupUser').css('display','none');
                }, 600);
            }
    </script>
  </body>
</html>
    