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
  <div
    :class="
      cn(
        'bgneutral/85! input flex h-12 w-full items-center gap-4 border border-accent px-3 py-3.5 text-md text-nc shadow-sm inset-shadow-sm drop-shadow-sm **:text-nc',
        props.class,
      )
    ">
    <icon
      v-if="props.search"
      class="pointer-events-none size-5 opacity-80"
      name="search" />

    <input
      v-bind="$attrs"
      :placeholder="props.placeholder"
      :class="
        cn(
          'flex h-full grow border-0 text-start text-md ring-0 outline-0 hover:border-0 hover:ring-0 hover:outline-0',
          props.inputClass,
        )
      ">

    <slot />
  </div>
</template>
