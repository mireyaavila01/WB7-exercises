"use strict"

console.log("users")

const apiBaseUrl = "https://jsonplaceholder.typicode.com/users/"

window.onload = function (){
    const getResultsButton = document.getElementById("getResultsButton")
    getResultsButton.onclick = onGetResultsButtonClick;

};

function onGetResultsButtonClick(){
    console.log("clicked")

    const userIdInput = document.getElementById("userIdInput");
    const userDataBody = document.getElementById("userData");

    userDataBody.innerHTML = "";

    let actualUrl = apiBaseUrl + userIdInput.value;

    console.log("Url: " + actualUrl);

fetch(actualUrl)
 .then(response => response.json())
 .then(data => {
 
 let row = userDataBody.insertRow(-1);
 let cell1 = row.insertCell(0);
 let cell2 = row.insertCell(1);
 let cell3 = row.insertCell(2);
 let cell4 = row.insertCell(3);
 let cell5 = row.insertCell(4);
 let cell6 = row.insertCell(5);
 cell1.innerHTML = data.name;
 cell2.innerHTML = data.email;
 cell3.innerHTML = data.username;
 cell4.innerHTML = data.phone;
 cell5.innerHTML = data.website;
 cell6.innerHTML = data.company.bs;

 });
}