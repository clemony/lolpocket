export const localStore = defineStore(
  "localStore",
  () => {
    const theme = ref<string>("system")
    const localSettings = ref<LocalSettings>({
      sidebar_sort_folder_first: true,
      sidebar_sort_method: "date",
      sidebar_sort_mode: "desc",
      backpack_group_by: "folder",
      confirm_folder_delete: true,
      confirm_pocket_delete: true,
    })

    function updateSortMethod(method: "date" | "alpha") {
      localSettings.value.sidebar_sort_method = method
    }

    const hotkeys = ref({
      search: ["meta", "k"],
      subSearch: ["meta", "shift", "k"],
      logIn: ["shift", "meta", "s"],
      logOut: ["shift", "meta", "q"],
      open: ["meta", "o"],
      close: ["meta", "x"],
    })

    return {
      localSettings,
      updateSortMethod,
      hotkeys,
      theme,
    }
  },

  {
    persist: {
      key: "localStore",
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
