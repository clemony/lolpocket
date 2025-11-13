import EmojiList from "~/components/tiptap/extensions/emoji/EmojiList.vue"
// @fixme probably fix
/* @ts-ignore */
import { computePosition } from "@floating-ui/dom"
import { VueRenderer } from "@tiptap/vue-3"
import { filterEmojiArray } from "tiptap"

export const emojiSuggestions = {
  command: ({ editor, props, range }) => {
    // Replace the trigger and query with the emoji character
    editor
      .chain()
      .focus()
      .insertContentAt(range, `${props.emoji} `) // props.emoji = actual emoji char
      .run()
  },
  items: ({ editor, query }) => {
    return filterEmojiArray(editor)
      .filter(({ shortcodes, tags }) => {
        const q = query.toLowerCase()
        return (
          shortcodes.some((s) => s.startsWith(q)) ||
          tags.some((t) => t.startsWith(q))
        )
      })
      .slice(0, 20)
  },
  render: () => {
    let component

    function repositionComponent(clientRect) {
      if (!component || !component.element) return

      const virtualElement = { getBoundingClientRect: () => clientRect }

      computePosition(virtualElement, component.element, {
        placement: "bottom-start",
      }).then((pos) => {
        Object.assign(component.element.style, {
          left: `${pos.x}px`,
          position: pos.strategy === "fixed" ? "fixed" : "absolute",
          top: `${pos.y}px`,
        })
      })
    }

    return {
      onExit() {
        if (document.body.contains(component.element))
          document.body.removeChild(component.element)
        component.destroy()
      },
      onKeyDown(props) {
        if (props.event.key === "Escape") {
          document.body.removeChild(component.element)
          component.destroy()
          return true
        }
        return component.ref?.onKeyDown(props)
      },
      onStart(props) {
        component = new VueRenderer(EmojiList, {
          editor: props.editor,
          props,
        })
        document.body.appendChild(component.element)
        repositionComponent(props.clientRect())
      },
      onUpdate(props) {
        component.updateProps(props)
        repositionComponent(props.clientRect())
      },
    }
  },
}
