<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <ul
    data-sidebar="menu-badge"
    :class="cn('border-neutral/15 mr-3.5 ml-[13px] flex min-w-0 translate-x-px flex-col gap-1 border-l py-1 pr-2 pl-4.5', 'group-data-[collapsible=icon]:hidden', props.class)">
    <slot />
  </ul>
</template>
