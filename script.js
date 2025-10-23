const ekran = document.getElementById("Netice");

function Elaveet(value){
    ekran.innerHTML+=value;
}

function Cfunction(){
    ekran.innerHTML="";
}


function reqemsilme(){
    ekran.innerHTML=ekran.innerHTML.slice(0,-1)
}


function hesabla(){

    //evaldan istifade etdim W3 schools ve chat-in yardimi ile
    ekran.innerHTML = eval(ekran.innerText);
}


const buttons= document.getElementsByClassName("row")

const mod = document.getElementById("changemode");

let darkmode = false;

function changemode() {
    darkmode = !darkmode;

    if(darkmode){
        document.body.style.background = "#121212";
        document.body.style.color = "white";
        mod.innerHTML ="Light Mode"
        mod.style.background ="white"
        mod.style.color ="black"
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        mod.innerHTML="Dark mode"
        mod.style.background = "black"
        mod.style.color="white"
    }
}
