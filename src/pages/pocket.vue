<route lang="json">{
  "name": "pocket",
  "props": true,
  "path": "/pocket/:pocketKey",
  "component": "pocket",
  "meta": {
    "title": "Pocket",
    "icon": "teenyicons:folder-outline"
  }
}</route>

<script setup lang="ts">
import { ref, watch, getCurrentInstance, computed } from 'vue';
import { useSessionStore } from './../stores/sessionStore';
import { usePocketStore } from './../stores/pocketStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const ps = usePocketStore();
const ss = useSessionStore();

const pocketKey = ref<string>(route.params.pocketKey as string || '');

const props = defineProps<{
  pocketKey: string;
}>();

const pocket = ps.getPocket(pocketKey);

watch(
  () => route.params.pocketKey,
  (newKey) => {
    if (newKey) {
      pocketKey.value = newKey as string; // Type assertion to string
    }
  }
);

// Compute `currentPocket` based on the reactive `pocketKey`
const currentPocket = computed(() => {
  return ps.getPocket(pocketKey.value);
});


const isClicked = ref(false);

const isActive = ref(false);

function handleExport() {
  isClicked.value = true;
  isActive.value = true;
}

const sidebarButton = computed(() => {
  if (ps.showSidebar == true) {
    return 'Collapse Sidebar';
  } else {
    return 'Open Sidebar';
  }
});


</script>

<template>
  <div v-if="currentPocket" class="items-center content-center w-full py-4">
    <div class="pb-0 ml-5 pl-2 flex gap-5 w-[96%]">

      <div class="flex items-center text-xs breadcrumbs">
        <ul>
          <li><a @click="ss.navigateTo('/pockets/pockets')"> Pockets </a></li>
          <li class="">
            <RouterLink :to="{ path: `/pocket/${currentPocket.key}/` }" class="flex gap-2 cursor-pointer">

              <icon :icon="currentPocket.icon" />
              {{ currentPocket.name }}
            </RouterLink>
          </li>
          <li class="cursor-default">{{ }}</li>
        </ul>
      </div>

      <div class="grow "> </div>

      <div class="join *:text-xs items-center *:font-normal justify-self-end">
        <RouterLink :to="{ path: `/pocket/${currentPocket.key}/pocket-champions` }" class="join-item btn btn-sm">Champs
        </RouterLink>
        <RouterLink :to="{ path: `/pocket/${currentPocket.key}/pocket-items` }" class="join-item btn btn-sm">Items
        </RouterLink>
        <RouterLink :to="{ path: `/pocket/${currentPocket.key}/pocket-runes` }" class="join-item btn btn-sm">
          Runes
        </RouterLink>
      </div>


      <div class="items-center join">
        <label :class="{ active: ps.showSidebar == true }" :title="sidebarButton"
          class="relative flex items-center join-item btn btn-sm swap swap-rotate text-nowrap">
          <input type="checkbox" v-model="ps.showSidebar" :value="ps.showSidebar" class="hidden" checked />
          <icon icon="teenyicons:send-right-solid" class=" swap-on size-3.5" />
          <icon icon="teenyicons:send-left-outline" class="absolute swap-off size-3.5" />

        </label>

        <button class="btn btn-sm join-item">
          <icon icon="teenyicons:more-horizontal-outline" class=" swap-on size-4" />

        </button>
      </div>

    </div>
  </div>

  <!------------------------⟢ router ⟣------------------------->


  <RouterView v-slot="{ Component }" class="w-full h-full">
    <keep-alive>
      <component :is="Component" ref="section" :pocketKey="pocketKey" />
    </keep-alive>
  </RouterView>

</template>

<!------------------------⟢ style ⟣------------------------->
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
