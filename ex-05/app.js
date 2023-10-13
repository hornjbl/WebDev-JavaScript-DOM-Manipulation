// let buttonTwo = document.querySelector("#click-me-02");
const buttonTwo = document.getElementById("click-me-02");
const buttonThree = document.getElementById("click-me-03");
console.log(buttonTwo);

function beenClicked() {
    alert("I've been clicked!!!");
}

function pointerEnter() {
    buttonThree.textContent = "...";
}

function pointerLeave() {
    buttonThree.textContent = "Click Me";
}

buttonTwo.addEventListener("click", beenClicked);
buttonThree.addEventListener("pointerenter", pointerEnter);
buttonThree.addEventListener("pointerleave", pointerLeave);
