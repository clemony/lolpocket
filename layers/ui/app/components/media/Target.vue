<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

/*   before:absolute before:-mb-px before:-ml-px before:size-full before:scale-105 before:bg-[url(\'/img/ui/frame.webp\')] before:bg-contain before:opacity-0 before:transition-all before:duration-200 */
</script>

<template>
  <button
    class="relative"
    :class="
      cn(
        'no-drag search-drop group border-box border-b3 bg-b2/20 hover:border-bc/30 relative z-0 grid cursor-pointer! place-items-center rounded-lg border p-0! inset-shadow-sm',
        props.class,
      )
    "
  >
    <div class="absolute size-full overflow-hidden">
      <i-fullscreen
        class="size-full scale-150 opacity-0 transition-all duration-300 group-hover:scale-120 group-hover:opacity-50"
      />
    </div>

    <icon
      class="size-3.5 stroke-[1.3] opacity-30 group-hover:opacity-50"
      name="add"
    />

    <slot />
  </button>
</template>

<style scoped></style>
