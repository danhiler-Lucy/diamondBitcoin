<link rel="stylesheet" href="../templates/vm/css/style.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.css">

</head>

<body>
    <!--<div class="vmCallButtonStructure" onclick="activeVirtualMeeting.callVmStructure();">
            <div class="vmCallButton">
                    CALL
            </div>
    </div>-->
  <div class="vmStructure vmStructureHidden">
      <div class="vmMainDeskStructure">
          <div class="vmMainDeskWrapper">
              <div class="productPopupCloseButtonTitle" onclick="activeVirtualMeeting.closeVmStructure()">
                        <img src="../assets/x.png"/>
                </div>
              <div class="vmMainTitleStructure">
                    <div class="vmMainTitle">
                        dob
                        </div>
                </div>
              <div class="vmMainDeskHeaderStructureSeller">
                  <div class="vmMainDeskHeaderNavBar vmMainDeskHeaderNavBarActive" onclick="activeVirtualMeeting.changeSectionView(this,1)">
                            Diamond View
                    </div>
                    <div class="vmMainDeskHeaderNavBar" onclick="activeVirtualMeeting.changeSectionView(this,7)">
                            User Details
                    </div>
              </div>
              <div class="vmCallingPopupStructure">
                  <div class="vmCallingPopupLogo">
                      <img src="https://intewave.com/assets/smLogo.png"/>
                  </div>
                  <div class="vmCallingPopupName">
                      TOMER LEVI 
                  </div>
                  <div class="vmCallingPopupDes">
                      is calling
                  </div>
                  <div class="vmCallingPopupAnswer">
                      Answer
                  </div>
                  <div class="vmCallingPopupDecline">
                      Decline
                  </div>
                  <audio id="callingRingtoneSound" controls  style="display:none">
  
  <source src="../assets/ringingCall.mp3" type="audio/mpeg">
  
</audio>
              </div>
              <div class="vmMainDeskHeaderStructure">
                  <div class="vmMainDeskHeaderNavBar vmMainDeskHeaderNavBarActive" onclick="activeVirtualMeeting.changeSectionView(this,1)">
                            Diamond View
                    </div>
                    <div class="vmMainDeskHeaderNavBar" onclick="activeVirtualMeeting.changeSectionView(this,2)">
                            My Cart
                    </div>
                  <div class="vmMainDeskHeaderNavBar"onclick="activeVirtualMeeting.changeSectionView(this,4)">
                            Wish List
                    </div>
                  <div class="vmMainDeskHeaderNavBar"onclick="activeVirtualMeeting.changeSectionView(this,3)">
                            Recently Viewed
                    </div>
                  <div class="vmMainDeskHeaderNavBar" onclick="activeVirtualMeeting.changeSectionView(this,5)">
                            Search
                    </div>
              </div>
              <div class="vmMainDeskContentStructure">
                  <div class="vmMainDeskContentWrapper">
                      <div class="vmDeskSection vmDeskActiveSection" id="vmDeskSection1">
                          Current
                      </div>
                      <div class="vmDeskSection" id="vmDeskSection3">
                          <div class="mainIconAnimation"><img src="../assets/favicon-96x96.png"></div>
                      </div>
                      <div class="vmDeskSection" id="vmDeskSection7">
                          <img src="../assets/123.png" style=" width: 100%;">
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Video area -->
      <div class="vmFooterStructure" id="video-container">
        <video id="guestVideo" autoplay></video>
        <div class="vmFooterChatStructure">
            <div class="vmFooterChatWrapper">
                <div class="vmFooterChatInputStructure">
                        <input type="text" />
                        <div class="vmFooterChatInputIcon">
                            SEND
                        </div>
                </div>
            </div>
        </div>
        <video id="userVideo" muted="true" autoplay></video>
      </div>

      <!-- Steps -->
      <div class="pure-u-1-3">


        <!-- Make calls to others -->
        <div id="step2">
          <span id="my-id" style="    user-select: all;"></span>
          <div class="pure-form">
            <input type="text" placeholder="Call user id..." id="callto-id" >
            <a href="#" class="pure-button pure-button-success" id="make-call">Call</a>
          </div>
        </div>

        <!-- Call in progress -->
        <div id="step3">
          <!--<p>Currently in call with <span id="their-id">...</span></p>-->
          <p><a href="#" class="pure-button pure-button-error" id="end-call">End call</a></p>
        </div>
      </div>
  </div>

  <script type="text/javascript" src="../templates/vm/js/peer.js"></script>
  <script type="text/javascript" src="../templates/vm/js/script.js"></script>
  <script>

    // Compatibility shim
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // PeerJS object
//    var peer = new Peer({ key: 'yksk9n4w0novfgvi', debug: 3});

    var peer = new Peer({
    host: 'chuzme.info',
    port: 9000,
    path: '/peerjs',
    debug: 3,
    config: {'iceServers': [
    { url: 'stun:stun1.l.google.com:19302' },
    { url: 'turn:numb.viagenie.ca',
      credential: 'muazkh', username: 'webrtc@live.com' }
    ]}
  });

    peer.on('open', function(){
      //$('#my-id').text(peer.id);
      $('.vmFooterChatInputStructure input').val(peer.id);
    });

    // Receiving a call
    peer.on('call', function(call){
      // Answer the call automatically (instead of prompting user) for demo purposes
      call.answer(window.localStream);
      step3(call);
    });
    peer.on('error', function(err){
      console.log(err.message);
      // Return to step 2 if error occurs
      step2();
    });

    // Click handlers setup
    $(function(){
      $('#make-call').click(function(){
        // Initiate a call!
        var call = peer.call($('#callto-id').val(), window.localStream);

        step3(call);
      });

      $('#end-call').click(function(){
        window.existingCall.close();
        step2();
      });

      // Retry if getUserMedia fails
      $('#step1-retry').click(function(){
        $('#step1-error').hide();
        step1();
      });

      // Get things started
      step1();
    });

    function step1 () {
      // Get audio/video stream
      navigator.getUserMedia({audio: true, video: true}, function(stream){
        // Set your video displays
        $('#userVideo').prop('src', URL.createObjectURL(stream));

        window.localStream = stream;
        step2();
      }, function(){ $('#step1-error').show(); });
    }

    function step2 () {
      $('#step1, #step3').hide();
      $('#step2').show();
    }

    function step3 (call) {
      // Hang up on an existing call if present
      if (window.existingCall) {
        window.existingCall.close();
      }

      // Wait for stream on the call, then set peer video display
      call.on('stream', function(stream){
          
           if(vmid==='seller'){
               
               $('.vmCallingPopupStructure').css('display','block');
                 setTimeout(function(){ 
                    $('.vmCallingPopupStructure').css('opacity','1');
                    $('#callingRingtoneSound').trigger("play");
             }, 10);
               setTimeout(function(){ 
                    $('.vmMainDeskContentWrapper').css('opacity','1');
                    $('.vmCallingPopupStructure').css('opacity','0');
                 $('#guestVideo').prop('src', URL.createObjectURL(stream));
             }, 6000);
             setTimeout(function(){ 
                 $('.vmCallingPopupStructure').css('display','none');
             }, 7000);
        }
        else{
            setTimeout(function(){ 
               $('.vmMainDeskContentWrapper').css('opacity','1');
            $('#guestVideo').prop('src', URL.createObjectURL(stream));
        }, 6000);
        }
           
      });

      // UI stuff
      window.existingCall = call;
      //$('#their-id').text(call.peer);
      call.on('close', step2);
      $('#step1, #step2').hide();
      $('#step3').show();
    }

  </script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>