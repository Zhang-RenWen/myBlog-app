<template>
  <header>
    <div id="site-logo">
      <nuxt-link to="/">Ren-Wen</nuxt-link>
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
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 65px;
  mix-blend-mode: normal;
  background-color: #000;

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
  }
}
</style>
