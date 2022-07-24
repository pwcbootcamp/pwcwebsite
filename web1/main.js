// const checkBox = document.querySelector("#email")
// const python = document.querySelector("#python")
// const datascience = document.querySelector("#datascience")
// const javascript = document.querySelector("#javascript")
// const c = document.querySelector("#c")
// const agile = document.querySelector("#agile")
// const design = document.querySelector("#design")

// console.log(courses)


// const msg = document.querySelector(".msg")
// const userList = document.querySelector("#users")

// let btn = document.querySelector(".btn")
// inputName.addEventListener("onclick", (e) => {
//     document.querySelector(".container").append(inputName.value)
// })



const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", toggleDarkMode)
function toggleDarkMode() {
    if (darkMode.innerHTML === '<img src="dark.png">') {
      darkMode.innerHTML = '<img src="sun.png">';
     document.querySelector("header").classList.add("darkMode")
     document.querySelector("body").classList.add("darkMode")
     document.querySelector("footer").classList.add("darkMode")
     document.querySelector("#my-form").style.background = "black"
    } else {
      darkMode.innerHTML = '<img src="dark.png">';
      document.querySelector("header").classList.remove("darkMode")
      document.querySelector("body").classList.remove("darkMode")
      document.querySelector("footer").classList.remove("darkMode")
      document.querySelector("#my-form").style.background = "#F4F4F4"
    }
  }
const myForm = document.querySelector("#my-form")
const firstname = document.querySelector("#firstname")
console.log(myForm)
const lastname = document.querySelector("#lastname")
const age = document.querySelector("#age")

myForm.addEventListener("submit", onSubmit);
const msg = document.querySelector(".msg")
function onSubmit(e) {
    e.preventDefault()
    let values = []
    const gender = document.querySelector('input[name="gender"]:checked')
    const state =  document.getElementById("state")
    const selectedState = state.options[state.selectedIndex]
    const trackList = document.querySelector("#tracks")
    const courses = document.querySelectorAll('input[name="courses"]:checked')
    courses.forEach((checkbox) => {
        values.push(checkbox.value)
    })
    if (values.length === 0 || gender.value === "" || selectedState.value === "") {
        msg.classList.add("error");
        msg.classList.innerHTML = "Please select a track!"
        setTimeout(() => msg.remove(), 3000)
    } else { 
        const li = document.createElement("li")     
        console.log(gender)
        console.log(selectedState)
        console.log(trackList)
        li.appendChild(
            document.createTextNode(`${firstname.value} ${lastname.value}, A ${age.value} year old ${gender.value} from ${selectedState.value}
             chose ${values.join(", ")} to study`)
        )
        trackList.appendChild(li)
        firstname.value = ""
        lastname.value = ""
        age.value = ""
        gender.value = ""
        // selectedState.value = ""
        // values = []

    }
}

// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }


