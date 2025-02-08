<script setup lang="ts">
import { toast } from 'vue-sonner'

const ts = useTempStore()
const as = useAccountStore()
const route = useRoute()
const router = useRouter()

const client = useSupabaseClient()
client.auth.onAuthStateChange(async (event, session) => {
  console.log('💠 - client.auth.onAuthStateChange - session:', session)
  console.log('💠 - client.auth.onAuthStateChange - event:', event)
  if (event === 'INITIAL_SESSION') {
    useSetAccount(session)
  }
  else if (event === 'SIGNED_OUT') {
    as.userAccount = defaultUser
    console.log('😰 - Signed Out')
    if (route.path != '/') {
      router.push('/')
    }
    else {
      location.reload()
    }
    toast.success('Successfully logged out')
  }
  else {
    const { data, error } = await client.auth.setSession({ access_token: as.userAccount.accessToken, refresh_token: as.userAccount.refreshToken })
    as.userAccount.accessToken = data.session.access_token
    as.userAccount.refreshToken = data.session.refresh_token
    as.userAccount.session = data.session
  }
})
</script>

<template>
  <main
    id="app"
    class="relative size-screen min-size-screen"
  >
    <Sonner
      position="top-right"

      :toast-options="{
        class: 'my-toast',
        descriptionClass: 'my-toast-description',
      }"
      :expand="true"
      :duration="6000"
    />

    <LazyChampionDrawer
      v-if="ts.selectedChampion"
      :key="ts.selectedChampion"
    />
    <ItemDrawer
      v-if="ts.selectedItem"
      :key="ts.selectedItem"
    />
    <LazyPocketSheet
      v-if="ts.pocketSheetTrigger"
    />

    <LazyNewFolderDialog />

    <div
      class="bg-b1 transition-all duration-400 size-screen min-h-screen grid"
    >
      <MainMenubar />
      <div class="size-screen max-size-screen overflow-hidden">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
