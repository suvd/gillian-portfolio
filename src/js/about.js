var About = (function () {
    'use strict'

    let aboutButton = document.getElementById('about-button');
    // let closeButton = document.getElementById('about-close-button');
    let about = document.getElementById('about');
    let productsliderContent = document.querySelectorAll('.product-slider__container');
    let imagecontainer = document.querySelectorAll('.about__imagecontainer');
    
    init()

    function init () {
        console.log(imagecontainer)
        if (aboutButton) {
            aboutButton.addEventListener("click", function (e) {
                e.preventDefault();
                if (about.classList.contains("visible")) {
                    about.classList.remove("visible");
                    productsliderContent[0].classList.remove("hide");
                    imagecontainer[0].classList.remove("visible");
                    aboutButton.textContent = "about";
                } else {
                    about.classList.add("visible");
                    productsliderContent[0].classList.add("hide");
                    imagecontainer[0].classList.add("visible");
                    aboutButton.textContent = "close";
                }
            });
        }
        // if (closeButton) {
        //     closeButton.addEventListener("click", function (e) {
        //         e.preventDefault();
        //         about.classList.remove("visible");
        //         productsliderContent[0].classList.remove("hide");
        //         imagecontainer[0].classList.remove("visible");
        //     });
        // }
    }

    return {
        init: init
    }

}())