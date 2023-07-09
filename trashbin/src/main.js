var app = new Vue({
  el: '#app',
  data:{
    message:'Hello Vue.js!',
    list:['a','v','e'],
    num:1
  },
  methods:{
    handleClick:function(event){
      alert(event.target)
    }
  }
})
