<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean
  contrast?: boolean
}>()
</script>

<template>
  <PopoverTrigger
    class="relative flex h-12 w-90 items-center gap-4 rounded-lg border px-3 py-2 inset-shadow-xs transition-opacity duration-100"
    :class="{
      'opacity-0': props.isOpen,
      'bgneutral/83 border-accent text-nc': props.contrast,
      'border-p3/70 bg-p0/60 text-pc/50': !props.contrast,
    }">
    <icon
      class="z-1 size-5 shrink-0 text-pc opacity-60 dst"
      name="search"
      :class="{ 'text-nc opacity-90': props.contrast }" />

    <div class="z-0 grow pt-0.5 text-left dst">
      Search Items...
    </div>

    <slot />
  </PopoverTrigger>
</template>
