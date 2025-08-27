<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'img/favicon.png',
    },
  ],
})
console.log(as().account)
const appConfig = useAppConfig()

const client = useSupabaseClient()

onMounted(() => {
  document.documentElement.setAttribute(
    'data-theme',
    as()?.settings?.theme ?? 'daylight',
  )
  ix().loadPatch()
})

const router = useRouter()
client.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_OUT') {
    as().clearAccount()
    as().loggedIn = false
    router.push('/')
  }
  else if (event === 'SIGNED_IN' && session) {
    // implicit flow: just set session into client
    const { data, error } = await client.auth.setSession({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    })
    if (error) {
      console.error('Error setting session:', error.message)
    }
  }
})
</script>

<template>
  <NuxtLayout>
    <LazyNuxtPage
      :transition="{
        name: 'global-page-transition',
      }" />
  </NuxtLayout>
</template>
