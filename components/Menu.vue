<template>
  <nav class="menu">
    <ul>
      <!-- prettier-ignore -->
      <li v-for="(item, index) in menu" :key="index" class="menu__item" :data-id="index">
        <div v-html="item.label"></div>
      </li>
      <!-- prettier-ignore -->
    </ul>
  </nav>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'

export default {
  data(context) {
    return {
      menu: context.$store.state.menu
    }
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }
    const easeInOut = Power4.easeInOut

    const reveal = document.querySelectorAll('section')
    const menuItems = document.querySelectorAll('.menu__item')
    let index = 0

    const observer = new IntersectionObserver(handleIntersect, options)
    reveal.forEach(element => {
      observer.observe(element)
    })

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const menuItem = menuItems[el.dataset.id]
          index = parseInt(el.dataset.id)

          const target = document.querySelector('.target')
          if (target) {
            target.classList.remove('target')
          }

          if (!isNaN(index)) {
            menuItems[index].classList.add('target')
            TweenMax.to(menuItems, 0.5, { y: menuItems[0].clientHeight * -index })
          }
        }
      })
    }
  }
}
</script>
