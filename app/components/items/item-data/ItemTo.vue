<script lang="ts" setup>
const {to} = defineProps<{
  to: number[]
}>()
  console.log("💠 - to:", to)

const { data } = await useFetch('/api/items-lite.json')

</script>

<template>
  <div v-if="to">
    <div class="divider divider-start after:h-px my-4 after:bg-nc/30">
      BUILDS INTO
    </div>
    <div class="group flex items-center py-2 flex-wrap justify-center gap-4">

        <template
          v-for="(component, i) in to"
          :key="i">
     <LazyPopoverItem v-if="data[component]"  :item="component"
            v-tippy="`${data[component].name} ‑ ${data[component].cost}g`"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20"/>
        </template>
 
    </div>
  </div>
</template>