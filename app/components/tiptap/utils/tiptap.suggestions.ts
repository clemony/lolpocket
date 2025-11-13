/* @ts-expect-error */
import { computePosition, flip, shift } from "@floating-ui/dom"
import { posToDOMRect, VueRenderer } from "@tiptap/vue-3"
import MentionLeagueFilter from "~/components/tiptap/extensions/mentions/MentionLeagueFilter.vue"
function updatePosition(editor, element) {
  const virtualElement = {
    getBoundingClientRect: () =>
      posToDOMRect(
        editor.view,
        editor.state.selection.from,
        editor.state.selection.to
      ),
  }
  computePosition(virtualElement, element, {
    middleware: [shift(), flip()],
    placement: "bottom-start",
    strategy: "absolute",
  }).then(({ strategy, x, y }) => {
    element.style.width = "max-content"
    element.style.position = strategy
    element.style.left = `${x}px`
    element.style.top = `${y}px`
  })
}
function renderSuggestion(c: Component) {
  return () => {
    let component: VueRenderer | null = null
    let propsRef: any = null
    let onKeydownForward: (e: KeyboardEvent) => void
    let mousedownHandler: (e: MouseEvent) => void
    return {
      onExit() {
        if (!component) return
        component.element.removeEventListener("mousedown", mousedownHandler)
        window.removeEventListener("keydown", onKeydownForward, {
          capture: true,
        } as any)
        component.destroy()
        component = null
        propsRef = null
      },
      onKeyDown(props) {
        try {
          return component?.ref?.onKeyDown?.(props)
        } catch {
          return false
        }
      },
      onStart(props) {
        propsRef = props
        component = new VueRenderer(c, {
          editor: props.editor,
          props,
        })
        if (!props.clientRect) return
        const el = component.element
        el.classList.add("absolute")
        el.setAttribute("tabindex", "-1")
        mousedownHandler = (e: MouseEvent) => {
          const target = e.target as HTMLElement | null
          if (!target) {
            e.preventDefault()
            return
          }
          if (
            target.matches(
              'button, [role="option"], [role="menuitem"], input, textarea, a, [data-focusable]'
            )
          ) {
            return
          }
          e.preventDefault()
        }
        el.addEventListener("mousedown", mousedownHandler, { passive: false })
        document.body.appendChild(el)
        updatePosition(props.editor, el)
        onKeydownForward = (e: KeyboardEvent) => {
          if (!component || !component.ref) return
          const forwardKeys = [
            "ArrowUp",
            "ArrowDown",
            "Enter",
            "Escape",
            "Tab",
            "Home",
            "End",
          ]
          if (!forwardKeys.includes(e.key)) return

          const keyProps = {
            editor: props.editor,
            range: props.range,

            clientRect: props.clientRect,
            command: props.command,
            event: e,
            items: props.items,
          }

          try {
            const handled = component.ref?.onKeyDown?.(keyProps)
            if (handled) e.preventDefault()
          } catch (err) {}
        }

        window.addEventListener("keydown", onKeydownForward, { capture: true })
      },
      onUpdate(props) {
        propsRef = props
        if (!component) return
        component.updateProps(props)
        if (!props.clientRect) return
        updatePosition(props.editor, component.element)
      },
    }
  }
}
export const mentionSuggestions = [
  {
    char: "@",
    items: ({ query }) => {
      return []
        .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5)
    },
    render: renderSuggestion(MentionLeagueFilter),
  },
  {
    char: "#",
    items: ({ query }) => {
      const arr = [
        ...ix().items,
        ...ix().champions,
        ...ix().runes,
        ...Object.values(spellbook),
      ]
      const { results } = useSimpleSearch(
        arr,
        computed(() => query)
      )
      return results.value.slice(0, 15)
    },
    render: renderSuggestion(MentionLeagueFilter),
  },
]
