
<script lang="ts" setup>
  import { TabsTrigger } from "reka-ui";
  import type { TabsTriggerProps } from "reka-ui";

  const props =  defineProps<
      TabsTriggerProps & {
         class?: HTMLAttributes['class']
      }
    >()
  const forwarded = reactiveOmit(props, "class");
</script>

<template>
  <TabsTrigger v-bind="forwarded" :class="cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3  py-1.25 text-3 z-2 cursor-pointer hover:text-bc/70 ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent font-medium data-[state=active]:text-bc data-[state=active]:shadow-none', props.class)">
    <slot />
  </TabsTrigger>
</template>
