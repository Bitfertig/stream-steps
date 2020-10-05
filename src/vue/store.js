import Vue from "vue";
import Vuex from "vuex";

import { steps } from './store.steps';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        steps,
    },
});
