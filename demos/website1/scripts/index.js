"use strict"

const hello = document.getElementById("hwllo");
const apiUrlListCategories = "https://www.themealdb.com/api/json/v1/1/categories.php"
const apiUrlMealsInCategoryBase = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

const categoriesRow = document.getElementById("categoriesRow");


window.onload = function(){

    fetch(apiUrlListCategories)
    .then( response => response.json())
    .then( data => {
        console.log(data);
        for(let category of data.categories){
            createCategoryDiv(category);
        }
    });
}

function createCategoryDiv(category){

    let div = document.createElement("div");
    div.className = "col"
    categoriesRow.appendChild(div);

    let a = document.createElement("a");
    a.href = "mealsInCategory.html?category=" + category.strCategory;
    a.innerHTML = category.strCategory;

    div.appendChild(a);




    console.log(category.strCategory);
}