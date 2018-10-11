const Vue = require('vue/dist/vue.min.js');
const demo = require('./components/demo.vue');

Vue.component('app', demo);

console.log('Vue', Vue);

const app = new Vue({
  el: '[data-behaviour="vue"]',
});

module.exports = app;