<template>
  <section class="section js-contacts" data-id="2">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Contacts</span>
    </h2>
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
          <div class="text js-split-text" v-html="item.label"></div>
        </div>
        <div class="content content--little">
          <div v-for="(contact, index2) in item.content" :key="index2" class="social">
            <Link :item="contact" />
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
      contacts: context.$store.state.contacts
    }
  }
}
</script>
