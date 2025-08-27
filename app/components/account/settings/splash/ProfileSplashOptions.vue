<script lang="ts" setup>
const cardClass
  = 'flex !px-4 w-1/2 items-center group/photo-button rounded-xl  cursor-pointer group/photo !gap-5 photo  h-40  justify-start **:text-start '

const inactiveClass = ' *:grayscale hover:[&_p]:text-bc hover:[&_h4]:text-bc [&_p]:text-bc/40 [&_h4]:text-bc/30  hover:*:grayscale-0'

const isOpen = ref(false)

const currentSplash = computed (() => as().publicData?.splash ?? null)

const { getMatchesForSummoner } = useIndexedDB()
const matchData = await getMatchesForSummoner(as().account.puuid)
const { top } = useChampions(as().account.puuid, matchData)
</script>

<template>
  <section class="flex gap-x-4 size-full pt-3">
    <button
      :class="cn('-ml-3', currentSplash ? inactiveClass : '', cardClass)"
      @click="currentSplash = null">
      <SplashCard
        hover
        class="w-36"
        :skin-url="top().splash?.replace('uncentered', 'tile')"
        :text="top().name"
        :alt="`${as().account?.name ?? null}'s Most Played`" />
      <div class="flex flex-col h-full pt-3 gap-4">
        <h4 class="dst font-semibold text-5">
          Automatic
        </h4>
        <p>Displays your most played champion in recent games.</p>

        <ActiveTick
          v-if="!currentSplash"
          class="h-6 mt-2" />
      </div>
    </button>

    <SplashSelectPanel
      v-model:open="isOpen"
      @dialog:close="isOpen = false">
      <button
        :class="cn(!currentSplash ? inactiveClass : '', cardClass)">
        <SplashCard
          class="w-36 "
          :text="ix().skinNameFromUrl(as().publicData?.splash) ?? ''"
          :skin-url="as().publicData?.splash"
          :alt="`${as().account?.name ?? null}'s splash`" />
        <div class="flex flex-col h-full pt-3 gap-4 w-full">
          <h4 class="dst font-semibold text-5">
            Custom
          </h4>
          <p class="w-full min-w-56">
            <span class="italic">Never played a champ?</span>
            <br />
            Np. Rep your guy.
          </p>

          <ActiveTick
            v-if="currentSplash"
            class="h-6 mt-2" />
        </div>
      </button>
    </SplashSelectPanel>
  </section>
</template>
