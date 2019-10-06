<template>
  <div class="row">
    <Header />
    <div class="sidebar nomobile">
      <Menu />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import Header from '~/components/Header'

export default {
  components: {
    Menu,
    Header
  }
}
</script>
