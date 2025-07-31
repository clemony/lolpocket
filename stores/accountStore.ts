import { useSupabaseClient } from '#imports'
import type { RealtimePostgresUpdatePayload as RealtimePayload } from '@supabase/supabase-js'
import type { WatchSource } from '@vue/runtime-core'
import { defaultUser } from 'data/defaults/default-user'
import type { Database } from 'db'
import { defineStore } from 'pinia'
import type { UserData, UserPublic } from 'types/table.types'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<number[]>([])
    const ps = usePocketStore()

    const userAccount = ref<UserAccount>({
      name: 'Summoner',
      role: 'default',
      id: null,
      riot: {
        name: 'Summoner',
        tag: null,
        puuid: null,
        region: null,
      },
      pockets: {
        all: [],
        pinned: [],
        archived: [],
      },
      inbox: {
        messages: [],
        notifications: []
      },
    })

    const pockets = <Record<string, Pocket[]>>{
      all: [],
      pinned: [],
      archived: [],
    }
    const settings = ref<UserSettings>({
      motion: true,
      noConfirmTrash: false,
      theme: null,
      showSolo: true,
      showFlex: true,
      showAllies: true,
      alertNewPocket: true,
      alertDeletePocket: true,
    })

    const publicData = ref<PublicData>({
      splash: null,
    })

    function resetUserAccount() {
      Object.assign(userAccount.value, defaultUser)
    }

    /*     const syncedUserSettings = computed<Partial<UserData> | null>(() =>
      userAccount.value?.settings ?
        { settings: userAccount.value.settings }
      : null
    ) */

    /*     useSupabaseSync("user_data", syncedUserSettings, {
      onBatchUpdate(payloads: RealtimePayload<UserData>[]) {
        for (const payload of payloads) {
          if (payload.new?.settings) {
            userAccount.value.settings = payload.new.settings
          }
        }
      },
    }) */

    /*     console.log(
      "💠 - userAccount.value?.settings.public?.splash:",
      publicData.value?.splash
    )
    const syncedUserPublic = computed<Partial<UserPublic> | null>(() => {
      const splash = publicData.value?.splash
      return splash != null ? { profile_splash: splash } : null
    })
    console.log("💠 - syncedUserPublic:", syncedUserPublic)

    useSupabaseSync(syncedUserPublic, "user_public", {
      onBatchUpdate(payloads) {
        for (const payload of payloads) {
          const splash = payload.new?.profile_splash
          if (typeof splash === "string") {
            publicData.value.splash = splash
          }
        }
      },
      batchMs: 30_000,
    })
 */
    return {
      // account
      userAccount,
      settings,
      publicData,
      resetUserAccount,
      defaultUser,
      userNotes,

      // settings
      themeClass,
      dataTheme,

      // champs
      favoriteChamps,

      // items
      favoriteItems,

      // toggles
      toggleSolo: () => useToggle(settings.value.showSolo),
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
      key: 'accountStore',
    },
  },
)
