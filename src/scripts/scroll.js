// https://www.npmjs.com/package/vue-scrollto

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
});

new Vue({
  el: '#header-scroll',
  methods: {
  }
});

new Vue({
  el: '#footer-scroll',
  methods: {
  }
});

new Vue({
  el: '#arrow-scroll',
  methods: {
  }
});