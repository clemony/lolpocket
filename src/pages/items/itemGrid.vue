<script setup lang="ts">
import { ref } from 'vue';
import { useBStore } from "./../../stores/buildStore";
import { Drag, DropList } from "vue-easy-dnd";
import { useDataStore } from '../../stores/dataStore';

const ds = useDataStore();
const bs = useBStore();

interface Item {
  name: string;
  img: string;
  buy: number;
  sell: number;
  stats: string;
  passive: string;
  active: string;
  type: string;
  tier: string;
}

const items = ds.items;

const selectedItems = ref([]);

console.log([items]);

function handleItems(item, event) {
  if (event.target.checked) {
    console.log(item);
    console.log(bs.buildItems)
  }
  else {
    console.log('unchecked');
  }
  //bs.buildItems = selectedItems;
};



function handleContextMenu(event, item) {
  this.$refs.vueSimpleContextMenu.showMenu(event, item)
}


function optionClicked(event) {
  window.alert(JSON.stringify(event))
}
const options = [
  {
    name: "Add",
    action: '',
    icon: 'teenyicons:section-add-outline',
  },
  {
    name: "Remove",
    action: '',
    icon: 'teenyicons:section-remove-outline',
  },
  {
    name: "Open in Sidebar",
    action: '',
    icon: "teenyicons:send-left-outline"
  },
  {
    name: "View on League Wiki",
    action: '',
    icon: 'teenyicons:download-outline'
  },
];


</script>

<template>
  <div class="flex flex-wrap transition-all duration-500 gap-4 w-full p-4 !overflow-y-auto max-h-full ">
    <drag v-for="item in items" :key="item.name" :data="item" go-back :drag-image-opacity="1" drag-class="dragging"
      class="shadow-lil">
      <div
        class=" basis-14 grow rounded-md object-cover ring-1 ring-offset-[2px] ring-base-300 ring-offset-base-200 hover:ring-primary/80   max-w-[60px] relative  has-[input:checked]:!ring-offset-primary has-[:checked]:ring-2 "
        :title="item.name">
        <label :for="item.name" class="w-full h-full">
          <img v-if="item.type === 'item'" :src="item.img" :alt="item.name + ' Image'"
            class="size-full rounded-md pointer-events-none " />
        </label>
        <input type="checkbox" :id="item.name" :value="item.name" class="peer hidden" v-model="selectedItems"
          @change="handleItems(item.name, $event)" />

      </div>



    </drag>
  </div>
</template>


<style scoped>
/* beautify ignore:start */

.dragging {
  @apply rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px];
}</style>
