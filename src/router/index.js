import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/index',
                    meta:{index:0},
                    component: resolve => require(['../components/page/Index.vue'], resolve),
                    meta: { title: '系统首页',keepAlive: true, }
                },
                {
                    path: '/products',
                    meta:{index:1},
                    component: resolve => require(['../components/page/Products.vue'], resolve),
                    meta: { title: '自定义图标',keepAlive: true },
                
                },
                {
                    path: '/solution',
                    meta:{index:2},
                    component: resolve => require(['../components/page/Solution.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/iptv',
                    meta:{index:3},
                    component: resolve => require(['../components/page/Iptv.vue'], resolve),
                    meta: { title: 'iptv',keepAlive: false }
                },
                {
                    path: '/tutorial',
                    meta:{index:4},
                    component: resolve => require(['../components/page/Tutorial.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                  
                    path: '/download',
                    meta:{index:5},
                    component: resolve => require(['../components/page/Download.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                  
                    path: '/about',
                    meta:{index:6},
                    component: resolve => require(['../components/page/About.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/company',
                    meta:{index:7},
                    component: resolve => require(['../components/page/Company.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                
                {
                    path: '/403',
                    meta:{index:8},
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
