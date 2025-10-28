<script setup lang="ts">
import { EmojiList } from '#components'

const { icon } = defineProps<{
  icon: string
}>()
const isShown = shallowRef<boolean>(false)
watch(() => isShown.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <tippy
    :interactive="true"
    trigger="click"
    :hide-on-click="true"
    class="size-min  *:!bg-transparent"
    :offset="[9, 4]"
    placement="top-end"
    theme="transparent"
    @trigger="isShown = true"
    @hidden="isShown = false">
    <slot />

    <Button
      ref="triggerEl"
      size="sq"
      class="size-7"
      :variant="isShown ? 'inset' : 'ghost'"
      active="none"
      hover="btn">
      <hicon
        :name="icon"
        class="!size-4 group-focus-within/text:opacity-90 group-hover/text:opacity-90 opacity-90 transition-all duration-100 opacity-60" />
    </Button>

    <template #content>
    </template>
  </tippy>
</template>