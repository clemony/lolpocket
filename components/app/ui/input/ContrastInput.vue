<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
inputClass?: HTMLAttributes['class']
  search?: boolean
  placeholder: string
}>()


defineOptions({
  inheritAttrs: false
})
</script>

<template>
 <div :class="cn(' text-3 items-center gap-4  flex h-12 border py-2 px-3 input w-full mt-8 shadow-sm drop-shadow-sm !bg-neutral/85 inset-shadow-sm border-accent text-nc **:text-nc', props.class)">
    <icon v-if="props.search"
      name="search"
      class="pointer-events-none size-5 opacity-70" />
    <input
      v-bind="$attrs"
      :placeholder="props.placeholder"
      :class="cn('text-3  outline-0 ring-0 border-0 flex h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0', props.inputClass)" />

    <slot />
  </div>
</template>