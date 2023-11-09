// MOBILE NAVBAR MENU
const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

// OPEN MENU
if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.add("active");
    });
}

// CLOSE MENU
if (close) {
    close.addEventListener("click", () => {
        menu.classList.remove("active");
    });
}
