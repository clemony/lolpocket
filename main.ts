import App from './src/pages/App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import router from './router'
import Shortkey from 'vue3-shortkey'
import VideoBackground from 'vue-responsive-video-background-player'
import VueInViewport from 'vue-in-viewport'

const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(PiniaColada)
console.log('Pinia initialized.')

// Register global components
app.component('video-background', VideoBackground)
app.component('Icon', Icon)

app.use(router)
app.use(Shortkey)

app.use(VueInViewport, {
    classInit: 'in-viewport',
    delay: 300,
    classViewed: 'was-in-viewport',
    triggerOnce: true,
    threshold: 60,
})

app.mount('#app')
