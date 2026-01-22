<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <Button
    v-tooltip="'Menu'"
    :class="cn('group/logo shrink-0', className)"
    variant="neutral"
    tabindex="0"
    size="sq-10">
    <h5
      class="absolute justify-self-center font-bold opacity-100 transition-all duration-300 group-hover/logo:scale-0 group-hover/logo:opacity-0">
      LP
    </h5>
    <icon
      name="menu"
      class="absolute scale-0 justify-self-center opacity-0 transition-all duration-300 group-hover/logo:scale-100 group-hover/logo:opacity-100" />
  </Button>
</template>