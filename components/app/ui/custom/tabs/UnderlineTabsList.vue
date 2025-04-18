
<script lang="ts" setup>
  import { TabsList } from "reka-ui";
  import type { TabsListProps } from "reka-ui";

  const props =  defineProps<
      TabsListProps & {
        class?: HTMLAttributes['class']
      }
    >()
  const forwarded = reactiveOmit(props, "class");
 
</script>

<template>
  <TabsList  :class="cn('inline-flex h-10 items-center justify-center rounded-md p-1 text-bc/50 relative',  props.class)" v-bind="forwarded">
    <slot />
  </TabsList>
</template>
