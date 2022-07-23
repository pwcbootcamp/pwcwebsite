let myForm = document.querySelector("#my-form")
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("secondName");
let age = document.getElementById("age");
let msg = document.querySelector('.msg');
let table = document.querySelector(".tablesection");

const getSelectedGender = () => {
    let gender = document.querySelectorAll('input[name="gender"]');
    let selectedGender;
    for (i=0;i<gender.length;i++) {
        if (gender[i].checked) {
            selectedGender = gender[i];
        }
    }
    return selectedGender;
};

const getSelectedState = () => document.getElementById("state");

const getSelectedCourses = () => {
    let checkboxes = document.getElementsByClassName("courses");
    let checkedCourses = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           checkedCourses.push(checkboxes[i].value);
        }
     }
    return checkedCourses;
}

const onSubmit = (e) => {
    e.preventDefault();
    if (firstName.value === "" || lastName.value == "" || !age.value || getSelectedGender() == undefined || getSelectedState() == undefined || getSelectedCourses().length == 0) {
        msg.classList.add("error")
        msg.innerHTML = "Please enter your name and email";
        setTimeout(() => msg.remove(), 5000);
    } else {
    // document.getElementById("data").innerHTML = `
    // <p>Name: ${firstName.value} ${lastName.value}</p><p>Age: ${age.value}</p><p>Gender: ${getSelectedGender().value}</p><p>State: ${getSelectedState().value}</p><p>Courses: ${getSelectedCourses().join(", ")}</p>
    // `
        console.log(firstName.value, lastName.value, age.value, getSelectedGender().value, getSelectedState().value, getSelectedCourses().join(", "));
        table.innerHTML = `<table class="tableform">
        <thead>
          <tr>
              <th>First name</th>
              <th>Second name</th>
              <th>Age</th>
              <th>State</th>
              <th>Gender</th>
              <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${age.value}</td>
            <td>${getSelectedState().value}</td>
            <td>${getSelectedGender().value}</td>
            <td>
                <p>${getSelectedCourses().join("</p><p>")}</p>
            </td>
          </tr>
        </tbody>
      </table>`
        
    }
    
}

myForm.addEventListener("submit", onSubmit)