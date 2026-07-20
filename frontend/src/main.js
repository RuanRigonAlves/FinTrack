import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)

app.use(createPinia().use(createPersistedState))
app.use(router)
app.use(vuetify)

app.mount('#app')
