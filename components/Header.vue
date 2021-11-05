<template>
  <header>
    <div id="site-logo">
      <nuxt-link to="/">RENWEN'S BLOG |</nuxt-link>
    </div>

    <nav :class="[mobileNavOpen ? 'mobile-nav-active' : '']">
      <ul>
        <li @click="moveTo($event, 'about')"><nuxt-link to="/about">About</nuxt-link></li>
        <li @click="moveTo($event, 'archive')"><nuxt-link to="/archive">Archive</nuxt-link></li>
        <li @click="moveTo($event, 'label')"><nuxt-link to="/label">Label</nuxt-link></li>
        <li @click="moveTo($event, 'login')"><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </nav>
    <div
      class="mobile-nav-toggle"
      :class="[mobileNavOpen ? 'mobile-nav-toggle-active' : '']"
      @click="toggleMobileNav"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    mobileNavOpen() {
      return this.$store.state.ui.mobileNavOpen
    }
  },
  methods: {
    moveTo(e: Event, routeName: String) {
      e.stopPropagation()
      this.$router.push(`${routeName}`)
    },
    ...mapMutations({
      toggleMobileNav: 'ui/toggleMobileNav'
    })
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
}

.mobile-nav-toggle {
  display: none;
}

nav {
  display: flex;
  height: 100%;
  background-color: inherit;
  @include flex-align-box-center;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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

@media (max-width: 500px) {
  .mobile-nav-toggle {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 100%;

    div {
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #000;
      transition: all 0.3s ease;
    }

    div:nth-child(1) {
      top: 15px;
      left: 0;
    }

    div:nth-child(2) {
      top: 25px;
      left: 0;
    }

    div:nth-child(2)::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: all 0.3s ease;
    }

    div:nth-child(3) {
      top: 35px;
      right: 0;
    }
  }

  .mobile-nav-toggle-active {
    div:nth-child(2)::after {
      transform: rotate(90deg);
    }

    div:nth-child(2) {
      transform: rotate(-45deg);
    }

    div:nth-child(1),
    div:nth-child(3) {
      width: 0;
      opacity: 0%;
    }
  }

  nav {
    position: absolute;
    top: calc(#{$header-height} + 2px);
    left: 0;
    overflow: hidden;
    padding: 0;
    width: 100%;
    height: 0;
    min-height: 0;
    border: 1px solid #000;
    border-top: 0;
    border-radius: 0 0 6px 6px;
    opacity: 0%;
    z-index: 2;
    transition: all 0.3s ease;
  }

  nav ul {
    width: 100%;
  }

  nav li {
    width: 100%;
    min-height: $header-height;
    background-color: inherit;
    @include flex-align-box-center;
  }

  .mobile-nav-active {
    height: auto;
    min-height: 200px;
    opacity: 100%;
  }
}
</style>
