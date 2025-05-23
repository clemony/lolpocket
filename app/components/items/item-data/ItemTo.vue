<script lang="ts" setup>
const { to, base } = defineProps<{
  to: number[]
  base?: boolean
}>()
console.log('💠 - to:', to)

const { data } = await useFetch('/api/items-lite.json')
</script>

<template>
  <div v-if="to">
    <div class="divider divider-start after:h-px my-4 " :class="{ 'after:!bg-b3/90': base, 'after:bg-nc/30 ': !base }">
      BUILDS INTO
    </div>
    <div class="group flex items-center py-2 flex-wrap justify-center gap-4">
      <button
        v-for="(component, i) in to"
        :key="i"
        v-tippy="data[component]?.name ? `${data[component]?.name} ‑ ` : `${data[component]?.cost}` ? `${data[component]?.cost}g` : ''">
        <LazyPopoverItem
          v-if="data[component]" :item="component"
          class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20" />
      </button>
    </div>
  </div>
</template>