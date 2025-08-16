//HERO
const miniSolaresFigureEl = document.getElementById("mini-solares-figure")

//ABOUT
const skillPopups = document.querySelectorAll(".skill-popup")
const skillPopupsBtn = document.querySelectorAll('.skill-button')
const skillPopupsExitBtn = document.querySelectorAll(".popup-exit-button")

//PORTFOLIO
const portImages = document.querySelectorAll(".portfolio-image")
const featuredHud = document.querySelector(".featured-hud")
const featuredImage = document.querySelector(".featured-image")
const featuredBg = document.querySelector(".featured-bg")



//HERO
window.addEventListener("scroll", e => {
    if (window.pageYOffset > 50) {
        miniSolaresFigureEl.setAttribute("src", "/src/assets/img/mini_solares_looking_bottom.png")
    }
    else {
        miniSolaresFigureEl.setAttribute("src", "/src/assets/img/mini_solares_looking_front.png")
    }
})

//ABOUT
skillPopupsBtn.forEach ((button, index) => {
    button.addEventListener('click', event => {
        skillPopups.forEach(popup => {popup.classList.add('disabled')})
        skillPopups[index].classList.remove('disabled')
    })
})
skillPopupsExitBtn.forEach ((button, index) => {
    button.addEventListener('click', event => {
        skillPopups[index].classList.add('disabled')
    })
})

//PORTFOLIO
//Mostrar imagem
portImages.forEach (portImage => {
    portImage.addEventListener('click', event => {
        const imgSrc = portImage.querySelector('img').src   
        featuredImage.src = imgSrc
        featuredHud.classList.remove("disabled")
    })
})

//Fechar imagem
featuredBg.addEventListener('click', event => {
    featuredHud.classList.add("disabled")
})