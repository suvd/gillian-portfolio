/* eslint-disable no-unused-vars */
import styles from '../css/main.scss'
import jQuery from 'jquery'
import 'core-js/es/array/iterator'

//
// ASSETS IMPORT
//
// import supermachineLogo from '../img/supermachine-logo.png'

//
// COMPONENTS
//
// import Navigation from './navigation.js'

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
    // if (document.getElementById('supermachine-logo').src) document.getElementById('supermachine-logo').src = supermachineLogo
})
