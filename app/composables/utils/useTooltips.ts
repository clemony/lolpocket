import "@css/plugins/tippy.css"
import type { Instance } from "tippy.js"
import tippy from "tippy.js"
import "tippy.js/animations/scale-subtle.css"
import "tippy.js/animations/shift-toward.css"
import {
  createApp,
  defineAsyncComponent,
  h,
  nextTick,
  onUnmounted,
  ref,
  unref,
  watch,
} from "vue"
import { popoverArrow } from "~/assets/ts/popoverArrow"

const ChampionCard = defineAsyncComponent(
  () => import("~/components/lol/champions/display/ChampionTooltip.vue")
)
const Ability = defineAsyncComponent(
  () => import("~/components/lol/champions/display/AbilityTooltip.vue")
)
const ItemData = defineAsyncComponent(
  () => import("~/components/lol/items/display/ItemTooltip.vue")
)
const RuneData = defineAsyncComponent(
  () => import("~/components/lol/runes/display/RuneData.vue")
)
const SpellData = defineAsyncComponent(
  () => import("~/components/lol/spells/SpellData.vue")
)

interface TooltipEntry {
  app: ReturnType<typeof createApp>
  content: HTMLDivElement
  mounted: boolean
  visible: Ref<boolean>
}

const tooltipCache = new WeakMap<HTMLElement, TooltipEntry>()
let activeTippy: Instance | null = null

export function useTooltips(container: MaybeRef<HTMLElement | null>) {
  const instances = new Map<HTMLElement, Instance>()
  let observer: MutationObserver | null = null

  const createOrGetEntry = (
    node: HTMLElement,
    label: string,
    id: string,
    map?: string,
    ability?: string
  ) => {
    let entry = tooltipCache.get(node)
    if (entry) return entry

    const content = document.createElement("div")
    const visible = ref(false)
    const nuxtApp = useNuxtApp()

    const app = createApp({
      setup() {
        return () => {
          if (!visible.value) return null

          switch (label) {
            case "item":
              return h(ItemData, { id: +id, map: +map })
            case "champion":
              return h(ChampionCard, { id: +id })
            case "ability":
              return h(Ability, { id: +id, ability })
            case "spell":
              return h(SpellData, { id: +id })
            case "rune":
              return h(RuneData, {
                id: +id,
                class: "max-h-80 [&_h2]:text-4 text-2",
                runeSize: 12,
              })
            default:
              return h("div", "Unknown mention")
          }
        }
      },
    })

    // inherit Nuxt app context
    Object.assign(app._context, nuxtApp.vueApp._context)

    entry = { app, content, mounted: false, visible }
    tooltipCache.set(node, entry)

    // Auto-remove if DOM node is removed
    const cleanupObs = new MutationObserver(() => {
      if (!document.body.contains(node)) {
        if (entry!.mounted) entry!.app.unmount()
        tooltipCache.delete(node)
        cleanupObs.disconnect()
      }
    })
    cleanupObs.observe(document.body, { childList: true, subtree: true })

    return entry
  }

  const initNode = (node: HTMLElement) => {
    if (instances.has(node)) return // already initialized

    const label = node.dataset.label
    const id = node.dataset.id
    const map = node.dataset.map
    const ability = node.dataset.ability
    if (!label || !id) return

    const entry = createOrGetEntry(node, label, id, map, ability)

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
      offset: [0, 8],
      placement: "top",
      theme: "n-mention",

      onHidden(i) {
        if (activeTippy === i) activeTippy = null
        entry.visible.value = false
      },

      onMount(i) {
        requestAnimationFrame(() => i.popperInstance?.update())
      },

      onShow(i) {
        if (activeTippy && activeTippy !== i) activeTippy.hide()
        activeTippy = i

        if (!entry.mounted) {
          entry.app.mount(entry.content)
          entry.mounted = true
        }

        entry.visible.value = true

        const popper = i.popper as HTMLElement
        popper.style.width = "258px"
        popper.style.transition = "none"
        i.popperInstance?.forceUpdate()
        requestAnimationFrame(() => (popper.style.transition = ""))
      },
    })

    instances.set(node, instance)
  }

  const scan = async (el: HTMLElement) => {
    await nextTick()
    const nodes = el.querySelectorAll<HTMLElement>(
      "[data-label].tippy, [data-label].mention"
    )
    nodes.forEach((n) => initNode(n))
  }

  // SETUP
  watch(
    () => unref(container),
    async (el) => {
      if (!(el instanceof HTMLElement)) return

      // initialize immediately
      await scan(el)

      // observe changes inside this container only
      observer?.disconnect()
      observer = new MutationObserver(() => scan(el))
      observer.observe(el, { childList: true, subtree: true })
    },
    { immediate: true }
  )

  onUnmounted(() => {
    observer?.disconnect()
    instances.forEach((i) => i.destroy())
  })
}
