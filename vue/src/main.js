import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd);

// import {Menu} from 'ant-design-vue';  //按需加载时的加载方式
// import {Layout} from 'ant-design-vue';
// Vue.component(Menu.name, Menu);
// Vue.component(Layout.name, Layout);

Vue.config.productionTip = false;

var Mock = require('mockjs');
Mock.mock("/testMock", "post", {data: "fdsafdsaf"});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');