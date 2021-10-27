<template>
  <div id="main-frame">
    <Header />
    <div id="main">
      <SideBar />
      <Nuxt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
#main-frame {
  width: 100%;
  color: #fff;
  background-color: #000;
}

#main {
  display: flex;
  width: calc(100% - #{$sidebar-width});
  min-height: 700px;
}
</style>
