<script setup lang="ts">
import { TransitionGroup, computed, reactive } from 'vue';
import { useItemStore } from './../../stores/itemStore';
import { VueDraggable } from 'vue-draggable-plus'
import { useDataStore } from '../../stores/dataStore';
import { useUserStore } from '../../stores/userStore';
import { imageIn, imageOut } from '../../script/animations';
const ds = useDataStore();
const is = useItemStore();
const us = useUserStore();




/* -------------------------------- FILTER ------------------------------- */



const filteredItems = computed(() => {
  let filtered = reactive([...is.items]);

  // Apply search filter if any
  if (is.searchFilter) {
    const searchTerm = is.searchFilter.toLowerCase();
    filtered = filtered.filter((item: any) => Object(item).some((value: string) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
  }

  // Apply tier filters if any
  if (is.tierFilters.length) {
    filtered = filtered.filter((item: { tier: string; }) => is.tierFilters.some((filter) => item.tier?.toLowerCase().includes(filter.toLowerCase())));
  }

  // Apply stat filters if any
  if (is.statFilters.length) {
    filtered = filtered.filter(
      (item: { stats: string; }) =>
        item.stats && // Ensure stats is defined
        is.statFilters.some((filter) => item.stats.toLowerCase().includes(filter.toLowerCase()))
    );
  }

  // Return the filtered array
  return filtered;
});

/* ---------------------------------- SORT ------------------------------- */



const sfi = computed(() => {
  let sorted = reactive([...filteredItems.value]);

  if (is.sortName) {
    if (is.sortName === 'az') {
      sorted = sorted.sort((a: { name: string; }, b: { name: any; }) => {
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    } else if (is.sortName === 'za') {
      sorted = sorted.sort((a: { name: any; }, b: { name: string; }) => {
        if (a.name && b.name) {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
  }

  if (is.sortPrice) {
    if (is.sortPrice === 'ascending') {
      sorted = sorted.sort((a: { buy: number; }, b: { buy: number; }) => a.buy - b.buy);
    } else if (is.sortPrice === 'descending') {
      sorted = sorted.sort((a: { buy: number; }, b: { buy: number; }) => b.buy - a.buy);
    }
  }

  return sorted;
});

function onUpdate() {
  console.log('update')
}
function onAdd() {
  console.log('add')
}
function remove() {
  console.log('remove')
}

</script>

<template>



  <VueDraggable ref="el" :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }" :sort="false"
    v-model="sfi" ghostClass="ghosty" :delay="0" :animation="300" :force-fallback="true" :fallbackTolerance="0"
    fallbackClass="drag-clone" :fallbackOnBody="true" @remove="remove" class="drag-draggable item">

    <TransitionGroup @enter="imageIn" @leave="imageOut">
      <VDropdown v-for="item in sfi" :triggers="['click']" :overflow-padding="20" :shift="true" theme="detail"
        :key="item.id + 'dropdown'" :distance="6" @click.right.prevent="" :ref="item.name"
        class="relative max-w-[64px] max-h-[64px]">

        <!-------------------------------⟢ Tooltip ⟣-------------------------------->

        <label class="drag-label">
          <div class="drag-wrapper">
            <input type="radio" :value="item" v-model="is.selectedItem" class="hidden peer" />
            <img :key="item.id" :src="item.img" :alt="item.name + ' Image'" class="drag-img" />
          </div>

        </label>
        <template #popper :key="item.name + 'Pop'">
          <ItemPop :item="item" :variant="'add'" />
        </template>
      </VDropdown>
    </TransitionGroup>

  </VueDraggable>


</template>

<style>
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>
