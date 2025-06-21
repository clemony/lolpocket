<script lang="ts" setup>
const props = defineProps<{
  isOpen?: boolean
  model?: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button class=" " :class="cn('btn btn-ghost btn-square grid place-items-center group', props.class)">
    <slot />

    <icon
      name="fluent:line-horizontal-3-28-regular"
      class="size-5 shrink-0 stoke-1  dst transition-all duration-300 group-hover:stroke-2 group-hover:scale-x-15 group-hover:scale-y-130"
      :class="{ 'scale-y-150 stroke-1.5 scale-x-15 group-hover:scale-x-100 group-hover:scale-y-[92%] group-hover:stroke-1  transition-all duration-300 ': props.isOpen || props.model }" />
  </button>
</template>

<style scoped>

</style>