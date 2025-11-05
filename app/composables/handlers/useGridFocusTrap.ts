import { onKeyStroke, useMagicKeys } from '@vueuse/core'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

interface GridFocusTrapOptions<T> {
  columnWidth?: number
  items: Ref<T[]>
  onSelect?: (item: T) => void
}

export function useGridFocusTrap<T>(
  target: Ref<HTMLElement | null>,
  { columnWidth = 5, items, onSelect }: GridFocusTrapOptions<T>
) {
  const selectedIndex = ref(0)
  const selectedItem = computed(() => items.value[selectedIndex.value])
  const activationKey = ref('.index-0')

  const { activate, deactivate, hasFocus } = useFocusTrap(target, {
    clickOutsideDeactivates: true,
    initialFocus: activationKey.value,
    isKeyBackward: e => e.key === 'ArrowLeft',
    isKeyForward: e => e.key === 'ArrowRight'
  })

  function update() {
    if (!selectedItem.value)
      return
    onSelect?.(selectedItem.value)
  }

  function onKeyDown({ event }: { event: KeyboardEvent }) {
    switch (event.key) {
      case 'Enter':
        update()
        event.preventDefault()
        return true
      case 'Escape':
        return false
    }
    return false
  }

  // Keyboard navigation (grid-aware)
  onKeyStroke(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'], (e) => {
    if (!hasFocus.value)
      return
    const total = items.value.length
    let next = selectedIndex.value

    if (e.key === 'ArrowLeft')
      next = Math.max(0, next - 1)
    if (e.key === 'ArrowRight')
      next = Math.min(total - 1, next + 1)
    if (e.key === 'ArrowUp')
      next = Math.max(0, next - columnWidth)
    if (e.key === 'ArrowDown')
      next = Math.min(total - 1, next + columnWidth)

    selectedIndex.value = next
    e.preventDefault()

    const el = target.value?.querySelector<HTMLElement>(`.index-${next}`)
    el?.focus()
  })

  // Auto-activate trap on first arrow key press
  const { arrowdown, arrowup } = useMagicKeys()

  watch(arrowdown, (v) => {
    if (v && !hasFocus.value) {
      activationKey.value = '.index-0'
      nextTick(() => activate())
    }
  })

  watch(arrowup, (v) => {
    if (v && !hasFocus.value) {
      activationKey.value = `.index-${items.value.length - 1}`
      nextTick(() => activate())
    }
  })

  return {
    activate,
    deactivate,
    hasFocus,
    onKeyDown,
    selectedIndex,
    selectedItem
  }
}