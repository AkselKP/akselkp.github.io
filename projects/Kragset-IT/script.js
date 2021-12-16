// Her skal jge endre fargen på meny knappene og få den til gå ned på siden til valgt avdeling
//Gå til sider
function logo() {
    window.location = "index.html#visuellProfil"
    document.getElementById("btnLogo").style.color = "#FF0000"
    document.getElementById("btnFonter").style.color = "#fff"
    document.getElementById("btnFarger").style.color = "#fff"

    //? Legg til sånn at når du blar og kommer til for eksempel logo så blir logo rød
}

//Gå til bilder
function farger() {
    window.location = "index.html#fargerOverskrift"
    document.getElementById("btnFarger").style.color = "#FF0000"
    document.getElementById("btnFonter").style.color = "#fff"
    document.getElementById("btnLogo").style.color = "#fff"
}

//Gå til videoer
function font() {
    window.location = "index.html#fontOverskrift"
    document.getElementById("btnFonter").style.color = "#FF0000"
    document.getElementById("btnLogo").style.color = "#fff"
    document.getElementById("btnFarger").style.color = "#fff"
}

function yes() {
    window.location = "index.html"
}

