"use strict"

console.log("todo")

const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/"

window.onload = function (){
    const getResultsButton = document.getElementById("getResultsButton")
    getResultsButton.onclick = onGetResultsButtonClick;

};

function onGetResultsButtonClick(){
    console.log("clicked")

    const idInput = document.getElementById("idInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + idInput.value;

    console.log("Url: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then ( data => {
        console.log(data);

        let p = document.createElement("p");
        p.innerHTML = JSON.stringify(data)

        resultsOutput.appendChild(p);

    })

}