import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

interface SmartShortcutOptions {
  // Array of keys that make up the shortcut
  keys: string[]
  // CSS selector for the context in which the shortcut should work
  contextSelector: string
  // Callback function to run when shortcut is triggered
  onTrigger: (e: KeyboardEvent) => void
  // Whether to prevent default browser behavior
  preventDefault?: boolean
}

/**
 * Prevents conflicts with other global shortcuts
 */
export function useSmartShortcut(options: SmartShortcutOptions): { keysPressed: Ref<Set<string>> } {
  const {
    keys,
    contextSelector,
    onTrigger,
    preventDefault = true,
  } = options

  const keysPressed = ref<Set<string>>(new Set())
  const controller = new AbortController()

  const normalizeKey = (key: string): string => {
    const keyMap: Record<string, string> = {
      Alt: 'Alt',
      Cmd: 'Meta',
      Ctrl: 'Control',
      Shift: 'Shift',
    }
    return keyMap[key] || key
  }

  const normalizedKeys = keys.map(k =>
    normalizeKey(k.charAt(0).toUpperCase() + k.slice(1).toLowerCase()),
  )

  const handleKeyDown = (e: KeyboardEvent): void => {
    const key = e.key === ' ' ? 'Space' : e.key
    const currentKey = key.length === 1 ? key.toLowerCase() : key

    // Track pressed key
    keysPressed.value.add(currentKey)

    // Build currently pressed keys
    const activeKeys = new Set<string>()
    if (e.ctrlKey)
      activeKeys.add('Control')
    if (e.metaKey)
      activeKeys.add('Meta')
    if (e.altKey)
      activeKeys.add('Alt')
    if (e.shiftKey)
      activeKeys.add('Shift')
    activeKeys.add(currentKey)

    // Check if the exact combination is matched
    const isMatch
      = normalizedKeys.length === activeKeys.size
        && normalizedKeys.every(k => activeKeys.has(k) || activeKeys.has(k.toLowerCase()))

    if (isMatch) {
      const targetElement = e.target as HTMLElement
      const isInContext = targetElement.closest(contextSelector) !== null
      if (isInContext) {
        e.stopPropagation()
        if (preventDefault)
          e.preventDefault()
        onTrigger(e)
      }
    }
  }

  const handleKeyUp = (e: KeyboardEvent): void => {
    const key = e.key === ' ' ? 'Space' : e.key
    const currentKey = key.length === 1 ? key.toLowerCase() : key
    keysPressed.value.delete(currentKey)

    // Also clear modifier keys when they're lifted
    if (!e.ctrlKey)
      keysPressed.value.delete('Control')
    if (!e.metaKey)
      keysPressed.value.delete('Meta')
    if (!e.altKey)
      keysPressed.value.delete('Alt')
    if (!e.shiftKey)
      keysPressed.value.delete('Shift')
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown, { capture: true, signal: controller.signal })
    document.addEventListener('keyup', handleKeyUp, { capture: true, signal: controller.signal })
    window.addEventListener('blur', () => keysPressed.value.clear(), { signal: controller.signal })
  })

  onUnmounted(() => {
    controller.abort()
  })

  return { keysPressed }
}