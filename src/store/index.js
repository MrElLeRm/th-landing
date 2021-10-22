import Vue from "vue";
import Vuex from "vuex";
import i18n from "@/i18n";

Vue.use(Vuex);

const selectedLocale = localStorage.getItem("selectedLocale");

export default new Vuex.Store({
  state: {
    locale: selectedLocale || "uk",
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
      i18n.locale = locale;
    },
  },
  actions: {
    setLocale({ commit }, locale) {
      localStorage.setItem("selectedLocale", locale);
      commit("setLocale", locale);
    },
  },
  modules: {},
});
