import App from './src/pages/App.vue'
import { motionPlugin } from '@oku-ui/motion'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import router from './router'
import Shortkey from 'vue3-shortkey'
import '@fontsource/geist-sans/300.css'
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/500.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-sans/700.css'

const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(PiniaColada)
console.log('Pinia initialized.')

// Register global components
app.use(motionPlugin)
app.component('Icon', Icon)
app.use(router)
app.use(Shortkey)

app.mount('#app')
