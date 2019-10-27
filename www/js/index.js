var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application resumed: " + resumed_count);
	$("#paused").text("Application paused: " + paused_count);
}


// device APIs are available
//
   

//lifecycle event Device Ready
function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	    //resume event listener defined
	document.addEventListener("pause", onPause, false);
	    //pause event listener defined
	launched_count++;
	    //increment count by 1
	updateDisplay();
	    
	alert("device ready");
    }


//lifecycle event Pause
    function onPause() {
	
	paused_count++;
	    //increment count by 1
	updateDisplay();
	    
        alert("pause");
        //changed resume to pause
    }
	
//lifecycle event Resume
    function onResume() {
		
	resumed_count++;
	    //increment count by 1
	updateDisplay();
	    
        alert("resume");
        //changed pause to resume
    }
