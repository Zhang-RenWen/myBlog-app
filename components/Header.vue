<template>
  <header>
    <div id="site-logo">
      <nuxt-link to="/">RENWEN'S BLOG |</nuxt-link>
    </div>

    <nav>
      <ul>
        <li @click="moveTo($event, 'about')"><nuxt-link to="/about">About</nuxt-link></li>
        <li @click="moveTo($event, 'archive')"><nuxt-link to="/archive">Archive</nuxt-link></li>
        <li @click="moveTo($event, 'label')"><nuxt-link to="/label">Label</nuxt-link></li>
        <li @click="moveTo($event, 'login')"><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    moveTo(e: Event, routeName: String) {
      e.stopPropagation()
      this.$router.push(`${routeName}`)
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: $header-height;
  background-color: inherit;
  z-index: 1;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 50%);

  @include display-flex-wrap;

  .site-logo {
    @include flex-align-box-center;
  }

  nav {
    display: flex;
    height: 100%;
    @include flex-align-box-center;
  }

  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  nav li {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;
    transition-property: color, background-color;
    transition-duration: 0.25s, 0.25s;
  }

  nav li:hover {
    background-color: rgb(156, 156, 156);
  }

  nav li:hover > a {
    color: rgb(26, 26, 26);
  }
}
</style>
