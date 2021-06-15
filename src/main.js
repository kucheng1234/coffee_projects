import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/font/iconfont.css'

Vue.config.productionTip = false

import { Tabbar, TabbarItem ,Icon ,Search , SwipeCell , Toast} from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search).use(SwipeCell).use(Toast);

//配置请求基础路径
axios.defaults.baseURL = 'http://www.kangliuyong.com:10002';

// 添加请求拦截器
axios.interceptors.request.use(config=>{
  // 在发送请求之前做些什么
  // console.log(config);
  if(config.method === 'get'){
    config.params = config.params || {};
    config.params.appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA='
  }
  // 加载提示
  Toast.loading({
    message: '加载中...',
    // forbidClick 属性可以禁用背景点击
    forbidClick: true,
    // 展示时长(ms)，值为 0 时，toast 不会消失
    duration:0
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  // 关闭提示
  Toast.clear();
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response=>{
  // 对响应数据做点什么
  // console.log(response);
  // 关闭提示
  Toast.clear();
  return response;
}, function (error) {
  // 对响应错误做点什么
  // 关闭提示
  Toast.clear();
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
