import { routes } from '@/router'


/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter routing tables by recursion
 * @param routes Routes
 * @param roles
 */
function filterRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp) && !route.hidden) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routers) => {
    // state.addRoutes = routes
    state.routes = routers
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    let accessedRoutes = filterRoutes(routes, roles)
    commit("SET_ROUTES", accessedRoutes)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
