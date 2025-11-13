import type { Instance } from "tippy.js"
import tippy from "tippy.js"
import "tippy.js/animations/scale-subtle.css"
import "tippy.js/animations/shift-toward.css"
import { createApp, defineAsyncComponent } from "vue"
import { popoverArrow } from "~/assets/ts/popoverArrow"

const ChampionCard = defineAsyncComponent(
  () =>
    import("~/components/tiptap/extensions/mentions/MentionChampionCard.vue")
)
const ItemData = defineAsyncComponent(
  () => import("~/components/tiptap/extensions/mentions/MentionItemCard.vue")
)
const RuneData = defineAsyncComponent(
  () => import("~/components/lol/runes/display/RuneData.vue")
)

interface TooltipEntry {
  app: ReturnType<typeof createApp>
  content: HTMLDivElement
  mounted: boolean
  visible: Ref<boolean>
}

const tooltipCache = new WeakMap<HTMLElement, TooltipEntry>()

export function useMentionTooltips(container: MaybeRef<HTMLElement | null>) {
  const instances: Instance[] = []

  onUnmounted(() => {
    instances.forEach((i) => i.destroy())
    instances.length = 0
  })

  watchEffect((onCleanup) => {
    const el = unref(container)
    if (!el) return

    instances.forEach((i) => i.destroy())
    instances.length = 0

    const mentions = el.querySelectorAll<HTMLElement>(".mention[data-label]")

    mentions.forEach((node) => {
      const label = node.dataset.label
      const id = node.dataset.id
      if (!label || !id) return

      let entry = tooltipCache.get(node)
      if (!entry) {
        const content = document.createElement("div")
        const visible = ref(false)
        const nuxtApp = useNuxtApp()
        const app = createApp({
          setup() {
            return () => {
              if (!visible.value) return null
              if (label === "item") return h(ItemData, { id: Number(id) })
              if (label === "champion")
                return h(ChampionCard, { id: Number(id) })
              if (label === "rune")
                return h(RuneData, {
                  id: Number(id),
                  class: "max-h-80 [&_h2]:text-4 text-2",
                  runeSize: 12,
                })
              return h("div", "Unknown mention")
            }
          },
        })

        Object.assign(app._context, nuxtApp.vueApp._context)
        console.log("🌱 - useMentionTooltips - app:", app)

        entry = { app, content, mounted: false, visible }
        tooltipCache.set(node, entry)

        const observer = new MutationObserver(() => {
          if (!document.body.contains(node)) {
            entry?.app.unmount()
            tooltipCache.delete(node)
            observer.disconnect()
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
      }

      const instance = tippy(node, {
        hideOnClick: false,
        allowHTML: true,
        animation: "shift-toward",
        appendTo: document.body,
        arrow: popoverArrow,
        content: entry.content,
        delay: [100, 50],
        interactive: true,
        interactiveBorder: 6,
        interactiveDebounce: 0.75,
        offset: [0, 8],
        placement: "top",
        theme: "neutral, tippy-clean",
        // trigger: 'click',

        //
        onHidden() {
          entry.visible.value = false
        },
        onMount(instance) {
          // One forced layout update after Vue content is mounted
          requestAnimationFrame(() => {
            instance.popperInstance?.update()
          })
        },
        onShow(instance) {
          if (!entry.mounted) {
            entry.app.mount(entry.content)
            entry.mounted = true
          }

          entry.visible.value = true

          const popper = instance.popper as HTMLElement
          popper.style.width = "258px"
          popper.style.transition = "none"

          instance.popperInstance?.forceUpdate()

          // restore transition right before frame paints
          requestAnimationFrame(() => {
            popper.style.transition = ""
          })
        },
      })

      instances.push(instance)
    })

    onCleanup(() => {
      instances.forEach((i) => i.destroy())
      instances.length = 0
    })
  })
}
