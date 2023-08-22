import { createApp } from 'vue';
import './style/theme.css';
import router from './router';
import './style.css'
import App from './App.vue';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// const app = createApp(App);
// app.use(router);
// app.use(ElementPlus)
// app.mount('#app');
createApp(App).use(router).mount('#app')