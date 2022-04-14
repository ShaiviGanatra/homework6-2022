var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("New speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.95;
	console.log("New speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	console.log("Original location ", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= video.duration)
		video.currentTime = 0;
	console.log("New location ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute / Unmute");
	if (video.muted == false){
		console.log("Video muted");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		console.log("Video unmuted");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Mute / Unmute");
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});
