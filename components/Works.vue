<template>
  <section class="section" data-id="1">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Projects</span>
    </h2>

    <h2 class="title">
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

    <ul class="list">
      <li v-for="(project, index) in works" :key="index" class="row">
        <div class="content">
          <div class="project">
            <Link :item="project" />
            <img class="project__image nomobile" :src="project.image" :alt="project.label" />
          </div>
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
