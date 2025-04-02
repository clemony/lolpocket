<script lang="ts" setup>
import {
  DropdownMenuPortal
} from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>



<template>
    <DropdownMenuPortal>
<DropdownMenuSubContent
    :class="cn(' rounded-lg ml-1  border-accent  bg-neutral/80 backdrop-blur-md p-1 text-nc ', props.class)"
  >
    <slot />
  </DropdownMenuSubContent>
    </DropdownMenuPortal>
</template>