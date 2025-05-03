<script lang="ts" setup>
const {to} = defineProps<{
  to: number[]
}>()
  console.log("💠 - to:", to)

const { data } = await useFetch('/api/items-lite.json')

</script>

<template>
  <div v-if="to">
    <div class="divider divider-end before:h-px my-4 before:bg-nc/30">
      COMPONENT OF
    </div>
    <div class="group flex items-center flex-wrap justify-center gap-4">

        <template
          v-for="(component, i) in to"
          :key="i">
     <button v-if="data[component]"
            v-tippy="`${data[component].name} ‑ ${data[component].cost}g`"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20">
            <img
              v-if="component"
              :src="`/img/item/${component}.webp`"
              :alt="`${component}image`" class="shrink-0" />
          </button>
        </template>
 
    </div>
  </div>
</template>