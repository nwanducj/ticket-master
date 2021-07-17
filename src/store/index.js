import { createStore } from 'vuex'

export default createStore({
  state: {
    user: '',
    cartList: null
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getCartList: state => {
      return state.cartList
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_CARTLIST: (state, cartList) => {
      state.cartList = cartList
    }
  },
  actions: {
    getUser() { },
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
    //give comment on it
    //explain to a layman
    setCartList(context, event) {
      let cart = event
      cart.varieties = [
        {
          price: 5000,
          qyt: 1,
          name: "Regular"
        },
        {
          price: 10000,
          qyt: 0,
          name: "Table for 5"
        },
        {
          price: 1000000,
          qyt: 0,
          name: "VIP"
        },
      ]
      cart.vat = 500
      localStorage.setItem("cart", JSON.stringify(cart));
      context.commit("SET_CARTLIST", cart);
    },
    updateCart(context, cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      context.commit("SET_CARTLIST", cart);
    },
    getCartList(context) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      context.commit("SET_CARTLIST", cart);
      return cart
    }
  },
  modules: {
  }
})
