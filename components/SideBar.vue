<template>
  <div id="sidebar">
    <div id="profile-image">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQFXQCWuyArP9g/profile-displayphoto-shrink_800_800/0/1594734553006?e=1641427200&amp;v=beta&amp;t=DfcWv5gw9p1g1yskr2ok_G8ZWQ4sNySKx-Bkww9AvJQ"
        loading="lazy"
        alt="檔案照片"
      />
    </div>
    <p>
      不抽煙，酒僅止於淺嚐。晚上11點睡，每天要睡足8個小時。喜歡自己做手沖咖啡、跟小動物互動、在家看影片。美食圖釘插滿
      Google Map 的前端工程師 ：）
    </p>
  </div>
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
  border-right: 1px solid rgb(117, 117, 117);
  background-color: inherit;
}

#profile-image {
  position: relative;
  margin: 30px auto;
  width: 70%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
