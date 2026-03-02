<script lang="ts" setup>
definePageMeta({
  path: "/auth/redirect",
  search: "hidden",
})

const loadingText = [
  "Polishing data...",
  "Calculating gains...",
  "Crafting Infinity Edge...",
  "Gathering poros...",
]

const { progress } = await accountFetch()

const cookie = useSupabaseCookieRedirect()
</script>

<template>
  <NuxtLayout layout="card">
    <div class="flex flex-col gap-2">
      <div class="flex w-full! max-w-180! flex-col gap-2">
        <div class="h-6 w-full overflow-hidden px-px text-sm font-medium">
          {{ loadingText[Math.floor(progress / 25)] || loadingText.at(-1) }}
        </div>
        <Progress :value="progress" :max="100" />
      </div>
    </div>
  </NuxtLayout>
</template>
