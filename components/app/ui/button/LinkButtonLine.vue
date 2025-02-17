<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  active?: boolean
}>()

watch(
() => props.active,
(newVal) => {
 console.log("💠 - newVal:", newVal)
 
}
)
</script>

<template>
  <div :class="cn('relative', props.class)">
    <slot />
    <span
      class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-current group-hover:w-full group-focus:w-full"
      :class="{'w-full': props.active == true}"
    ></span>
  </div>
</template>

<style scoped>

</style>
