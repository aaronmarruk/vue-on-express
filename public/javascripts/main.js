const Vue = require('vue/dist/vue.min.js');
const info = require('./components/browser-info.vue');

Vue.component('app', info);

console.log('Vue', Vue);

const app = new Vue({
  el: '[data-behaviour="vue"]',
});

module.exports = app;