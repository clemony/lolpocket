import { useSupabaseClient } from '#imports'
import type { SupabaseClient } from '@supabase/supabase-js'
import { defaultUser } from 'data/defaults/default-user'
import type { Database } from 'db/database.types'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<number[]>([])

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
        notifications: [],
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

    function resetUserAccount() {
      Object.assign(userAccount.value, defaultUser)
    }

    type PublicUser = Database['public']['Tables']['user_public']['Row']
    const publicData = shallowRef<Partial<PublicUser | null>>({
      splash: '',
      updated: '',
    })

    const client = useSupabaseClient<SupabaseClient>()
    async function fetchPublicData(userId: string) {
      const { data, error } = await client
        .from('user_public')
        .select('splash')
        .eq('user_id', userId)
        .single<PublicUser>()

      if (error) {
        console.error('Error fetching public data:', error)
      }

      return data
    }
    async function updatePublicData() {
      const { error } = await client
        .from('user_public')
        .update({ splash: publicData.value.splash })
        .eq('uuid', userAccount.value.id)
        .select()

      if (error) {
        console.error('Error updating public data:', error)
      }
    }

    return {
      // account
      userAccount,
      settings,
      publicData,
      resetUserAccount,
      defaultUser,
      userNotes,
      fetchPublicData,
      updatePublicData,

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
