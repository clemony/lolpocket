import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import {} from 'pinia-plugin-persistedstate';

export const useSessionStore = defineStore(
  'sessionStore',
  () => {
    let isMinimized = ref(false);
    watch(isMinimized, (value) => {
      console.log(`Tab size changed to: ${value}`);
    });

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

    var openTabs = ref<OpenTab[]>([]);

    var activeTab = ref('');

    // Access the router instance
    const router = useRouter();
    const route = useRoute();

    // Function to check if tab is activz
    const isActiveTab = (link) => {
      return activeTab.value === link;
    };

    const navigateTo = (link) => {
      const existingTab = openTabs.value.find((tab) => tab.tab.link === link);
      const matchedRoute = router.resolve(link);
      if (!existingTab) {
        const newId = openTabs.value.length + 1;
        if (matchedRoute.name) {
          // Ensure the route is valid
          openTabs.value.push({
            id: newId,
            tab: { name: link.split('/')[1] || 'home', link },
            title: matchedRoute.meta.title,
            icon: matchedRoute.meta.icon,
          });

          // Set the active tab and navigate to the internal route
          activeTab.value = link;
          router.push(link);
        } else {
          console.warn(`[Vue Router warn]: No match found for location with path "${link}"`);
        }
      } else {
        // Set the active tab for already existing tab
        activeTab.value = link;
        router.push(link);
      }
    };

    function getTitle(link) {
      const regex = /.*\.(.*)\.com.*/; // Define the regex pattern
      const match = link.match(regex); // Apply regex to the link

      // Check if there's a match and return the captured group or default to 'Unknown'
      return match && match[1] ? match[1] : 'Unknown';
    }

    var sidebar = [];
    function getSidebarforTab(link) {
      sidebar = link;
      console.log(link);
      return sidebar;
    }

    return {
      navigateTo,
      isActiveTab,
      openTabs,
      activeTab,
      getSidebarforTab,
      sidebar,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      key: 'session',
    },
  }
);
