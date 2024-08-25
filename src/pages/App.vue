<script setup lang="ts">
import { ref, computed, onMounted, DefineComponent } from "vue";
import "@assets/imports.css";
import { storeToRefs, _StoreWithState } from "pinia";
import { useDataStore } from "@stores/dataStore";
import { Icon } from "@iconify/vue";
import { useUserSettings } from "@stores/userSettings";
import { Splitpanes, Pane } from "splitpanes";
import { useSessionNav } from "@stores/sessionStore";
import Titlebar from "./components/titlebar.vue";
const settings = useUserSettings();
const sn = useSessionNav();

/* ------------------------------- NAVIGATION ------------------------------- */

const showDropdowns = ref([false, true, true]); // Track visibility for each dropdown (index-based)
const isMinimized = ref(false);
const paneSize = ref(19);
const secondPaneMin = ref(100);
const secondPane = ref(100);


function log(resize, event: any) {
  var firstSize = event[0].size;

  if (firstSize < 13) {
    isMinimized.value = true;
    paneSize.value = 3;
    sn.$patch({ isMinimized, paneSize })
  } else {
    isMinimized.value = false;
    paneSize.value = 19;
    sn.$patch({ isMinimized, paneSize })
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

  <Splitpanes ref="splitter" class="default-theme overscroll-none overflow-hidden" @resize="log('resize', $event)">
    <Pane :size="paneSize" :min-size="3" :max-size="21" :class="{ minimize: isMinimized }"
      class="max-w-[300px] min-w-[60px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20">
      <div id="menu" class="!overflow-y-scroll mt-2">
        <ul
          class="menu ml-1 [&_svg]:size-4 tracking-wider space-y-3 text-xs [&_a]:flex [&_a]:gap-3 [&_a]:-ml-1 [&_ul]:before:opacity-20 [&_ul]:ml-5">
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
                <a><span>Submenu 1</span></a>
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

    <Pane :min-size="secondPaneMin" :size="secondPane" class="overscroll-none overflow-hidden relative">
      <div role="tablist" class="tabs tabs-lifted tabs-sm flex z-10 ">
        <template v-for="tab in sn.openTabs" :key="tab.id">
          <a role="tab"
            class="group tab m-0 max-w-44 before:visible before:-left-2 after:visible capitalize text-xs z-10"
            :alt="tab.tab.name" :class="['tab', { 'tab-active': sn.isActiveTab(tab.tab.link) }]"
            @click.prevent="sn.navigateTo(tab.tab.link)">
            <Icon :icon="sn.getIconForTab(tab.tab.link)" class="size-3.5 mr-2" />{{ tab.tab.name }}
            <button
              class="opacity-0 flex content-base justify-items-end group-hover:opacity-70 transition-opacity duration-300"
              @click="delete sn.openTabs[tab.tab.name]">
              <Icon icon="material-symbols:close" class="size-3.5 ml-2 -mr-1" />
            </button>
          </a>
          <div role="tabpanel"
            class="tab-content overflow-hidden  bg-base-100 absolute rounded-[10px] inset-0 m-0 mt-[23px]  rounded-tl-none border-base-300 border h-auto">
            <component :is="sn.getComponentForTab(tab.tab.link)" />
          </div>

        </template>
        <a role="tab" class="hidden">hi</a>
      </div>
    </Pane>
  </Splitpanes>
</template>

<!--   /* -------------------------------------------------------------------------- */
       /*                                CSS CSS CSS  START                          */
       /* -------------------------------------------------------------------------- */ -->

<style>
.tabs::after,
.tabs::before {
  box-sizing: content-box !important;
}

.tabs {
  align-content: stretch;
}

#main-tabs::before {
  @apply bg-base-100 content-[''] absolute h-full w-1/2 -z-[1] right-0 top-[76px];
}

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
