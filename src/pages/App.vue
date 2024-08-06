<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  useToast
} from '@/components/ui/toast/use-toast';
import { cn } from '@/lib/utils';
import Builds from '@/page-build/builds-template.vue';
import Champions from '@/pages/champions.vue';
import Home from '@/pages/home.vue';
import Items from '@/pages/items.vue';
import Runes from '@/pages/runes.vue';
import Settings from '@/pages/settings.vue';
import { useDataStore } from '@/stores/dataStore';
import { Icon } from '@iconify/vue';
import { computed, DefineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


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
  defaultLayout: () => [18, 82, 0],
});


type ValidPaths = '/builds' | '/home' | '/champions' | '/items' | '/runes' | '/settings' | '/tree';


const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
  '/builds': Builds,
  '/home': Home, // Adjust this if the component is incorrect
  '/champions': Champions,
  '/items': Items,
  '/runes': Runes,
  '/settings': Settings, // Adjust if necessary
  '/tree': null,
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



const {
  toast
} = useToast();

const nodes = ref<any[]>([]);
const selectedKey = ref<string[]>([]);

const onNodeSelect = (node) => {
  toast({
    title: 'success!',
    description: 'node selected: ' + node.label,
  });
  navigateTo(node.data);
};

const onIconClick = (node) => {
  toast({
    title: 'success!',
    description: 'node icon clicked1!!: ' + node.label,
  });
};



onMounted(() => {
  useDataStore().fetchData();
  NodeService.getTreeNodes().then((data: null) => (nodes.value = data));
});
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <DropdownMenu>
      <DropdownMenuTrigger class="justify-self-start">
        <Button variant="ghost" class="title">
          <Avatar class="size-5">
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <span>lolpocket</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="ml-2 -mt-1 font-normal">
        <DropdownMenuLabel class="text-base font-semibold">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="!text-md" @click="navigateTo('/home')">Home</DropdownMenuItem>
        <DropdownMenuItem class="text-base" @click="navigateTo('/settings')">Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-base">Save</DropdownMenuItem>
        <DropdownMenuItem class="text-base">Export</DropdownMenuItem>
        <DropdownMenuItem class="text-base">Quit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>



    <div class="s-box">
      <form class="s-form">
        <div class="relative ">
          <Icon icon="fluent:search-28-regular" class="s-icon" />
          <Input placeholder="" class="in-search" />
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


          <h2 class="font-bold prose-headings">@user's pocket</h2>

          <div class="panel-nav">
            <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
              @nodeSelect="onNodeSelect" id="tree1">

              <template #nodetoggleicon>
                <Icon icon="basil:caret-up-outline" width="1.5rem" height="1.5rem" />
              </template>
              <template #default="slotProps">
                {{ slotProps.node.label }}

              </template>
              <template #addon="slotProps">
                <span>{{ slotProps.node.label }}</span>
                <Button variant="null" class="add-build" title="create new build">
                  <Icon icon='fluent:add-square-24-regular' class="add-reg" />
                  <Icon icon='fluent:add-square-24-filled' class="add-fill" />
                </Button>
              </template>
              <template #build="slotProps" :pt="{
                nodeicon: {
                  onClick: onIconClick,
                }
              }">

                <input :label='slotProps.node.label' :placeholder="slotProps.node.label"
                  class="w-full h-5 mr-2 overflow-scroll" />
              </template>
            </Tree>

          </div>


          <div class="data panel-nav">
            <h4 class="pt-3 pl-3 text-xs font-semibold border-none">BROWSE</h4>
            <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
              @nodeSelect="onNodeSelect" id="tree2">
              <template #browse="slotProps">
                {{ slotProps.node.label }}
              </template>
            </Tree>
          </div>

          <div class="panel-nav utils">
            <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
              @nodeSelect="onNodeSelect" id="tree3">
              <template #settings="slotProps">
                {{ slotProps.node.label }}
              </template>
            </Tree>
          </div>
        </ResizablePanel>
      </TooltipProvider>


      <Toaster />


      <ResizableHandle with-handle id="resize-handle-1" class="mr-2 bg-transparent" />
      <ResizablePanel id="resize-panel-2" :default-size="props.defaultLayout[1]" :min-size="30">


        <!-- Display the current component once loading is complete -->
        <!--<Transition name="slide-fade" mode="out-in">-->
        <component :is="currentComponent" />
        <!--</Transition>-->

      </ResizablePanel>
      <ResizableHandle id="resize-handle-2" />
      <ResizablePanel id="resize-panel-3" :default-size="props.defaultLayout[2]" />
    </ResizablePanelGroup>
  </div>

</template>






<style></style>
