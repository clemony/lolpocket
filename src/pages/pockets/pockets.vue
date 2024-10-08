<route lang="json">{
  "name": "pockets",
  "alias": [
    "/pockets"
  ],
  "meta": {
    "title": "Pockets",
    "icon": "teenyicons:folders-outline"
  }
}</route>

<script setup lang="ts">
import { computed, reactive, ref, Ref } from 'vue';
import { usePocketStore, pocket } from '../../stores/pocketStore';
import { useRouter } from 'vue-router';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import { useVueTable, FlexRender, createTable, getCoreRowModel, createColumnHelper } from '@tanstack/vue-table';
import pocketIcon from './../components/pocketIcon.vue'; // Your custom icon component



//const data = ps.pockets;

//const data = ref<User[]>([]) //vue

const router = useRouter();
const is = useItemStore();
const ps = usePocketStore();
const rs = useRuneStore();


// Example pockets data (can come from your ref data)
const pockets = ref<pocket[]>([]);

const columnHelper = createColumnHelper<pocket>()

const columns = [

  columnHelper.accessor('icon', {
    id: 'icon',
    header: ' ',
    cell: info => h(pocketIcon, { pocket: info.row.original }),
  }),
  columnHelper.accessor(row => row.name, {
    id: 'name',
    header: () => 'Pocket',
    cell: info => h(pocketName, { pocket: info.row.original }),
  }),
  columnHelper.accessor('champions', {
    id: 'champions',
    header: () => 'Champions',
    cell: info => info.getValue(),
  }),

  columnHelper.accessor('items', {
    id: 'items',
    header: () => 'Items',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('runes', {
    id: 'runes',
    header: 'Runes',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('pinned', {
    id: 'pinned',
    header: '',
    cell: info => info.getValue(),
  }),
]


const defaultData: pocket[] = ps.pockets;
const data = ref(defaultData)

const rerender = () => {
  data.value = defaultData
}

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})

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



    <div class="p-2">
      <table>
        <thead>
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <th v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan"
              class='text-xs !font-medium '>
              <span class="flex items-center gap-2">

                <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                  :props="header.getContext()" />

                <icon v-if="header.id != 'icon' && header.id != 'pinned'" icon="teenyicons:down-small-solid" />
              </span>
            </th>
          </tr>
        </thead>






        <tbody>
          <tr v-for="row in table.getRowModel().rows" :key="row.id">
            <td v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>


          </tr>
        </tbody>


      </table>

    </div>
  </div>
</template>

<style>
.v-popper--shown.new-pocket button {
  @apply opacity-80;
}



table {
  border: 1px solid lightgray;
}

tbody {
  border-bottom: 1px solid lightgray;
}

th {
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 2px 4px;
}
</style>