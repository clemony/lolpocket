<script lang="ts" setup>
const { results } = defineProps<{
  results: any
}>()

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen" class="">
    <LazyCollapsibleContent class="CollapsibleContent ">
      <slot />
    </LazyCollapsibleContent>

    <CollapsibleTrigger class="z-2 items-center flex hover:underline underline-offset-2 text-1 px-13 h-8  pt-3  w-full">
      {{ !isOpen ? `+ ${results.length - 3} more...` : 'view less...' }}
    </CollapsibleTrigger>
  </Collapsible>
</template>