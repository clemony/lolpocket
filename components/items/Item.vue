<script setup lang="ts">
const props = defineProps<{
  item: Item
}>()
const ts = useTempStore()
const thisItem = computed(() => {
  return props.item
})
</script>

<template>
  <div class="shadow-sm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border border-b3 inset-shadow-sm ring-1 hover:ring-offset-2 aspect-square has-checked:ring-neutral has-checked:ring-1 has-checked:ring-offset-b1/95 has-checked:ring-offset-2 has-checked:shadow-pretty has-checked:scale-105 transition-all duration-300 cursor-pointer ">
    <!-- <Popover
      :key="item.id"
    >
      <PopoverTrigger as-child>
        -->
    <label>
      <!--    <input
      v-model="ts.itemDrawerTrigger"
      type="checkbox"
      class="hidden"
    /> -->
      <input
        v-model="ts.pocketItemSelect"
        type="radio"
        :value="item"
        class="hidden"
      />

      <img
        :src="`/img/item/${thisItem.id}.webp`"
        :alt="`${thisItem.name} Image`"
        class="aspect-square size-full rounded-lg"
      />

    </label>
    <!--  </PopoverTrigger>
      <PopoverContent class="w-92 max-h-120 overflow-y-auto shadow-pretty">
        <LazyItemInfo :item="item" class="[&_h1]:!text-5 [&_.stat-grid]:!grid-cols-[2fr_1fr]" />
      </PopoverContent>
    </Popover> -->
  </div>
</template>

<style scoped></style>
