import type { VueConstructor } from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

export const pinia = createPinia();

/**
 * install store tool: pinia 注册pinia状态
 * @param app - Vue构造函数
 */
export function setupPinia(app: VueConstructor) {
  app.use(PiniaVuePlugin);
}

const arr = [1, 2, 3, 4];

arr.forEach((_value, index) => {
  console.log(index);
});
