<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  index: number
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const ts = useTempStore()
    console.log("💠 - as.userModuleCount:", as.userModuleCount)
</script>

<template>
  <button
    class="opacity-0 hover:opacity-100 cursor-pointer bg-b2/0 border hover:border-b2 inset-shadow-sm border-transparent  transition-all duration-250  shrink-0 w-[99%] h-[99%]  rounded-xl select-none  grid place-items-center relative grow min-h-[300px]"
    :class="cn({ 'opacity-100 border-b2 bg-b2/20 hover:!bg-b2/30 hover:border-b3 hover:[&_svg]:opacity-70': props.index == 0 && as.userModuleCount == 0}, props.class)"
    @click="ts.moduleDrawerTrigger = true"
  >
    <icon name="add" class="size-5.5 dst stroke-[1.1] transition-all duration-250 opacity-40" />
  </button>
</template>

<style scoped>

</style>