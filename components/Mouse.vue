<template>
  <div class="mouse">
    <svg class="mouse__item" x="0px" y="0px" viewBox="0 0 43 61.5">
      <style type="text/css">
        .st0 {
          fill: #ff5025;
        }
      </style>
      <g>
        <path
          class="st0"
          d="M1.5,25.6v1.9l9.1-6.9c0.4-0.3,3.6-2.8,9.7-7.5v37.7h1.5V13.1c2.8,2.1,6,4.7,9.7,7.5l9.1,6.9v-1.9L21,10.7
		L1.5,25.6z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import TweenMax from 'gsap'
import { easeInOut } from '../assets/js/tween'

export default {
  mounted() {
    const mouse = document.querySelectorAll('.mouse__item')
    const hover = document.querySelectorAll('.outline')
    hover.forEach(element => {
      element.addEventListener('mouseenter', () => {
        TweenMax.to(mouse, 0.4, { rotation: 45, ease: easeInOut })
      })
      element.addEventListener('mouseleave', () => {
        TweenMax.to(mouse, 0.4, { rotation: 0, ease: easeInOut })
      })

      if (element.classList.contains('back-to-top')) {
        element.addEventListener('mouseenter', () => {
          TweenMax.to(mouse, 0.4, { rotation: -45, ease: easeInOut })
        })
        element.addEventListener('mouseleave', () => {
          TweenMax.to(mouse, 0.4, { rotation: 0, ease: easeInOut })
        })
      }
    })
  }
}
</script>
