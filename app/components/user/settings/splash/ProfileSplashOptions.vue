<script lang="ts" setup>
import { LazySplashSelectPanel } from "#components"
import { useChampions } from "~/domain/summoner/champions/useChampions"
import { skinNameFromUrl } from "~/domain/utils/img"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const currentSplash = computed(
  () => user().account?.splash?.replace("uncentered", "tile") ?? ""
)

const active = ""

const inactive = ""

const card = {
  base: cn(
    "group/photo-button group/photo pointer-events-auto flex h-max! shrink-0 basis-1/2 cursor-pointer items-center justify-start rounded-xl px-4! py-4 inset-shadow-sm! **:text-start hover:bg-p3/60! active:ring-1! active:ring-pc/50! active:ring-offset-1! active:ring-offset-p4 active:drop-shadow-sm",
    orientation === "horizontal" ? "max-w-120 gap-8!" : "max-w-full grow gap-4"
  ),
  wrapper: cn(
    "flex w-full max-w-full flex-col justify-between overflow-hidden pt-3",
    orientation === "horizontal" ? "h-36" : "h-28"
  ),
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
  avatar: cn(
    "group-not-active/btn:filter-grayscale rounded-lg",
    orientation === "horizontal" ? "size-36" : "size-28"
  )
}

const chosenLabel = computed(
  () => skinNameFromUrl(user().account?.splash ?? "") ?? ""
)

const { getMatchesForSummoner } = useIndexedDB()
const accountPuuid = computed(
  () => user().summoner?.puuid ?? user().account?.puuid ?? ""
)
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
  <div class="flex max-w-full flex-1 flex-wrap gap-x-8 gap-y-6 pt-3 *:shrink-0">
    <UButton
      :active="!currentSplash"
      :variant="!currentSplash ? 'solid' : 'outline'"
      :avatar="{
        src: top()
          ?.splash?.replace('uncentered', 'tile')
          .replace('centered', 'tile'),
        class: card.avatar,
        alt: `${user().summoner?.name ?? user().account?.username ?? null}'s Most Played`
      }"
      :ui="{
        base: card.base
      }"
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
            :color="currentSplash !== null ? 'primary' : 'neutral'" />
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
          'basis-1/2 ring-1! inset-shadow-sm! ring-pc/50! ring-offset-1! ring-offset-p4 drop-shadow-sm *:pointer-events-none':
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
