<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useItemStore } from '../../stores/itemStore';
import { useDataStore } from '../../stores/dataStore';
import { useRuneStore } from '../../stores/runeStore';

const ds = useDataStore();
const is = useItemStore();
const rs = useRuneStore();
const runes = ds.runes;

onMounted(() => {
  const ds = useDataStore();
  const is = useItemStore();
  const fs = ds.getShards();
});
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-3 max-w-64 gap-y-7 gap-x-12 place-items-center">
      <label v-for="shard in ds.shards" :class="shard.slotName" class="rounded-full group/shard shard"
        :alt="shard.stats" :title="shard.stats" :data-tag="shard.color">
        <input type="radio" :name="shard.slotName" :value="shard.name"
          v-model="rs.shardModels['v' + rs.selectedSetKey + shard.slotName]" class="hidden peer"
          @change="rs.updateShards" />
        <div
          class="shard-color flex items-center justify-center size-10 transition-all duration-300 rounded-full bg-clip-padding bg-gradient-to-br from-base-200/20 to-base-200/30 p-2.5 border border-base-300 shadow-standard ring-transparent ring-offset-2 ring-offset-transparent ring-1">
          <Icon :icon="shard.img" class="transition-all duration-300" />
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
/* beautify ignore:start */
.offense:has(input:checked)label:not(:has(input:checked)) {
  @apply opacity-10;
}

.color-info:has(:checked) {
  @apply transition-all duration-500;
}


.shard:hover,
.shard:has(:checked) {
  @apply !opacity-100 *:!opacity-100;
}

.shard .shard-color:hover {
  @apply shadow-[rgba(13,_38,_76,_0.19)_0px_5px_10px] border;
}

.shard:has(:checked) .shard-color {
  background: radial-gradient(circle, oklch(var(--b2) / 20%) 90%, oklch(var(--b2) / 80%) 100%);

  @apply shadow-[0px_0px_0px_1px_rgba(0,0,0,0.03),0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),_0px_6px_6px_-3px_rgba(0,0,0,0.03),0px_12px_12px_-6px_rgba(0,0,0,0.03),0px_24px_24px_-12px_rgba(0,0,0,0.03),_rgba(13,_38,_76,_0.06)_0px_3px_6px];
}

[data-tag='color-info']:hover,
[data-tag='color-info']:has(:checked) {
  svg {
    @apply text-info drop-shadow-xs;
  }
}

[data-tag='color-info']:has(:checked) {
  @apply ring-info/30 ring-offset-2 ring-offset-info/20 ring-1;
}

[data-tag='color-success']:hover,
[data-tag='color-success']:has(:checked) {
  svg {
    @apply text-success drop-shadow-xs;
  }
}

[data-tag='color-success']:has(:checked) {
  @apply ring-success/30 ring-offset-2 ring-offset-success/20 ring-1;
}

[data-tag='color-cyan']:hover,
[data-tag='color-cyan']:has(:checked) {
  svg {
    @apply text-[#7daaad] drop-shadow-xs;
  }
}

[data-tag='color-cyan']:has(:checked) {
  @apply ring-[#7daaad30] ring-offset-2 ring-offset-[#7daaad20] ring-1;
}

[data-tag='color-warning']:hover,
[data-tag='color-warning']:has(:checked) {
  svg {
    @apply text-warning drop-shadow-xs;
  }
}

[data-tag='color-warning']:has(:checked) {
  @apply ring-warning/30 ring-offset-2 ring-offset-warning/20 ring-1;
}</style>
