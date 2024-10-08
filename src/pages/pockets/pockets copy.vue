<script setup lang="ts">
import { computed, reactive, ref, Ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { useRouter } from 'vue-router';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import { VueDraggable } from 'vue-draggable-plus';
const router = useRouter();
import { useVueTable } from '@tanstack/vue-table'

const table = useVueTable(options)
// ...render your table

const is = useItemStore();
const ps = usePocketStore();
const rs = useRuneStore();



const columns = ref([
  { id: 0, name: '', data: 'icon', size: '', shown: 'true' },
  { id: 1, name: 'Pocket', data: 'name', size: '', shown: 'true' },
  { id: 2, name: 'Champions', data: 'champions', size: '', shown: 'true' },
  { id: 3, name: 'Items', data: 'item', size: '', shown: 'true' },
  { id: 4, name: 'Runes', data: 'runes', size: '', shown: 'true' },
  { id: 5, name: '', data: 'pinned', size: '', shown: 'true' },
  { id: 6, name: '', data: 'check', size: '', shown: 'true' },
  { id: 7, name: 'Patch', data: 'patch', size: '', shown: 'false' },
  { id: 8, name: 'Created', data: 'created', size: '', shown: 'false' },
]);

// Optionally, use the onUpdate event to react to reordering
function onDragUpdate() {
  console.log('Columns updated:', columns.value);
}

function onStart() {
  console.log('start')
}

function onUpdate() {
  console.log('update')
}

function onDragEnd(evt) {
  // Ensure columns are being swapped, not replaced
  if (evt && evt.oldIndex !== evt.newIndex) {
    const movedColumn = columns.value.splice(evt.oldIndex, 1)[0];
    columns.value.splice(evt.newIndex, 0, movedColumn);
  }
}

const pinnedPockets = computed(() => {
  let filtered = ps.pockets;
  filtered = filtered.filter((pocket) => pocket.pinned == true);
  return filtered;
});

const pinnedHeight = computed(() => {
  const l = pinnedPockets.value.length;
  return l * 56;
});

const pinnedHeightPercentage = computed(() => {
  const totalAvailableHeight = window.innerHeight - 250; // Adjust this as per your layout's available space
  return Math.min((pinnedHeight.value / totalAvailableHeight) * 100, 70); // Max 70% or dynamically calculated
});

const generalPockets = computed(() => {
  let filtered = ps.pockets;
  filtered = filtered.filter((pocket) => pocket.pinned == false);
  return filtered;
});





</script>
<template>

  <div class="w-full h-full px-3 py-4 ">

    <div class="grid w-full gap-4 px-4 mb-4 h-fit">
      <div class="flex items-center gap-3">
        <div class="flex items-center text-sm breadcrumbs grow">
          <ul class="">
            <li><a>Pockets</a></li>
            <li>All</li>
          </ul>
        </div>



        <div class="join">
          <button
            class="relative join-item btn btn-sm *:size-4 after:size-5 items-center flex justify-center  *:absolute *:transition-all *:duration-300"
            alt="Trash" title="Trash">
            <icon icon="iconoir:bin" class="" />
            <icon icon="iconoir:bin-full" class="opacity-0" />

          </button>

          <button class="join-item btn btn-sm" alt="Archive" title="Archive">
            <icon icon="fluent:archive-20-regular" class="size-5" />
          </button>
        </div>

        <VDropdown :overflow-padding="20" :shift="true" theme="overlay" class="new-pocket">
          <button class="text-xs btn btn-sm btn-neutral hover:opacity-80 ">
            <icon icon="teenyicons:folder-plus-outline" class=" size-4.5 mr-0.5 pr-0.5 " />
            <span class="font-medium">
              New Pocket
            </span>
          </button>


          <template #popper>
            <a v-close-popper class="absolute w-screen h-screen"></a>

            <PopPocket :title="'New Pocket'" :button="'Create'" />

          </template>
        </VDropdown>


      </div>
      <div class="flex items-center w-full">
        <h2 class="text-xl font-semibold tracking-tight grow ">
          Pockets
        </h2>



      </div>

    </div>

    <!--     <div class="absolute w-[90%] left-20 top-[120px]">
      <PocketMenu />

    </div> -->

    <VueDraggable v-model="columns" ghostClass="ghosty" :delay="0" :animation="300" :force-fallback="true"
      :filter="'.splitpanes__splitter'" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
      @end="onDragEnd" target=".pocket-split">
      <splitpanes class="pocket-split default-theme flex max-h-[calc(100%-110px)] h-[calc(100%-90px)]" vertical>
        <Pane v-for="(column, index) in columns" :key="column.id" class="p-3 border border-red-800 rounded cursor-move">
          <div class="column-data">
            {{ column.name }}
          </div>
        </Pane>
      </splitpanes>
    </VueDraggable>


  </div>




</template>

<style>
.v-popper--shown.new-pocket button {
  @apply opacity-80;
}

.splitpanes__splitter {
  @apply !pointer-events-auto z-50;
}
</style>