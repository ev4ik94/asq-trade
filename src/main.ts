import 'ant-design-vue/dist/reset.css';
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from './locales';

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages,
})

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(i18n);
router.beforeEach((to, from, next) => {
    const lang:any = to.params.lang || 'ru'; // Язык по умолчанию
    if (!['en', 'ru', 'uz'].includes(lang)) {
        return next('ru'); // Перенаправляем на английский, если язык неизвестен
    }

    i18n.global.locale = lang; // Устанавливаем текущий язык
    next(); // Продолжаем переход
});
app.mount('#app')
