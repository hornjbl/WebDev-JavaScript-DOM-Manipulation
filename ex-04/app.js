// Parent node traversal
let ul = document.querySelector("ul");

console.log(ul);

let ulParent = ul.parentNode;

console.log(ulParent);

// You can chain them together to traverse up more than just one level:
console.log(document.querySelector(".first-list-item").parentElement.parentElement);

const html = document.querySelector("html");
console.log(html);

// Child node traversals

console.log(html.childElementCount);

// let htmlChildren = html.childNodes;
let htmlChildren = html.children;
console.log("html's last child is: " + html.lastChild);
console.log("HTML's first child is: " + html.firstChild);

console.log("These are the HTML child elements:");
for (let i = 0; i < htmlChildren.length; i++) {
    console.log(htmlChildren[i]);
}

html.children[1].style.backgroundColor = "red";

// Sibling node traversal
let thirdLi = ul.children[2];
console.log("Third LI:");
console.log(thirdLi);
console.log("Previous Siblings:");
console.log(thirdLi.previousSibling);
console.log(thirdLi.previousElementSibling);
console.log(thirdLi.nextSibling);
console.log(thirdLi.nextElementSibling);
