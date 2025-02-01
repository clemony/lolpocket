<script lang="ts" setup>
import { summoner } from 'shared/data/summonerData'

const ts = useTempStore()
const as = useAccountStore()

const summonerName = ref()
const summonerTag = ref()

const links = [
  {
    name: `${summonerName.value}'s Board`,
    link: '/summoner',
    icon: 'ph:squares-four-light',
  },
  {
    name: 'Build Analysis',
    link: '/summoner/BuildAnalysis',
    icon: 'octicon:graph-24',
  },
  {
    name: 'Match History',
    link: '/summoner/MatchHistory',
    icon: 'iconoir:archery-match',
  },
  {
    name: 'Favorites',
    link: '/summoner/Favorites',
    icon: 'teenyicons:heart-outline',
  },
]
</script>

<template>
  <div class="h-18 px-5 pt-5 pb-1 flex flex-col backdrop-blur-md bg-b1/70 absolute w-full z-10 bottom-0 left-0">
    <div class="flex items-center gap-4">
      <Avatar class="size-10 border-1 border-bc ring-1 ring-b1 rounded-lg shadow-sm grayscale">
        <AvatarImage
          v-if="summoner"
          :src="summoner.icon"
          :alt="summonerName"
        />
        <AvatarFallback
          v-else
          class="rounded-full"
        >
          LP
        </AvatarFallback>
      </Avatar>

      <h4 class="tracking-tight flex">
        {{ summonerName }}
      </h4>
    </div>
  </div>
</template>

<style scoped></style>
