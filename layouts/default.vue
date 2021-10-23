<template>
  <div id="mainfFrame">
    <Header />
    <div id="main">
      <SideBar />
      <Nuxt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
#mainfFrame {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
}
#main {
  display: flex;
  width: calc(100% - $sidebar-width);
  min-height: 700px;
}
</style>
