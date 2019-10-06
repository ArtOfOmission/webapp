/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
axios.defaults.baseURL = "https://localhost:6001";//这里写上自己的基础url，例如www.csdn.com""
// axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';
Vue.prototype.$axios= axios

import qs from 'qs'
// import store from '@/router/index'  //引入store



Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  created() {

    // this.$axios.get('/api/Posts?pageindex=6&pagesize=5')
    //   .then(function (response) {
    //   console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log('请求失败');
    //   console.log(error);
    //   });

  },
}).$mount('#app')

router.beforeEach((to, from, next) => {  

  console.log('from:'+from.fullPath);
  console.log("window.location.origin:"+window.location.origin);
  next();//跳转

});


//http request 请求拦截器
axios.interceptors.request.use(config => {
	// 在发送请求之前做些什么
	// let pathname = location.pathname;
	// if(localStorage.getItem('token')){
	// 	if(pathname != '/' &&  pathname != '/login'){
	// 		config.headers.common['token'] = localStorage.getItem('token');
	// 	}
  // }  

	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});


// http response 响应拦截器
// axios.interceptors.response.use(response => {
//   return response;
// },error => {
//   if (error.response) {
//    switch (error.response.status) {
//      // 返回401，清除token信息并跳转到登录页面
//      case 401:
//      localStorage.removeItem('token');
//      router.replace({
//        path: '/login'
//        //登录成功后跳入浏览的当前页面
//        // query: {redirect: router.currentRoute.fullPath}
//      })
//    }
//    // 返回接口返回的错误信息
//    return Promise.reject(error.response.data);
//  }
// });

