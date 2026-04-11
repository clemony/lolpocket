<script lang="ts" setup>
import { LazySplashSelectPanel } from "#components"
import { useChampions } from "~/domain/summoner/champions/useChampions"
import { skinNameFromUrl } from "~/domain/utils/img"

const card = {
  base: "flex pointer-events-auto !px-4 items-center group/photo-button rounded-xl hover:bg-p3/60! cursor-pointer group/photo active:ring! active:ring-pc/60 !gap-8 photo max-w-120 shrink-0 justify-start **:text-start h-max! py-4",
  wrapper: "flex h-36  max-w-full overflow-hidden w-full flex-col pt-3",
  title: "text-lg font-bold",
  description: "grow",
  header: "flex items-center justify-between w-full max-w-full",
  footer:
    "flex items-center overflow-hidden  max-w-full justify-between justify-self-end",
  name: "font-medium italic border-p4 truncate max-w-[calc(100%-36px)]",
  indicator: {
    icon: "size-4.5 **:stroke-[2.3] text-pc",
    base: "border-p4  inset-shadow-xs"
  },
  avatar: "size-36 rounded-lg"
}

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

const overlay = useOverlay()

const splashSelect = overlay.create(LazySplashSelectPanel, {
  destroyOnClose: true
})

function handleSplash(e: string | null) {
  const account = user().account
  if (account) account.splash = e
}

async function openSplashSelect() {
  const nextSplash = await splashSelect.open()

  if (nextSplash !== undefined) {
    handleSplash(nextSplash)
  }
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
      "
      @click="handleSplash(null)">
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
            :color="currentSplash !== null ? 'base' : 'neutral'"
            :variant="currentSplash !== null ? 'outline' : 'solid'" />
          <UBadge
            v-if="!currentSplash"
            color="base"
            size="md"
            icon="i-tick"
            class="" />
        </div>
      </div>
    </UButton>
    <!--
    <SplashSelectPanel @update-splash="(e) => handleSplash(e)"> -->
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
          'ring-1! inset-shadow-sm! ring-pc/50! ring-offset-1! ring-offset-p4 drop-shadow-sm *:pointer-events-none':
            currentSplash !== null
        })
      "
      @click="openSplashSelect()">
      <!--
     -->
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
            color="base"
            size="md"
            icon="i-tick"
            :ui="{
              base: card.indicator.base,
              leadingIcon: card.indicator.icon
            }" />
        </div>
      </div>
    </UButton>
    <!--     </SplashSelectPanel> -->
    <Tooltip label="Edit" trailing-icon="i-pencil" side="top" as-child>
    </Tooltip>
  </div>
</template>
