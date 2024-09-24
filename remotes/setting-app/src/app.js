import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

// Mount function to start up the app

const mount = (el, {onSubmit, mode}) => {
  const app = createApp(App, {onSubmit: onSubmit, mode}).use(Antd);
  app.mount(el); // this a function from Vue.
};


// We are running through container and we should export the mount function
export { mount };
