import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const githubModule = {
  state: {
    repository: []
  },
  mutations: {
    APPEND_REPOSITORY (state, repo) {
      state.repository.push(repo)
    },

    SET_REPOSITORY (state, repos) {
      state.repository = repos
    }
  },
  actions: {
    appendRepository({ commit }, repo) {
      commit('APPEND_REPOSITORY', repo)
    },

    setRepository({ commit }, repos) {
      commit('SET_REPOSITORY', repos)
    }
  }
}

export default new Vuex.Store({
  modules: {
    github: githubModule
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
