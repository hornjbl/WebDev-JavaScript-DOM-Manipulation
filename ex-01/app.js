// DOM Manipulation

// GetElementById()
let mainHeading = document.getElementById("main-heading");
console.log("Results for getElementById():");
console.log(mainHeading);

// GetElementByClassName()
let listItems = document.getElementsByClassName("list-items");
console.log("Results for getElementsByClassName():");
console.log(listItems);

// GetElementsByTagName()
let divItems = document.getElementsByTagName("div");
console.log("Results for getElementsByTagName():");
console.log(divItems);

// This retrieves the FIRST element that matches the given selector
// querySelector()
let firstListItem = document.querySelector(".list-items");
console.log("Results for querySelector():");
console.log(firstListItem);

// This retrieves ALL elements that matches the given selector
// querySelectorAll()
let allListItems = document.querySelectorAll(".list-items");
console.log("Results for querySelectorAll():");
console.log(allListItems);
