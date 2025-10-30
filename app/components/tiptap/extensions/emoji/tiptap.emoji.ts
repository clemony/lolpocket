import { computePosition } from '@floating-ui/dom'
import { VueRenderer } from '@tiptap/vue-3'
import EmojiList from './EmojiList.vue'

export const emojiSuggestions = {
  items: ({ editor, query }) => {
    return editor.storage.emoji.emojis
      .filter(({ shortcodes, tags }) => {
        return (
          shortcodes.find(shortcode => shortcode.startsWith(query.toLowerCase()))
          || tags.find(tag => tag.startsWith(query.toLowerCase()))
        )
      })
      .slice(0, 20)
  },
  render: () => {
    let component

    function repositionComponent(clientRect) {
      if (!component || !component.element) {
        return
      }

      const virtualElement = {
        getBoundingClientRect() {
          return clientRect
        },
      }

      computePosition(virtualElement, component.element, {
        placement: 'bottom-start',
      }).then((pos) => {
        Object.assign(component.element.style, {
          left: `${pos.x}px`,
          position: pos.strategy === 'fixed' ? 'fixed' : 'absolute',
          top: `${pos.y}px`,
        })
      })
    }

    return {
      onExit() {
        if (document.body.contains(component.element)) {
          document.body.removeChild(component.element)
        }
        component.destroy()
      },
      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          document.body.removeChild(component.element)
          component.destroy()

          return true
        }

        return component.ref?.onKeyDown(props)
      },
      onStart: (props) => {
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