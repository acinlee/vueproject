<template>
  <div id="app">
    <div>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item active>
              <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/blog">Blog</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/services">Services</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/contact">Contact</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
}
</style>
