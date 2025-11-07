<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label
    class="input"
    :class="
      cn(
        'relative max-w-100 items-center has-[&_input]:placeholder-shown:*:last:opacity-0',
        props.class,
      )
    ">
    <icon
      name="teenyicons:search-outline"
      class="pointer-events-none size-4 shrink-0 opacity-70" />

    <InheritSlot class="peer">
      <slot />
    </InheritSlot>

    <button
      v-bind="$attrs"
      class="btn btn-ghost btn-square btn-sm absolute transition-all duration-200 right-2">
      <icon
        name="x-sm"
        class="" />
    </button>
  </label>
</template>
