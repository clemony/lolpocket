<script setup lang="ts">
import type { TippyOptions } from "vue-tippy";
import { useForwardProps } from "reka-ui";

const props = defineProps<TippyOptions & {}>();

const forwarded = useForwardProps(props);
</script>

<template>
  <tippy v-bind="forwarded">
    <slot />
  </tippy>
</template>
