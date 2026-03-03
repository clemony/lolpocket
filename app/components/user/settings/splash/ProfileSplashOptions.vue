<script lang="ts" setup>
import { useChampions } from "~/domain/summoner/champions/useChampions"
import { skinNameFromUrl } from "~/domain/utils/img"

const cardClass =
  "flex !px-4 w-1/2 items-center group/photo-button rounded-xl  cursor-pointer group/photo !gap-5 photo  h-40  justify-start **:text-start "

const inactiveClass =
  "  hover:[&_p]:text-pc hover:[&_h4]:text-pc [&_p]:text-pc/40 [&_h4]:text-pc/30 "

const isOpen = ref(false)

const currentSplash = computed(() => user().account?.splash ?? null)

const { getMatchesForSummoner } = useIndexedDB()
const accountPuuid = computed(() => user().account?.puuid ?? "")
const matchData = accountPuuid.value
  ? await getMatchesForSummoner(accountPuuid.value)
  : []
const { top } = useChampions({ puuid: accountPuuid.value, matches: matchData })

function handleSplash(e: string) {
  const account = user().account
  if (account) account.splash = e
  isOpen.value = false
}
</script>

<template>
  <section class="flex size-full flex-wrap gap-x-4 pt-3">
    <button
      :class="cn('-ml-3', currentSplash ? inactiveClass : '', cardClass)"
      @click="currentSplash = null">
      <SplashCard
        class="w-36"
        hover
        :skin-url="top()?.splash?.replace('uncentered', 'tile') ?? null"
        :label="top()?.name ?? ''"
        :alt="`${user().account?.name ?? null}'s Most Played`" />
      <div class="flex size-full flex-col gap-4 pt-3">
        <h4 class="text-xl font-semibold drop-shadow-2xs">Automatic</h4>
        <p>Displays your most played champion in recent games.</p>

        <ActiveTick v-if="!currentSplash" class="mt-2 h-6" />
      </div>
    </button>

    <LazySplashSelectPanel
      v-model:open="isOpen"
      :class="cn(!currentSplash ? inactiveClass : 'w-full', cardClass)"
      @update:splash="(e) => handleSplash(e)"
      @dialog:close="isOpen = false">
      <SplashCard
        class="w-36"
        :label="skinNameFromUrl(user().account?.splash ?? '') ?? ''"
        :skin-url="user().account?.splash ?? null"
        :alt="`${user().account?.name ?? null}'s splash`" />
      <div class="flex size-full flex-col gap-4 pt-3">
        <h4 class="text-xl font-semibold drop-shadow-2xs">Custom</h4>
        <p class="w-full min-w-56">
          <span class="italic">Never played a champ?</span>
          <br />
          Np. You're a Yuumi main now.
        </p>

        <ActiveTick v-if="currentSplash" class="mt-2 h-6" />
      </div>
    </LazySplashSelectPanel>
  </section>
</template>
