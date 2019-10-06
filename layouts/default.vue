<template>
  <div class="row">
    <Images />
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
import Images from '~/components/Images'

export default {
  components: {
    Menu,
    Header,
    Images
  }
}
</script>
