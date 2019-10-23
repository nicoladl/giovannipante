<template>
  <div class="row">
    <Images />
    <Caption />
    <Header />
    <Mouse />
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
import Mouse from '~/components/Mouse'

export default {
  components: {
    Menu,
    Header,
    Images,
    Caption,
    BackToTop,
    Mouse
  },
  mounted() {
    document.addEventListener('mousemove', e => {
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px')
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px')
    })
  }
}
</script>
