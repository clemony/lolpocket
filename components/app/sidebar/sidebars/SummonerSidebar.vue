<script setup lang="ts">
import { LayoutGroup, motion } from 'motion-v'

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

const ms = useMatchStore()
const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

<template>
  <div class="size-full flex flex-col relative overflow-y-scroll overflow-x-hidden">
    <SidebarTitle />
    <div class="inset-0 top-0 left-0  flex-nowrap overflow-x-hidden  overflow-y-scroll gap-2.5 flex mt-5  shrink-0 pb-4 flex-col">
      <SummonerCard :summoner="summoner" class="px-5 mb-6 " />

      <div v-for="link in summonerLinks" :key="link.name" class="pl-3 pr-5 w-full">
        <SidebarButton
          v-if="link.name != 'Research'"
          :to="link.link" :class="{ 'btn-active': link.link == route.path }" @click="navigateTo(link.link)">
          {{ link.name }}
          <span v-if="link.name == 'Base'"></span>
        </SidebarButton>

        <template v-else>
          <SidebarButton
            :to="link.link" class="group pointer-events-none text-bc/50">
            Research
          </SidebarButton>
          <div class="grid gap-1 -mt-1 ml-6 pl-2 before:border-l items-center before:absolute relative  before:h-full  before:w-1  before:left-0  before:scale-y-102   before:border-l-neutral/20">
            <SidebarButton
              to="/research" :class="{ ' btn-active': '/research/champions' == route.path }" @click="navigateTo('/research/champions')">
              Champions
            </SidebarButton>
            <SidebarButton
              to="/research/items" :class="{ ' btn-active': '/research/items' == route.path }" @click="navigateTo('/research/items')">
              Items
            </SidebarButton>
          </div>
        </template>
      </div>
    </div>
    <UpdateMatchHistoryButton v-if="summoner && summoner.puuid"  :puuid="summoner.puuid" />
    <transition-expand v-if="route.path != '/nexus' " group as="div" class="grid">
      <SidebarSeparator class="mt-6 mb-6" />
      <div v-if="route.path == '/research/champions' || route.path == '/research/items' " class=" px-3 mb-5 self-start">
        <PositionRadio class=" mb-0 border-x-0 " />
      </div>

      <div v-if="route.path == '/nexus/match_history' " class="w-full px-3 pt-2 self-start">
        <SelectChampionPlayed />
        <QueueButtons />
        <PlayedWithList v-if="summoner && summoner.puuid && summoner.gameName" :puuid="summoner.puuid" :game-name="summoner.gameName" />
      </div>
    </transition-expand>
    <Grow />
    <ClearMatchesButton />
    <LogMatchesButton />
  </div>
</template>
