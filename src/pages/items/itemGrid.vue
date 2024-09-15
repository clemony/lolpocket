<script setup lang="ts">
import { ref, toRaw, TransitionGroup, computed } from 'vue';
import { useBStore } from './../../stores/buildStore';
import { VueDraggable } from 'vue-draggable-plus'
import { useDataStore } from '../../stores/dataStore';
import { MenuOptions } from '@imengyu/vue3-context-menu';

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

const show = ref(false);
const options = ref<MenuOptions>({
  customClass: 'item-menu',
  zIndex: 3,
  minWidth: 180,
  maxWidth: 180,
  x: 500,
  y: 200,
});

const selectedItem = ref<any>(null);

function onMenuClick(index: number) {
  alert('You clicked menu item ' + index);
}
function onContextMenu(e: MouseEvent, item: any) {
  e.preventDefault();
  show.value = true;
  selectedItem.value = item;
  options.value.x = e.x;
  options.value.y = e.y;
}



function addToSet(item, set) {

  const matchedSet = toRaw(bs.buildSets).find((sRaw) => {
    const s = toRaw(sRaw);
    return s.key === set;
  });

  if (matchedSet) {
    if (!Array.isArray(matchedSet.items.items)) {
    } else if (!matchedSet) {
    } else {
      matchedSet.items.items.push(toRaw(item));
    }
  }
}




</script>

<template>


  <VueDraggable ref="el" :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }"
    v-model="bs.sortedFilteredItems"
    class="flex flex-wrap transition-all duration-500 gap-4 w-full p-4 pt-12 !overflow-y-auto overflow-x-hidden max-h-full"
    UseDraggableReturn>
    <TransitionGroup name="fade">
      <div v-for="item in bs.sortedFilteredItems" :key="item.id" dragClass="dragging"
        class=" item-drag shadow-lil flex grow !aspect-square basis-14 rounded-md object-cover ring-1 ring-offset-[2px] ring-base-300 ring-offset-base-200 hover:ring-primary/80 max-w-[60px] max-h-[60px] relative has-[input:checked]:!ring-offset-primary has-[:checked]:ring-2"
        :ref="item.name">

        <div class="dropdown dropdown-hover">

          <button tabindex="0" :key="item.id" id="item.name" class="w-full h-full cursor-move"
            @contextmenu.prevent="onContextMenu($event, item)" @click="console.log(item.stats)">
            <img :key="item.id" :src="item.img" :alt="item.name + ' Image'"
              class="size-full rounded-md pointer-events-none" />
          </button>

          <!-- <div tabindex="0"
            class="dropdown-content top-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-warm delay-700 grid gap-2 menu-glass border-base-300 border relative float-start">

            <div class="grid grid-cols-[1fr_2fr]  gap-2">
              <div class="col-start-1">
                <img :key="item.id" :src="item.img" :alt="item.name + ' Image'"
                  class="rounded-md pointer-events-none border border-base-300 shadow-warm" />
              </div>
              <div class="h-full grid grid-cols-1">
                <h3 class="font-bold tracking-tight text-sm leading-4">{{ item.name }}</h3>
                <p class="justify-end text-xs self-end flex items-center gap-1 mr-2">
        
                  <img src="@assets/img/icons/Gold.png" class="h-3"/>
                  {{ item.buy }}
                </p>


              </div>
            </div>
            <div class="divider-thin !my-1"></div>
            <div class="text-xs whitespace-pre-line grid self-start grid-cols-1 gap-2 " @click="console.log(item.active, item.passive, item.passive.length) ">
              <p v-if="item.stats" >
              {{ item.stats }}
              </p>

              <p v-if="item.active.length > 2" >
                {{item.active}}
              </p>

              <p v-if="item.passive.length > 2" class="">
              {{item.passive}}
              </p>
            </div>
          </div> -->
        </div>
      </div>

    </TransitionGroup>
  </VueDraggable>

  <context-menu v-model:show="show" :options="options" key="menu">
    <template #itemRightArrowRender>
      <icon icon="teenyicons:right-outline" class="absolute right-1.5" />
    </template>

    <context-menu-item class="mb-0.5" :label="selectedItem.name" @click="onMenuClick(0)" disabled>
      <template #icon>
        <img :src="selectedItem.img" class="rounded-md" />
      </template>

      <template #label>
        <span class="font-bold truncate text-base-content font-sans text-sm tracking-tight ml-2">
          {{ selectedItem.name }}
        </span>
      </template>
    </context-menu-item>


    <!--     <context-menu-item class="cursor-default relative !h-24" label="">

      <span class="absolute whitespace-pre flex flex-wrap text-wrap top-0 left-0 !h-fit text-right"> {{
        selectedItem.stats
        }}
      </span>
    </context-menu-item> -->

    <context-menu-sperator /><!--use this to add sperator-->

    <context-menu-group class="cursor-default" label="Add to Set...">
      <context-menu-item v-for="set in bs.buildSets">
        <template #label>
          <span @click="addToSet(selectedItem, set.key)">{{ set.name }}</span>
        </template>
      </context-menu-item>
    </context-menu-group>

    <context-menu-item class="cursor-pointer" label="" @click="onMenuClick(0)">
      <template #icon>
        <icon icon="teenyicons:heart-outline" />
      </template>
      <template #label>Add to Favorites</template>
    </context-menu-item>

    <context-menu-sperator /><!--use this to add sperator-->

    <context-menu-item class="cursor-pointer flex !w-full" label="" @click="onMenuClick(0)">
      <span class="grow pl-5">Open in Sidebar</span>
      <icon icon="teenyicons:send-right-solid" />
    </context-menu-item>
    <context-menu-item class="flex !w-full">
      <img src="@assets/img/icons/league-filled.svg" class="size-[18px] -ml-[2px] mr-1 opacity-80" />
      <a :href="selectedItem.wiki" target="_blank" class="grow">League Wiki</a>

      <icon icon="radix-icons:external-link" />
    </context-menu-item>
  </context-menu>

</template>

<style>
/* beautify ignore:start */
  .dragging {
    @apply rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px];

    div.mx-context-menu.item-menu {
      @apply !ml-4 backdrop-blur-md !left-64 !bg-base-100/0  z-[1] text-red-800;
    }
  }</style>
