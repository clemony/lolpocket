import { ref, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router';
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
      pocketKey?: string;
      lastActiveComponent?: string;
    }

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

    type PocketRouteParams = {
      pocketKey: string;
    };

    const navigateTo = (link: string, title?, icon?) => {
      try {
        const matchedRoute = router.resolve(link);
        const params = matchedRoute.params as PocketRouteParams;

        if (typeof matchedRoute.name === 'string' && matchedRoute.name.includes('pocket') && params.pocketKey) {
          const basePocketPath = `/pocket/${params.pocketKey}`;

          const existingTab = openTabs.value.find((tab) => {
            return tab.tab.link.startsWith(basePocketPath);
          });

          if (!existingTab) {
            // Add a new tab
            const newId = openTabs.value.length + 1;
            openTabs.value.push({
              id: newId,
              tab: {
                name: title || link.split('/')[3] || 'home',
                link: basePocketPath,
              },
              title: title || matchedRoute.meta?.title || link.split('/')[3],
              icon: icon || matchedRoute.meta?.icon || 'default-icon',
            });

            // Set the active tab and navigate to the route
            activeTab.value = basePocketPath;
            router.push(link).catch((err) => console.error('Navigation error:', err));
          } else {
            // Set the active tab if the tab already exists
            activeTab.value = existingTab.tab.link;
            router.push(link).catch((err) => console.error('Navigation error:', err));
          }
        } else {
          // For non-pocket routes, continue with the normal navigation
          const existingTab = openTabs.value.find((tab) => tab.tab.link === link);

          if (!existingTab) {
            const newId = openTabs.value.length + 1;
            openTabs.value.push({
              id: newId,
              tab: {
                name: title || link.split('/')[3] || 'home',
                link,
              },
              title: title || matchedRoute.meta?.title || link.split('/')[3],
              icon: icon || matchedRoute.meta?.icon || 'default-icon',
            });

            activeTab.value = link;
            router.push(link).catch((err) => console.error('Navigation error:', err));
          } else {
            activeTab.value = link;
            router.push(link).catch((err) => console.error('Navigation error:', err));
          }
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
