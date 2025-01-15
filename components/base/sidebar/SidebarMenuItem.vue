<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <li
    data-sidebar="menu-item"
    :class="cn('group/menu-item text-3 relative font-medium', props.class)">
    <slot />
  </li>
</template>
