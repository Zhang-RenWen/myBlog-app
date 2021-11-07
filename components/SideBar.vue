<template>
  <div id="sidebar" class="sidebar" :class="[mobileSiderOpen ? '' : 'sidebar-mobile-closed']">
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
    <div
      class="bio-toggle"
      :class="[mobileSiderOpen ? 'bio-toggle-fixed' : '']"
      @click="toggleMobileSiderOpen"
    >
      <div v-show="!mobileSiderOpen" class="bio-button-animation-element"></div>
      <span>
        {{ mobileSiderOpen ? 'X Close' : 'BIO' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    mobileSiderOpen() {
      return this.$store.state.ui.mobileSiderOpen
    }
  },
  methods: {
    ...mapMutations({
      toggleMobileSiderOpen: 'ui/toggleMobileSiderOpen'
    })
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: $header-height;
  right: 0;
  overflow: scroll;
  width: $sidebar-width;
  height: 100%;
  min-height: calc(100vh - #{$header-height});
  border-left: 1px solid rgb(117, 117, 117);
  background-color: inherit;
  border-radius: 0;
  transition: all 0.3s ease;
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

.bio-toggle {
  display: none;
}
@media (max-width: 768px) {
  .bio-toggle {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    padding: 15px;
  }

  .bio-toggle-fixed {
    top: 0;
    bottom: auto;
    right: 0;
    left: auto;
    padding: 5px;
  }

  .bio-button-animation-element {
    $align-bio-button-animation-element: 30px;

    position: absolute;
    bottom: $align-bio-button-animation-element;
    left: $align-bio-button-animation-element;
    width: $align-bio-button-animation-element;
    height: $align-bio-button-animation-element;
    background-color: rgb(160, 152, 152);
    border-radius: 50%;
    animation: flash 1s ease-in-out infinite;
  }

  @keyframes flash {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }

    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  .sidebar-mobile-closed {
    border: 1px solid #000;
    border-radius: 50px;
    transform: translate(85%, calc(-100% + 50px));
  }
}
</style>
