import VueTippy from 'vue-tippy'
import 'tippy.js/animations/scale.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
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
        followCursor: 'horizontal',
        inertia: true,
        delay: [400, 0],
        duration: [150],
        animation: 'scale',
        interactiveBorder: 2,
        offset: [2, 10],
        role: 'tooltip',
        aria: {
          content: 'auto',
          expanded: 'auto',
        },
      },
    },
  )
})
