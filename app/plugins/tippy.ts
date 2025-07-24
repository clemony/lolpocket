import 'tippy.js/animations/scale.css'
import VueTippy, { roundArrow } from 'vue-tippy'

export default defineNuxtPlugin((nuxtApp) => {
  const sharpArrow
    = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 9l5.5 5.5h-11z"/></svg>'

  nuxtApp.vueApp.use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippies', // => <tippy-singleton/>,
      defaultProps: {
        placement: 'bottom',
        allowHTML: true,
        arrow: sharpArrow + sharpArrow,
        hideOnClick: false,
        followCursor: false,
        inertia: true,
        delay: [1000, 0],
        duration: [150],
        animation: 'scale',
        interactiveBorder: 2,
        offset: [0, 10],
        role: 'tooltip',
        aria: {
          content: 'auto',
          expanded: 'auto',
        },
      },
    },
  )
})
