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
      cn('relative max-w-100 items-center has-[&_input]:placeholder-shown:*:last:opacity-0',
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
      class="
        btn btn-square btn-ghost btn-sm absolute right-2 transition-all
        duration-200
      ">
      <icon
        name="x-sm"
        class="" />
    </button>
  </label>
</template>
