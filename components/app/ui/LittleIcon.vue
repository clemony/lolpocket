<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  const props = withDefaults(
    defineProps<{
      icon?: string;
    }>(),
    {
      icon: 'line-md:loading-loop',
    }
  );

  const MyIcon = h(Icon, { icon: props.icon });
</script>

<template>
  <MyIcon />
</template>
