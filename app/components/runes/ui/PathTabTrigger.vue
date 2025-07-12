<script lang="ts" setup>
/*
      :style="{
        background: modelValue == set.primary.path && path == set.primary.path ? `linear-gradient(110deg, transparent, var(--color-${set.primary.path.toLowerCase()}))` : modelValue == set.secondary.path && path == set.secondary.path ? `linear-gradient(110deg, transparent, var(--color-${set.secondary.path.toLowerCase()}))` : '' }" */

defineOptions({
  inheritAttrs: false,
})

const { value, class: className } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:path'])
</script>

<template>
  <IndicatorTabsTrigger
    v-tippy="value"
    :value="value"
    class=" rounded-full relative group aspect-square size-15 place-self-center disabled:pointer-events-none shrink-0" :class="cn('', className)">
    <div class="size-full relative grid place-items-center">
      <Img
        :img="`/img/runes/${value}.webp`"
        :alt="`${value} icon`"
        class="z-10 h-9 w-auto absolute brightness-90 grayscale transition-all duration-300 dst shrink-0 group-data-[state=active]:grayscale-0 group-data-[state=active]:brightness-100" />
    </div>

    <slot />
  </IndicatorTabsTrigger>
</template>

<style scoped>

</style>