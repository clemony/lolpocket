import { useSupabaseClient } from '#imports'
import type { SupabaseClient } from '@supabase/supabase-js'
import { motionValue } from 'motion-v'
import { defineStore } from 'pinia'
import { defaultUser } from '~/appdata/defaults/default-user'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])

    const userAccount = ref<UserAccount>({
      name: 'Summoner',
      role: 'default',
      uuid: null,
      riot: {
        name: 'Summoner',
        tag: null,
        puuid: null,
        region: null,
        profileIcon: null,
      },
      pockets: {
        all: [],
        pinned: [],
        archived: [],
      },
      inbox: {
        messages: [],
        notifications: [],
      },
    })

    const userSummoner = computed (() => {
      const ss = useSummonerStore()
      return ss.getSummoner(userAccount.value.riot?.puuid)
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
      dockX: 50,
      dockY: 200,
      dockSide: <DockSide>('left'),
    })

    function resetUserAccount() {
      Object.assign(userAccount.value, defaultUser)
    }

    const publicData = ref<PublicData>({
      splash: null,
      title: null,
      peerMessages: true,
      updated: null,
    })

    return {
      // account
      userAccount,
      userSummoner,
      settings,
      publicData,
      resetUserAccount,
      defaultUser,
      userNotes,

      // settings
      themeClass,
      dataTheme,

    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
