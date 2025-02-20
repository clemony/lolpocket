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
// console.log('💠 - handleRemove - as.userBoardModules:', as.userBoardModules)
</script>

<template>
  <div :class="cn('size-[96%]  relative border group border-transparent  rounded-xl transition-all duration-300 gap-3 justify-center shadow-warm-2 **:select-none', props.class)">
    <div class="absolute w-full pt-3 justify-end pb-1  opacity-50  font-medium flex items-center f-tt text-2 pl-5 pr-4">
      <span class="capitalize tracking-wide"> {{ props.title }}</span>
      <CloseButton tip="Close Module" class="opacity-0 group-hover:opacity-100 btn-ghost" @click="handleRemove()" />
    </div>

    <div class="absolute grid inset-0 items-center rounded-xl overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>