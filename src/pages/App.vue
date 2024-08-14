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


type ValidPaths = '/builds' | '/' | '/champions' | '/items' | '/runes' | '/settings' | '/tree';


const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
  '/builds': Builds,
  '/': Home, // Adjust this if the component is incorrect
  '/champions': Champions,
  '/items': Items,
  '/runes': Runes,
  '/settings': Settings, // Adjust if necessary
  '/tree': null,
};

// Computed property for current view
const currentComponent = computed(() => {
  const currentPath = route.path as ValidPaths; // Adjust the type to match ValidPaths
  return componentMap[currentPath] || null;
});


/* ---------------------------- SIDEBAR ANIMATION --------------------------- */

const menuRef = ref<HTMLDivElement | null>(null);
// Capture the initial state of the menu
//  const state = Flip.getState(menu.value);


function toggleMenu() {


  console.log(menuRef);
  var menu = menuRef.value;
  console.log(menu);
  const m = gsap.utils.selector(menuRef.value);
  const nav = m(".nav");
  const node = m(".node");
  const nodecontent = m(".nodecontent");
  const nodelabel = m(".nodelabel");
  const nodeicon = m(".nodeicon");
  const nodechildren = m(".nodechildren");
  const nodetogglebutton = m(".nodetogglebutton");
  const nodetoggleicon = m(".nodetoggleicon");
  const rootchildren = m(".rootchildren");
  const hideThese = [
    ...nodechildren,
    ...nodetoggleicon,
    ...nodetogglebutton,
    ...nodelabel
  ];

  const state = Flip.getState(nodeicon);
  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
    absolute: true,
  });
  var tl = gsap.timeline();
  tl.to(hideThese, {
    opacity: 0, x: -100, duration: 0.25, onComplete: function () {
      this.targets().forEach(elem => elem.classList.add("hidden"))
    }
  });
  tl.to(menu, { gridTemplateColumns: "75px auto", duration: 0.5 }, "<");
  tl.to(nav, { borderRadius: "15px", duration: 0.5 }, "<");
  tl.to(rootchildren, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    duration: 0.5,
  }, "<");
  tl.to(nodecontent, {
    width: "75%",
    display: "flex",
    paddingLeft: 7,
    alignContent: "center",
    alignItems: "center",
    duration: 0.5
  }, "<");
  tl.to(nodeicon, {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    opacity: "0.8",
    duration: 0.5,
  },
    "<");
  tl.to(node, {
    margin: "0.7rem 0",
    padding: 0,
    justifyContent: "center",
    justifyItems: "center",
    display: "flex",
    duration: 0.5
  },
    "<");
  return tl;

};

const minimized = ref(false);

function minimize() {
  minimized.value = true;
}

const nodes = ref<any[]>([]);
const selectedKey = ref<string[]>([]);

const onNodeSelect = (node) => {

  navigateTo(node.data);

};

/* ------------------------------ // ON MOUNTED ----------------------------- */

onMounted(async () => {

  useDataStore().fetchData();
  NodeService.getTreeNodes().then((data: null) => (nodes.value = data));
  nextTick(() => {
    console.log(menuRef);
  })

});


</script>

<template>

  <div data-tauri-drag-region
    class="titlebar top-0 left-0 h-[36px] w-full backdrop-blur-md bg-base-100/60 grid grid-cols-3 fixed z-20 p-[0px] items-center shadow-lg shadow-base-300 border-b-[1px] border-base-300/80">

    <div
      class="title col-start-1 justify-self-start flex items-center p-0 text-base tracking-wide font-semibold border-none shadow-none h-6 absolute left-[10px] top-[6px] z-40 bg-transparent">

      <label
        class="place-content-center swap swap-flip w-10 text-base-content/80 tooltip tooltip-bottom before:text-xs before:font-normal before:left-[75%] [--tooltip-offset:30px] [--tooltip-tail-offset:24px]"
        data-tip="Collapse" @click="toggleMenu">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />

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
      <form class="text-center justify-items-center rounded-lg z-0">
        <div class="relative ">
          <Icon icon="ph:magnifying-glass" class="absolute right-3 top-[5.5px] size-4 z-20 text-base-content/50" />
          <Input tabindex="0" role="button" placeholder=""
            class="text-xs font-medium w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-300 shadow-base-300 !outline-0 !outline-transparent rounded-[10px] !outline-none z-20 focus:ring-base-300" />
          <div tabindex="0"
            class="dropdown-content menu m-0 p-0 bg-base-100 w-[560px] rounded-md place-content-center z-[1] top-0 px-0 pt-0 shadow -ml-[45px]">
            <Input tabindex="0" role="button" placeholder=""
              class="text-xs font-medium w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-content/15 shadow-base-content/10 !outline-0 !outline-transparent !outline-none z-20 focus:ring-base-300" />
          </div>
        </div>
      </form>
    </div>

    <div
      class="justify-self-end grid grid-cols-3 gap-2 mr-3 tooltip tooltip-bottom *:place-items-center  *:hover:bg-base-200 *:rounded-btn *:size-4">

      <Icon icon="ph:line-vertical-bold" class="rotate-90" id="titlebar-minimize" data-tip="minimize" />

      <Icon icon="ph:arrows-out-simple-bold" id="titlebar-maximize" data-tip="maximize" />

      <Icon icon="ph:x-bold" id="titlebar-exit" data-tip="close" />
    </div>
  </div>

  <!-- v-if="minimized" :class="minimize" -->

  <div ref="menuRef" id="menu" class="w-screen grid grid-cols-[300px_auto] gap-4 m-0 p-0 ">

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
  @apply grid-cols-[80px_auto] justify-items-center;
}

.nav.minimize * {
  @apply m-0 p-0 justify-center;
}

.nav.minimize {
  @apply backdrop-blur-md backdrop-brightness-200 backdrop-opacity-80 rounded-[15px] justify-items-center;
}

[data-pc-section="nodechildren"].minimize,
[data-pc-section="nodetogglebutton"].minimize,
[data-pc-section="nodelabel"].minimize,
.add-build.minimize,
h4.minimize {
  @apply hidden opacity-0;
}

[data-pc-section="rootchildren"].minimize {
  @apply flex flex-col place-content-center content-center items-center;
}

[data-pc-section="nodecontent"].minimize {
  @apply w-1/2;
}

[data-pc-section="nodeicon"].minimize {
  @apply m-0 p-0 w-[2.7rem] h-[2.7rem] text-base-content/60;
}

[data-pc-section="node"].minimize {
  @apply mx-0 my-2 flex first:mt-3 last:mb-4 items-center;
}
</style>
