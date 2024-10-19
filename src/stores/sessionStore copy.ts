import { ref, warn, watch } from 'vue';
import { defineStore } from 'pinia';
import { RouteParams, useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router';
import {} from 'pinia-plugin-persistedstate';

export const useSessionStore = defineStore(
  'sessionStore',
  () => {
    interface Tab {
      name: string;
      link: string;
      icon?: any;
    }

    interface OpenTab {
      id: number;
      tab: Tab;
      title: any;
      icon?: any;
    }

    type PocketRouteParams = {
      pocketKey: string;
    };

    var openTabs = shallowRef<OpenTab[]>([]);

    var activeTab = ref('');

    // Access the router instance
    const router = useRouter();
    const route = useRoute();

    const currentRoute = router.currentRoute.value;

    // Function to check if tab is activz
    const isActiveTab = (link) => {
      return activeTab.value === link;
    };

    // Explicitly type route.params to expect `pocketKey`
    const params = route.params as RouteParams & { pocketKey?: string };

    const navigateTo = (link: string, title?, icon?) => {
      try {
        // Resolve the route and check if it's valid
        const matchedRoute = router.resolve(link);
        const params = matchedRoute.params as PocketRouteParams; // Explicitly cast the params

        // Normalize link to the base path if it's a "pocket" route
        if (matchedRoute.name === 'pocket' && params.pocketKey) {
          // Get the base path `/pocket/:pocketKey`
          const basePocketPath = `/pocket/${params.pocketKey}`;

          // Update `link` to always use the base path
          link = basePocketPath;
        }

        // Check if the tab already exists
        const existingTab = openTabs.value.find((tab) => tab.tab.link === link);

        if (!existingTab) {
          // Add a new tab
          const newId = openTabs.value.length + 1;
          openTabs.value.push({
            id: newId,
            tab: {
              name: title || link.split('/')[3] || 'home', // Dynamically extract component name from link
              link,
            },
            title: title || matchedRoute.meta?.title || link.split('/')[3], // Safely access meta.title
            icon: icon || matchedRoute.meta?.icon || 'default-icon', // Safely access meta.icon
          });

          // Set the active tab and navigate to the route
          activeTab.value = link;
          router.push(link).catch((err) => console.error('Navigation error:', err));
        } else {
          // Set the active tab if the tab already exists
          activeTab.value = link;
          router.push(link).catch((err) => console.error('Navigation error:', err));
        }
      } catch (error) {
        console.error('Error in navigateTo function:', error);
      }
    };

    var sidebar = [];
    function getSidebarforTab(link) {
      sidebar = link;
      //console.log(link);
      return sidebar;
    }

    return {
      navigateTo,
      isActiveTab,
      openTabs,
      activeTab,
      getSidebarforTab,
      sidebar,
      currentRoute,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      key: 'session',
    },
  }
);
