<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <PopoverTrigger
    class=" border-b3/70 bg-b1/60 relative  inset-shadow-xs flex px-3 py-2 items-center border h-12 transition-opacity  gap-4 text-bc/50 duration-100 rounded-lg w-90" :class="{ 'opacity-0': props.isOpen }">
    <icon name="search" class="size-5 shrink-0 opacity-60 dst text-bc z-1 " />
    <div class="grow pt-0.5 text-left dst z-0">
      Search Items...
    </div>
    <slot />
  </PopoverTrigger>
</template>