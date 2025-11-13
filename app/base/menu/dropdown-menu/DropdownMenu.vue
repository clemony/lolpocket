<script setup lang="ts">
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from "reka-ui";
import { DropdownMenuRoot, useForwardPropsEmits } from "reka-ui";

const props = defineProps<DropdownMenuRootProps>();
const emits = defineEmits<DropdownMenuRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const toggleOpen = useToggle(forwarded.value.open);
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot :toggle-open />
  </DropdownMenuRoot>
</template>
