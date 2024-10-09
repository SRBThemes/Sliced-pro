// property details page

    var swiper = new Swiper(".property-swiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            autoplay: 5000,
            speed: 800,
        },
        mousewheel: true,
        keyboard: true,
    });