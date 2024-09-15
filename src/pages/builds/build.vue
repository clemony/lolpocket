<route lang="json">
{
  "name": "Build",
  "alias": "/build",
  "path": "/builds/build",
  "meta": {
    "title": "Build",
    "icon": "teenyicons:folder-outline"
  },
  "children": [
    {
      "path": "buildItems",
      "component": "buildItems",
      "name": "Items"
    },
    {
      "path": "buildRunes",
      "component": "buildRunes",
      "name": "Runes"
    }
  ]
}
</route>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';

  import { useBStore } from '../../stores/buildStore';
  import { useRuneStore } from '../../stores/runeStore';
  import buildItems from './buildItems.vue'; // Import the components
  import buildRunes from './buildRunes.vue'; // Import the components

  const rs = useRuneStore();
  const bs = useBStore();

  const buildSection = ref('buildItems'); // Ref for reactivity

  // Map section strings to components
  const buildComponent = computed(() => {
    if (buildSection.value === 'buildItems') {
      return buildItems;
    } else if (buildSection.value === 'buildRunes') {
      return buildRunes;
    } else if (buildSection.value === 'buildChampions') {
      //return buildChampions;
    }
    return null; // Fallback in case no component matches
  });

  const isClicked = ref(false);
  const isActive = ref(false);

  function handleExport() {
    isClicked.value = true;
    isActive.value = true;
  }

  const emit = defineEmits(['openSidebar']);

  function handleSidebarEvent() {
    emit('openSidebar'); // Pass the event up to the parent
  }

  onMounted(() => {
    if (bs.buildSets.length < 1) {
      bs.newSet();
    }
  });
</script>

<template>
  <div class="w-full py-4 items-center content-center">
    <div class="pb-0 mx-4 flex gap-4 w-[96%]">
      <Icons />

      <div class="has-[:focus]:border-b-base-300 grow border-b-transparent border-b">
        <input
          type="text"
          placeholder="Build Name"
          spellcheck="false"
          class="input input-ghost focus:bg-transparent font-bold tracking-tight text-lg pl-0 border-none rounded-none focus:border-none placeholder:font-light" />
      </div>

      <!-- /* --------------------------- CHAMPION AVATAR ---------------------------- */ -->

      <div class="grow">
        <ChampionAvatars />
      </div>

      <div class="join *:text-xs items-center *:font-normal justify-self-end">
        <label
          :class="{ active: buildSection == 'buildChampions' }"
          class="join-item btn btn-sm">
          <input
            class="hidden"
            v-model="buildSection"
            type="radio"
            name="section"
            alt="Items"
            value="buildItems"
            checked />
          <span>Champs</span>
        </label>
        <label
          :class="{ active: buildSection == 'buildItems' }"
          class="join-item btn btn-sm">
          <input
            class="hidden"
            v-model="buildSection"
            type="radio"
            name="section"
            alt="Items"
            value="buildItems"
            checked />
          <span>Items</span>
        </label>
        <label
          :class="{ active: buildSection == 'buildRunes' }"
          class="join-item btn btn-sm">
          <input
            class="hidden"
            v-model="buildSection"
            type="radio"
            name="section"
            alt="Runes"
            value="buildRunes" />
          <span>Runes</span>
        </label>
      </div>

      <button
        class="btn btn-sm hover:text-neutral-content hover:bg-neutral self-center relative *>:transition-all *>:duration-300"
        :class="{ 'group/load': isClicked, active: isActive }"
        alt="Create export for League Client"
        title="Create export for League Client"
        @click="handleExport()">
        <Icon
          icon="teenyicons:upload-outline"
          alt="Export"
          class="group-even/load:opacity-0" />
        <icon
          icon="eos-icons:three-dots-loading"
          class="opacity-0 left-1.5 absolute group-even/load:opacity-100 size-5 delay-150 drop-shadow-md" />
        <span class="text-xs font-normal">Export</span>
      </button>

      <dialog
        id="my_modal_2"
        class="modal">
        <div class="modal-box m-auto">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form
          method="dialog"
          class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>

  <!------------------------------SPLIT START-------------------------------- */ -->

  <RouterView class="w-full h-full">
    <Transition name="list">
      <component
        :is="buildComponent"
        class="w-full h-full" />
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
  }
</style>
