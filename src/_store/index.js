import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { pokemon } from "./modules/pokemon";
import { alert } from "./modules/alert";

const debug = process.env.NODE_ENV !== "production";

export const store = new Vuex.Store({
  modules: {
    pokemon,
    alert
  },
  strict: debug
});
