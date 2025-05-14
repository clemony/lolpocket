<script lang="ts" setup>
import {
  DropdownMenuPortal
} from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

defineOptions({
inheritAttrs: false
})
</script>



<template>
    <DropdownMenuPortal>
<DropdownMenuSubContent
v-bind="$attrs"
    :class="cn(' rounded-lg ml-1  border-b3/50 border  bg-neutral/80 backdrop-blur-md p-1 text-nc ', props.class)"
  >
    <slot />
  </DropdownMenuSubContent>
    </DropdownMenuPortal>
</template>