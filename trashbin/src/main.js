import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  data:{
    message:{
      value:'Hello Vue.js!'
    },
    list:['a','v','e'],
    num:1
  }
})
