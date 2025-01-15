<script lang="ts" setup>
  const ts = useTempStore()
  import { summoner } from 'shared/data/summonerData'
  const as = useAccountStore()

  const summonerName = computed(() => {
    return as.riotAccountLinked ? as.riotAccount.name : 'Summoner'
  })

  const userLinks = [
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

  const userCheck = ref(true)
</script>

<template>
  <li class="mt-2 mb-1.5">
    <NuxtLink
      to="/admin/Admin"
      class="flex items-center gap-4 px-2.5">
      <icon
        name="codicon:source-control"
        class="size-4.5" />
      Admin Board
    </NuxtLink>
  </li>

  <li
    class="collapse"
    key="resources">
    <input
      v-model="userCheck"
      name="resources"
      type="checkbox" />
    <div class="collapse-title flex items-center gap-4 capitalize">
      <LittleIcon
        icon="teenyicons:home-outline"
        class="size-4.5" />
      {{ summonerName }}'s Home
      <ExpandIndicator v-model:check="userCheck" />
    </div>
    <ul class="collapse-content">
      <li
        v-for="link in userLinks"
        :key="link.name">
        <NuxtLink
          :to="{
            path: link.link,
          }"
          class="flex items-center gap-4 px-2.5">
          <icon
            v-if="link.icon"
            :name="link.icon"
            class="size-4.5"
            :class="{ '!size-6 !-mx-1 ': link.icon == 'ph:squares-four-light' }" />
          <span class="capitalize">
            {{ link.name }}
          </span></NuxtLink
        >
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
