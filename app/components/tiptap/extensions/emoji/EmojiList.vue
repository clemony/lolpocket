<script setup lang="ts">
import type { Editor, EmojiItem } from '~tiptap'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const { class: className, command, items } = defineProps<{
  class?: HTMLAttributes['class']
  items: EmojiItem[]
  editor: Editor | null
  command: (payload: { name: string }) => any
}>()

const selectedIndex = ref(0)
const selectedItem = computed(() => items[selectedIndex.value])
function update() {
  if (!selectedItem.value)
    return
  command({ name: selectedItem.value.name })
}

// 🔹 Handle key presses passed from the Tiptap suggestion utility
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

defineExpose({ onKeyDown })

const { arrowdown, arrowup } = useMagicKeys()
const activationKey = shallowRef<string>('.index-0')
const target = useTemplateRef<HTMLDivElement>('target')
const { activate, deactivate, hasFocus } = useFocusTrap(target, {
  clickOutsideDeactivates: true,
  initialFocus: activationKey.value,
  isKeyBackward: e => e.key === 'ArrowUp',
  isKeyForward: e => e.key === 'ArrowDown'
})

watch(arrowdown, (v) => {
  if (v && !hasFocus.value) {
    activationKey.value = '.index-0'
    nextTick(() => {
      activate()
    })
  }
})

watch(arrowup, (v) => {
  if (v && !hasFocus.value) {
    activationKey.value = `.index-${items.length - 1}`
    console.log('🌱 - activationKey.value :', activationKey.value)
    nextTick(() => {
      activate()
    })
  }
})
</script>

<template>
  <div
    ref="target"
    data-theme="base"
    class="tippy-box grid min-w-54 grid-cols-5 gap-x-1 gap-y-0.5 px-2 py-2">
    <template
      v-if="items.length">
      <Button
        v-for="(item, index) in items"
        :id="index"
        :key="index"
        size="sq-9"
        variant="ghost"
        hover="inset"
        tabindex="0"
        :class="cn('text-6', `index-${index}`)"
        @click="editor.chain().focus().setEmoji(item.name).run()">
        <span class="dss drop-shadow-black/20">
          {{ item.emoji }}
        </span>
      </Button>
    </template>
    <div
      v-else
      class="justify-center">
      No result
    </div>
  </div>
</template>
