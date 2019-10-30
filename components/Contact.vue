<template>
  <section class="section js-contacts" data-id="2">
    <h2 class="title title--bottom">
      <span class="title__row reveal">
        <span class="item">003/</span>
      </span>
      <span class="title__row reveal">
        <span class="item">contact.</span>
      </span>
    </h2>
    <ul class="list">
      <li v-for="(item, index) in contacts" :key="index" class="row">
        <div class="sidebar nomobile">
          <div class="text special js-split-text" v-html="item.label"></div>
        </div>
        <div class="content content--little">
          <div v-for="(contact, index2) in item.content" :key="index2" class="social special">
            <Link :item="contact" />
          </div>
        </div>
      </li>
      <li class="row nodesktop">
        <div class="content content--little">
          <div class="social special">
            <span class="js-split-text text link outline hover">{{ menu[3].label }}</span>
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
      contacts: context.$store.state.contacts,
      menu: context.$store.state.menu
    }
  }
}
</script>
