<template>
  <div class="mouse">
    <svg class="mouse__item" x="0px" y="0px" viewBox="0 0 140 135">
      <style type="text/css">
        .st0 {
          fill: #ff5025;
        }
      </style>
      <g>
        <path
          class="st0"
          d="M13.4,9.2h115v113l-8.2,7.5V71.4c0-22.6,0-38.9,0.2-48.7L11.8,129.9l-5.7-6.1L114.6,16.7
		c-9.8,0.2-25.9,0.2-48.5,0.2H6.1L13.4,9.2z"
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
