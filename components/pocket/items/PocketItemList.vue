<script setup lang="ts">
  import { VueDraggable } from 'vue-draggable-plus';
  import type { HTMLAttributes } from 'vue';

  const as = useAccountStore();
  const ts = useTempStore();

  const ds = useDataStore();
  const props = defineProps<{
    pocket?: pocket;
    dragDisabled?: boolean;
    class?: HTMLAttributes['class'];
  }>();

  const items = [...ds.SRitems];

  const filteredItems = computed(() => {
    let filtered: Item[] = items;

    if (ts.browseItemStats.length) {
      ts.browseItemStats.forEach((stat) => {
        filtered = filtered.filter((item) => Object.keys(item.stats ? item.stats : '').includes(stat));
      });
    }

    if (ts.browseItemCats.length) {
      ts.browseItemCats.forEach((cat) => {
        filtered = filtered.filter((item) => Object.keys(item.menu ? item.menu : '').includes(cat));
      });
    }

    if (ts.browseItemTypes && ts.browseItemTypes != 'Favorites') {
      filtered = filtered.filter((item) => item.type.includes(ts.browseItemTypes));
    }

    if (ts.browseItemTypes && ts.browseItemTypes == 'Favorites') {
      filtered = filtered.filter((item) => as.favoriteItems.includes(item));
    }

    return filtered;
  });

  watch(
    () => filteredItems.value,
    (newVal) => {
      console.log('💠 - newVal:', newVal);
    }
  );
  const target = ref(null);
  const boxes = computed(() => {
    const itemWidth = 7;

    const { width, height } = useElementBounding(target);
    const a = remCalc(width.value);
    return Math.round(a / itemWidth);
  });

  const disabled = ref(false);
</script>

<template>
  <VueDraggable
    :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }"
    ref="target"
    :sort="false"
    :bubbleScroll="false"
    :scroll="false"
    v-model="filteredItems"
    ghostClass="ghosty"
    @click.meta="disabled = true"
    :delay="0"
    :disabled="disabled || props.dragDisabled"
    :animation="300"
    :force-fallback="true"
    :fallbackTolerance="0"
    fallbackClass="drag-clone"
    :fallbackOnBody="true"
    @click.stop.prevent
    @remove=""
    :class="cn('scrollbar-hide flex max-h-full flex-wrap items-start justify-around gap-5 px-1 py-4', props.class)">
    <Item
      v-for="item in filteredItems"
      :key="item.id"
      :item="item"
      :pocket="pocket"
      class="size-18 shadow-sm"
      @click.right.stop.prevent="useDrawer('ItemDrawer', null, null, item)" />

    <div
      v-for="index in boxes"
      class="opacity-0"
      :key="index">
      <div class="aspect-square size-18"></div>
    </div>
  </VueDraggable>
</template>

<style></style>
