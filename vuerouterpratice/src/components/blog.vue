<template>
  <div class="blog">
    <h1>Blog</h1>
    <template> {{msg}} </template>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to Vue.js Blog'
    }
  }
}
</script>

<style scoped>

</style>
