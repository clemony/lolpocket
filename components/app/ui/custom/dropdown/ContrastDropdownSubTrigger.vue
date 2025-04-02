<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>

  <DropdownMenuSubTrigger
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 !text-2 outline-none focus:bg-accent data-[state=open]:bg-accent text-nc',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuSubTrigger>
</template>