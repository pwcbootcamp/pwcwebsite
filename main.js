let darkMode = document.querySelector("#dark-mode");

const switchMode = () => {
    if (document.querySelector("header").style.background != "black") {
        document.querySelector("header").style.background = "black";
    //document.querySelectorAll("#nav a").style.color = "white";
    for (i=0;i<document.querySelectorAll("#nav a").length;i++) {
        document.querySelectorAll("#nav a")[i].style.color = "white"; 
    }
    document.querySelector("h3").style.color = "white";
    document.querySelector("body").style.background = "black"
    } else {
        document.querySelector("header").style.background = "#f4f4f4";
    //document.querySelectorAll("#nav a").style.color = "white";
    for (i=0;i<document.querySelectorAll("#nav a").length;i++) {
        document.querySelectorAll("#nav a")[i].style.color = "black"; 
    }
    document.querySelector("h3").style.color = "black";
    document.querySelector("body").style.background = "#cecece"
    }
    
}

darkMode.addEventListener("click", switchMode);