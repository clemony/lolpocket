<script lang="ts" setup>
const props = defineProps<{
  isOpen?: boolean
}>()
</script>

<template>
  <div class="grid place-items-center size-full">
    <slot />
    <icon
      name="fluent:line-horizontal-3-28-regular"
      class="size-6 shrink-0 stoke-1  dst transition-all duration-300 group-hover:stroke-2 group-hover:scale-x-15 group-hover:scale-y-130"
      :class="{ 'scale-y-150 stroke-1.5 scale-x-15 group-hover:scale-x-100 group-hover:scale-y-[92%] group-hover:stroke-1  transition-all duration-300 ': isOpen }" />
  </div>
</template>

<style scoped>

</style>