<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

const ms = useMatchStore()
</script>

<template>
  <Collapsible :class="cn('max-w-210 w-full', className)">
    <CollapsibleTrigger>
      <h2 class="font-bold dst opacity-90">
        {{ ms.mf?.champion }}
      </h2>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
    </CollapsibleContent>
  </Collapsible>
</template>