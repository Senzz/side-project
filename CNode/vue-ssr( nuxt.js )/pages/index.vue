<template>
  <section class="main">
    <Header />
    <section class="content_list">
      <Navigation />
      <nuxt-child />
    </section>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Header,
    Navigation
  },
}
</script>

<style scoped>
.content_list{
  width: 1000px;
  margin: auto;
  margin-top:60px;
}
</style>
