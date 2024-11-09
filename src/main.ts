import App from './pages/app.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { kinesisPlugin } from '@letstri/kinesis'
import router from '../router'
import { FloatingVue, floatingVueOptions } from './config/floating-vue'
import Shortkey from 'vue3-shortkey'

// Create a new Vue application instance
const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
console.log('Pinia initialized.')

// Register global components
app.component('Splitpanes', Splitpanes)
app.component('Pane', Pane)
app.component('Icon', Icon)
app.use(kinesisPlugin)
app.use(router)
app.use(autoAnimatePlugin)
app.use(FloatingVue, floatingVueOptions)

app.use(Shortkey)
// Mount the app to the element with id "app" in your HTML
app.mount('#app')
