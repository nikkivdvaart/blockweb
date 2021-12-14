// JavaScript Document
var button = document.querySelector(".textButton")
button.addEventListener("click", toggleText)

var eersteSpan = document.querySelector(".showLess")
var showMore = document.querySelector(".moreText")
var toggle = false

function toggleText() {
    console.log(showMore.children)

    if (toggle) {
        showMore.classList.add("hideText")
        showMore.classList.remove("showText")
        eersteSpan.textContent = "..."
        button.textContent = "Show More"
    } else {
        showMore.classList.add("showText")
        showMore.classList.remove("hideText")
        // showMore.style.display = "block"
        eersteSpan.textContent = "Bieber)"
        button.textContent = "Show Less"
    }
    toggle = !toggle
}

    // if (showMore.style.opacity === 'none') {
    //     showMore.style.display = 'block'
    // } else {
    //     showMore.style.display = 'none'



