const ul = document.querySelector("ul");

let li = document.createElement("li");
li.className = "list-items";
li.textContent = "Text Content";

li.innerHTML = "Inner HTML";

li.innerText = "Inner Text";

ul.append(li);

let allLi = document.querySelectorAll(".list-items");

for (i = 0; i < allLi.length; i++) {
    console.log(allLi[i]);
    if (i == 4) {
        allLi[i].className = "list-item-new";
        allLi[i].setAttribute("id", "marvel-li");
        // allLi[i].removeAttribute("id");
        console.log(allLi[i].getAttribute("id"));
        allLi[i].classList.add("li-special");
    }
}
