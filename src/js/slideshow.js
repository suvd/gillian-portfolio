import { TweenLite, TimelineLite } from 'gsap';

var Slideshow = (function () {
    'use strict'

    var slides = document.querySelectorAll('.product-slider__slide'),
        tl = new TimelineLite({ paused: true }),
        productslider = document.getElementById('product-container');
    
    // TweenLite.set('body', { perspective: 700 });

    init()

    function init () {
        
        if (productslider) {
            for (var i = 0; i < slides.length; i++) {
                // make dots
                var D = document.createElement('div');
                D.className = 'Dot';
                D.id = 'Dot' + i;

                // change dots
                D.addEventListener('click', function () {
                    console.log(this.id)
                    tl.seek(this.id).pause()
                });

                //
                document.getElementById('Dots').appendChild(D);
                if (i != 5) { tl.addPause('Dot' + i) };
                
                if (i != slides.length - 1) {
                    tl.to(slides[i], { duration: 0.5, scale: .8, ease: "power1.inOut" })
                        .to(slides[i], { duration: 0.7, xPercent: -100, rotationY: 80 }, 'L' + i)
                        .from(slides[i + 1], { duration: 0.7, xPercent: 100, rotationY: -80 }, 'L' + i)
                        .to('#Dot' + i, { duration: 0.7, backgroundColor: 'rgba(255,255,255,0.2)' }, 'L' + i)
                        .from(slides[i + 1], { duration: 0.5, scale: .8, ease: "power1.inOut" })
                };
            };

            document.getElementById('nextBtn').addEventListener("click", () => GO(-1));
            document.getElementById('prevtBtn').addEventListener("click", () => GO(1));
        }
        
    }

            
    function GO (e) {
        console.log('GO')
        console.log(e)
        var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
        console.log(SD)
        if (SD < 0) { tl.play() } else { tl.reverse() };
    };

    return {
        init: init
    }

}())