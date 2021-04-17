/* eslint-disable no-unused-vars */
import styles from '../css/main.scss'
import 'core-js/es/array/iterator'

// PLUGINS
import barba from '@barba/core';
import gsap from 'gsap';


//
// ASSETS IMPORT
//
// import supermachineLogo from '../img/supermachine-logo.png'

//
// COMPONENTS
//
import About from './about.js'

// App main
const main = async () => {
    // Import our CSS
    // const Styles = await import(/* webpackChunkName: "styles" */ '../css/app.css');
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue')
    // Create our vue instance
    // eslint-disable-next-line new-cap
    if (document.querySelector('.vue-container')) {
        const vm = new Vue.default({
            el: '.vue-container',
            components: {
                // 'Navigation': () => import(/* webpackChunkName: "navigation" */ '../vue/navigation.vue'),
            },
            data: {
            },
            methods: {
            },
            mounted () {
            }
        })
    }
}
// Execute async function
main().then((value) => {
    // START ABOUT
    
    // if (document.getElementById('supermachine-logo').src) document.getElementById('supermachine-logo').src = supermachineLogo
})

// PAGE LOAD DELAY
function delay (n) {
    n = n || 4000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    });
}

// BARBA
barba.init({
    sync: true,

    transitions: [{
        async leave (data) {
            const done = this.async();
            setTimeout(function(){
                transitionAnimation();
            }, 800);
            await delay(1500)
            done();
        },
        async enter () {
            // transition that will play concurrently to `leave`
        }
    }]
});

// TRANSITIONS

function transitionAnimation () {
    gsap.to(".overlay-slide", {
        duration: 1,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power1.inOut"
    })
    gsap.to(".overlay-slide", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power1.inOut",
        delay: 1
    })
}
