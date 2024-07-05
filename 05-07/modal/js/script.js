const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")

//exemplo de includes
const classListArray = ["teste", "oi"]
console.log(classListArray.includes("teste"))

button.addEventListener("click", function() {
    popup.classList.add("d-block")
})

popup.addEventListener("click", function(event) {
    const classListClick = event.target.classList[0]
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"]

    const junção = (classNameArray.includes(classListClick))

    if (junção) {
        popup.classList.remove("d-block")
    }
})

// http://127.0.0.1:5500/modal.html#
