function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Change color of text if detail active
function active(e){
 /* console.log(e.style.color);
  if (e.style.color == "rgb(102, 102, 102)") {
    e.style.color = "#b5e853"
  }
  else{
    e.style.color = "#666"
  }*/
  console.log("WIP")
} 


// Close details when click outside 
var details = [...document.querySelectorAll('details')];
document.addEventListener('click', function(e) {
  if (!details.some(f => f.contains(e.target))) {
    details.forEach(f => f.removeAttribute('open'));
  } else {
    details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
  }
})

function imgEnlarge(e){
  console.log("WIP")
/*
  if(e.style.width=="100%" || e.style.width=="" ){
      e.style.width="200%";
  }
  else{
      e.style.width="100%";
  }

  var imgLength = document.getElementsByTagName('img').length;

  for(var i = 0; i<imgLength; i++){
      if(document.getElementsByTagName('img')[i].id==  e.id){
          continue;
      }
      document.getElementsByTagName('img')[i].style.width="100%";

  } */
} 