var About = (function () {
    'use strict'

    let aboutButton = document.getElementById('about-button');
    let closeButton = document.getElementById('about-close-button');
    let about = document.getElementById('about');
    let productsliderContent = document.querySelectorAll('.product-slider__bottom');

    init()

    function init () {
        aboutButton.addEventListener("click", function (e) {
            e.preventDefault();
            about.classList.add("visible");
            productsliderContent.classList.add("hide");
        });
        closeButton.addEventListener("click", function (e) {
            e.preventDefault();
            about.classList.remove("visible");
            productsliderContent.classList.remove("hide");
        });
    }

    // function handleAccept () {

    // }

    return {
        init: init
    }

}())