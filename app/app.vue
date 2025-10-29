<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      href: 'img/favicon.png',
      rel: 'icon',
      type: 'image/png',
    },
  ],
})

onMounted(() => {
  document.documentElement.setAttribute(
    'data-theme',
    as()?.settings?.theme ?? 'daylight'
  )
  ix().loadPatch()
})
/*
const client = useSupabaseClient()

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
}) */
</script>

<template>
  <ToastProvider
    :duration="8000"
    as-child>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ToastProvider>
</template>
