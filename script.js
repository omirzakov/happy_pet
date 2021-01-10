const button = document.querySelector(".button");

button.addEventListener("click", function() {
    button.classList.add("button-clicked");

    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 1000);
})