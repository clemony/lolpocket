<route lang="json">{
  "name": "pocket",
  "props": true,
  "path": "/pockets/pocket/:pocketKey",
  "meta": {
    "title": "Pocket",
    "icon": "teenyicons:folder-outline"
  }
}</route>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import pocketItems from './pocketItems.vue'; // Import the components
import buildRunes from './pocketRunes.vue'; // Import the components
import buildChampions from './pocketChampions.vue';
import { useUserStore } from '../../stores/userStore';
import { useSessionStore } from '../../stores/sessionStore';
import { usePocketStore } from '../../stores/pocketStore';

const us = useUserStore();
const rs = useRuneStore();
const is = useItemStore();
const sn = useSessionStore();
const ps = usePocketStore();

const props = defineProps<{
  pocketKey: string;
}>()


const pocketSection = ref('Champions'); // Ref for reactivity

// Map section strings to components
const buildComponent = computed(() => {
  if (pocketSection.value === 'Items') {
    return pocketItems;
  } else if (pocketSection.value === 'Runes') {
    return buildRunes;
  } else if (pocketSection.value === 'Champions') {
    return buildChampions;
  }
  return null; // Fallback in case no component matches
});

const isClicked = ref(false);
console.log(isClicked);
const isActive = ref(false);

function handleExport() {
  isClicked.value = true;
  isActive.value = true;
}


onMounted(() => {
  if (is.itemSets.length < 1) {
    is.newSet();

  }
});

const sidebarButton = computed(() => {
  if (us.showSidebar == 'true') {
    return 'Collapse Sidebar';
  } else {
    return 'Open Sidebar';
  }
});
</script>

<template>
  <div class="items-center content-center w-full py-4">
    <div class="pb-0 ml-5 pl-2 flex gap-5 w-[96%]">

      <!-- 
      <div class="has-[:focus]:border-b-base-300 border-b-transparent border-b  relative">
        <input type="text" placeholder="Build Name" spellcheck="false" v-model="is.buildName"
          class="pl-0 pb-3 text-[1.3rem] antialiased flex items-end content-end border-none rounded-none input input-ghost focus:bg-transparent align-bottom  focus:border-none placeholder:font-light peer" />

        <button :class="{ 'peer-focus:opacity-100': is.buildName != '' }"
          class="opacity-0 transition-all duration-150 hover:text-base-content  text-base-content/60 z-30 bg-base-100  mr-1 pointer-events-auto absolute top-5 right-0.5"
          alt="clear" title="clear">
          <Icon icon="teenyicons:backspace-solid" class='size-4' />
        </button>
      </div> -->

      <div class="flex items-center text-sm breadcrumbs">
        <ul>
          <li><a @click="sn.navigateTo('/pockets/pockets')"> Pockets </a></li>
          <li class="cursor-pointer">{{ " Pocket Name" }}</li>
          <li class="cursor-default">{{ pocketSection }}</li>
        </ul>
      </div>


      <!-----------------------------⟢ Champ Avatars ⟣------------------------------>

      <div class="grow ">

      </div>


      <div class="join *:text-xs items-center *:font-normal justify-self-end">
        <label :class="{ active: pocketSection == 'Champions' }" class="join-item btn btn-sm">
          <input class="hidden" v-model="pocketSection" type="radio" name="section" alt="Champions" value="Champions" />
          <span>Champs</span>
        </label>
        <label :class="{ active: pocketSection == 'Items' }" class="join-item btn btn-sm">
          <input class="hidden" v-model="pocketSection" type="radio" name="section" alt="Items" value="Items" />
          <span>Items</span>
        </label>
        <label :class="{ active: pocketSection == 'Runes' }" class="join-item btn btn-sm">
          <input class="hidden" v-model="pocketSection" type="radio" name="section" alt="Runes" value="Runes" />
          <span>Runes</span>
        </label>
      </div>

      <!--       <button class="btn btn-sm self-center relative *>:transition-all *>:duration-300"
        :class="{ 'group/load': isClicked, active: isActive }" alt="Create export for League Client"
        title="Create export for League Client" @click="handleExport()">
        <Icon icon="teenyicons:upload-outline" alt="Export" class="group-even/load:opacity-0" />
        <icon icon="eos-icons:three-dots-loading"
          class="opacity-0 left-1.5 absolute group-even/load:opacity-100 size-5 delay-150 drop-shadow-md" />
        <span class="text-xs font-normal">Export</span>
      </button>

      <dialog id="my_modal_2" class="modal">
        <div class="m-auto modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> -->

      <div class="items-center join">
        <label :class="{ active: us.showSidebar == true }" :title="sidebarButton"
          class="relative flex items-center join-item btn btn-sm swap swap-rotate text-nowrap">
          <input type="checkbox" v-model="us.showSidebar" :value="us.showSidebar" class="hidden" checked />
          <icon icon="teenyicons:send-right-solid" class=" swap-on size-3.5" />
          <icon icon="teenyicons:send-left-outline" class="absolute swap-off size-3.5" />

        </label>

        <button class="btn btn-sm join-item">
          <icon icon="teenyicons:more-horizontal-outline" class=" swap-on size-4" />

        </button>
      </div>

    </div>
  </div>

  <!------------------------------SPLIT START-------------------------------- */ -->

  <RouterView class="w-full h-full">
    <Transition name="component">
      <component :is="buildComponent" class="w-full h-full" :pocketKey="props.pocketKey" />
    </Transition>
  </RouterView>
</template>

<!--         /* -------------------------------------------------------------------------- */
        /*                              STYLE                           */
        /* -------------------------------------------------------------------------- */ -->

<style>
button.active,
label.active {
  @apply bg-neutral text-neutral-content border-neutral hover:bg-neutral/80;
}

.slot {
  @apply size-[60px] aspect-square rounded-md ring-1 ring-offset-[2px] ring-base-300/90 ring-offset-base-100;
}

.show {
  @apply opacity-100 block;
}

/* beautify ignore:start */
  .empty {
    @apply !size-6 hover:!size-10;
  }

  .filter-on {
    &::after {
      @apply content-[''];
    }
  }

  .DragFeedback__feedback {
    opacity: 0 !important;
    visibility: hidden !important;
    display: none !important;
  }</style>
