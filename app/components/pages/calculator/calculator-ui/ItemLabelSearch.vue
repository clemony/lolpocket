<script lang="ts" setup>
const props = defineProps<{
  item: Item
  index?: number
  set?: CalculatorSet
}>()

const is = useItemStore()

const item = ref(0)

async function handleItem(e) {
  nextTick()
  item.value = e
}
</script>

<template>
  <ItemCommand @update:item="handleItem($event)">
    <button class="size-20  group/b hover:ring hover:ringneutral/40 rounded-lg ring-offset-2 hover:ring-offset-b1 data-[state=open]:ringneutral/40  data-[state=open]:ring  data-[state=open]:ring-offset-b1  ">
      <!--       <LazyItem
        v-if="item.name"
        :id="item.id"
        :key="item.name"
        :name="item.name"
        class="shadow-sm shrink-0 !size-full pointer-events-none" />

      <div v-else class="!size-full btn no-drag group-data-[state=open]/b:!bg-b3  transition-colors duration-200">
        <icon name="search" class="size-4 text-bc/70 group-hover/b:text-bc group-data-[state=open]/b:text-bc" />
      </div> -->
    </button>
  </ItemCommand>
</template>