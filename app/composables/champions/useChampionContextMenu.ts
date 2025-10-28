import type { Instance } from 'tippy.js'
import { PocketChampionMenu } from '#components'
import tippy from 'tippy.js'
import { ref, render } from 'vue'

let singleton: Instance | null = null
const content = ref<HTMLElement | null>(null)

export function useChampionContextMenu() {
  const show = (event: MouseEvent, /* target: HTMLElement, */ champion: string, pocket: Pocket) => {
    event.preventDefault()

    if (!singleton) {
      // Only call useNuxtApp() once we're inside a setup context
      const { vueApp } = useNuxtApp()

      const container = document.createElement('div')
      document.body.appendChild(container)

      // Mount a Vue component into the container
      const vnode = h(PocketChampionMenu, { k: champion, pocket }) || null
      if (vnode)
        render(vnode, container)

      singleton = tippy(document.body, {
        appendTo: document.body,
        content: container,
        interactive: true,
        placement: 'right-start',
        trigger: 'manual',
      })
    }

    // Move and show
    singleton.setProps({
      getReferenceClientRect: () => ({
        width: 0,
        bottom: event.clientY,
        height: 0,
        left: event.clientX,
        right: event.clientX,
        toJSON: () => {},
        top: event.clientY,
        x: event.clientX,
        y: event.clientY,
      }),
    })
    singleton.show()
  }

  const hide = () => singleton?.hide()

  return { hide, show }
}