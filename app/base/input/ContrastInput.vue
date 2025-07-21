<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
  inputClass?: HTMLAttributes['class']
  search?: boolean
  placeholder?: string
}>()
</script>

<template>
  <div :class="cn(' text-3 items-center gap-4  flex h-12 border py-3.5 px-3 input w-full  shadow-sm drop-shadow-sm !bg-n1/85 inset-shadow-sm border-accent text-nc **:text-nc', props.class)">
    <icon
      v-if="props.search"
      name="search"
      class="pointer-events-none size-5 opacity-80" />

    <input
      v-bind="$attrs"
      :placeholder="props.placeholder"
      :class="cn('text-3  outline-0 ring-0 border-0 flex h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0', props.inputClass)" />

    <slot />
  </div>
</template>