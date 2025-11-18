<script setup lang="ts">
const { class: className, value } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuRadioItem
    :value="value"
    :class="
      cn('pl-10 text-2 text-nc/90! hover:bg-b3/15! [&_svg]:text-nc',
        className,
      )
    ">
    <slot />
  </DropdownMenuRadioItem>
</template>
