<script lang="ts" setup>
const { results } = defineProps<{
  results: any;
}>();

const isOpen = ref(false);
</script>

<template>
  <Collapsible v-model:open="isOpen" class="">
    <LazyCollapsibleContent class="CollapsibleContent">
      <slot />
    </LazyCollapsibleContent>

    <CollapsibleTrigger
      class="z-2 flex h-8 w-full items-center px-13 pt-3 text-1 underline-offset-2 hover:underline"
    >
      {{ !isOpen ? `+ ${results.length - 3} more...` : "view less..." }}
    </CollapsibleTrigger>
  </Collapsible>
</template>
