const nav = document.getElementById("navbar")
const logo = document.querySelector("#imgLogo")
const contactForm = document.querySelector("#formContact")
const inpName = document.querySelector("#inpName")

/*if (window.innerWidth >= 500 && window.innerHeight >= 812) {
    navbar.onmouseover = () => {
        logo.style.width = "140px" 
        logo.style.height = "140px" 
    }
}

if (window.innerWidth >= 500 && window.innerHeight >= 812) {
    navbar.onmouseleave = () => {
        logo.style.width = "120px" 
        logo.style.height = "120px" 
    }
} */
 
function show() {
    contactForm.style.transform ="translateY(-620px)"
    contactForm.style.opacity = "1"
}

function hide() {
    contactForm.style.transform ="translateY(+220px)"
    contactForm.style.opacity = "0"
}

function redirect() {
    window.location.href = "about.html"
}

function redirectContact() {
    window.location.href = "contactMe.html"
}

function home() {
    window.location.href = "index.html"
}

function openNav() {
    nav.style.height = "240px";
    document.getElementById("mySidebar").style.height = "240px";
    document.getElementById("main").style.marginTop = "0";
  }
  
  function closeNav() {
    nav.style.height = "60px";
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("main").style.marginTop= "0";
  }



