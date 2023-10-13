// let clickButton = document.getElementsByClassName("click");
// let clickButton = document.querySelector(".click");
const clickButton = document.getElementById("click");
const hiddenContent = document.querySelector(".hidden-content");

hiddenContent.style.display = "none";

function revealContent() {
    if (hiddenContent.style.display == "none") {
        hiddenContent.style.display = "unset";
    } else {
        hiddenContent.style.display = "none";
    }
}

clickButton.addEventListener("click", revealContent);

// if (hiddenContent())
