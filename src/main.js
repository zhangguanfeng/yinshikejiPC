// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import '../static/css/theme-green/index.css'; // 浅绿色主题
import '../static/css/icon.css';
/*全局引入*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Vuex from 'vuex';
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
});
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
Vue.use( Vuex )
// serverIp:"http://localhost:9191"
// serverIp:"http://cloud.nhw6.com:9191"
// serverIp:"http://47.106.218.143:9191"
// http://citation9.com:6600/
const store = new Vuex.Store({
  state:{ 
    serverIp:"http://www.iptv9.cn/#"
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }

})
