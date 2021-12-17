function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function check() {
  elements = document.getElementsByClassName("codeShowcase");
  for (var i = 0; i < elements.length; i++) {
      if (elements[i].style.color = "#b5e853") {
        elements[i].color = "#666"
      }
      else if (elements[i].style.color = "#666"){
        elements[i].color="#b5e853";
      } 
  }
}



/*function imgEnlarge(e){

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

  }
} */