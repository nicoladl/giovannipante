<template>
  <svg class="back-to-top nomobile outline" x="0px" y="0px" viewBox="0 0 63 61.5" @click="backToTop">
    <g>
      <path
        d="M3.5,22.5v9.9l13-9.9c4.3-3.2,8-6.1,10.9-8.5v44.7h8.2V14c3,2.4,6.7,5.3,11.1,8.5l13,9.9v-9.9L31.6,1.2L3.5,22.5z"
      />
    </g>
  </svg>
</template>

<script>
import TweenMax from 'gsap'
import { easeInOut } from '../assets/js/tween'

export default {
  methods: {
    backToTop: () => {
      TweenMax.to('.js-scroller', 2, { y: 0, ease: easeInOut })
    }
  }
}
</script>
