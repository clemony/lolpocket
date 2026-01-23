<script lang="ts" setup>
import { DropdownMenuPortal } from 'reka-ui'

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
      :class="
        cn('bgneutral/74 border-b4/30 text-nc/80 ml-1 rounded-lg border p-1 text-sm backdrop-blur-lg',
           props.class,
        )
      ">
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
