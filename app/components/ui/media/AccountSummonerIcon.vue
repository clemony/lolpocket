<script lang="ts" setup>
const { class: className } = defineProps<{

  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <div :class="cn({ 'inset-shadow-sm shrink-0  size-full bg-transparent': loaded }, className)">
    <slot>
      <div
        class="rounded-full p-0 overflow-visible relative  bg-n1/90 grid place-items-center text-nc  size-full ">
        <icon
          name="streamline:electric-cord-1-remix"
          class="size-4.25  absolute shrink-0 text-nc/90" />
      </div>
    </slot>
  </div>
</template>