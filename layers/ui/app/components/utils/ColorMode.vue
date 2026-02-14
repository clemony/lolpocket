<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <UTabs
    v-model:model-value="colorMode.preference"
    rounded
    color="neutral"
    :ui="{
      root: 'h-6.5 py-0 px-px',
      list: 'h-6.5 gap-0  justify-between py-0 px-1 flex justify-evenly items-center bg-transparent! w-30 border-n5/30  ',
      trigger:
        'h-full w-auto ring-6 ring-transparent bg-clip-padding hover:bg-p3 hover:inset-shadow-xs rounded-lg border-transparent border-2 aspect-square',
      indicator:
        'scale-90 self-center rounded-lg ds-xs h-full w-auto aspect-square ',
      leadingIcon: 'size-3.75',
    }"
    value-key="label"
    :default-value="colorMode.value"
    orientation="horizontal"
    @click.stop />
</template>
