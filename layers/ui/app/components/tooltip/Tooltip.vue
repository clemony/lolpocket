<script setup lang="ts">
</script>

<template>
  <Tooltip
    arrow
    :ui="{
      content: cn(
      'animate-none',
      'py-0.75 px-2 transition-discrete text-[0.9rem] text-nc font-medium   flex items-center ring-neutral h-max max-h-80 max-w-104 border-tint-neutral/30 inset-shadow-white/10 bg-neutral/86 text-nc gap-1 backdrop-blur-sm p-0 shadow-sm rounded-lg ring cursor-default select-none pointer-events-auto'),
      arrow: 'scale-y-100 scale-x-100 ',
    }"
  >
    <slot />
  </Tooltip>
</template>
