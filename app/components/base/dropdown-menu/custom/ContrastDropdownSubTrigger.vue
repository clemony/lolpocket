<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>

  <DropdownMenuSubTrigger
    :class="cn(
      ' focus:bg-accent cursor-pointer gap-3 data-[state=open]:bg-accent text-nc',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuSubTrigger>
</template>