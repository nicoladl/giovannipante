<template>
  <a :href="item.href" class="text" target="_blank">
    <span class="js-split-text link outline hover" v-html="item.label"></span>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
