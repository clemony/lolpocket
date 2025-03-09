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

const triggerSidebar = refAutoReset(false, 1000)

</script>

<template>
  <div class="h-screen w-screen flex">
    <AppSidebar :triggerSidebar="triggerSidebar"/>
    <div class="grow flex flex-col h-screen min-h-screen w-full" >
      <NuxtLoadingIndicator class="bg-gradient-to-r from-nc to-neutral" />

      <AppHeader @update:sidebar="triggerSidebar = true"/>
      <main class="w-full h-screen pt-[8vh] " :class="{'!pt-0': route.path == '/'}">
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
        <slot />
      </main>
    </div>
  </div>
</template>

<style></style>
