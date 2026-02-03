<script lang="ts" setup>
const colorMode = useColorMode()

const items = [
  {
    id: 'system',
    icon: 'lucide:power',
    ui: {
      leadingIcon: 'scale-96  **:stroke-[2.6]'
    }
  },
  {
    id: 'light',
    icon: 'lucide:sun-medium',
    ui: {
      leadingIcon: 'scale-120 translate-y-0.25'
    }
  },
  {
    id: 'dim',
    icon: 'si:sun-set-line',
    ui: {
      leadingIcon: 'scale-110  **:stroke-[1.84]'
    }
  },
  {
    id: 'dark',
    class: ' **:stroke-[2.5]',
    icon: 'dark'
  },
]
</script>

<template>
  <UTabs
    v-model:model-value="colorMode.preference"
    rounded color="neutral" :ui="{
      root: 'h-8.5',
      list: 'h-full flex items-center bg-transparent! w-max noise-none border-transparent inset-shadow-none   ',
      trigger: 'size-7.5 ring-6 ring-transparent bg-clip-padding hover:bg-b3 hover:inset-shadow-xs rounded-full border-transparent border-2 aspect-square',
      indicator: 'scale-80 self-center rounded-full dxs aspect-square e',
      leadingIcon: 'size-4',
    }"

    :default-value="colorMode.value"
    orientation="horizontal" :items="items" value-key="id" @click.stop
  />
</template>
