// JavaScript Object Prototypes
var msg = document.getElementById("message");
//var msg2 = document.getElementById("message2");

// video constructor
function badvid(poster, src1, src2, src3) {
	this.poster = poster || "http://video-js.zencoder.com/oceans-clip.png";
	this.src1 = src1 || "PLEASE INSERT Mp4 video source here";
	this.src2 = src2 || "PLEASE INSERT WebM video source here";
	this.src3 = src3 || "No OGG Source";
	 badcntr= 0;
}

// display method for all video objects
badvid.prototype.display = function() {
	
	/*
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	*/
	 msg.innerHTML += "<video id='video"+ ++badcntr +"' class='video-js vjs-default-skin' controls preload='none' width='1000' height='580'poster='"+this.poster+"'data-setup='{}'><source src='"+this.src1+"' type='video/mp4' /><source src='"+this.src2+"' type='video/webm' /><source src='"+this.src3+"' type='video/ogg' /><track kind='captions' src='demo.captions.vtt' srclang='en' label='English'></track><!-- Tracks need an ending tag thanks to IE9 --><track kind='subtitles' src='demo.captions.vtt' srclang='en' label='English'></track><!-- Tracks need an ending tag thanks to IE9 --><p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to a web browser that <a href='http://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a></p></video>";
};

 

// create objects
var badv1 = new badvid("poster1.png", "Bad_Vid/ex.mp4", "Bad_Vid/ex.webm");

var badv2 = new badvid("poster1.png", "Bad_Vid/chroma2.mp4", "Bad_Vid/chroma2.webm");
var badv3 = new badvid("poster1.png", "Bad_Vid/chroma1.mp4", "Bad_Vid/chroma1.webm");
var badv4 = new badvid("poster1.png", "Bad_Vid/purple.mp4", "Bad_Vid/purple.webm");

// change properties and run methods
//badv2.color = "black";
badv1.display();
badv2.display();
badv3.display();
badv4.display();