import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/light.css'
import VueTippy, { roundArrow } from 'vue-tippy'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueTippy,
    // optional
    {
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippies', // => <tippy-singleton/>,
      defaultProps: {
        hideOnClick: false,
        allowHTML: true,
        animation: 'scale',
        aria: {
          content: 'auto',
          expanded: 'auto',
        },
        arrow: roundArrow, // + roundArrow,
        delay: [800, 0],
        duration: [150],
        flip: true,
        followCursor: false,
        inertia: true,
        interactiveBorder: 2,
        offset: [0, 10],
        placement: 'top',
        role: 'tooltip',
        showOnCreate: false,
        theme: 'light'

      },
      directive: 'tippy', // => v-tippy
    }
  )
})
