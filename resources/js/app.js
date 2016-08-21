/* app.js - Created By Apptory LTD */

var base = "resources/images/filter/";
var anat = ["anat_1.png", "anat_2.png", "anat_3.png", "anat_4.png", "anat_5.png", "anat_7.png", "anat_8.png"];
var counter = 0;

$(document).ready(function() {

	$(".root").click(function(event) {

		$("h1").hide();

		if(!anat[counter]) counter = 0;

		var image = anat[counter];

		var imageObj = $("<img>").attr("src", base + image).width(200);

		imageObj.addClass("anat");
		imageObj.css("transform", "translate(" + (event.pageX - 100) + "px, " + (event.pageY - 100) + "px)");

		imageObj.appendTo($("body"));

		if(!isPlaying(document.getElementsByTagName("audio")[0]))
		{
			document.getElementsByTagName("audio")[0].play();
		}
		else if(isPlaying(document.getElementsByTagName("audio")[0]) && !isPlaying(document.getElementsByTagName("audio")[1]))
		{
			document.getElementsByTagName("audio")[1].play();
		}
		else if(isPlaying(document.getElementsByTagName("audio")[0]) && isPlaying(document.getElementsByTagName("audio")[1]))
		{
			document.getElementsByTagName("audio")[2].play();
		}

		counter++;
	});

});

function isPlaying(audelem) { return !audelem.paused; }