<script setup lang="ts">
import { ref, computed, onMounted, DefineComponent } from "vue";
import "@assets/css/imports.css";
import { storeToRefs, _StoreWithState } from "pinia";
import { useDataStore } from "@stores/dataStore";
import { Icon } from "@iconify/vue";
import { useUserSettings } from "@stores/userSettings";
import { Splitpanes, Pane } from "splitpanes";
import { useSessionNav } from "@stores/sessionStore";
import Titlebar from "@components/titlebar.vue";
const settings = useUserSettings();
const sn = useSessionNav();
import anime from 'animejs/lib/anime.es.js';
import { RouterView, useRoute, useRouter } from "vue-router";

/* ------------------------------- NAVIGATION ------------------------------- */
// Access the router instance
const router = useRouter();
const route = useRoute();

const showDropdowns = ref([false, true, true]); // Track visibility for each dropdown (index-based)
const isMinimized = ref(false);
const paneSize = ref(19);
const secondPaneMin = ref(81);
const secondPane = ref(100);

function log(resize, event: any) {
  var firstSize = event[0].size;
  console.log(event[0].size);
  if (firstSize < 14) {
    anime({
      targets: ".menu li ul",
      opacity: 0.5,
    });
  }
  if (firstSize < 11) {
    var a11 = anime.timeline({
      targets: '.menu li ul li a',
      opacity: 0,
      duration: 300,
    });
    a11.add({
      targets: '.menu li ul li',
      height: 0,
      duration: 200,
      delay: anime.stagger(50, { direction: 'reverse' }),
    }, '-=50');
  }
  if (firstSize < 8) {
    anime({
      targets: '.menu a span',
      opacity: 0,
    });
  }



  if (firstSize > 8) {
    anime({
      targets: '.menu a span',
      opacity: 1,
    });
  }
  if (firstSize > 11) {
    var a11 = anime.timeline({
      targets: '.menu li ul li a',
      opacity: 1,
      duration: 300,
    });
    a11.add({
      targets: '.menu li ul li, ul',
      height: [],
      duration: 200,
      delay: anime.stagger(50, { direction: 'normal' }),
    }, '-=50');

  }
  if (firstSize > 14) {
    anime({
      targets: ".menu li ul",
      opacity: 1,
    });
  }
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


// Toggle visibility for the dropdown at a specific index
function toggleShow(index: number) {
  showDropdowns.value[index] = !showDropdowns.value[index];
}
/* ------------------------------ ON MOUNTED ----------------------------- */

onMounted(async () => {
  const dataStore = useDataStore();
  dataStore.fetchData();

  sn.navigateTo("/home");
});
</script>
<template>

  <Titlebar />
  <!--   /* -------------------------------------------------------------------------- */
         /*                                 PANEL ONE START                            */
        /* -------------------------------------------------------------------------- */ -->

  <Splitpanes ref="splitter" class="drawer-end drawer  default-theme overscroll-none overflow-hidden place-content-end "
    @resize="log('resize', $event)">



    <Pane :size="paneSize" :min-size="3" :max-size="21" :class="{ minimize: isMinimized }"
      class="max-w-[300px] min-w-[60px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20">
      <div id="menu" class="!overflow-y-scroll  mx-0.5 ">
        <ul
          class="menu  [&_svg]:size-4 *:tracking-wide space-y-3 text-xs [&_a]:flex [&_a]:gap-3 [&_a]:-ml-1 [&_a]:font-medium [&_ul]:before:opacity-20 [&_ul]:ml-5">
          <li>
            <a @click="sn.navigateTo('/home')" class="tooltip tooltip-right" title="hello">
              <Icon icon="ph:house" />
              <span>Home</span>
            </a>
          </li>
          <li id="builds">
            <span :class="{ 'menu-dropdown-show': showDropdowns[0] }" @click="toggleShow(0)"
              class="menu-dropdown-toggle">
              <a>
                <Icon icon="ph:cube" />
                <span>Builds</span>
              </a>
            </span>
            <ul :class="{ 'menu-dropdown-show': showDropdowns[0] }" class="menu-dropdown">
              <li>
                <a @click="router.push('/champions')"><span>Submenu 1</span></a>
              </li>
              <li>
                <a><span>Submenu 2</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a @click="sn.navigateTo('/hi')">
              <Icon icon="ph:calculator" />
              <span>Calculator</span>
            </a>
          </li>
          <li id="faves">
            <span :class="{ 'menu-dropdown-show': showDropdowns[1] }" @click="toggleShow(1)"
              class="menu-dropdown-toggle">
              <a>
                <Icon icon="ph:heart-straight" />
                <span>Favorites</span>
              </a>
            </span>
            <ul :class="{ 'menu-dropdown-show': showDropdowns[1] }" class="menu-dropdown">
              <li>
                <a @click="sn.navigateTo('/champions')">
                  <Icon icon="ph:crown-simple" /><span>Champions</span>
                </a>
              </li>
              <li>
                <a @click="sn.navigateTo('/items')">
                  <Icon icon="vaadin:sword" /><span>Items</span>
                </a>
              </li>
            </ul>
          </li>
          <li id="browse">
            <span :class="{ 'menu-dropdown-show': showDropdowns[2] }" @click="toggleShow(2)"
              class="menu-dropdown-toggle">
              <a>
                <Icon icon="solar:glasses-linear" />
                <span>Browse</span>
              </a>
            </span>
            <ul :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="menu-dropdown">
              <li>
                <a @click="sn.navigateTo('/champions')">
                  <Icon icon="ph:crown-simple" /><span>Champions</span>
                </a>
              </li>
              <li>
                <a @click="sn.navigateTo('/items')">
                  <Icon icon="vaadin:sword" /><span>Items</span>
                </a>
              </li>
              <li>
                <a>
                  <Icon icon="ph:hexagon" /><span>Runes</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="">
              <Icon icon="ph:at" />
              <span>Account</span>
            </a>
          </li>
          <li>
            <a @click="sn.navigateTo('/settings')">
              <Icon icon="ph:gear-six" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </Pane>

    <!--   /* -------------------------------------------------------------------------- */
       /*                                PANEL 2 START                          */
       /* -------------------------------------------------------------------------- */ -->

    <Pane :min-size="secondPaneMin" :size="secondPane"
      class=" drawer-content overscroll-none overflow-hidden relative max-h-[calc(100%-36px)] justify-end left-0 bottom-0">




      <div role="tablist" class="tabs tabs-lifted flex z-10 ">
        <template v-for="tab in sn.openTabs" :key="tab.id">
          <a role="tab"
            class="group flex justify-start tab m-0 w-36 before:visible before:-left-[8px]  after:visible capitalize text-xs z-[5]  tracking-wider font-medium"
            :alt="tab.tab.name" :class="['tab', { 'tab-active': sn.isActiveTab(tab.tab.link) }]"
            @click.prevent="sn.navigateTo(tab.tab.link)">
            <Icon :icon="sn.getIconForTab(tab.tab.link)" class="size-3.5 mr-2 ml-1 " />
            <span class="mt-[2px]">{{ tab.tab.name }}</span>

            <button
              class="opacity-0 flex flex-grow content-center justify-end group-hover:opacity-70 transition-opacity duration-300 "
              @click.stop="removeTab(tab.id)"> <!-- Stop event propagation to prevent tab click -->
              <Icon icon="material-symbols:close" class="size-3.5 ml-2 -mr-1" />
            </button>

          </a>
          <div role="tabpanel" class="tab-content overflow-hidden  bg-base-100/70 absolute inset-0 m-0 mt-[31px]   border-base-300 border h-auto !p-0 !rounded-bl-none !rounded-tr-none
           !shadow-[inset_-12px_-8px_40px_#46464620] ">
            <component :is="sn.getComponentForTab(tab.tab.link)" />
          </div>

        </template>
        <a role="tab" class="hidden">egg</a>

      </div>

    </Pane>
  </Splitpanes>
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-side overscroll-none z-30">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-[30px]">
      <template v-for="tab in sn.openTabs" :key="tab.id">
        <component :is="sn.getSidebarForTab(tab.tab.link)" />
      </template>
    </div>
  </div>
  <div class="pointer-events-none w-screen h-screen fixed top-0 left-0 z-[999] shadow-frame rounded-[12px]">
  </div>
</template>

<!--   /* -------------------------------------------------------------------------- */
       /*                                CSS CSS CSS  START                          */
       /* -------------------------------------------------------------------------- */ -->

<style>
/* beautify ignore:start */
.menu-dropdown {
  @apply block h-0 invisible transition-height;

  li {
    @apply opacity-0 h-0 transition-[opacity_200,_height_300] ease-in;
  }

  &.menu-dropdown-show {
    @apply h-full visible;

    li {
      @apply opacity-100 h-8;
    }
  }
}
/* beautify ignore:end */

a::before,
a::after {
  @apply invisible;
}

.minimize {
  @apply !max-w-[60px] w-[60px] transition-all duration-500;

  #logo {
    @apply ml-[9px] p-0 scale-[1.4] mt-1 w-[35px] opacity-80;

    span {
      @apply w-0 opacity-0 hidden;
    }
  }

  a::before,
  a::after {
    @apply visible z-50 absolute;
  }

  .menu {
    @apply w-[60px] transition-all duration-700 justify-center;

    a,
    li span {
      @apply flex size-[35px] rounded-full p-0 m-0 justify-center place-items-center;

      svg {
        @apply size-5;
      }

      span {
        @apply opacity-0 w-0 hidden;
      }
    }

    #builds,
    #faves {
      ul {
        @apply hidden;
      }
    }

    #builds,
    #faves,
    #browse {
      & span::after {
        @apply opacity-0 h-0 w-0 hidden;
      }
    }

    #browse {
      @apply -ml-1.5 place-content-center rounded-full transition-all duration-300;

      span {
        @apply size-[30px];
      }

      ul {
        @apply h-0 ml-0 w-[30px] flex flex-col place-items-center bg-base-content/15 rounded-full;
      }

      a svg {
        @apply size-4;
      }

      &:has(.menu-dropdown-show) {
        span {
          @apply bg-base-content/80 text-base-100/80;
        }

        ul {
          @apply h-full my-2 px-0 py-1;

          &::before {
            @apply invisible opacity-0;
          }
        }
      }
    }
  }

  li {
    @apply my-1 py-1;
  }
}

/*
 mask-composite: exclude;
        inset: 0;
        -webkit-mask:
          url('') 0/100% 100%,
          linear-gradient(#fff, #fff);
        -webkit-mask-composite: destination-out;
        mask:
          url('') 0/100% 100%, linear-gradient(#fff, #fff);
*/
</style>
