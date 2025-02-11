<script lang="ts" setup>
const props = defineProps<{
  title: string
  dragging?: boolean
  drawer?: boolean
}>()
</script>

<template>
  <div class="w-110 cursor-pointer border-b3/60  border  bg-b1 py-5 rounded-lg shadow-md flex flex-col gap-3 px-6 justify-center **:select-none">
    <div class="overflow-hidden transition-all duration-300" :class="{ 'h-46': props.drawer, 'h-86 !overflow-auto': props.dragging }">
      <div class="  opacity-60 tracking-wide font-semibold pb-1 f-tt text-3">
        {{ props.title }}
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>