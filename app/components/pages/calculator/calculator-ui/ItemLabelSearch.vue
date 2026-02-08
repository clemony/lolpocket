<script lang="ts" setup>
const props = defineProps<{
  item: Item
  index?: number
  set?: CalculatorSet
}>()

const item = ref(0)

async function handleItem(e) {
  nextTick()
  item.value = e
}
</script>

<template>
  <ItemCommand @update:item="handleItem($event)">
    <button
      class="group/b hover:ringneutral/40 data-[state=open]:ringneutral/40 size-20 rounded-lg ring-offset-2 hover:ring hover:ring-offset-p0 data-[state=open]:ring data-[state=open]:ring-offset-p0">
      <!--       <LazyItem
        v-if="item.name"
        :id="item.id"
        :key="item.name"
        :name="item.name"
        class="shadow-sm shrink-0 !size-full pointer-events-none" />

      <div v-else class="!size-full btn no-drag group-data-[state=open]/b:!bg-p3  transition-colors duration-200">
        <icon name="search" class="size-4 text-pc/70 group-hover/b:text-pc group-data-[state=open]/b:text-pc" />
      </div> -->
    </button>
  </ItemCommand>
</template>
