/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
        console.log('Received Event: ' + id);
        
        /*
		 * Push-test 1a
		 */
		var pushNotification = window.plugins.pushNotification;
		pushNotification.register(app.pushSuccessHandler, app.pushErrorHandler,{"senderID":"305121912452","ecb":"app.onNotificationGCM"});
		
		
		//alert("Device platform: "+device.platform);
		ad_platform_type = device.platform != "undefined" ? device.platform : ad_platform_type;
		switch(ad_platform_type){
			case "Android":
				$(".admob").html('<html><body style="margin:0;padding:0;"><script type="text/javascript" src="http://ad.leadboltads.net/show_app_ad.js?section_id=137183462"></script></body></html>');
			break;
			case "iOS":
				$(".admob").html('<html><body style="margin:0;padding:0;"><script type="text/javascript" src="http://ad.leadboltads.net/show_app_ad.js?section_id=164023920"></script></body></html>');
			break;	
			default:
				$(".admob").html("<a href='http://www.webbigt.se'><b>Webbigt.se</b> - it's only one single guy, but he is one darn good web developer. And yes ladies, he is single.</a>");
			break;	
		}        
        
    },
    pushSuccessHandler: function(result) {
        alert('Callback Success! Result = '+result)
    },
    pushErrorHandler:function(error) {
        alert(error);
    },
    onNotificationGCM: function(e) {
    	 switch( e.event )
    	 {
    	            case 'registered':
    	                if ( e.regid.length > 0 )
    	                {
    	                    console.log("Regid " + e.regid);
    	                    alert('registration id = '+e.regid);
    	                }
    	            break;
    	 
    	            case 'message':
    	              // this is the actual push notification. its format depends on the data model from the push server
    	              alert('message = '+e.message+' msgcnt = '+e.msgcnt);
    	            break;
    	 
    	            case 'error':
    	              alert('GCM error = '+e.msg);
    	            break;
    	 
    	            default:
    	              alert('An unknown GCM event has occurred');
    	              break;
    	        }
    	    }

};
