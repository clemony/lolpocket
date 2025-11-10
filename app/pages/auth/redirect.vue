<script lang="ts" setup>
definePageMeta({
  layout: 'basic',
  search: 'hidden',
})

const progress = ref(0)
const loadingText = [
  'Polishing data...',
  'Calculating gains...',
  'Crafting Infinity Edge...',
  'Gathering poros...',
]

onMounted(async () => {
  await useSupabaseSessionWait()
  const user = useSupabaseUser().value

  if (user) {
    await useHydrateUser(progress)
  }
  else {
    navigateTo('/login')
  }
})
</script>

<template>
  <div
    class="
      flex min-h-svh flex-col items-center justify-center gap-6 bg-tint-b2/40
      p-6
      md:p-10
    ">
    <div class="-mt-16 flex w-full max-w-md flex-col gap-16">
      <NuxtLink
        to="/"
        class="flex w-full items-center justify-center gap-3 self-center px-2">
        <h2>lolpocket</h2>
      </NuxtLink>

      <div class="flex flex-col gap-2">
        <div class="flex !w-full !max-w-180 flex-col gap-2">
          <div class="h-6 w-full overflow-hidden px-px text-2 font-medium">
            {{ loadingText[Math.floor(progress / 25)] || loadingText.at(-1) }}
          </div>
          <Progress
            :value="progress"
            :max="100" />
        </div>
      </div>
    </div>
  </div>
</template>
