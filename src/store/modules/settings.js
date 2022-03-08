import variables from '@/styles/element-variables.module.scss' //vite css Pre-processors
import defaultSettings from '@/settings'

const { tagsView, fixedHeader, sidebarLogo, title } = defaultSettings

const state = {
  theme: variables.theme,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  title: title
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

