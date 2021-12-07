/* eslint no-shadow: ["error", { "allow": ["state"] }] */
export const state = () => ({
  mobileNavOpen: false,
  mobileSidebarOpen: false
})

export const mutations = {
  toggleMobileNav(state) {
    state.mobileNavOpen = !state.mobileNavOpen
  },

  toggleMobileSidebarOpen(state) {
    state.mobileSidebarOpen = !state.mobileSidebarOpen
  }
}
