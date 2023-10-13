# WebDev-JavaScript-DOM-Manipulation

freeCodeCamp course on Youtube (https://www.youtube.com/watch?v=5fb2aPlgoys)

## Placeholder

10:57 - Selecting Elements in the DOM

## Notes

-   Selecting Elements in the DOM (ex-01)
    -   Typically best to use document.querySelector() and document.querySelectorAll() as this uses CSS type selection of
-   Styling an Element (ex-02)
    -   Ex:
        ```js
        let myEl = document.querySelector("#element-id");
        myEl.style.color = "red";
        ```
-   Creating Elements (ex-03)
    -   Three ways:
        -   textContent
        -   innerHTML
        -   innerText
    -   innerHTML can have security issues.
