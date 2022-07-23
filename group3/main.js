const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const state = document.querySelector("#state");
const course = document.querySelector("#courses");
const userTable = document.querySelector("#customers");
const gen = document.querySelector('input[name="gender"]:checked');

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked');
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    age.value === "" ||
    gender == null
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 5000);
  } else {
    document.getElementById("customers").style.display = "";
    coursesArray = [];
    const courses = document.querySelectorAll(".courses");
    console.log(courses)
    for (var i = 0; i < courses.length; i++) {
      if (courses[i].checked === true) {
        coursesArray.push(courses[i].name);
      }
    }
    const genderValue = gender.value;
    const stateValue = state.options[state.selectedIndex].value;
    var row = userTable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = firstName.value;
    cell2.innerHTML = lastName.value;
    cell3.innerHTML = age.value;
    cell4.innerHTML = stateValue;
    cell5.innerHTML = genderValue;
    cell6.innerHTML = coursesArray;
    firstName.value = "";
    lastName.value = "";
    age.value = "";
  }
}
