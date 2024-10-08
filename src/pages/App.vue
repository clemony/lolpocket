<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import "@assets/css/imports.css";
import { usegeneralStore } from "../stores/generalStore";
import { useSessionStore } from "./../stores/sessionStore";




const isMinimized = ref(false);



/* ------------------------------- NAVIGATION ------------------------------- */


const sn = useSessionStore();

const paneSize = computed(() => {
  let size = 19;
  if (isMinimized.value == true) {
    size = 2;
  }
  return size;
});

const secondPaneMin = ref(81);
const secondPane = ref(100);

function log(resize, event: any) {

}

/* ------------------------------ ON MOUNTED ----------------------------- */


onMounted(() => {
  const settings = usegeneralStore();
});

</script>
<template>

  <Titlebar />

  <Splitpanes ref="splitter" id="split" :dbl-click-splitter='false'
    class=" drawer-content !w-[inherit]  default-theme overscroll-none overflow-hidden place-content-end "
    @resize="log('resize', $event)">

    <!-------------------------------⟢ Pane 1 ⟣-------------------------------->

    <Pane :size="paneSize" :min-size="2" :max-size="21" :class="{ minimize: sn.minimized == true }"
      class="max-w-[300px] min-w-[50px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20 mt-0">

      <Menu v-model:isMinimized="isMinimized" />

    </Pane>

    <!-------------------------------⟢ Pane 2 ⟣-------------------------------->

    <Pane :min-size="secondPaneMin" :size="secondPane"
      class="relative bottom-0 left-0 justify-end mt-3 overflow-hidden overscroll-none ">

      <Tabs />

    </Pane>
  </Splitpanes>



  <div class="pointer-events-none w-screen h-screen fixed top-0 left-0 z-[999] shadow-frame rounded-[12px]">

  </div>





</template>

<style></style>
