<template>
  <div class="caption nomobile">
    <p class="caption__item js-caption-year"></p>
    <ul class="js-caption-category"></ul>
  </div>
</template>

<script>
import TweenMax from 'gsap'
import { easeInOut } from '../assets/js/tween'

export default {
  mounted() {
    const captions = document.querySelectorAll('.js-caption')
    const categoryContainer = document.querySelector('.js-caption-category')
    const captionYear = document.querySelector('.js-caption-year')

    captions.forEach(caption => {
      caption.addEventListener('mouseenter', () => {
        // clean everythink
        captionYear.innerHTML = ''
        categoryContainer.innerHTML = ''

        // push date
        captionYear.innerHTML = caption.dataset.year

        // split category into array
        const categories = caption.dataset.category.split(',')
        // create li
        categories.forEach(el => {
          const categoryItem = document.createElement('li')
          categoryItem.classList.add('caption__item')
          // push category
          categoryItem.innerHTML = el
          // append to container
          categoryContainer.appendChild(categoryItem)
        })

        // animate with tweenmax
        TweenMax.fromTo(
          [captionYear, categoryContainer.querySelectorAll('li')],
          1,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: easeInOut }
        )
      })

      caption.addEventListener('mouseleave', () => {
        // anim
        TweenMax.fromTo(
          [captionYear, categoryContainer.querySelectorAll('li')],
          0.5,
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            ease: easeInOut
          }
        )
      })
    })
  }
}
</script>
