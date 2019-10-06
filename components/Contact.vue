<template>
  <section class="section" data-id="2">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Contacts</span>
    </h2>
    <h2 class="title">
      <span class="title__row reveal">
        <span class="item">003/</span>
      </span>
      <span class="title__row reveal">
        <span class="item">contact.</span>
      </span>
    </h2>
    <ul>
      <li v-for="(item, index) in contacts" :key="index" class="row">
        <div class="sidebar nomobile">
          <div class="text reveal">
            <span class="item">{{ item.label }}</span>
          </div>
        </div>
        <div class="content content--little">
          <div v-for="(contact, index) in item.content" :key="index" class="social">
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
