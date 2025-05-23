<script lang="ts" setup>
const {from, base} = defineProps<{
  from: number[]
  base?: boolean

}>()



const { data } = await useFetch('/api/items-lite.json')


</script>

<template>
  <div v-if="from">
    <div class="divider divider-start after:h-px  "   :class="{'after:!bg-b3/90': base, 'after:bg-nc/30 ': !base}">
      RECIPE
    </div>
    <div class="group flex items-center justify-center py-2 gap-4">
    
        <div
          v-for="(component, i) in from"
            v-tippy="`${data[component].name} ‑ ${data[component].cost}g`"
          :key="i">
          <LazyPopoverItem :item="component"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20"/>

          <icon
            name="add-sm"
            class=" last:hidden" />
        </div>
    
    </div>
  </div>
</template>