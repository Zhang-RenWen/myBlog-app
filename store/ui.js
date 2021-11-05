export const state = () => ({
  mobileNavOpen: false,
  mobileSiderOpen: false
})

export const mutations = {
  toggleMobileNav(state) {
    state.mobileNavOpen = !state.mobileNavOpen
  },
  toggleMobileSiderOpen(state) {
    state.mobileSiderOpen = !state.mobileSiderOpen
  }
}
