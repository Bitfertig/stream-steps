console.log('It`s working.');

//require('./src/myfile.js'); // Require will also automatically scan node_modules to find modules

import './style.scss';


//import Favicon from './favicon.svg';


import Vue from 'vue'
import App from './vue/app.vue';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = false;

import _ from 'lodash';
Vue.set(Vue.prototype, '_', _);

import store from './vue/store.js';

window.vm = new Vue({
    store,
    render: h => h(App),
}).$mount('#app');

