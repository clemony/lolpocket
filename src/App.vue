<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { DefineComponent, ref, computed, onMounted, watch } from 'vue';
import Home from '@/pages/home.vue';
import Items from '@/pages/items.vue';
import Champions from '@/pages/champions.vue';
import Runes from '@/pages/runes.vue';
import Settings from '@/pages/settings.vue';
import Builds from '@/pages/builds.vue';
import { useDataStore } from '@/stores/dataStore';
import Nav from '@/pages/links.vue';
import { LinkProp } from '@/pages/links.vue';
import { cn } from '@/lib/utils';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';


// Access the router instance to programmatically navigate
const router = useRouter();

// Function to navigate to a specific route
const navigateTo = (route: string) => {
  router.push(route);
};

// Access the current route
const route = useRoute();



// Define your props and type
interface LayoutProps {
  defaultLayout?: number[];
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
}

const props = withDefaults(defineProps<LayoutProps>(), {
  defaultCollapsed: false,
  defaultLayout: () => [16, 80, 4],
});


type ValidPaths = '/builds' | '/home' | '/champions' | '/items' | '/runes' | '/settings';


const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
  '/builds': Builds,
  '/home': Home, // Adjust this if the component is incorrect
  '/champions': Champions,
  '/items': Items,
  '/runes': Runes,
  '/settings': Settings, // Adjust if necessary
};


// Define refs
const isCollapsed = ref(props.defaultCollapsed);

// Computed property for current view
const currentComponent = computed(() => {
  const currentPath = route.path as ValidPaths; // Adjust the type to match ValidPaths
  return componentMap[currentPath] || null;
});


// Handle collapse and expand
const onCollapse = () => {
  isCollapsed.value = true;
};

const onExpand = () => {
  isCollapsed.value = false;
};

// Define links
const links: LinkProp[] = [
  { title: 'Home', label: '', icon: 'fluent-mdl2:home', variant: 'ghost', component: '/home' },
  { title: 'Builds', label: '', icon: 'fluent-mdl2:assessment-group', variant: 'ghost', component: '/builds' },
  { title: 'Favorites', label: '', icon: 'fluent-mdl2:heart', variant: 'ghost', component: null },
  { title: 'In Progress', label: '', icon: 'fluent-mdl2:progress-ring-dots', variant: 'ghost', component: null },
  { title: 'Archive', label: '', icon: 'fluent-mdl2:archive', variant: 'ghost', component: null },
  { title: 'Trash', label: '', icon: 'ep:delete', variant: 'ghost', component: null },
];

const links2: LinkProp[] = [
  { title: 'Champions', label: '', icon: 'lucide:user-2', variant: 'ghost', component: '/champions' },
  { title: 'Items', label: '', icon: 'pepicons-pencil:sword-shield', variant: 'ghost', component: '/items' },
  { title: 'Runes', label: '', icon: '@/img/runes/RunesIcon.webp', variant: 'ghost', component: '/runes' },
];

const links3: LinkProp[] = [
  { title: 'Account', label: '', icon: 'fluent-mdl2:accounts', variant: 'ghost', component: null },
  { title: 'Settings', label: '', icon: 'fluent:settings-48-regular', variant: 'ghost', component: '/settings' },
];


onMounted(() => {
  useDataStore().fetchData();
});
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <DropdownMenu>
      <DropdownMenuTrigger class="justify-self-start">
        <Button variant="ghost" class="title">
          lolpocket
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="ml-2 -mt-1 font-normal -mt-text-xs">
        <DropdownMenuLabel class="text-xs font-semibold">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-xs" @click="navigateTo('/home')">Home</DropdownMenuItem>
        <DropdownMenuItem class="text-xs" @click="navigateTo('/settings')">Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-xs">Save</DropdownMenuItem>
        <DropdownMenuItem class="text-xs">Export</DropdownMenuItem>
        <DropdownMenuItem class="text-xs">Quit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>



    <div class="s-box">
      <form class="s-form">
        <div class="relative ">
          <Icon icon="fluent:search-28-regular" class="s-icon" />
          <Input placeholder="search champions..." class="in-search" />
        </div>
      </form>
    </div>

    <div class="button-wrapper">
      <div class="titlebar-button" id="titlebar-minimize">
        <Icon icon="fluent:arrow-minimize-16-regular" class="b-window" />
      </div>
      <div class="titlebar-button" id="titlebar-maximize">
        <Icon icon="fluent:maximize-24-regular" class="b-window" />
      </div>
      <div class="titlebar-button" id="titlebar-close">
        <Icon icon="fluent:dismiss-32-regular" class="b-window" />
      </div>
    </div>
  </div>

  <!-- Main content area where the current component is displayed -->
  <div id="content">
    <ResizablePanelGroup id="resize-panel-group-1" direction="horizontal" class="items-stretch h-full">
      <TooltipProvider>
        <ResizablePanel id="resize-panel-1" :default-size="props.defaultLayout[0]"
          :collapsed-size="props.navCollapsedSize" collapsible :min-size="15" :max-size="20"
          :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')" @expand="onExpand"
          @collapse="onCollapse">

          <ResizablePanelGroup direction="vertical">
            <ResizablePanel :min-size="10">
              <Nav :is-collapsed="isCollapsed" :links="links" />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel class="panel-box" :min-size="10">
              <div class="data">
                <Nav :is-collapsed="isCollapsed" :links="links2" />
              </div>
              <div class="utils">
                <Separator />
                <Nav :is-collapsed="isCollapsed" :links="links3" />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </TooltipProvider>
      <ResizableHandle id="resize-handle-1" />
      <ResizablePanel id="resize-panel-2" :default-size="props.defaultLayout[1]" :min-size="30">


        <!-- Display the current component once loading is complete -->
        <Transition name="slide-fade" mode="out-in">
          <component :is="currentComponent" />
        </Transition>

      </ResizablePanel>
      <ResizableHandle id="resize-handle-2" />
      <ResizablePanel id="resize-panel-3" :default-size="props.defaultLayout[2]" />
    </ResizablePanelGroup>
  </div>

</template>






<style>
/*.titlebar::after {
  content: '';
  mask-image: linear-gradient(to top, #000, #000),
    radial-gradient(circle 15px at center, #000 80%, transparent 81%);
  mask-repeat: no-repeat;
  mask-composite: subtract;
  outline: 2px solid red;
  @apply absolute z-50 top-20 left-20 size-[30px];

}*/

.titlebar {
  top: 0;
  left: 0;
  @apply h-[36px] w-full backdrop-blur-md bg-background/60 grid grid-cols-3 fixed z-20 p-[0px] items-center shadow-md shadow-foreground/10 border-b-[1px] border-foreground/10;

  .title {
    @apply justify-between text-base tracking-wide font-semibold border-none shadow-none justify-self-start p-1 ml-4 h-6 hover:bg-accent;
  }


  .s-box {
    @apply w-full justify-self-center;

    .s-form {

      @apply text-center justify-items-center rounded-lg;

      .s-icon {
        @apply absolute left-2 top-[4px] size-4;
      }

      .in-search {
        border-radius: 10px;
        @apply text-xs pl-8 font-medium w-full text-center h-[25px] shadow-inner bg-background/60 border-foreground/15 shadow-foreground/10 !outline-0 !outline-transparent !outline-none;



      }

      .in-search:focus {
        @apply ring-foreground/20;
      }
    }
  }

  .button-wrapper {
    @apply justify-self-end justify-items-end justify-end grid grid-cols-3 gap-2 pr-2;

    .titlebar-button {
      @apply inline-flex place-items-center p-1 hover:bg-accent;

      .b-window {
        @apply text-accent-foreground cursor-pointer h-4 w-4;
      }
    }
  }
}

#content {
  top: 0;
  left: 0;
  @apply w-screen h-screen absolute z-auto px-[7px];
}

#resize-panel-1,
#resize-panel-2,
#resize-panel-3 {
  overflow: auto !important;
  @apply py-3 scroll-auto pt-[36px];
}

#resize-panel-1 {
  @apply pt-[42px];
}

.panel-box {
  @apply grid grid-cols-1 h-full justify-items-end justify-end min-h-60;

  .data {
    @apply justify-self-stretch;
  }

  .utils {
    @apply self-end h-20 w-full;
  }
}

.icon {
  @apply text-inherit size-4 transition-colors;
}


.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(50%);
}


.slide-fade-leave-to {
  transform: translateY(-100%);
}
</style>
