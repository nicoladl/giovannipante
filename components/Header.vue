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

      document.querySelector('.date').innerHTML = `${day}.${month}.${year}`
      document.querySelector('.time').innerHTML = `${hours}.${minutes}.${seconds}`
    }, 1000)
  }
}
</script>
