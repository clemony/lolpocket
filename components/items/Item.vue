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
  <div class="shadow-sm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border border-b3 inset-shadow-sm ring-1 hover:ring-offset-2 aspect-square">
    <Popover
      :key="item.id"
    >
      <PopoverTrigger as-child>
        <label>
          <!--    <input
      v-model="ts.itemDrawerTrigger"
      type="checkbox"
      class="hidden"
    /> -->
          <LittleTip :content="thisItem.name">
            <img
              :src="`/img/item/${thisItem.id}.webp`"
              :alt="`${thisItem.name} Image`"
              class="aspect-square size-full rounded-lg"
            />
          </LittleTip>

        </label>
      </PopoverTrigger>
      <PopoverContent class="w-92 max-h-120 overflow-y-auto shadow-pretty">
        <ItemInfo :item="item" class="[&_h1]:!text-5 [&_.stat-grid]:!grid-cols-[2fr_1fr]" />
      </PopoverContent>
    </Popover>
  </div>
</template>

<style scoped></style>
