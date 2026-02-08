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
      class="pointer-events-none size-4 shrink-0 opacity-70"
      name="teenyicons:search-outline" />

    <InheritSlot class="peer">
      <slot />
    </InheritSlot>

    <button
      class="btn absolute right-2 btn-square btn-ghost transition-all duration-200 btn-sm"
      v-bind="$attrs">
      <icon
        class=""
        name="x-sm" />
    </button>
  </label>
</template>
