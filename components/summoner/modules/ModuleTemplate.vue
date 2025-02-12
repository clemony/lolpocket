<script lang="ts" setup>
const props = defineProps<{
  title?: string
  dragging?: boolean
  drawer?: boolean
  moduleName?: string
  index?: number
}>()

const as = useAccountStore()

function handleRemove() {
  console.log('💠 - handleRemove - as.userBoardModules:  removed', as.userBoardModules[props.index].name)
  as.userBoardModules.splice(props.index, 1)
}
console.log('💠 - handleRemove - as.userBoardModules:', as.userBoardModules)
</script>

<template>
  <div class="w-[99%] h-[99%] border-b3/60  border  bg-b1 pt-3 rounded-xl shadow-smooth drop-shadow-md  gap-3 justify-center **:select-none">
    <div class="overflow-hidden transition-all grid-cols-1 duration-300 grid grid-rows-[20px_auto]">
      <div class="  pb-1  opacity-50  font-medium flex items-center f-tt text-2 px-5">
        <span class="capitalize grow tracking-wide"> {{ props.title }}</span>
        <CloseButton tip="Close Module" @click="handleRemove()" class="btn-ghost" />
      </div>

      <div class="h-full items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>