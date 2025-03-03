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
    setUserAccount(session)
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

const ss = useSidebarStore()
</script>

<template>
  <main class="h-screen w-screen ">
    <MainMenubar />
    <NuxtLoadingIndicator />
    <div
      class="bg-b1 h-screen w-full relative">
      <Sonner
        position="top-right"

        :toast-options="{
          class: 'my-toast',
          descriptionClass: 'my-toast-description',
        }"
        :expand="true"
        :duration="6000" />

      <LazyNewFolderDialog />
      <LazyNewPocketDialog />
      <div class="size-full max-size-full overflow-hidden">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
