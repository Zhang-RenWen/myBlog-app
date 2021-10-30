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
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: rgb(1, 3, 42);
  // background-color: rgb(244, 247, 245);
}

p {
  font-family: 'sans-serif;', 'PT Serif', serif;
}

#main-frame {
  padding-top: $header-height;
  width: 100%;
}

#main {
  display: flex;
  padding-left: $sidebar-width;
  width: calc(100% - #{$sidebar-width});
  min-height: 100vh;
  color: white;
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
