<script lang="ts" setup>
const {from} = defineProps<{
  from: number[]

}>()



const { data } = await useFetch('/api/items-lite.json')


</script>

<template>
  <div v-if="from">
    <div class="divider divider-start after:h-px  after:bg-nc/30">
      RECIPE
    </div>
    <div class="group flex items-center justify-center py-2 gap-4">
    
        <template
          v-for="(component, i) in from"
          :key="i">
          <LazyPopoverItem :item="component"
            v-tippy="`${data[component].name} ‑ ${data[component].cost}g`"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20"/>

          <icon
            name="add-sm"
            class=" last:hidden" />
        </template>
    
    </div>
  </div>
</template>