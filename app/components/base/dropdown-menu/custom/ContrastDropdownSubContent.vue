<script lang="ts" setup>
import {
  DropdownMenuPortal,
} from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      v-bind="$attrs"
      :class="cn(' rounded-lg ml-1  border-b4/30 border  bg-n1/74 backdrop-blur-lg p-1 text-nc/80 text-2 ', props.class)">
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>