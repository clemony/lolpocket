<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()
const tabStyles = {
  activeClass:
    'tab-active shadow-sm shadow-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)] bg-noise drop-shadow-[0px_-2px_1px_#00000008]   ',
  activeStyle: {
    '--tab-bg': 'color-mix(in oklch, var(--color-b2) 40%, white 60%)',
    '--tab-border-colors': 'var(--color-b3)',
  },
  tabs: '',
}

const tabs = ref()
</script>

<template>
  <Label
    role="tab"
    class="
      tab flex cursor-pointer! flex-nowrap items-center gap-2 before:opacity-90
    "
    :class="props.active ? tabStyles.activeClass : ''"
    :style="props.active ? tabStyles.activeStyle : ''">
    <span
      v-if="props.active"
      class="absolute -bottom-0 flex h-1 w-[116%] justify-between">
      <span
        v-for="index in 2"
        :key="index"
        class="
          size-3.5 rotate-40
          bg-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)] shadow-md
          shadow-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)]
        "></span>
    </span>

    <slot />
  </Label>
</template>
