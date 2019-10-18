<template>
  <section class="section" data-id="1">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Projects</span>
    </h2>

    <h2 class="title title--bottom">
      <span class="title__row reveal">
        <span class="item">002/</span>
      </span>
      <span class="title__row reveal">
        <span class="item">selected</span>
      </span>
      <span class="title__row reveal">
        <span class="item">work.</span>
      </span>
    </h2>

    <ul class="list list--small">
      <li v-for="(project, index) in works" :key="index" class="row">
        <div class="project js-image" :data-src="project.image" :data-alt="project.label">
          <Link :item="project" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Link from '../components/Link'

export default {
  components: {
    Link
  },
  data(context) {
    return {
      works: context.$store.state.works
    }
  }
}
</script>
