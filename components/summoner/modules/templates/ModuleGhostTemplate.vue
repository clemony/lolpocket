<script lang="ts" setup>
const props = defineProps<{
  title?: string
  dragging?: boolean
  moduleName?: string
  index?: number
}>()

const as = useAccountStore()
</script>

<template>
  <div class="w-[99%] h-[99%] border-b3/60 max-w-82 border  bg-b1 pt-3 rounded-xl  shadow-little shadow-black/12 flex flex-col gap-3 justify-center **:select-none">
    <div class="overflow-hidden transition-all duration-300 h-46">
      <div class="  pb-1   opacity-70  font-medium flex items-center f-tt text-2 px-5">
        <span class="capitalize grow tracking-wide"> {{ props.title }}</span>
      </div>

      <div class="px-5 py-3 h-full items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>