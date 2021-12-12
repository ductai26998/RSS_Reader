import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentChanel: {
      id: "",
      name: "",
      url: "",
      createdAt: null,
    },
  },
  mutations: {
    changeChannel(state, payload) {
      state.currentChanel = payload;
    },
  },
  actions: {},
  modules: {},
});
