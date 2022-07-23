let all = document.querySelector("#all");
let locations = document.querySelector("#locations");
let projects = document.querySelector("#projects");
let random = document.querySelector("#random");

locations.addEventListener("click", (e) => {
    let allObj = document.querySelectorAll(".gallery-image");
    let locationsObj = document.querySelectorAll(".pwc");
    for (i=0;i<allObj.length;i++) {
        allObj[i].style.display = "none";
    }

    for (i=0;i<locationsObj.length;i++) {
        locationsObj[i].style.display = "inline-block";
    }
})
all.addEventListener("click", (e) => {
    let allObj = document.querySelectorAll(".gallery-image");
    let locationsObj = document.querySelectorAll(".pwc");
    for (i=0;i<allObj.length;i++) {
        allObj[i].style.display = "inline-block";
    }
})

projects.addEventListener("click", (e) => {
    console.log("workas")
    let allObj = document.querySelectorAll(".gallery-image");
    let projectsObj = document.querySelectorAll(".projects");
    for (i=0;i<allObj.length;i++) {
        allObj[i].style.display = "none";
    }

    for (i=0;i<projectsObj.length;i++) {
        projectsObj[i].style.display = "inline-block";
    }
})

random.addEventListener("click", (e) => {
    console.log("workas")
    let allObj = document.querySelectorAll(".gallery-image");
    let randomObj = document.querySelectorAll(".Random");
    for (i=0;i<allObj.length;i++) {
        allObj[i].style.display = "none";
    }

    for (i=0;i<randomObj.length;i++) {
        randomObj[i].style.display = "inline-block";
    }
})