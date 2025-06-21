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
  <div :class="cn('h-10 bg-b2 gap-3 px-4 items-center shadow-xxs shadow-black/7  rounded-xl  flex py-3.5  text-bc/50 relative  border-b3 ', props.class)">
    <icon
      v-if="props.search"
      name="search"
      class="pointer-events-none size-5 opacity-40" />

    <input
      v-bind="$attrs"
      :spellcheck="false"
      :placeholder="props.placeholder"
      :class="cn('text-3 text-bc  outline-0 ring-0 border-0 flex !h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0', props.inputClass)" />

    <slot />
  </div>
</template>