<template>
  <header>
    <h2>
      P
      <span>A</span>NT
      <span>E</span>
    </h2>

    <div class="date-time">
      <div class="date"></div>
      <div class="time"></div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      document.querySelector('.date').innerHTML = `${addZero(day)}.${addZero(month)}.${addZero(year)}`
      document.querySelector('.time').innerHTML = `${addZero(hours)}.${addZero(minutes)}.${addZero(seconds)}`
    }, 1000)
    const addZero = i => {
      i < 10 ? (i = `<span class="single">0</span><span class="single">${i}</span>`) : (i = `<span class="double">${i}</span>`)
      return i
    }
  }
}
</script>
