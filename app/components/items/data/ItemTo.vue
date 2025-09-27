<script lang="ts" setup>
const { to } = defineProps<{
  to: ItemComponent[]
}>()
console.log('💠 - to:', to)

const filtered = computed (() => to.filter(to => to.id < 9999))
</script>

<template>
  <div
    v-if="to && filtered"
    class=" mt-1.5">
    <div class="divider divider-start after:h-px my-2  !text-0">
      BUILDS INTO
    </div>

    <div
      class="group flex items-center pt-2 px-1 flex-wrap gap-4"
      :class="{ 'justify-start': filtered.length > 7 }">
      <div
        v-for="(item, i) in filtered"
        :key="i"
        v-tippy="`${item.name} ‑ ${item.gold}g`"
        class="flex gap-3 items-center">
        <LazyItemPopover
          :id="item.id"
          class="ring-neutral/60  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20" />
      </div>
    </div>
  </div>
</template>