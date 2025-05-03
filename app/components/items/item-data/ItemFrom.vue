<script lang="ts" setup>
const {from} = defineProps<{
  from: number[]

}>()



const { data } = await useFetch('/api/items-lite.json')


</script>

<template>
  <div v-if="from">
    <div class="divider divider-end before:h-px py-2 before:bg-nc/30">
      RECIPE
    </div>
    <div class="group flex items-center justify-center py-1 gap-4">
    
        <template
          v-for="(component, i) in from"
          :key="i">
          <button
            v-tippy="`${data[component].name} ‑ ${data[component].cost}g`"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20">
            <Image
              v-if="component"
              :image="`/img/item/${component}.webp`"
              :alt="`${component}image`" />
          </button>

          <icon
            name="add-sm"
            class=" last:hidden" />
        </template>
    
    </div>
  </div>
</template>