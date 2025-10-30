import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/translucent.css'
import VueTippy, { roundArrow } from 'vue-tippy'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueTippy,
    // optional
    {
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippyton', // => <tippy-singleton/>,
      defaultProps: {
        hideOnClick: false,
        allowHTML: true,
        animation: 'scale',
        aria: {
          content: 'auto',
          expanded: 'auto',
        },
        // arrow: roundArrow + roundArrow,
        delay: [700, 0],
        duration: [150],
        flip: true,
        followCursor: false,
        inertia: true,
        interactiveBorder: 2,
        offset: [0, 8],
        placement: 'top',
        /*         popperOptions: {
          modifiers: [
            {
              name: 'arrow',
              options: {
                padding: 4,
              },
            },
          ],
        }, */
        role: 'tooltip',
        showOnCreate: false,
        theme: 'base',
        // trigger: 'click',
      },
      directive: 'tippy', // => v-tippy

    }
  )
})
