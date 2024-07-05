let rangeValue = document.querySelector("#rangeValue")
let range = document.querySelector("#range")

range.addEventListener("input", function() {
    rangeValue.textContent = range.value
})