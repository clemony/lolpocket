<script setup lang="ts">
import { useSessionNav } from "@stores/sessionStore";
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted } from "vue";
import { VueShortkey } from "vue3-shortkey";
const query = ref("");


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
    class="titlebar top-0 left-0 h-[36px] max-h-[36px] w-full grid grid-cols-[1fr_7fr_1fr] place-items-center">
    <div class="flex col-start-1 justify-self-start self-base mt-2 ml-5 select-none  gap-3 content-center items-center">
      <button @click="toggleMinimize">
        <Icon icon="ci:house-02"
          class="p-0.5 rotate-180 cursor-pointer pt-[1px] rounded-full text-base-100 bg-base-content size-5" />
      </button>
      <span class="cursor-pointer hover:underline font-semibold text-base" @click="sn.navigateTo('/about')">lolpocket

      </span>
    </div>

    <!-- /* ----------------------------- SEARCH BOX HERE HI ---------------------------- */ -->

    <div data-tauri-drag-region class=" col-start-2  dropdown text-center  flex justify-end w-full pl-6 rounded-lg z-0">

      <div
        class="relative max-w-[470px] h-[27px] shadow-inner shadow-[var(--dark-shadow)] bg-base-100/80 border border-base-content/10 focus:ring-offset-base-content/30 text-base-content/60 rounded-[10px] z-20 justify-self-end items-end">

        <input tabindex="0" role="" v-model="query" placeholder=""
          class="peer italic h-full text-xs !outline-0 !outline-transparent !outline-none rounded-[10px] ring-0 focus:outline-0 focus:ring-1 border-0 focus:border-0 focus:not-italic focus:ring-base-content/10 focus:text-base-content transition-all duration-500 w-32 pl-2 focus:w-72 bg-transparent placeholder:font-mono placeholder:not-italic placeholder:text-lg placeholder:align-center focus:bg-base-100/50"
          @keydown.enter.prevent v-shortkey.focus="['meta' || 'ctrl', 's']" />


        <div
          class="peer-focus:opacity-0 absolute pointer-events-none -top-[1px] right-[48px] items-center opacity-70 *:!rounded-md *:bg-transparent transition-opacity duration-500">

          <kbd class="kbd kbd-xs ">⌘</kbd>
          +
          <kbd class="kbd kbd-xs ">S</kbd>

        </div>
        <Icon icon="ph:magnifying-glass"
          class="size-5 absolute right-3 top-[1px] flex gap-2.5 z-20 text-base-content/30" />

      </div>



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
<style scoped>
.btn {
  @apply btn-sm bg-opacity-80;
}


.tab,
.tab-active,
.tabs-lifted {
  @apply bg-transparent;
}

.radio {
  @apply radio-xs ml-2;
}

.tab-panel {
  @apply bg-transparent;
}

.label {
  @apply grid grid-cols-[3fr_1fr];

  span {
    @apply flex justify-start;
  }
}
</style>