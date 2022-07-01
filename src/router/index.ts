import type { VueConstructor } from 'vue';
import VueRouer from 'vue-router';
import type { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
];

export const router = new VueRouer({ routes });

/**
 * setup router [注册Vue路由]
 * @param app
 */
export function setupRouter(app: VueConstructor) {
  app.use(VueRouer);
}
