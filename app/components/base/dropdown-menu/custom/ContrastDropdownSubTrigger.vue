<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuSubTrigger
    :class="cn(
      ' focus:bg-b3/15 cursor-pointer gap-3 data-[state=open]:bg-b3/15  !text-nc/90 text-2',
      props.class,
    )">
    <slot />
  </DropdownMenuSubTrigger>
</template>