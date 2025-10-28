<script setup lang="ts">
import { exitSuggestion } from '@tiptap/suggestion'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

type Index = Array<Record<string, string | number>>

const { class: className, command, editor, items } = defineProps<{
  class?: HTMLAttributes['class']
  items: Index
  editor: any
  command: (payload: { id: string | number, label: string }) => any
}>()

const selectedIndex = ref(0)
const selectedItem = computed<Record<string, string | number>>(() => items[selectedIndex.value])
function update() {
  if (!selectedItem.value)
    return
  command({
    id: selectedItem.value?.key ? selectedItem.value?.key : selectedItem.value?.id,
    label: selectedItem.value?.key ? 'champions' : 'items'
  })
  exitSuggestion(editor.view, 'suggestion' as any)
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
  <Card
    ref="target"
    class="bg-b1/88 backdrop-blur-md min-w-44 px-1 py-1.5 overflow-hidden">
    <SlideInTopOutBottom class="size-full transition-discrete  flex flex-col">
      <template
        v-if="items.length">
        <PopoverItem
          v-for="(item, index) in items"
          :id="index"
          :key="index"
          tabindex="0"
          :value="item"
          :class="cn('transition-discrete pr-8', `index-${index}`)"
          @mousedown.prevent="selectedIndex = index; update()">
          <ChampionIcon
            v-if="item?.key"
            class="size-6 rounded-full"
            :k="String(item.key)" />
          <Item
            v-else
            :id="Number(item?.id)"
            class="size-6 rounded-full" />
          {{ item.name }}
        </PopoverItem>
      </template>
      <div
        v-else
        class="justify-center">
        No result
      </div>
    </SlideInTopOutBottom>
  </Card>
</template>
