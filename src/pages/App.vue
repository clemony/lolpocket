<script setup lang="ts">
import Builds from '@/page-build/builds-template.vue';
import Champions from '@/pages/champions.vue';
import Home from '@/pages/home.vue';
import Items from '@/pages/items.vue';
import Runes from '@/pages/runes.vue';
import Settings from '@/pages/settings.vue';
import { useDataStore } from '@/stores/dataStore';
import { Icon } from '@iconify/vue';
import { useUserSettings } from '@stores/userSettings';
import { DefineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const settings = useUserSettings();



/* ------------------------------- NAVIGATION ------------------------------- */

// Access the router instance to programmatically navigate
const router = useRouter();

// Function to navigate to a specific route
const navigateTo = (route: string) => {
  router.push(route);
};

// Access the current route
const route = useRoute();

type ValidPaths = '/builds' | '/home' | '/champions' | '/items' | '/runes' | '/settings';

const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
  '/builds': Builds,
  '/home': Home,
  '/champions': Champions,
  '/items': Items,
  '/runes': Runes,
  '/settings': Settings
};

// Computed property for current view
const currentComponent = computed(() => {
  const currentPath = route.path as ValidPaths;
  return componentMap[currentPath] || null;
});

// Automatically navigate to '/home' if the current route is not valid
if (!componentMap[route.path as ValidPaths]) {
  navigateTo('/home');
}

console.log(currentComponent.value);
const nodes = ref<any[]>([]);
const selectedKey = ref<string[]>([]);

const isHome = computed(() => currentComponent.value === Home);

// Method for node selection in the tree
const onNodeSelect = (node: any) => {
  navigateTo(node.data);
};

const menuRef = ref<HTMLDivElement | null>(null);
const checkboxRef = ref<HTMLInputElement | null>(null);
let tooltipText = ref('Collapse');

function toggleMenus() {
  const menu = menuRef.value;
  const checkbox = checkboxRef.value;

  if (menu && checkbox) {
    if (checkbox.checked) {
      menu.classList.add("minimize");
      tooltipText.value = "Expand";
    } else {
      menu.classList.remove("minimize");
      tooltipText.value = "Collapse";
    }
  }
};


// State to track if the panel should have the 'minimize' class
const isMinimized = ref(false);

// Track the size of the first panel
const firstPanelSize = ref(17);  // Initialize with default size

// Callback function for the splitter resize event
function test(event: any) {
  const firstSize = event.sizes[0]; // Get the size of the first panel

  if (firstSize < 12) {
    isMinimized.value = true;   // Add 'minimize' class
    firstPanelSize.value = 3;   // Set size to 5
  } else {
    isMinimized.value = false;  // Remove 'minimize' class
    firstPanelSize.value = firstSize; // Maintain the dynamic size from the splitter
  }
}

const showDropdowns = ref([false, true, true]); // Track visibility for each dropdown (index-based)

// Toggle visibility for the dropdown at a specific index
function toggleShow(index: number) {
  showDropdowns.value[index] = !showDropdowns.value[index];
}

/* ------------------------------ ON MOUNTED ----------------------------- */

onMounted(async () => {
  const dataStore = useDataStore();
  dataStore.fetchData();
  NodeService.getTreeNodes().then((data: any) => {
    nodes.value = data;
  });
  console.log(menuRef);
});

</script>


<!--   /* -------------------------------------------------------------------------- */
       /*                                CONTENT START                          */
       /* -------------------------------------------------------------------------- */ -->

<template>





  <!--   /* -------------------------------------------------------------------------- */
         /*                                 MENU START                            */
        /* -------------------------------------------------------------------------- */ -->


  <Splitter class="h-screen set-bg z-20 overflow-hidden w-screen " @resize.SplitterResizeEvent="test" :gutter-size="2">

    <SplitterPanel :size="firstPanelSize" :minSize="0" :class="{ 'minimize': isMinimized }"
      class="max-w-80 h-screen relative bg-transparent">



      <div ref="menuRef" class=" h-full w-full z-10  ">


        <div data-tauri-drag-region class="titlebar top-0 left-0 h-[36px] w-full sticky z-20  items-center p-3">



          <div id="logo" data-tauri-drag-region
            class=" text-right ml-2 select-none font-bold text-base flex gap-2 items-center">
            <div
              class="flex place-items-center justify-center rounded-full bg-base-content text-base-100 size-5 pt-[1px]">
              <Icon icon="ci:house-02" class="p-0.5 rotate-180 " />
            </div>
            <span>lolpocket</span>
          </div>
        </div>




        <div id="menu" class="!overflow-scroll mt-1 h-[calc(100%-36px)]">

          <ul
            class="menu ml-1 [&_svg]:size-4 tracking-wider space-y-3 text-xs [&_a]:flex [&_a]:gap-3 [&_a]:-ml-1 [&_ul]:before:opacity-20 [&_ul]:ml-5">
            <li>
              <a @click="navigateTo('/home')">
                <Icon icon="ph:house" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <span :class="{ 'menu-dropdown-show': showDropdowns[0] }" @click="toggleShow(0)"
                class="menu-dropdown-toggle">
                <a>
                  <Icon icon="ph:cube" />
                  <span>Builds</span>
                </a>
              </span>
              <ul :class="{ 'menu-dropdown-show': showDropdowns[0] }" class="menu-dropdown">
                <li><a><span>Submenu 1</span></a></li>
                <li><a><span>Submenu 2</span></a></li>
              </ul>
            </li>
            <li><a>
                <Icon icon="ph:calculator" />
                <span>Calculator</span>
              </a></li>
            <li>
              <span :class="{ 'menu-dropdown-show': showDropdowns[1] }" @click="toggleShow(1)"
                class="menu-dropdown-toggle">
                <a>
                  <Icon icon="ph:heart-straight" />
                  <span>Favorites</span>
                </a>
              </span>
              <ul :class="{ 'menu-dropdown-show': showDropdowns[1] }" class="menu-dropdown">
                <li><a @click="navigateTo('/champions')">
                    <Icon icon="ph:crown-simple" /><span>Champions</span>
                  </a></li>
                <li><a @click="navigateTo('/items')">
                    <Icon icon="vaadin:sword" /><span>Items</span>
                  </a></li>
              </ul>
            </li>
            <li>
              <span :class="{ 'menu-dropdown-show': showDropdowns[2] }" @click="toggleShow(2)"
                class="menu-dropdown-toggle">
                <a>
                  <Icon icon="solar:glasses-linear" />
                  <span>Browse</span>
                </a>
              </span>
              <ul :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="menu-dropdown">
                <li><a @click="navigateTo('/champions')">
                    <Icon icon="ph:crown-simple" /><span>Champions</span>
                  </a></li>
                <li><a @click="navigateTo('/items')">
                    <Icon icon="vaadin:sword" /><span>Items</span>
                  </a></li>
                <li><a>
                    <Icon icon="ph:hexagon" /><span>Runes</span>
                  </a></li>
              </ul>
            </li>
            <li>
              <a class="">
                <Icon icon="ph:at" />
                <span>Account</span>
              </a>
            </li>
            <li>
              <a @click="navigateTo('/settings')">
                <Icon icon="ph:gear-six" />
                <span>Settings</span>
              </a>
            </li>

          </ul>



        </div>
      </div>

    </SplitterPanel>

    <SplitterPanel :size="84" class="z-0">
      <!-- Search box -->
      <div data-tauri-drag-region class="relative">
        <div data-tauri-drag-region
          class="titlebar h-[36px] sticky z-20 p-[0px]  items-center shadow-sm grid bg-base-200/75 glass grid-cols-[1fr_2fr_1fr]  overflow-hidden ">






          <div data-tauri-drag-region class="w-full flex col-start-2 place-content-center z-0 dropdown">

            <SearchBox />

          </div>

          <!-- /* ----------------------------- TOOLBAR BUTTONS ---------------------------- */ -->

          <div
            class="justify-self-end col-start-3 grid grid-cols-3 gap-2 mr-3 *:place-items-center  *: *:rounded-md *:size-6 text-base-content/60">

            <div id="titlebar-minimize" data-tip="minimize" alt="minimize"
              class="p-1 hover:bg-base-300 hover:text-base-content hover:shadow-inner hover:shadow-base-content/20">
              <Icon icon="ph:line-vertical" class="rotate-90" />
            </div>

            <div id="titlebar-maximize" data-tip="maximize" alt="maximize"
              class="p-1 hover:bg-base-300 hover:text-base-content hover:shadow-inner hover:shadow-base-content/20">
              <Icon icon="ph:arrows-out-simple" />
            </div>

            <div id="titlebar-close" alt="close" data-tip="close"
              class="p-1 hover:bg-base-300 hover:shadow-inner hover:shadow-base-content/20 hover:text-base-content">
              <Icon icon="ph:x" class="titlebar-button" />
            </div>
          </div>
        </div>

        <div class="w-full h-screen m-0 p-0 pt-14 pl-6 -mt-[36px] overflow-scroll bg-base-200 ">

          <component :is="currentComponent" />

        </div>
      </div>
    </SplitterPanel>
  </Splitter>
</template>

<style>
.titlebar {
  width: inherit;
}


.add-build {
  @apply order-3 flex absolute right-0 -top-1;

  .add-fill {
    @apply inline-flex h-[17px] w-[17px];
  }

  .add-reg {
    @apply hidden h-[17px] w-[17px];
  }
}

.add-build:hover {
  .add-fill {
    @apply hidden;
  }

  .add-reg {
    @apply inline-flex;
  }
}

.menu-dropdown {
  @apply block opacity-0 h-0 transition-all -translate-x-full duration-300 ease-in;

  &.menu-dropdown-show {
    @apply block opacity-100 h-full transition-all translate-x-0 duration-300 ease-in;
  }
}



.minimize {
  #logo {
    @apply p-0;

    span {
      @apply w-0 opacity-0;
    }
  }

  .menu {
    @apply transition-all duration-700;

    li {

      a {

        span {
          @apply opacity-0 w-0;
        }
      }

      ul {
        @apply p-0;

        li {
          a {
            @apply w-3;

            span {
              @apply opacity-0 w-0;
            }
          }
        }
      }
    }

    ul {
      @apply w-3;
    }
  }
}


/*

@apply w-0 h-0 opacity-0 invisible;

[data-pc-section="nodetogglebutton"],
.add-build {
  @apply transition-all duration-100;
}

[data-pc-section="nodechildren"],
[data-pc-section="nodelabel"],
[data-pc-section="nodeicon"],
[data-pc-section="node"] {
  @apply transition-all duration-700;
}

[data-pc-section="rootchildren"] {
  @apply transition-all duration-700 flex flex-col gap-0 overflow-x-hidden;
}

.minimize [data-pc-section="rootchildren"] {
  @apply gap-2;
}

.minimize [data-pc-section="node"] ul {
  @apply h-0 opacity-0 invisible;
}

.minimize [data-pc-section="nodechildren"],
.minimize [data-pc-section="nodetogglebutton"],
.minimize [data-pc-section="nodelabel"],
.minimize .add-build {
}


.minimize [data-pc-section="nodeicon"] {
  @apply m-0 p-0 w-[1.4rem] h-[1.4rem] text-base-content/60;
}

.minimize [aria-label="Browse"] [data-pc-section="nodeicon"],
.minimize [aria-label="Utilities"] [data-pc-section="nodeicon"] {
  @apply opacity-20 visible m-0 p-0 w-[1.4rem] h-[1.4rem] text-base-content/60;
}*/
</style>
