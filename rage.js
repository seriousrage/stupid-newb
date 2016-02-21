var rage= rage || {};

// all RIGHT WHO IS TO BLAME FOR THIS??? TELL ME!!!!!

// TELL ME!!!!!!!!!!



WHO?????


JESUS WHEN I FIND WHO IS TO BLAME I SWEAR I WILL KICK THAT LITTLE PUKES NUTS UP TO HIS THROAT!!!!


I GOT A PROJECT TO RUN HERE!!!!

QUIT FN AROUND AND GET SOME SHIT DONE!!!!~


JESUS!!!!
rage.runner  = (function() {

  
  var element = document.getElementById("RageCage");
	var color = "#000";

	// write message for RageCage Div
	function Write(msg) {
		element.innerHTML += msg;
	}

	// set color of RageCage Div
	function SetColor(col) {
		color = col;
	}

	// clear all messages from RageCage Div
	function Clear() {
		element.innerHTML = "";
	}
  
  
	// format a number
	function FormatMessage(msg) {
		//return '<p style="color:'+color+'">'+msg+'</p>';
	}
  
  // Making some rage.js functions public
  // exmple could call for a message to be passed with the following syntax:
  //
  //          rage.runner.Spew('Lick it');
  //or
  //          rage.runner.ColorIt('#D40909');
  //or
  //           rage.runner.TossIt();
  
function Make() {}
 
  

  
  
  // JavaScript Object Prototypes
  var rager = document.getElementById("RageCage");
  //var rage1 = document.getElementById("rage1");
  //var msg2 = document.getElementById("message2");

  // video constructor
  function outRage(poster, src1, src2, src3) {
    this.poster = poster || "http://video-js.zencoder.com/oceans-clip.png";
    this.src1 = src1 || "PLEASE INSERT Mp4 video source here";
    this.src2 = src2 || "PLEASE INSERT WebM video source here";
    this.src3 = src3 || "No OGG Source";
    badcntr=0;
  }

  // display method for all video objects
  outRage.prototype.display = function() {

   
    rager.innerHTML += "<video id='rage"+ ++badcntr +"' class='video-js vjs-default-skin' preload='none' width='1000' height='580'poster='"+this.poster+"'data-setup='{}'><source src='"+this.src1+"' type='video/mp4' /><source src='"+this.src2+"' type='video/webm' /><source src='"+this.src3+"' type='video/ogg' />To view this video please enable JavaScript, and consider upgrading to a Modern browser that supports HTML5 video</video><br><Button id=\"giver\" onclick=\"rage"+ badcntr +".play()\">GIVER</button><Button id=\"chill\" onclick=\"rage"+ badcntr +".pause()\">Chill</button><br>";
  };



  // create objects
  var outRage1 = new outRage("poster1.png", "Bad_Vid/ex.mp4", "Bad_Vid/ex.webm");
  var outRage2 = new outRage("poster1.png", "Bad_Vid/chroma2.mp4", "Bad_Vid/chroma2.webm");
  var outRage3 = new outRage("poster1.png", "Bad_Vid/chroma1.mp4", "Bad_Vid/chroma1.webm");
  var outRage4 = new outRage("poster1.png", "Bad_Vid/purple.mp4", "Bad_Vid/purple.webm");

  // change properties and run methods
  //badv2.color = "black";
  outRage1.display();
  outRage2.display();
  outRage3.display();
  outRage4.display();

  /*
theRage5.display();
theRage6.display();
theRage7.display();
theRage8.display();
theRage9.display();
theRage10.display();
theRage11.display();
theRage12.display();
*/
  
  
   return {
		Spew: Write,
		ColorIt: SetColor,
		TossIt: Clear,
        Make: 
	};
  

}());
