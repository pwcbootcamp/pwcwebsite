

const myForm = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const secondName = document.querySelector("#secondname");
const userAge = document.querySelector(".age");
const userState = document.querySelector("#state");
const userCourse = document.querySelectorAll("#courses");

const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

let ulElements = document.querySelector("input");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);


function onSubmit(e) {
  e.preventDefault();
  if (firstName.value === "" || secondName.value === "" || userAge.value ==="") {
    msg.classList.add("error");
    msg.innerHTML = "Please fill form";
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    li.appendChild(
     document.createTextNode(`Name: ${firstName.value} ${secondName.value}`)
    );

    li2.appendChild(
        document.createTextNode(`Age: ${userAge.value}`)
       );

       
    li3.appendChild(
        document.createTextNode(`State: ${userState.value}`)
       );

    li4.appendChild(
        document.createTextNode(`${userCourse.value}`)
       );
     
       let coursearr = [];
       for(let i=0; i<userCourse.length; i++){
        if (userCourse[i].checked)
        {
            coursearr.push(userCourse[i].value);
            
        }
       }

       
       
    userList.appendChild(li);
    userList.appendChild(li2);
    userList.appendChild(li3);
    userList.appendChild(li4);
    
    firstName.value = "";
    secondName.value = "";
    userAge.value ="";
    userState.value = "";
    userCourse.value ="";
    
  }
}