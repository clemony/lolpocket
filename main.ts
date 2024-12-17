import App from './src/pages/App.vue'
import { motionPlugin } from '@oku-ui/motion'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import router from './router'
import Shortkey from 'vue3-shortkey'

const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(PiniaColada)
console.log('Pinia initialized.')

// Register global components
app.use(motionPlugin)
app.component('Icon', Icon)
app.use(router)
app.use(Shortkey)

app.mount('#app')
