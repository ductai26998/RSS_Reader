import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentChanel: {
      name: "",
      url: "",
      id: "",
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
