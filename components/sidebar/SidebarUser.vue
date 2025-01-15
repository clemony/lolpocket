<script lang="ts" setup>
  const ts = useTempStore()
  import { summoner } from 'shared/data/summonerData'
  const as = useAccountStore()

  const summonerName = computed(() => {
    return as.riotAccountLinked ? as.riotAccount.name : 'Summoner'
  })

  const links = [
    {
      name: summonerName.value + "'s Board",
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
  <div class="h-22 px-5 pt-5 pb-1 flex flex-col backdrop-blur-md bg-b1/70 absolute w-full z-10 top-0 left-0">
    <div class="flex items-center gap-6">
      <Avatar class="size-12 border-1 border-bc ring-1 ring-b1 rounded-full shadow-sm">
        <AvatarImage
          :src="summoner.icon"
          :alt="summoner.name" />
        <AvatarFallback class="rounded-lg"> LP </AvatarFallback>
      </Avatar>

      <div class="text-7 tracking-tight font-serif font-bold flex drop-shadow-text pb-0.5">
        {{ summonerName }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
