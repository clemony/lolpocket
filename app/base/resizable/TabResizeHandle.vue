<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()
const tabStyles = {
  tabs: '',
  activeStyle: {
    '--tab-bg': 'color-mix(in oklch, var(--color-b2) 40%, white 60%)',
    '--tab-border-colors': 'var(--color-b3)',
  },
  activeClass:
    'tab-active shadow-sm shadow-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)] bg-noise drop-shadow-[0px_-2px_1px_#00000008]   ',
}

const tabs = ref()
</script>

<template>
  <Label
    role="tab"
    class="tab !cursor-pointer before:opacity-90 flex gap-2 items-center flex-nowrap"
    :class="props.active ? tabStyles.activeClass : ''"
    :style="props.active ? tabStyles.activeStyle : ''">
    <span
      v-if="props.active"
      class="w-[116%] absolute flex justify-between h-1 -bottom-0">
      <span
        v-for="index in 2"
        :key="index"
        class="size-3.5 rotate-40 bg-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)] shadow-md shadow-[color-mix(in_oklch,var(--color-b2)_40%,white_60%)]"></span>
    </span>

    <slot />
  </Label>
</template>
