import App from './src/pages/App.vue'
<<<<<<< HEAD
=======
import 'tailwindcss'
import '@assets/css/index.css'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
import { motionPlugin } from '@oku-ui/motion'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
<<<<<<< HEAD
import router from './router'
=======
import { kinesisPlugin } from '@letstri/kinesis'
import router from './router'
//import { FloatingVue, floatingVueOptions } from '@/config/floating-vue'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
import Shortkey from 'vue3-shortkey'
import '@fontsource/geist-sans/300.css'
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/500.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-sans/700.css'

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
<<<<<<< HEAD
=======
//app.use(FloatingVue, floatingVueOptions)
>>>>>>> 4634f11e (update 8 files and delete 426 files)
app.use(Shortkey)

app.mount('#app')
