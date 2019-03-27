import Vue from 'vue'
import App from './App.vue'
import Input from './components/Input.vue';
// import wrap from '@vue/web-component-wrapper';
// import CostumInputWebComponent from './components/Input.vue';

// const CustomElement = wrap(Vue, CostumInputWebComponent);

// window.customElements.define('idex-custom-input', CustomElement);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
