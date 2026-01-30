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
        'bgneutral/85! input border-accent text-md text-nc **:text-nc flex h-12 w-full items-center gap-4 border px-3 py-3.5 shadow-sm inset-shadow-sm drop-shadow-sm',
        props.class,
      )
    "
  >
    <icon
      v-if="props.search"
      class="pointer-events-none size-5 opacity-80"
      name="search"
    />

    <input
      v-bind="$attrs"
      :placeholder="props.placeholder"
      :class="
        cn(
          'text-md flex h-full grow border-0 text-start ring-0 outline-0 hover:border-0 hover:ring-0 hover:outline-0',
          props.inputClass,
        )
      "
    >

    <slot />
  </div>
</template>
