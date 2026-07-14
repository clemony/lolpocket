<script lang="ts" setup>
import {
  provideProfileScrollBody,
  useProfileScroll,
} from "~/domain/summoner/composables/useProfileScroll"

definePageMeta({
  search: false,
  layout: false,
  name: "summoner-profile",
  middleware: "resolve-from-route",
})
const session = sSession()
const query = shallowRef<string | undefined>(undefined)
const { summoner, account } = storeToRefs(session)

const color = computed(() => ({
  "--account-color": `var(--color-${String(account.value?.color ?? "p1")})`,
  "--account-dark": `color-mix(in oklab, var(--account-color) 100%, black 10%)`,
}))

const body = useTemplateRef<HTMLElement>("body")
provideProfileScrollBody(body)
</script>

<template>
  <div :style="color" class="mx-auto flex flex-1">
    <NuxtLayout name="profile-layout">
      <template #header>
        <SummonerPanelHeader />
      </template>

      <div
        ref="body"
        class="absolute inset-0 z-auto flex flex-1 scrollbar-none flex-col items-center justify-start gap-14 overflow-y-auto rounded-6xl *:z-0">
        <SummonerPanelIntro />
        <NuxtPage v-if="summoner" :summoner="summoner" :style="color" />

        <div class="mx-auto max-w-[1100px] pb-12">
          <SiteFooterEnd class="overflow-hidden rounded-6xl drop-shadow-sm" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
