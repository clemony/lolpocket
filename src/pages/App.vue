<script setup lang="ts">
import { ref, onMounted, shallowRef } from "vue";
import "@assets/css/imports.css";
import { useUserStore } from "../stores/userStore";
import { useSessionStore } from "./../stores/sessionStore";
import { ModalsContainer } from 'vue-final-modal'
//import anime from 'animejs/lib/anime.es.js';



// Ref to hold the current sidebar component
const sidebarComponent = shallowRef();

// Function to handle the sidebar opening and set the component dynamically
const openSidebar = (componentName: string) => {
  if (componentName) {
    sidebarComponent.value = componentName;
  }
};
/* ------------------------------- NAVIGATION ------------------------------- */


const sn = useSessionStore();

const paneSize = ref(19);
const secondPaneMin = ref(81);
const secondPane = ref(100);

function log(resize, event: any) {

}

/* ------------------------------ ON MOUNTED ----------------------------- */


onMounted(() => {
  const settings = useUserStore();
});

</script>
<template>

  <Titlebar />
  <ModalsContainer />

  <Splitpanes ref="splitter" id="split"
    class="mt-3 drawer-content !w-[inherit]  default-theme overscroll-none overflow-hidden place-content-end "
    @resize="log('resize', $event)">

    <!-------------------------------⟢ Pane 1 ⟣-------------------------------->

    <Pane :size="paneSize" :min-size="3" :max-size="21" :class="{ minimize: sn.minimized == true }"
      class="max-w-[300px] min-w-[60px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20 mt-0">

      <Menu />

    </Pane>

    <!-------------------------------⟢ Pane 2 ⟣-------------------------------->

    <Pane :min-size="secondPaneMin" :size="secondPane"
      class="  overscroll-none overflow-hidden relative justify-end left-0 bottom-0 ">

      <Tabs />

    </Pane>
  </Splitpanes>
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-side overscroll-none z-30 max-h-screen h-screen">

    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay w-full h-full"></label>

    <div class="menu bg-base-200 text-base-content h-screen w-2/5 p-4 pt-[30px]">

      <!--       <component :is="sidebarComponent" />
 -->
    </div>


  </div>
  <div class="pointer-events-none w-screen h-screen fixed top-0 left-0 z-[999] shadow-frame rounded-[12px]">
  </div>

</template>

<style></style>
