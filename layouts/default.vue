<template>
  <div id="main-frame">
    <Header />
    <div id="main">
      <Nuxt />
      <SideBar />
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
  overflow: hidden;
  padding-top: $header-height;
  width: 100%;
  background-color: #fff;
}

#main {
  display: flex;
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
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

@media (max-width: 500px) {
  #main {
    margin-left: 0;
    width: 85%;
  }
}
</style>
