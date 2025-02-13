<script lang="ts" setup>
const props = defineProps<{
  title?: string
  dragging?: boolean
  drawer?: boolean
  moduleName?: string
  index?: number
  class?: HTMLAttributes['class']

}>()

const as = useAccountStore()

function handleRemove() {
  console.log('💠 - handleRemove - as.userBoardModules:  removed', as.userBoardModules[props.index].name)
  as.userBoardModules.splice(props.index, 1)
}
console.log('💠 - handleRemove - as.userBoardModules:', as.userBoardModules)
</script>

<template>
  <div :class="cn('w-[97%] h-[97%] border-b3/60  border  bg-b1 pt-3 rounded-xl shadow-sm gap-3 justify-center **:select-none', props.class)">
    <div class=" transition-all grid-cols-1 duration-300 grid grid-rows-[20px_auto]">
      <div class="  pb-1  opacity-50  font-medium flex items-center f-tt text-2 pl-5 pr-4">
        <span class="capitalize grow tracking-wide"> {{ props.title }}</span>
        <CloseButton tip="Close Module" class="btn-ghost" @click="handleRemove()" />
      </div>

      <div class="h-full items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>