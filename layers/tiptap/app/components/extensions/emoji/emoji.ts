/* import { VueRenderer } from "@tiptap/vue-3"
import { useTippy } from "vue-tippy"
import EmojiList from "./EmojiList.vue"

export const emojiSuggestions = {
  command: ({ editor, props, range }) => {
    editor
      .chain()
      .focus()
      .insertContentAt(range, `${props.emoji} `)
      .run()
  },
  items: ({ editor, query }) => {
    return filterEmoji(editor)
      .filter(({ shortcodes, tags }) => {
        const q = query.toLowerCase()
        return (
          shortcodes.some((s) => s.startsWith(q)) ||
          tags.some((t) => t.startsWith(q))
        )
      })
      .slice(0, 20)
  },
  render() {
    let renderer
    let instance

    return {
      onStart(props) {
        renderer = new VueRenderer(EmojiList, {
          editor: props.editor,
          props,
        })

        instance = useTippy("body", {
          appendTo: () => document.body,
          content: renderer.element,
          placement: "bottom-start",
          trigger: "manual",
        })

        instance.show()
        instance.popperInstance.update()
      },

      onUpdate(props) {
        renderer.updateProps(props)
        instance.popperInstance.update()
      },

      onKeyDown(props) {
        return renderer.ref?.onKeyDown(props)
      },

      onExit() {
        instance.destroy()
        renderer.destroy()
      },
    }
  },
}
 */
