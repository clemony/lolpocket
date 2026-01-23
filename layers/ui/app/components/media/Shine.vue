<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const target = ref()
const { isOutside } = useMouseInElement(target)
</script>

<template>
  <label
    ref="target"
    :class="
      cn('flex items-center justify-center rounded-full border border-transparent shadow-sm',
         props.class,
      )
    ">
    <div
      :class="
        cn('group relative flex items-center justify-center overflow-hidden rounded-full',
           props.class,
        )
      ">
      <slot />

      <div
        class="
          absolute top-0 z-5 block h-full w-1/2 -translate-x-[150%] -skew-x-12
          transform bg-linear-to-r from-transparent to-white/40 opacity-0
          transition-all duration-400 group-hover:translate-x-full
          group-hover:opacity-100
        "
        :class="{ 'hidden opacity-0': isOutside }" />
    </div>
  </label>
</template>
