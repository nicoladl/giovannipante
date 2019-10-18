<template>
  <section class="section row end-xs" data-id="0">
    <!-- <div class="sidebar sidebar--big nomobile"></div> -->
    <div class="content">
      <h2 class="title title--bottom">
        <span class="title__row reveal">
          <span class="item">001/</span>
        </span>
        <span class="title__row reveal">
          <span class="item">About me.</span>
        </span>
      </h2>
      <div class="text js-split-text">{{ bio }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data(context) {
    return {
      bio: context.$store.state.bio
    }
  }
}
</script>
