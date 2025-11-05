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
    <div class="divider divider-start  !text-0 my-2 after:h-px after:bg-white  after:opacity-10">
      BUILDS INTO
    </div>

    <div
      class="group flex flex-wrap items-center gap-4 px-1.5 py-2"
      :class="{ 'justify-start': filtered.length > 7 }">
      <div
        v-for="(item, i) in filtered"
        :key="i"
        v-tippy="`${item.name} ‑ ${item.gold}g`"
        class="flex items-center gap-3">
        <LazyItemPopover
          :id="item.id"
          class="hover:ring-nc/90  hover:ring-offset-neutral/80 tldr-20 size-9 overflow-hidden rounded-lg  shadow-sm hover:ring-1 hover:ring-offset-2" />
      </div>
    </div>
  </div>
</template>