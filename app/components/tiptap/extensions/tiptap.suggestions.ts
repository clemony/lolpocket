import { EmojiList, MentionFilter } from '#components'
import { computePosition, flip, shift } from '@floating-ui/dom'
import { posToDOMRect, VueRenderer } from '@tiptap/vue-3'

function updatePosition(editor, element) {
  const virtualElement = {
    getBoundingClientRect: () => posToDOMRect(editor.view, editor.state.selection.from, editor.state.selection.to),
  }

  computePosition(virtualElement, element, {
    middleware: [shift(), flip()],
    placement: 'bottom-start',
    strategy: 'absolute',
  }).then(({ strategy, x, y }) => {
    element.style.width = 'max-content'
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
        if (!component)
          return

        // cleanup listeners and element
        component.element.removeEventListener('mousedown', mousedownHandler)
        window.removeEventListener('keydown', onKeydownForward, { capture: true } as any)

        component.destroy()
        component = null
        propsRef = null
      },
      onKeyDown(props) {
      // This is called by TIPTAP when a key is pressed and the suggestion system wants the suggestion
      // to handle it. We'll prefer to let Tiptap call into the mounted component's ref if possible.
      // If the component isn't there yet, return false so editor handles it.
        try {
          return component?.ref?.onKeyDown?.(props)
        }
        catch {
          return false
        }
      },
      onStart(props) {
        propsRef = props
        component = new VueRenderer(c, {
          editor: props.editor,
          props,
        })

        if (!props.clientRect)
          return

        const el = component.element
        el.classList.add('absolute')

        // Prevent the element from receiving focus on mount or click.
        // But allow clicks to work. We'll allow some elements to receive focus/clicks by checking targets.
        el.setAttribute('tabindex', '-1')

        mousedownHandler = (e: MouseEvent) => {
        // allow interactive elements inside the popup to behave normally (buttons, inputs, role=option)
          const target = e.target as HTMLElement | null
          if (!target) {
            e.preventDefault()
            return
          }

          // if the click target is an interactive element, do NOT preventDefault:
          if (
            target.matches('button, [role="option"], [role="menuitem"], input, textarea, a, [data-focusable]')
          ) {
          // allow normal behavior (click / focus) for those
            return
          }

          // otherwise prevent default so the editor keeps focus
          e.preventDefault()
        }

        el.addEventListener('mousedown', mousedownHandler, { passive: false })

        // Append (mount) the component
        document.body.appendChild(el)
        updatePosition(props.editor, el)

        // Key forwarding: capture arrow/enter/escape/tab keys and forward to the suggestion's onKeyDown
        onKeydownForward = (e: KeyboardEvent) => {
          if (!component || !component.ref)
            return

          // which keys we want forwarded:
          const forwardKeys = [
            'ArrowUp',
            'ArrowDown',
            'Enter',
            'Escape',
            'Tab', // optional: if you want Tab to select
            'Home',
            'End',
          ]

          if (!forwardKeys.includes(e.key))
            return

          // Build a props-like object similar to Tiptap's onKeyDown signature:
          const keyProps = {
            editor: props.editor,
            range: props.range,
            // `event` is the important part for Tiptap handler
            clientRect: props.clientRect,
            command: props.command,
            event: e,
            items: props.items,
          }

          // Let the component decide what to do — if it handled the key, prevent default on the original event
          try {
            const handled = component.ref?.onKeyDown?.(keyProps)
            if (handled)
              e.preventDefault()
          }
          catch (err) {
          // swallow to avoid breaking editor if something odd happens
          // console.warn('suggestion forward error', err)
          }
        }

        // Use capture so it intercepts keystrokes before other listeners can blur editor
        window.addEventListener('keydown', onKeydownForward, { capture: true })
      },
      onUpdate(props) {
        propsRef = props
        if (!component)
          return
        component.updateProps(props)
        if (!props.clientRect)
          return
        updatePosition(props.editor, component.element)
      },
    }
  }
}

export const mentionSuggestions = [
  {
    char: '@',
    items: ({ query }) => {
      return [
        'Lea Thompson',
        'Cyndi Lauper',
        'Tom Cruise',
        'Madonna',
        'Jerry Hall',
        'Joan Collins',
        'Winona Ryder',
        'Christina Applegate',
        'Alyssa Milano',
        'Molly Ringwald',
        'Ally Sheedy',
        'Debbie Harry',
        'Olivia Newton-John',
        'Elton John',
        'Michael J. Fox',
        'Axl Rose',
        'Emilio Estevez',
        'Ralph Macchio',
        'Rob Lowe',
        'Jennifer Grey',
        'Mickey Rourke',
        'John Cusack',
        'Matthew Broderick',
        'Justine Bateman',
        'Lisa Bonet',
      ]
        .filter(item => item.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5)
    },
    render: renderSuggestion(MentionFilter),
  },
  {
    char: '#',
    items: ({ query }) => {
      return [...ix().items, ...ix().champions]
        .filter(item => item.name.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5)
    },
    render: renderSuggestion(MentionFilter)
  },
]