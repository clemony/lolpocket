<script lang="ts" setup>
/*
      :style="{
        background: modelValue === set.primary.path && path === set.primary.path ? `linear-gradient(110deg, transparent, var(--color-${set.primary.path.toLowerCase()}))` : modelValue === set.secondary.path && path === set.secondary.path ? `linear-gradient(110deg, transparent, var(--color-${set.secondary.path.toLowerCase()}))` : '' }" */

defineOptions({
  inheritAttrs: false,
})

const { class: className, value } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:path'])
</script>

<template>
  <TabsTrigger
    :value="value"
    class="
      group relative aspect-square size-15 shrink-0 place-self-center
      rounded-full disabled:pointer-events-none
    "
    :class="cn('', className)">
    <div class="relative grid size-full place-items-center">
      <img
        :src="`/img/paths/${value}.webp`"
        :alt="`${value} icon`"
        class="
          absolute z-10 h-9 w-auto shrink-0 brightness-90 dst grayscale
          transition-all duration-300 group-data-[state=active]:brightness-100
          group-data-[state=active]:grayscale-0
        " />
    </div>

    <slot />
  </TabsTrigger>
</template>

<style scoped></style>
