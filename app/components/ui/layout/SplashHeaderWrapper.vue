<script lang="ts" setup>
const { stuck, class: className } = defineProps<{
  stuck?: boolean
  class?: HTMLAttributes['class']
}>()

const test = ref(false)
</script>

<template>
  <div
    :class="cn('z-0 size-full absolute bg-b2/30 overflow-hidden grid items-start justify-end right-0 top-0', className)">
    <div
      class="size-fit  translate-x-[12%]   translate-y-[5%]  min-h-240 min-w-440 relative *:absolute *:shrink-0   *:size-full *:mask-linear-[to_right,transparent_15%,black_60%] *:object-cover"
      :class="cn('', { '': !stuck })">
      <slot />
    </div>
  </div>
</template>