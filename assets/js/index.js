const languageButtons = document.querySelectorAll(".language");

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        languageButtons.forEach((button) => {
            button.classList.toggle("active");
        });

    });
});

const download = document.querySelectorAll(".download");

download.forEach( (button)=> {
    button.addEventListener("click", () => {
        let fileUrl = "assets/downFIle.pdf"
        let link = document.createElement("a");

        link.setAttribute("href", fileUrl);
        link.setAttribute("download", "downFile.pdf");

        link.style.display = "none";

        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    });
});


var menu = ['Грохоты', 'Флотомашины', 'Дробилки', 'Цинтрифуги'];
var swiper1 = new Swiper(".image-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    autoplay: {
        delay: 2500, disableOnInteraction: false,
    },

    //pagination: {
    //    el: '.swiper-pagination',
    //    clickable: true,
    //    renderBullet: function (index, className) {
    //        return `<div class=${className}><span>${menu[index]}</span></div>`;
    //    },
    //},
});

var swiper2 = new Swiper(".text-slider", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
    slideToClickedSlide: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;

var textSlides = document.querySelectorAll('.swiper__item');

textSlides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
        swiper1.slideTo(index);
    });
});



