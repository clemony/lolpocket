import "tippy.js/animations/scale.css"
import "tippy.js/animations/shift-toward-extreme.css"
import "tippy.js/animations/shift-toward-subtle.css"
import "tippy.js/animations/shift-toward.css"
import "tippy.js/themes/translucent.css"
import VueTippy from "vue-tippy"

export const popoverArrow =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 text-blue-500 fill-red-500"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m18 14l-6-6l-6 6z" /> <path fill="currentColor" d="M11.293 7.293a1 1 0 0 1 1.32-.083l.094.083l6 6l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L19 14l-.002.059l-.005.058l-.009.06l-.01.052l-.032.108l-.027.067l-.07.132l-.065.09l-.073.081l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084z" /> </svg>'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueTippy,
    // optional
    {
      component: "tippy",
      componentSingleton: "tippyton",
      appendTo: () => document.body,
      defaultProps: {
        hideOnClick: false,
        allowHTML: true,
        animation: "shift-toward-subtle",
        aria: {
          content: "auto",
          expanded: "auto",
        },
        arrow: popoverArrow,
        delay: [400, 0],
        duration: [150],
        flip: true,
        followCursor: false,
        inertia: true,
        interactiveBorder: 2,
        offset: [0, 8],
        placement: "top",
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
        role: "tooltip",
        showOnCreate: false,
        theme: "base",
        // trigger: 'click',
      },
      directive: "tippy", // => v-tippy
    }
  )
})
