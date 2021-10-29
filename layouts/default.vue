<template>
  <div id="main-frame">
    <Header />
    <div id="main">
      <SideBar />
      <Nuxt />
    </div>
  </div>
</template>
<style lang="scss">
#main-frame {
  width: 100%;
  color: #fff;
  background-color: rgb(1, 5, 58);
}

#main {
  display: flex;
  width: calc(100% - #{$sidebar-width});
  min-height: 700px;
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
