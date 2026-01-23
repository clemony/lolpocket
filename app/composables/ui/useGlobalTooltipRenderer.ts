import { createApp, defineComponent, h, markRaw, reactive } from 'vue'

interface RenderRequest {
  component: any
  container: HTMLDivElement
  props: Record<string, any>
}

const state = reactive<{ requests: RenderRequest[] }>({ requests: [] })

const TooltipRoot = defineComponent({
  setup() {
    return () => state.requests.map(r => h(r.component, { ...r.props, key: r.props.id }))
  },
})

let rootEl: HTMLDivElement | null = null
let app: any = null

export function useGlobalTooltipRenderer() {
  if (!rootEl) {
    rootEl = document.createElement('div')
    rootEl.id = 'global-tooltip-root'
    document.body.appendChild(rootEl)

    app = createApp(TooltipRoot)
    const nuxtApp = useNuxtApp()
    Object.assign(app._context, nuxtApp.vueApp._context)
    app.mount(rootEl)
  }

  return {
    el: rootEl!,
    mount(component: any, props: any) {
      const container = document.createElement('div')
      rootEl!.appendChild(container)

      state.requests.push({
        component: markRaw(component),
        container,
        props,
      })

      return container
    },
    unmount(container?: HTMLDivElement) {
      if (!container)
        return

      const idx = state.requests.findIndex(r => r.container === container)
      if (idx !== -1) {
        state.requests.splice(idx, 1)
        container.remove()
      }
    },
  }
}