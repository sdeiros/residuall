const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });

    let currentIndex = 0;
const interval = 4000; // Altere o intervalo para a quantidade desejada de milissegundos (5 segundos neste exemplo).

function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
        currentIndex = 0; // Volte ao primeiro slide se chegar ao último.
    }
    sliderNav(currentIndex);
}

setInterval(nextSlide, interval);


