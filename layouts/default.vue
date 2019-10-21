<template>
  <div class="row">
    <Images />
    <Caption />
    <Header />
    <BackToTop />
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
import Caption from '~/components/Caption'
import BackToTop from '~/components/BackToTop'

export default {
  components: {
    Menu,
    Header,
    Images,
    Caption,
    BackToTop
  }
}
</script>
