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
import { getPatch } from './src/data/getData'
import { plugin as vueTransitionsPlugin } from '@morev/vue-transitions'
import VueTippy from 'vue-tippy'

const app = createApp(App)

console.log('Initializing Pinia...')
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(PiniaColada)
console.log('Pinia initialized.')
app.provide('global', 'hello injections')
// Register global components
app.component('video-background', VideoBackground)
app.component('Icon', Icon)

app.use(router)
app.use(Shortkey)

app.use(
    vueTransitionsPlugin({
        defaultProps: {
            duration: 400,
        },
        componentDefaultProps: {
            TransitionSlide: {
                duration: 200,
                easing: 'cubic-bezier(.25, .8, .5, 1)',
                offset: [0, 8],
                mode: 'out-in',
            },
        },
    })
)
app.use(VueInViewport, {
    classInit: 'in-viewport',
    delay: 300,
    classViewed: 'was-in-viewport',
    triggerOnce: true,
    threshold: 60,
})

app.use(
    VueTippy,
    // optional
    {
        directive: 'tippy', // => v-tippy
        component: 'tippy', // => <tippy/>
        componentSingleton: 'tippies', // => <tippy-singleton/>,
        defaultProps: {
            placement: 'bottom-start',
            allowHTML: true,
            arrow: false,
        }, // => Global default options * see all props
    }
)

app.mount('#app')

getPatch()
