<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label class="input" :class="cn('relative max-w-100 items-center', props.class)">
    <icon
      name="teenyicons:search-outline"
      class="pointer-events-none  size-4 shrink-0 opacity-70" />

    <slot />
    <button  v-bind="$attrs" class="btn btn-ghost btn-square btn-sm absolute  right-2" >
      <icon name="x-sm" class="" />
    </button>
  </label>
</template>