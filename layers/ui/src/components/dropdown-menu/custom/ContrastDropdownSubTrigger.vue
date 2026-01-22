<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuSubTrigger
    :class="
      cn('cursor-pointer gap-3 text-sm text-nc/90! focus:bg-b3/15 data-[state=open]:bg-b3/15',
        props.class,
      )
    ">
    <slot />
  </DropdownMenuSubTrigger>
</template>
