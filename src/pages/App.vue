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
import { computed, DefineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Flip } from 'gsap/Flip';
import { gsap } from 'gsap';


/* ------------------------------- NAVIGATION ------------------------------- */

// Access the router instance to programmatically navigate
const router = useRouter();

// Function to navigate to a specific route
const navigateTo = (route: string) => {
  router.push(route);
};

// Access the current route
const route = useRoute();

const settings = useUserSettings();



// tl.value = createMenuAnimation();

type ValidPaths = '/builds' | '/' | '/champions' | '/items' | '/runes' | '/settings';

const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
  '/builds': Builds,
  '/': Home,
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

/* ---------------------------- SIDEBAR ANIMATION --------------------------- */


const nodes = ref<any[]>([]);
const selectedKey = ref<string[]>([]);



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

<template>

  <!--   /* -------------------------------------------------------------------------- */
  /*                                CONTENT START                               */
  /* -------------------------------------------------------------------------- */ -->

  <div data-tauri-drag-region
    class="titlebar top-0 left-0 h-[36px] w-full backdrop-blur-md bg-base-100/60 grid grid-cols-3 fixed z-20 p-[0px] items-center shadow-lg shadow-base-300 border-b-[1px] border-base-300/80">

    <div
      class="title col-start-1 justify-self-start flex items-center p-0 text-base tracking-wide font-semibold border-none shadow-none h-6 absolute left-[10px] top-[6px] z-40 bg-transparent">

      <label
        class="place-content-center swap swap-flip w-10 text-base-content/80 tooltip tooltip-bottom before:text-xs before:font-normal before:left-[75%] [--tooltip-offset:30px] [--tooltip-tail-offset:24px]"
        :data-tip="tooltipText" @click="toggleMenus()">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" ref="checkboxRef" />

        <!-- expanded icon -->

        <Icon icon="tabler:layout-sidebar-right-expand-filled"
          class="absolute top-[2px] left-0 size-5 ml-2 mr-3 swap-off fill-current" />

        <!-- collapsed icon -->
        <Icon icon="tabler:layout-sidebar-left-expand-filled"
          class="absolute top-[2px] left-0 size-5 ml-2 mr-3 swap-on fill-current" />
      </label>

      <span>lolpocket</span>
    </div>

    <!-- Search box -->

    <div class="w-full col-start-2 justify-self-center z-0 dropdown">

      <SearchBox />

    </div>

    <!-- /* ----------------------------- TOOLBAR BUTTONS ---------------------------- */ -->

    <div
      class="justify-self-end grid grid-cols-3 gap-2 mr-3 tooltip tooltip-bottom *:place-items-center  *:hover:bg-base-200 *:rounded-btn *:size-4">

      <div id="titlebar-minimize" data-tip="minimize" alt="minimize">
        <Icon icon="ph:line-vertical-bold" class="rotate-90" />
      </div>

      <div id="titlebar-maximize" data-tip="maximize" alt="maximize">
        <Icon icon="ph:arrows-out-simple-bold" />
      </div>

      <div id="titlebar-close" alt="close" data-tip="close">
        <Icon icon="ph:x-bold" class="titlebar-button" />
      </div>
    </div>
  </div>



  <div ref="menuRef" id="menu"
    class="w-screen grid grid-cols-[300px_auto] gap-4 m-0 p-0 transition-all duration-700 delay-200">

    <div class="col-start-1">

      <div ref="nav" class="ml-5 mt-14 rounded-lg bg-base-100 border border-base-300
            shadow-base-300 shadow-lg nav">

        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
          @nodeSelect="onNodeSelect" id="tree1">


          <template #nodetogglebutton>
          </template>

          <template #default="slotProps">

            {{ slotProps.node.label }}
          </template>

          <template #addon="slotProps">
            <div ref="label">{{ slotProps.node.label }}</div>

            <Button ref="label" variant="null" class="add-build cursor-pointer" title="create new build">
              <Icon icon='ph:plus' class="add-fill" />
            </Button>
          </template>

        </Tree>

      </div>

      <Toaster />

    </div>

    <div class="w-full h-screen m-0 p-0  pt-14 pr-4 col-start-2 overflow-scroll">
      <!-- Display the current component once loading is complete -->
      <!--<Transition name="slide-fade" mode="out-in">-->
      <component :is="currentComponent" />
      <!--</Transition>-->
    </div>

  </div>
</template>

<style>
[data-pc-section="nodechildren"] {
  @apply h-8 truncate;

  [data-pc-section="nodecontent"] {
    @apply pl-1 w-[calc(100%-0.25rem)] h-8;

    [data-pc-section="nodeicon"] {
      @apply mr-3;
    }

    [data-pc-section="nodetogglebutton"] {
      @apply absolute right-1 top-0;
    }

    [data-pc-section="nodelabel"] {
      @apply truncate h-8;
    }
  }
}

[aria-label="Browse"],
[aria-label="Utilities"] {

  [data-pc-section="nodecontent"] {
    @apply hover:bg-transparent text-xxs uppercase pointer-events-none text-base-content/40;
  }

  [data-pc-section="nodeicon"] {
    @apply hidden;
  }

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

/*
[aria-expanded="true"] [data-pc-section="nodechildren"] {
  @apply animate-in slide-in-from-top fade-in duration-300 z-0;
}

[aria-expanded="false"] [data-pc-section="nodechildren"] {
  @apply animate-out slide-out-to-top fade-out duration-700 z-0;
}*/

#menu.minimize {
  @apply grid-cols-[80px_auto];

  .nav {
    @apply backdrop-blur-md backdrop-brightness-200 backdrop-opacity-80 rounded-[15px];
  }





  [data-pc-section="nodecontent"] {
    @apply w-1/2;
  }



  [data-pc-section="node"] {
    @apply mx-0 my-2 flex first:mt-3 last:mb-4 items-center;
  }
}

[data-pc-section="nodechildren"],
[data-pc-section="nodetogglebutton"],
[data-pc-section="nodelabel"],
.add-build {
  @apply transition-all duration-700;
}

[data-pc-section="nodeicon"] {
  @apply transition-all duration-700;
}

/*[data-pc-section="rootchildren"] {
  @apply transition-all duration-700;
}

.minimize [data-pc-section="rootchildren"] {
  @apply flex flex-col;
}
*/
.minimize [data-pc-section="nodechildren"],
.minimize [data-pc-section="nodetogglebutton"],
.minimize [data-pc-section="nodelabel"],
.minimize .add-build {
  @apply opacity-0 invisible;
}

.minimize [data-pc-section="nodechildren"],
.minimize [data-pc-section="nodetogglebutton"],
.minimize [data-pc-section="nodelabel"],
.minimize .add-build {
  @apply hidden transition-all delay-1000;
}

.minimize [data-pc-section="nodeicon"] {
  @apply m-0 p-0 w-[1.4rem] h-[1.4rem] py-6 text-base-content/60 transition-all duration-700;
}
</style>
