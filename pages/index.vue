<template>
  <div class="js-scroller">
    <Intro />
    <Bio />
    <Works />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Bio from '../components/Bio'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default {
  components: {
    Intro,
    Bio,
    Works,
    Contact,
    Footer
  },
  mounted() {
    this.$lines()
    this.$scroll()
    this.$reveal()
  }
}
</script>
