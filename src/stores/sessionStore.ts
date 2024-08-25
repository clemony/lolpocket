import { ref, DefineComponent, watch } from "vue";
import { defineStore } from "pinia";
import { RouterView, useRoute, useRouter } from "vue-router";
import Builds from "@page-build/builds-template.vue";
import Champions from "@pages/champions/champions.vue";
import Home from "@pages/home.vue";
import Items from "@pages/items.vue";
import Hi from "@pages/hi.vue";
import About from "@pages/about.vue";
import Runes from "@pages/runes.vue";
import Settings from "@pages/settings.vue";

export const useSessionNav = defineStore("sessionNav", () => {




 let isMinimized = ref(false);


        watch(isMinimized, (value) => {
          console.log(`Tab size changed to: ${value}`);
        });

  interface Tab {
    name: string;
    link: string;
  }

  interface OpenTab {
    id: number;
    tab: Tab;
  }

  var openTabs = ref<OpenTab[]>([]);

  const routeComponentMap: Record<
    string,
    { component: DefineComponent; icon: string }
  > = {
    "/builds": { component: Builds, icon: "ph:cube" },
    "/home": { component: Home, icon: "ph:house" },
    "/champions": { component: Champions, icon: "ph:crown-simple" },
    "/items": { component: Items, icon: "vaadin:sword" },
    "/runes": { component: Runes, icon: "ph:hexagon" },
    "/settings": { component: Settings, icon: "ph:gear-six" },
    "/about": { component: About, icon: "ph:gear-" },
    "/hi": { component: Hi, icon: "ph:gear-" },
  };

  var activeTab = ref("");

  // Access the router instance
  const router = useRouter();
  const route = useRoute();

  // Function to handle tab click and navigate
  const navigateTo = (link) => {
    console.log(link);
    console.log(activeTab);
    const existingTab = openTabs.value.find((tab) => tab.tab.link === link);
    if (!existingTab) {
      const newId = openTabs.value.length + 1;
      openTabs.value.push({
        id: newId,
        tab: { name: link.split("/")[1] || "home", link },
      });
    }
    activeTab.value = link;
    router.push(link);
  };

  // Function to check if tab is active
  const isActiveTab = (link) => {
    return activeTab.value === link;
  };

  // Function to get the component for the tab
  const getComponentForTab = (path) => {
    return (
      routeComponentMap[path]?.component || routeComponentMap["/home"].component
    );
  };

  // Function to get the icon for the tab
  const getIconForTab = (path) => {
    return routeComponentMap[path]?.icon || "ph:house"; // Default icon
  };

  return {
    navigateTo,
    routeComponentMap,
    isActiveTab,
    openTabs,
    getComponentForTab,
    getIconForTab,
  };
});
