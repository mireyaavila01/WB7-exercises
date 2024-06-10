"use strict"

//this was part of exercise in wb8 pg.31

const addBtn = document.getElementById("addBtn");


window.onload = function (){
    addBtn.onclick = onAddBtn;

}

function onAddBtn(){

let bodyData = {
    userId: document.getElementById("userIdInput").value,
    title: document.getElementById("titleInput").value,
    completed: document.getElementById("completedInput").value,
}

let messagePara = document.getElementById("messagePara");

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type":
                  "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        let message = "INFORMATION ADDED , NEWID: " + json.id;
        messagePara.innerHTML = message;
    })
    .catch(err => {
        messagePara.innerHTML = "Unexpected Error";
    });


}