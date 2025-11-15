<script setup lang="ts">
import { exitSuggestion, SuggestionPluginKey } from '@tiptap/suggestion'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const { command, editor, items } = defineProps<{
  class?: HTMLAttributes['class']
  items: Index[]
  editor: any
  command: (payload: {
    'data-id': number
    'data-key': string
    'data-name': string
  }) => any
}>()

const selectedIndex = ref(0)
const selectedItem = computed<Index>(() => items[selectedIndex.value])

function update() {
  if (!selectedItem.value)
    return
  command({
    'data-id': selectedItem.value.id,
    'data-key': selectedItem.value.key,
    'data-name': selectedItem.value.name,
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
  isKeyForward: e => e.key === 'ArrowDown',
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

onClickOutside(target, (event) => {
  deactivate()
  exitSuggestion(editor.view, SuggestionPluginKey)
})
</script>

<template>
  <div
    data-theme="base"
    :class="
      cn(
        `tippy-box grid h-full max-h-10 min-h-10 min-w-34 overflow-hidden p-0!`,
        { ' max-h-50  min-w-44': items.length },
      )
    ">
    <SlideInTopOutBottom
      ref="target"
      class="tippy-content h-full overflow-y-auto p-1.5!">
      <div
        v-if="items.length"
        class="flex h-max w-full flex-col">
        <PopoverItem
          v-for="(item, index) in items"
          :id="index"
          :key="index"
          tabindex="0"
          :value="item"
          :class="
            cn(
              `
                pr-8 transition-discrete
                focus:bg-b2/60
              `,
              `
                index-${index}
              `,
            )
          "
          @mousedown.prevent="
            selectedIndex = index;
            update();
          ">
          <IndexIcon
            :item
            class="size-6 rounded-full!" />
          {{ item.name }}
        </PopoverItem>
      </div>
      <div
        v-else
        class="eslf-center grid size-full place-items-center">
        <span
          class="
            inline-flex -translate-x-0.25 items-center gap-0.75 align-middle
          ">
          <icon
            name="ban"
            class="
              -mt-[0.5px] inline size-3.5 align-middle
              **:stroke-[2.2]
            " />
          No result
        </span>
      </div>
    </SlideInTopOutBottom>
  </div>
</template>
