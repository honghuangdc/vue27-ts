import Vue from 'vue';
import { setupRouter, router } from './router';
import App from './App.vue';
import { setupPinia, pinia } from './stores';

function setupApp() {
  setupPinia(Vue);

  setupRouter(Vue);

  const app = new Vue({
    render: h => h(App),
    router,
    pinia
  });

  app.$mount('#app');
}

setupApp();
