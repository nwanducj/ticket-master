import { createStore } from 'vuex'

export default createStore({
  state: {
    user: '',
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    getUser(context) {
      let user = JSON.parse(localStorage.getItem("ticket-master-user"));
      if (user) {
        context.commit("SET_USER", user);
      }
    },
    setUser(context, user) {
      localStorage.setItem("ticket-master-user", JSON.stringify(user));
      context.commit("SET_USER", user);
    }
  },
  modules: {
  }
})
