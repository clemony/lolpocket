<script setup lang="ts">
import { useSessionStore } from "../../stores/sessionStore";
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted } from "vue";



const sn = useSessionStore();
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
    class="titlebar absolute top-0 right-0 h-[36px] max-h-[36px] flex place-items-center z-30">




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