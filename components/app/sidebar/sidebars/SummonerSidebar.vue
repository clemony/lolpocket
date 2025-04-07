<script setup lang="ts">
import { motion } from 'motion-v'

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

<template>
  <NuxtLayout name="sidebar-layout" motionKey="summoner">
    <template #title>
      <PatchSelectDropdown class="w-29 -top-2.25 justify-self-end h-10 absolute right-5" />
    </template>

    <div class="size-full mt-5 relative overflow-y-scroll overflow-x-hidden">
      <div class="inset-0 top-0 left-0  px-2 flex-nowrap overflow-x-hidden  overflow-y-scroll gap-2.5 flex  flex-col">
        <template v-for="link in summonerLinks" :key="link.name">
          <SidebarBtn
            v-if="link.name != 'Research'"
            :to="link.link" :class="{ ' btn-active': link.link == route.path }" @click="navigateTo(link.link)">
            {{ link.name }}
            <span v-if="link.name == 'Base'"></span>
          </SidebarBtn>
          <template v-else>
            <SidebarBtn
              :to="link.link" class="group pointer-events-none text-bc/50">
              Research
            </SidebarBtn>
            <div class="grid gap-1 -mt-3 ml-6 pl-2 before:border-l items-center before:absolute relative  before:h-full  before:w-1  before:left-0  before:scale-y-102   before:border-l-neutral/20">
              <SidebarBtn
                to="/research" :class="{ ' btn-active': '/research/champions' == route.path }" @click="navigateTo('/research/champions')">
                Champions
              </SidebarBtn>
              <SidebarBtn
                to="/research/items" :class="{ ' btn-active': '/research/items' == route.path }" @click="navigateTo('/research/items')">
                Items
              </SidebarBtn>
            </div>
          </template>
        </template>
      </div>

      <div class="mt-6 px-2 mb-4">
        <PositionRadio class=" mb-0 border-x-0 " />
      </div>

      <div class="w-full px-2 pt-2 ">
        <QueueRadio />
      </div>

      <transition-slide group as="div" class="w-full flex  flex-col gap-6 overflow-hidden pt-22 px-3">
      </transition-slide>
    </div>
  </NuxtLayout>
</template>
