
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
  <TabsList  :class="cn('py-0.5 h-9 bg-b3/40 border-b3/60 px-1 items-center justify-center rounded-lg inset-shadow-xs flex  text-bc/50 relative',  props.class)" v-bind="forwarded">
    <slot />
  </TabsList>
</template>
