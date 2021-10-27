<template>
  <header>
    <div>
      <nuxt-link to="/">Ren-Wen</nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/profile">profile</nuxt-link>
      <nuxt-link to="/classificationList">classificationList</nuxt-link>
      <nuxt-link to="/login">login</nuxt-link>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  @include display-flex-wrap;

  a {
    color: #fff;
  }
}
</style>
