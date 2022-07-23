//get the DOM elements and assign them to variables

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const trackInput = document.querySelector("#track");
const otherTrackInput = document.querySelector("#other-track");
const msg = document.querySelector(".msg");
const detailsTable = document.querySelector("#submitted-details");



//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let trackSelected = trackInput.value;
    if (trackSelected.value === 'other') {
        trackSelected = otherTrackInput.value;
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${nameInput.value}</td>
        <td>${emailInput.value}</td>
        <td>${trackSelected}</td>
    `
    detailsTable.appendChild(tr);

    nameInput.value = "";
    emailInput.value = "";
    trackInput.value = "";
    otherTrackInput.value = "";
}


// function onSubmit(e) {
//     e.preventDefault();
//     userContainer.innerHTML = "";
//     if (nameInput.value === "" || emailInput.value === "") {
//         msg.classList.add("error");
//         msg.innerHTML = "Please enter your name and email";
//         setTimeout(() => msg.remove(), 5000);
//     } else {
//         msg.classList.add("success");
//         msg.innerHTML = "User added successfully!"
//         setTimeout(() => msg.remove(), 5000);
//         // const li = document.createElement("li");
//         userContainer.classList.add('users-style')
//         userContainer.innerHTML = `
//             <h2>Saved Details</h2>
//             <p><b>Name</b>: ${nameInput.value}</p>
//             <p><b>Email</b>: ${emailInput.value}</p>
//         `
//         setTimeout(() => userContainer.remove(), 5000);
//         nameInput.value = "";
//         emailInput.value = "";
//     }
            

// }