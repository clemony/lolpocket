import { ref, warn, watch } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import {} from 'pinia-plugin-persistedstate';

export const useSessionStore = defineStore(
  'sessionStore',
  () => {
    const minimized = ref(false);

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

    const navigateTo = (link: string, title?, icon?) => {
      try {
        // Check if the tab already exists
        const existingTab = openTabs.value.find((tab) => tab.tab.link === link);

        // Resolve the route and check if it's valid
        const matchedRoute = router.resolve(link);

        // Add debug logs to inspect matchedRoute
        console.log('Matched route:', matchedRoute);

        // Check if matchedRoute is valid
        if (!matchedRoute || !matchedRoute.name) {
          console.warn(`[Vue Router warn]: No match found for location with path "${link}"`);
          return; // Early return if no matching route
        }

        // Check if matchedRoute.meta is valid before destructuring
        if (!matchedRoute.meta) {
          console.warn(`[Vue Router warn]: Route meta is missing for path "${link}"`);
        }

        if (!existingTab) {
          // Add a new tab
          const newId = openTabs.value.length + 1;
          openTabs.value.push({
            id: newId,
            tab: {
              name: link.split('/')[3] || 'home', // Dynamically extract component name from link
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
      minimized,
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
