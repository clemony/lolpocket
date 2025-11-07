<script lang="ts" setup>
const cardClass
  = 'flex !px-4 w-1/2 items-center group/photo-button rounded-xl  cursor-pointer group/photo !gap-5 photo  h-40  justify-start **:text-start '

const inactiveClass
  = ' *:grayscale hover:[&_p]:text-bc hover:[&_h4]:text-bc [&_p]:text-bc/40 [&_h4]:text-bc/30  hover:*:grayscale-0'

const isOpen = ref(false)

const currentSplash = computed(() => as().publicData?.splash ?? null)

const { getMatchesForSummoner } = useIndexedDB()
const matchData = await getMatchesForSummoner(as().account.puuid)
const { top } = useChampions(as().account.puuid, matchData)

function handleSplash(e: string) {
  as().publicData.splash = e
  isOpen.value = false
}
</script>

<template>
  <section class="flex size-full gap-x-4 pt-3">
    <button
      :class="cn('-ml-3', currentSplash ? inactiveClass : '', cardClass)"
      @click="currentSplash = null">
      <SplashCard
        hover
        class="w-36"
        :skin-url="top().splash?.replace('uncentered', 'tile')"
        :text="top().name"
        :alt="`${as().account?.name ?? null}'s Most Played`" />
      <div class="flex h-full flex-col gap-4 pt-3">
        <h4
          class="dst text-5 font-semibold">
          Automatic
        </h4>
        <p>Displays your most played champion in recent games.</p>

        <ActiveTick
          v-if="
            !currentSplash"
          class="mt-2 h-6" />
      </div>
    </button>

    <LazySplashSelectPanel
      v-model:open="isOpen"
      @update:splash="e => handleSplash(e)"
      @dialog:close="isOpen = false">
      <button :class="cn(!currentSplash ? inactiveClass : '', cardClass)">
        <SplashCard
          class="w-36"
          :text="skinNameFromUrl(as().publicData?.splash) ?? ''"
          :skin-url="as().publicData?.splash"
          :alt="`${as().account?.name ?? null}'s splash`" />
        <div class="flex h-full w-full flex-col gap-4 pt-3">
          <h4
            class="dst text-5 font-semibold">
            Custom
          </h4>
          <p
            class="
            w-full
            min-w-56">
            <span class="italic">Never played a champ?</span>
            <br />
            Np. Rep your guy.
          </p>

          <ActiveTick
            v-if="currentSplash"
            class="mt-2 h-6" />
        </div>
      </button>
    </LazySplashSelectPanel>
  </section>
</template>
