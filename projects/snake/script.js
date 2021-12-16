var tastekode
var totalScore = 0
var interval = 0
var speed = 3 //0.5
var musikk = document.getElementById("musikk")
var x = document.getElementById('ormDiv').offsetLeft
var y = document.getElementById('ormDiv').offsetTop
window.onkeypress = hentTastetrykk; //onkeypress lytter på tastaturet. Når man trykker kjøres funksjonen hentTastetrykk
//*Container er 1000px bred, 630px høy.

//resetter spillet
function reset() {
    clearTimeout(my_time);  //Stopper timern til cordinates
    clearTimeout(my_time2)
    clearInterval(interval) //Stopper intervalen som flytter slangen
    document.getElementById("gameOver").style.opacity = 0 //Viser game over skjerm
    document.getElementById("poengScore").style.opacity = 0
    document.getElementById("btnReset").style.opacity = 0
    totalScore = 0
    speed = 3
    document.getElementById("poeng").innerHTML = 0
    x = 12
    y = 12
    document.getElementById("ormDiv").style.left = "12px"
    document.getElementById("ormDiv").style.top = "12px"
    document.getElementById("sirkelDiv").style.left = "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
    document.getElementById("sirkelDiv").style.top =  "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
    document.getElementById('stopButton').onclick = function() {
        var sounds = document.getElementsByTagName('audio');
        for(i=0; i<sounds.length; i++) sounds[i].pause();
      };
}

//Logger kordinatene til eplet
function cordinates(){
    var y=document.getElementById('ormDiv').offsetTop //Henter offsetTop poisjonen til slangen
    var x=document.getElementById('ormDiv').offsetLeft //Henter offsetLeft posisjonen til slangen
    document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y //Skriver ut kordinatene i en div
    my_time=setTimeout('cordinates()',10); //Dette gjør at de oppdaterer seg constantly
} 

function hentTastetrykk(e){
tastekode = e.charCode;
musikk.play()
musikk.volume = 0.1

//*! setInterval(100) gjør at det lagger, men når det bare er 1 eller 10 så vil slangen gå saktere jo fler ganger jeg trykker på WASD */
   //D
   if(tastekode == 100){
        clearInterval(interval) //Stopper intervalen som flytter slangen //!clearInterval er grunnen til at slangen går saktere jo fler ganger jeg trykker
        interval = setInterval(flyttOrmHoyre,20/*100*/) //Starter en ny interval, som i dette tilfelle går til høyre. 
    } 

   //A
   if(tastekode == 97){
      clearInterval(interval) //Stopper intervalen som flytter slangen
      interval = setInterval(flyttOrmVenstre,20) //Starter en ny interval
    } 

   //W 
   if(tastekode == 119){
       clearInterval(interval) //Stopper intervalen som flytter slangen
       interval = setInterval(flyttOrmOpp,20) //Starter en ny interval
    } 

   //S
   if(tastekode == 115){
       clearInterval(interval) //Stopper intervalen som flytter slangen
       interval = setInterval(flyttOrmNed,20) //Starter en ny interval
    }
    cordinates() //Kaller cordinates funksjonen
    detectCollision(e) //Kaller detectColiison funksjonen
}

function flyttOrmVenstre(){
    document.getElementById("ormDiv").style.left=x+"px"; //Flytter slangen til venstre med x pixler
    x=x-speed;
    document.getElementById("sirkelDiv").style.left = "-18px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
    document.getElementById("sirkelDiv").style.top =  "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
    //document.getElementById("tungeDiv").style.left =  "-10px" //Tunge for senere
}
 
function flyttOrmHoyre(){
    document.getElementById("ormDiv").style.left=x+"px"; //Flytter slangen til høyre med x pixler
    x=x+speed;
    document.getElementById("sirkelDiv").style.left = "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
    document.getElementById("sirkelDiv").style.top =  "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
}

function flyttOrmOpp(){
    document.getElementById("ormDiv").style.top=y+"px"; //Flytter slangen oppover med x pixler
    y=y-speed;
    //document.getElementById("sirkelDiv").style.left = "0px"
    document.getElementById("sirkelDiv").style.top =  "0px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
}

function flyttOrmNed(){
    document.getElementById("ormDiv").style.top=y+"px"; //Flytter slangen nedover med x pixler
    y=y+speed;
    //document.getElementById("sirkelDiv").style.right = "20px"
    document.getElementById("sirkelDiv").style.top =  "20px" //Bytter posisjonen til øyet for at det skal se ut som slangen endrer retning
}

function score() {
	totalScore += 1; //Legger til 1 i totalScore
	console.log("score:", totalScore); //Skriver ut til console
    poeng.innerHTML = totalScore //Skriver ut til diven
}

function addLength(e) {
    tastekode = e.charCode;
   //Legg til en del på slangen
   const snake = document.getElementById("ormDiv")
}

function changeSpeed() {

    //Endre farte
    if (totalScore > 2) {
        speed = 4
    }
    if (totalScore > 5) {
        speed = 5
    }
    if (totalScore > 8) {
        speed = 6
    }
    if (totalScore > 11) {
        speed = 7
    } 
    if (totalScore > 14) {
        speed = 8
    } 
    if (totalScore > 17) {
        speed = 9
    } 
    if (totalScore > 20) {
        speed = 10
    } 
    console.log("speed: ", speed) 

    //Legg til fler bomber
}

function detectCollision(e) {
    //Her skal jeg sjekke om slangen treffer eple eller bomben
    var collision = false

    //Eple Kordinater
    var epleX = document.getElementById("imgEple").offsetLeft 
    var epleY = document.getElementById("imgEple").offsetTop

    //Bombe kordinater
    var bombeX = document.getElementById("imgBombe").offsetLeft
    var bombeY = document.getElementById("imgBombe").offsetTop

    //Slange 
    const snake = document.getElementById("ormDiv")

    var epleSound = document.getElementById("appleCrunch")
    //Hvis slange treffer eple
    if (epleX-20 < x && epleX+20 > x && epleY-20 < y && epleY+20 > y) { //Hvis slangen er i nærheten av eplet
        imgEple.style.opacity = 0 //Gjemmer eplet
        collision = true; //Setter collision til true
        epleSound.play() //Spiller en lyd
    }

    var bombeSound = document.getElementById("bombe")
    //Hvis slange treffer bombe
    if (bombeX-20 < x && bombeX+20 > x && bombeY-20 < y && bombeY+20 > y) { //Hvis slangen er i nærheten av bomben
        //bombe.play() //Spiller lyd
        musikk.pause()
        document.getElementById("gameOver").style.opacity = 1 //Viser game over skjerm
        document.getElementById("poengScore").innerHTML = "GAME OVER <br> POENG: " + totalScore
        document.getElementById("poengScore").style.opacity = 1
        //document.getElementById("btnReset").style.opacity = 1
        clearInterval(interval) //Stopper intervalen som flytter slangen
        document.getElementById("ormDiv").style.left = "12px"
        document.getElementById("ormDiv").style.top = "12px"
        //totalScore = 0; //Setter poeng til 0
    }

    //Nytt eple
    if (collision == true) { //Hvis collison er sant
        tegnEple() //Tegn nytt eple
        imgEple.style.opacity = 1; //Vis eple
        score() //Kjør score funksjon 
        changeSpeed() //Kjør changeSpeed funksjon
        //addLength(e)
    }

    //End of container (stopper slangen dersom den kommer over verdien gitt)
    if (x>960) {
        x = 960
    }
    if (y>585) {
        y = 585
    }
    if (x<12) {
        x = 12
    }
    if (y<12) {
        y = 12
    }

    my_time2=setTimeout('detectCollision()',10); //Kaller funksjonen hvert 10ms. Dette holder kordinatene oppdatert
}




tegnEple() //Kaller funksjonen
function tegnEple() { //Funksjon som tegner eple en random plass mellom 600y og 980x
    var k = Math.floor(Math.random() * 980) + 1; //Random verdi opp til 980
    var j = Math.floor(Math.random() * 600) + 1; //Random verdi opp til 600
    document.getElementById("imgEple").style.left = k+"px"; //Setter eples posisjon fra venstre
    document.getElementById("imgEple").style.top = j+"px";  //Setter eples posisjon fra toppen
  //  console.log("Eple: ", "x:" + k, "y:" + j) //Skriver ut kordinatene i console.log
}
 
tegnBombe() //Samme som over^^ men med bomben istedet
function tegnBombe() {
    var k = Math.floor(Math.random() * 980) + 1;
    var j = Math.floor(Math.random() * 600) + 1;
    document.getElementById("imgBombe").style.left = k+"px";
    document.getElementById("imgBombe").style.top = j+"px"; 
    console.log("Bombe:", "x:" + k, "y:" + j)
}
