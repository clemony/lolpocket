<script setup lang="ts">
import { ref } from 'vue';
import { useSessionNav } from "@stores/sessionStore";

import { Icon } from "@iconify/vue";

const sn = useSessionNav();
const isMinimized = ref(false);

function toggleMinimize() {
    if (isMinimized.value == false) {
        isMinimized.value = true;
    } else {
        isMinimized.value = false;
    }
}
</script>
<template>
    <div data-tauri-drag-region
        class="titlebar top-0 left-0 h-[36px] max-h-[36px] w-full grid grid-cols-3 place-items-center">
        <div
            class="flex col-start-1 justify-self-start self-base mt-2 ml-5 select-none font-bold text-base gap-3 content-center items-center">
            <button @click="toggleMinimize">
                <Icon icon="ci:house-02"
                    class="p-0.5 rotate-180 cursor-pointer pt-[1px] rounded-full text-base-100 bg-base-content size-5" />
            </button>
            <span class="cursor-pointer hover:underline" @click="sn.navigateTo('/about')">lolpocket

            </span>
        </div>

        <!-- /* ----------------------------- SEARCH BOX HERE HI ---------------------------- */ -->

        <div data-tauri-drag-region class="w-full flex col-start-2 place-content-center z-0 dropdown">
            <SearchBox />
        </div>

        <!-- /* ----------------------------- TOOLBAR BUTTONS ---------------------------- */ -->
        <!-- beautify ignore:start -->
    <div
      class="titlebar justify-self-end col-start-3 grid grid-cols-3 gap-2 mr-3 *:place-items-center *: *:rounded-md *:size-6 text-base-content/60"
    >
      <div
        id="titlebar-minimize"
        data-tip="minimize"
        alt="minimize"
        class="p-1 hover:bg-base-300 hover:text-base-content hover:shadow-inner hover:shadow-base-content/20"
      >
        <Icon icon="ph:line-vertical" class="rotate-90" />
      </div>

      <div
        id="titlebar-maximize"
        data-tip="maximize"
        alt="maximize"
        class="p-1 hover:bg-base-300 hover:text-base-content hover:shadow-inner hover:shadow-base-content/20"
      >
        <Icon icon="ph:arrows-out-simple" />
      </div>

      <div
        id="titlebar-close"
        alt="close"
        data-tip="close"
        class="p-1 hover:bg-base-300 hover:shadow-inner hover:shadow-base-content/20 hover:text-base-content"
      >
        <Icon icon="ph:x" class="titlebar-button" />
      </div>
    </div>
  </div>
</template>
