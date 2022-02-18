var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById("date").innerHTML = dateTime

function darkMode() {
  var elements = document.getElementsByClassName("lightMode")
  var diskIcon = document.getElementsByClassName("diskIcon")
  var cards = document.getElementsByClassName("card")
  
  document.getElementById("btnDark").style.borderBottom = "2px solid #FF7E21"
  document.getElementById("btnLight").style.borderBottom = "none"
  
  for(var i = elements.length - 1; i >= 0; --i)
  {
      elements[i].className = "darkMode"

      /*for(var i = 0; i < diskIcon.length; i++) {
        diskIcon[i].style.filter = "invert(1)"
      }
      for(var i = 0; i < cards.length; i++) {
        cards[i].style.outline = "none" // Delete or keep?
      } */
  }   
}

function lightMode() {
  var elements = document.getElementsByClassName("darkMode");
  var diskIcon = document.getElementsByClassName("diskIcon")
  var cards = document.getElementsByClassName("card")
  
  document.getElementById("btnLight").style.borderBottom = "2px solid #FF7E21"
  document.getElementById("btnDark").style.borderBottom = "none"

  for(var i = elements.length - 1; i >= 0; --i)
  {
      elements[i].className = "lightMode";

      /*for(var i = 0; i < diskIcon.length; i++) {
        diskIcon[i].style.filter = "invert(0)"
      }
      for(var i = 0; i < cards.length; i++) {
        cards[i].style.outline = "2px solid #ebebeb" // Delete or keep?
      } */
  }   
}

// Search bar
function searchBar() {
  var input = document.getElementById('searchbar').value
  var el = document.getElementById(input)

  if (input == "") {
    document.getElementById("searchErr").innerHTML = "No customer entered"
  }
  else if(!el){
      //element DOES NOT exist
      document.getElementById("searchErr").innerHTML = 'No records found for "' + input + '"'
  }
  if(el){
      //element DOES exists
      document.getElementById("searchErr").innerHTML = ""
      document.getElementById(input).scrollIntoView({behavior: "smooth"})
  }
  //document.getElementById(input).style.color = "red"
}

document.getElementById("btnTop").onclick = () => {
  window.scroll({top: 0, left: 0, behavior: "smooth"})
}
