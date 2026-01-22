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
        cn('bgneutral/74 ml-1 rounded-lg border border-b4/30 p-1 text-sm text-nc/80 backdrop-blur-lg',
          props.class,
        )
      ">
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
