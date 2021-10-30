<template>
  <div id="sidebar">im sidebar, ready for archive and brief introduction and photo</div>
</template>
<style lang="scss" scoped>
#sidebar {
  position: fixed;
  top: $header-height;
  left: 0;
  overflow: scroll;
  width: $sidebar-width;
  height: 100%;
  min-height: calc(100vh - #{$header-height});
  background-color: rgb(2, 2, 2);
  border-right: 1px solid #fff;
}
</style>
