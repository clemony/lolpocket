import App from './Pages/app.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import { kinesisPlugin } from '@letstri/kinesis'
import router from '../router'
import { FloatingVue, floatingVueOptions } from './Config/floating-vue'
import Shortkey from 'vue3-shortkey'

// Create a new Vue application instance
const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(PiniaColada)
console.log('Pinia initialized.')

// Register global components
app.component('Icon', Icon)
app.use(kinesisPlugin)
app.use(router)
app.use(FloatingVue, floatingVueOptions)
app.use(Shortkey)
// Mount the app to the element with id "app" in your HTML
app.mount('#app')
