<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <button
    class=" border-b3/70 bg-b1/60  inset-shadow-xs flex px-3 py-2 items-center border h-12 [&_svg]:size-4 transition-opacity  gap-4 text-bc/50 duration-100 rounded-lg w-90" :class="{ 'opacity-0': props.isOpen }">
    <icon name="search" class="size-4 dst" />
    <div class="grow pt-0.5 text-left dst">
      Search Items...
    </div>
    <slot />
  </button>
</template>