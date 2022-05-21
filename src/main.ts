import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import i18n from "./plugins/I18n";
import router from "./router/Router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App).use(ElementPlus).use(i18n).use(Toast).use(router);
app.mount("#app");
