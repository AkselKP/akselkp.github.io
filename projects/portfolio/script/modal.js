// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Tungvindt og dårlig metode, men alt jeg kommer på i farta.
const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2")
const view3 = document.getElementById("view3")
const view4 = document.getElementById("view4")
const view5 = document.getElementById("view5")
const view6 = document.getElementById("view6")
const view7 = document.getElementById("view7")

//Bilde 1 
view1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "bilder/Elever_Pa_PCer-min.jpg";
  modalImg.style.width = "" //!ghetto fix lmao
  modalImg.style.border = ""
  captionText.innerHTML = "Promotional photo for IKTM Porsgrunn Senior High School"
}

//Bilde 2
view2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "bilder/DSC_0095-min.JPG";
  modalImg.style.width = "" 
  modalImg.style.border = ""
  captionText.innerHTML = "Private photo taken of a friend for his personal instagram"
}

//Bilde 3
view3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "bilder/Kamera-min.jpg";
  modalImg.style.width = "" 
  modalImg.style.border = ""
  captionText.innerHTML = "Promotional photo for IKTM Porsgrunn Senior High School"
}

// Video 1
view4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "bilder/video_foto-min.PNG"
  modalImg.style.width = "0px" //!ghetto fix lmao
  modalImg.style.border = "none"
  captionText.innerHTML = '<video id="tallVideo" preload autoplay controls><source src="videoer/Aksel-instagramVideo.mp4" type="video/mp4"><source src="videoer/Aksel-instagramVideo.ogg" type="video/ogg">Your browser does not support the video tag.</video><br>Promotional video for IKTM Porsgrunn Senior High School<br>(Videos are a bit buggy)'
}


//Video 2
view5.onclick = function(){
  modal.style.display = "block";
  modalImg.style.width = "0px" 
  modalImg.style.border = "none"
  captionText.innerHTML = '<video preload autoplay controls > <source src="videoer/MusikkvideoFerdig.mp4" type="video/mp4">Your browser does not support the video tag.</video><br>Musicvideo for "Talk It Out" - The Døør<br>(Videos are a bit buggy)'
}


//Video 3
view6.onclick = function(){
  modal.style.display = "block";
  modalImg.style.width = "0px"
  modalImg.style.border = "none"
  captionText.innerHTML = '<video preload autoplay controls > <source src="videoer/Nyhetsreportasje-Aksel.mp4" type="video/mp4">Your browser does not support the video tag.</video><br>News report regarding Covid-19 and how it effects students<br>(Videos are a bit buggy)'
}

//Bilde 4
view7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "bilder/UIT-Poster-min.png";
  modalImg.style.width = "" //ghetto fix lmao
  modalImg.style.border = ""
  captionText.innerHTML = 'Poster for "Ung i trafikken" deathttrip campign'
} 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  document.querySelectorAll('video').forEach(vid => vid.pause()); //Pauser alle videoer
}

