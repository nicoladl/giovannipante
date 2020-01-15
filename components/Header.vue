<template>
  <header>
    <h2>
      P
      <span>A</span>NT
    </h2>

    <div class="date-time nomobile">
      <div class="date"></div>
      <div class="time"></div>
    </div>
  </header>
</template>

<script>
import TweenMax from 'gsap'
import { easeInOut } from '../assets/js/tween'

export default {
  mounted() {
    const header = document.querySelector('header')
    TweenMax.fromTo(header, 2, { y: -100 }, { y: 0, ease: easeInOut })

    const addZero = i => {
      i < 10
        ? (i = `<span class="single">0</span><span class="single">${i}</span>`)
        : (i = `<span class="double">${i}</span>`)
      return i
    }

    const setDateHours = () => {
      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      document.querySelector('.date').innerHTML = `${addZero(day)}.${addZero(month)}.${addZero(year)}`
      document.querySelector('.time').innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
    }

    setDateHours()
    setInterval(() => {
      setDateHours()
    }, 1000)
  }
}
</script>
