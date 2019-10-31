<template>
  <section class="section" data-id="1">
    <h2 class="title title--bottom">
      <span class="title__row reveal">
        <span class="item">002/</span>
      </span>
      <span class="title__row reveal">
        <span class="item">selected</span>
      </span>
      <span class="title__row reveal">
        <span class="item">works.</span>
      </span>
    </h2>

    <ul class="list list--small">
      <li v-for="(project, index) in works" :key="index" class="row project">
        <div
          class="js-image js-caption"
          :data-src="project.image"
          :data-alt="project.label"
          :data-category="project.category"
          :data-year="project.year"
        >
          <Link :item="project" />
        </div>
        <a :href="project.href" target="_blank">
          <img :src="project.image" :alt="project.label" class="width100 nodesktop" />
        </a>
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
