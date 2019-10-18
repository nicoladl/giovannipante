<template>
  <a :href="item.href" class="text arrow" target="_blank">
    <span class="js-split-text link outline">{{ item.label }}</span>
    <!-- <span class="arrow__icon nomobile"><Arrow /></span> -->
  </a>
</template>

<script>
// import Arrow from '../components/Arrow'

export default {
  components: {
    // Arrow
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
