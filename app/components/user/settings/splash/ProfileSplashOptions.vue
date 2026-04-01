<script lang="ts" setup>
import { useChampions } from "~/domain/summoner/champions/useChampions"
import { skinNameFromUrl } from "~/domain/utils/img"

const card = {
  base: "flex pointer-events-auto !px-4 items-center group/photo-button rounded-xl  cursor-pointer group/photo active:ring! active:ring-pc/60 !gap-8 photo max-w-120 shrink-0 justify-start **:text-start h-max! py-4",
  wrapper: "flex h-36 w-full flex-col pt-3",
  title: "text-lg font-bold",
  description: "grow",
  header: "flex items-center justify-between w-full max-w-full",
  footer: "flex items-center justify-between justify-self-end",
  name: "font-medium italic border-p4",
  indicator: {
    icon: "size-4.5 **:stroke-[2.3] text-pc",
    base: "border-p4  inset-shadow-xs"
  },
  avatar: "size-36 rounded-lg"
}

const isOpen = ref(false)

const currentSplash = computed(
  () => user().account?.splash?.replace("uncentered", "tile") ?? ""
)

const chosenLabel = computed(
  () => skinNameFromUrl(user().account?.splash ?? "") ?? ""
)

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
  <div class="grid w-max grid-cols-2 gap-x-8 pt-3 *:shrink-0">
    <UButton
      :active="!currentSplash"
      :avatar="{
        src: top()
          ?.splash?.replace('uncentered', 'tile')
          .replace('centered', 'tile'),
        class: card.avatar,
        alt: `${user().account?.name ?? null}'s Most Played`
      }"
      :class="
        cn(card.base, {
          'ring-1! inset-shadow-sm! ring-pc/50! ring-offset-1! ring-offset-p4 drop-shadow-sm':
            !currentSplash
        })
      ">
      <div :class="card.wrapper">
        <div :class="card.header">
          <h4 :class="card.title">Automatic</h4>
        </div>
        <p :class="card.description">
          Displays your most played champion in recent games.
        </p>
        <div :class="card.footer">
          <UBadge
            :class="card.name"
            :label="top()?.name ?? ''"
            :color="currentSplash !== null ? 'p1' : 'neutral'"
            :variant="currentSplash !== null ? 'outline' : 'solid'" />
          <UBadge
            v-if="!currentSplash"
            color="p0"
            size="sm"
            icon="i-tick"
            class="" />
        </div>
      </div>
    </UButton>
    <SplashSelectPanel>
      <UButton
        :active="currentSplash !== null"
        :avatar="{
          src: user()
            .account?.splash?.replace('uncentered', 'tile')
            .replace('centered', 'tile'),
          class: card.avatar,
          alt: chosenLabel
        }"
        :class="
          cn(card.base, {
            'ring-1! inset-shadow-sm! ring-pc/50! ring-offset-1! ring-offset-p4 drop-shadow-sm':
              currentSplash !== null
          })
        ">
        <div :class="card.wrapper">
          <div :class="card.header">
            <h4 :class="card.title">Custom</h4>
          </div>
          <p :class="card.description">Pick your favorite. No more Yuumi.</p>
          <div :class="card.footer">
            <UBadge
              :color="currentSplash === null ? 'transparent' : 'neutral'"
              :variant="currentSplash === null ? 'outline' : 'solid'"
              :class="card.name"
              :label="chosenLabel" />
            <UBadge
              v-if="currentSplash"
              color="p0"
              size="sm"
              icon="i-tick"
              :ui="{
                base: card.indicator.base,
                leadingIcon: card.indicator.icon
              }" />
          </div>
        </div>
      </UButton>
    </SplashSelectPanel>
  </div>
</template>
