"use strict"

console.log("mealsincategory")

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

window.onload = function (){
    const getResultsButton = document.getElementById("getResultsButton")
    getResultsButton.onclick = onGetResultsButtonClick;

};

function onGetResultsButtonClick(){

    console.log("clicked")

    const categoryInput = document.getElementById("categoryInput");
    const resultsOutput  = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log("Url: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then( data => {
        console.log(data);
        
        for(let meal of data.meals){
            let p = document.createElement("p");
            p.innerHTML = meal.strMeal;

            resultsOutput.appendChild(p);
        }
    })

}