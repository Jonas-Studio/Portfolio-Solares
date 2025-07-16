const miniSolaresFigureEl = document.getElementById("mini-solares-figure")

window.addEventListener("scroll", e => {
    if (window.pageYOffset > 200) {
        miniSolaresFigureEl.setAttribute("src", "/src/assets/img/mini_solares_looking_bottom.png")
    }
    if (window.pageYOffset < 200) {
        miniSolaresFigureEl.setAttribute("src", "/src/assets/img/mini_solares_looking_front.png")
    }
})
