<script lang="ts" setup>
definePageMeta({
  path: '/redirect',
  layout: 'basic',
  description: '',
})

const loadingText = [
  'Polishing data...',
  'Calculating gains...',
  'Crafting Infinity Edge...',
  'Gathering poros...',
]

onMounted(async () => {
  if (!process.client)
    return // prevent SSR execution

  const session = await useSupabaseSessionWait()
  const user = useSupabaseUser().value

  console.log('Session ready in redirect:', session)

  if (user) {
    await hydrateUser()
    navigateTo('/nexus')
  }
  else {
    // FIXME
    // navigateTo({ name: 'login' })
  }
})
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-tint-b2/40 p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 self-center justify-center w-full px-2">
        <h2>
          lolpocket
        </h2>
      </NuxtLink>
      <div class="flex flex-col gap-6">
        <div class="!max-w-180 !w-full flex flex-col gap-2">
          <p class="text-2 font-medium">
            {{ loadingText[0] }}
          </p>
          <Progress />
        </div>
      </div>
    </div>
  </div>
</template>