<template>
  <div id="main-frame">
    <Header />
    <div id="main">
      <SideBar />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<style lang="scss">
html {
  line-height: 1.5;
}

body {
  font-family: 'Source Sans Pro', sans-serif, 'Microsoft JhengHei';
}

p {
  padding: 20px;
  font-family: 'sans-serif;', 'PT Serif', serif, 'Microsoft JhengHei';
}

#main-frame {
  padding-top: $header-height;
  width: 100%;
  background-color: #fff;
}

#main {
  display: flex;
  margin-left: $sidebar-width;
  padding: 20px;
  width: calc(100% - #{$sidebar-width});
  min-height: 100vh;
  background-color: inherit;
}

.d-flex {
  display: flex;
}

* {
  box-sizing: border-box;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
