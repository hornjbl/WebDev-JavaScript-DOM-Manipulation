let myVar = document.querySelectorAll(".list-items");

console.log(myVar);

for (i = 0; i < myVar.length; i++) {
    console.log(myVar[i]);
    myVar[i].style.color = "red";
}
