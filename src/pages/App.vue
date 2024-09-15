<script setup lang="ts">
import { ref, onMounted, shallowRef } from "vue";
import "@assets/css/imports.css";
import { storeToRefs, _StoreWithState } from "pinia";
import { useUserSettings } from "./../stores/userSettings";
import { useSessionStore } from "./../stores/sessionStore";
import { ModalsContainer } from 'vue-final-modal'
//import anime from 'animejs/lib/anime.es.js';
import { RouterView, } from "vue-router";
import ChampionGrid from './../pages/champions/championGrid.vue';
import championSidebar from "./champions/championSidebar.vue";



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

// Track the active tab
const activeTab = ref("");

// Method to remove a tab by id and set the next tab as active
function removeTab(id) {
  const tabIndex = sn.openTabs.findIndex((tab) => tab.id === id);

  // Remove the tab by filtering it out
  sn.openTabs = sn.openTabs.filter((tab) => tab.id !== id);

  // Set the next active tab
  if (sn.openTabs.length > 0) {
    if (tabIndex === sn.openTabs.length) {
      // If the last tab was removed, set the previous tab as active
      activeTab.value = sn.openTabs[sn.openTabs.length - 1].tab.link;
    } else {
      // Otherwise, set the next tab as active
      activeTab.value = sn.openTabs[tabIndex] ? sn.openTabs[tabIndex].tab.link : sn.openTabs[sn.openTabs.length - 1].tab.link;
    }

    // Optionally, navigate to the newly active tab
    sn.navigateTo(activeTab.value);
  } else {
    // If no tabs are left, reset the active tab
    activeTab.value = "";
    sn.navigateTo("/home");
  }
}



/* ------------------------------ ON MOUNTED ----------------------------- */


onMounted(() => {
  const settings = useUserSettings();
  const sn = useSessionStore();
  if (!sn.activeTab) {
    sn.navigateTo('/home');
  }
});

</script>
<template>

  <Titlebar />
  <ModalsContainer />


  <!--   /* -------------------------------------------------------------------------- */
         /*                                 PANEL ONE START                            */
        /* -------------------------------------------------------------------------- */ -->

  <Splitpanes ref="splitter"
    class="mt-3 drawer-content !w-[inherit]  default-theme overscroll-none overflow-hidden place-content-end "
    @resize="log('resize', $event)">



    <Pane :size="paneSize" :min-size="3" :max-size="21" :class="{ minimize: sn.minimized == true }"
      class="max-w-[300px] min-w-[60px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20 mt-0">

      <Menu />

    </Pane>

    <!--   /* -------------------------------------------------------------------------- */
       /*                                PANEL 2 START                          */
       /* -------------------------------------------------------------------------- */ -->

    <Pane :min-size="secondPaneMin" :size="secondPane"
      class="  overscroll-none overflow-hidden relative justify-end left-0 bottom-0 ">




      <div data-tauri-drag-region role="tablist" class="tabs tabs-lifted flex z-10 pointer-events-auto">
        <template v-for="tab in sn.openTabs" :key="tab.id">
          <a role="tab"
            class="group flex justify-start tab m-0 w-36 before:visible before:-left-[8px]  after:visible capitalize text-xs z-[5]  pointer-events-auto font-medium"
            :alt="tab.tab.name" :class="['tab', { 'tab-active': sn.isActiveTab(tab.tab.link) }]"
            @click.prevent="sn.navigateTo(tab.tab.link)">
            <Icon :icon="tab.icon || 'default-icon'" class="size-3.5 mr-2 ml-1" />
            <span class="mt-[2px] grow justify-start flex">{{ tab.title }}</span>

            <button
              class="opacity-0 flex content-center justify-end group-hover:opacity-70 transition-opacity duration-300 size-4"
              @click.stop="removeTab(tab.id)"> <!-- Stop event propagation to prevent tab click -->
              <Icon icon="material-symbols:close" class="size-3.5 ml-2 -mr-1" />
            </button>

          </a>
          <div role="tabpanel" class="tab-content overflow-hidden  !bg-base-100/90 absolute inset-0 m-0 mt-[31px]   border-base-300 border h-auto !p-0 !rounded-bl-none !rounded-tr-none
           !shadow-[inset_-12px_-8px_40px_#46464620] ">

            <RouterView @open-sidebar="openSidebar" />
          </div>
        </template>
        <a role="tab" class="hidden basket">egg</a>

      </div>

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

<!--   /* -------------------------------------------------------------------------- */
       /*                                CSS CSS CSS  START                          */
       /* -------------------------------------------------------------------------- */ -->

<style></style>
