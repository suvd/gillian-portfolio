<template>
      <vue-particles
        color="#323fab"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#323fab"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

export default {
//     mounted: function () {
//         this.$confetti.start({
//             shape: 'heart',
//             colors: ['DodgerBlue', 'OliveDrab', 'Gold', 'pink', 'SlateBlue', 'lightblue', 'Violet', 'PaleGreen', 'SteelBlue', 'SandyBrown', 'Chocolate', 'Crimson']
//         })
//         setTimeout(() => {
//             this.$confetti.stop()
//         }, 4000)
//     },
//     methods: {}
}
</script>
