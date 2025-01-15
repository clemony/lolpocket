<script setup lang="ts">
  import { VueDraggable } from 'vue-draggable-plus';

  const ds = useDataStore();
  const ts = useTempStore();

  const props = defineProps<{
    pocketKey: string;
    set: ItemSet;
    limit?: number;
  }>();

  const pocket = getPocket(props.pocketKey);

  function handleDragEnd(event) {
    console.log('hi');
    const draggedItem = event.item;
    console.log(draggedItem);
    const targetSet = event.to;

    if (targetSet && targetSet.items) {
      const isDuplicate = targetSet.items.some((item) => item.name === draggedItem.name);

      if (isDuplicate) {
        console.log('Duplicate item found. Item not added.');
        event.item.remove();
      } else {
        targetSet.items.push(draggedItem);
      }
    }
  }

  const additionalQuickSearchCount = computed(() => {
    return Math.max(0, 6 - props.set.items.length - 1);
  });

  const quickSearch = ref('');
  const returnData = ref([]);
  // Use returnData to access the emitted array
  watch(returnData, (newVal) => {
    if (pocket) {
      console.log('Received array from child:', newVal);
      addItemToSet(pocket.key, newVal[1], newVal[0]);
    }
  });

  const filteredItems = computed(() => {
    let filtered = ds.SRitems;

    if (quickSearch) {
      const searchTerm = quickSearch.value.toLowerCase();
      filtered = filtered.filter((item: any) => Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
    }
    return filtered;
  });
</script>

<template>
  <VueDraggable
    ref="el"
    v-model="set.items"
    :group="{
      name: 'items',
      pull: true,
      put: ['items'],
      revertClone: false,
    }"
    :scroll="false"
    :bubbleScroll="false"
    :key="set.key"
    :fallbackTolerance="0"
    fallbackClass="drag-clone"
    filter=".no-drag"
    :force-fallback="true"
    :fallbackOnBody="true"
    @end="handleDragEnd"
    class="item scrollbar-hide flex gap-3 overflow-hidden px-4 py-1"
    :class="{ 'gap-5!': props.limit }">
    <Item
      v-for="(item, index) in set.items"
      :key="item.id"
      :item="item"
      :pocket="pocket"
      class="size-18 shadow-sm" />

    <!--      <QuickSearch
            v-if="!props.limit || (props.limit && set.items.length < 6)"
            :array="filteredItems"
            v-model:quickSearch="quickSearch"
            v-model:returnData="returnData"
            v-model:thisSet="set.key"
            type="items"
            :size="52"
            class="mx-1" /> -->

    <!-- Additional QuickSearch Components to Ensure 6 Total -->
    <!--      <template v-if="props.limit">
            <QuickSearch
                v-for="index in additionalQuickSearchCount"
                :key="'quicksearch-' + index"
                :array="filteredItems"
                v-model:quickSearch="quickSearch"
                v-model:returnData="returnData"
                v-model:thisSet="set.key"
                type="items"
                :size="52"
        </template
                class="mx-1" /> -->
    >
  </VueDraggable>
</template>

<style scoped></style>
