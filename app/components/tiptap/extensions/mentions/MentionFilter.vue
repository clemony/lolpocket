<script setup lang="ts">
import { exitSuggestion } from '@tiptap/suggestion'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

type Index = ItemIndex | ChampionIndex

const { class: className, command, editor, items } = defineProps<{
  class?: HTMLAttributes['class']
  items: Index[]
  editor: any
  command: (payload: { item: { id: number, key: string, name: string }, label: string }) => any
}>()

const selectedIndex = ref(0)
const selectedItem = computed<Index>(() => items[selectedIndex.value])
function update() {
  if (!selectedItem.value)
    return
  command({
    item: selectedItem.value,
    label: selectedItem.value?.key === selectedItem.value?.id.toString() ? 'item' : 'champion'
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
    class="bg-b1/88 z-20 max-h-70 min-w-44 overflow-auto px-1 py-1.5 backdrop-blur-md">
    <SlideInTopOutBottom
      ref="target"
      class="flex size-full  flex-col transition-discrete">
      <template
        v-if="items.length">
        <PopoverItem
          v-for="(item, index) in items"
          :id="index"
          :key="index"
          tabindex="0"
          :value="item"
          :class="cn('transition-discrete focus:bg-b2/60 pr-8', `index-${index}`)"
          @mousedown.prevent="selectedIndex = index; update()">
          <Item
            v-if="item?.key === item?.id.toString()"
            :id="Number(item?.id)"
            class="size-6 rounded-full" />
          <ChampionIcon
            v-else
            class="size-6 rounded-full"
            :k="String(item.key)" />
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
