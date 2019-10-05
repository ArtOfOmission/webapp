/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {  

  console.log("to:" + to.fullPath);
  console.log("from:" + from.fullPath); 
  next();//跳转

});