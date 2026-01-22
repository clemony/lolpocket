<script lang="ts" setup>
const cardClass
  = 'flex !px-4 w-1/2 items-center group/photo-button rounded-xl  cursor-pointer group/photo !gap-5 photo  h-40  justify-start **:text-start '

const inactiveClass
  = '  hover:[&_p]:text-bc hover:[&_h4]:text-bc [&_p]:text-bc/40 [&_h4]:text-bc/30 '

const isOpen = ref(false)

const currentSplash = computed(() => as().account?.splash ?? null)

const { getMatchesForSummoner } = useIndexedDB()
const matchData = await getMatchesForSummoner(as().account.puuid)
const { top } = useChampions({ puuid: as().account.puuid, matches: matchData })

function handleSplash(e: string) {
  as().account.splash = e
  isOpen.value = false
}
</script>

<template>
  <section class="flex size-full flex-wrap gap-x-4 pt-3">
    <button
      :class="cn('-ml-3', currentSplash ? inactiveClass : '', cardClass)"
      @click="currentSplash = null">
      <SplashCard
        hover
        class="w-36"
        :skin-url="top().splash?.replace('uncentered', 'tile')"
        :text="top().name"
        :alt="`${as().account?.name ?? null}'s Most Played`" />
      <div class="flex size-full flex-col gap-4 pt-3">
        <h4 class="text-xl font-semibold dst">
          Automatic
        </h4>
        <p>Displays your most played champion in recent games.</p>

        <ActiveTick
          v-if="!currentSplash"
          class="mt-2 h-6" />
      </div>
    </button>

    <LazySplashSelectPanel
      v-model:open="isOpen"
      :class="cn(!currentSplash ? inactiveClass : ' w-full', cardClass)"
      @update:splash="(e) => handleSplash(e)"
      @dialog:close="isOpen = false">
      <SplashCard
        class="w-36"
        :text="skinNameFromUrl(as().account?.splash) ?? ''"
        :skin-url="as().account?.splash"
        :alt="`${as().account?.name ?? null}'s splash`" />
      <div class="flex size-full flex-col gap-4 pt-3">
        <h4 class="text-xl font-semibold dst">
          Custom
        </h4>
        <p class="w-full min-w-56">
          <span class="italic">Never played a champ?</span>
          <br />
          Np. You're a Yuumi main now.
        </p>

        <ActiveTick
          v-if="currentSplash"
          class="mt-2 h-6" />
      </div>
    </LazySplashSelectPanel>
  </section>
</template>
