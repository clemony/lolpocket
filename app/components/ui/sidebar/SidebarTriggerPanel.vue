<script lang="ts" setup>
import { capitalize } from 'utils/normalize/capitalize'

const as = useAccountStore()
const us = useUiStore()
const tabs = shallowRef(null)

function handleClick(item) {
  if (us.activeSidebarContent == item) {
    console.log('💠 - handleClick - item:', item)
    us.activeSidebarContent = null
    tabs.value = null
  }
  else {
    us.activeSidebarContent = item
  }
}

const newNotifications = computed (() => {
  return as.userAccount.inbox.notifications.filter(n => !n.read).length
})

const unreadMessages = computed (() => {
  return as.userAccount.inbox.messages.filter(m => !m.read).length
})

watch(() => us.activeSidebarContent, (newVal) => {
  if (newVal == null)
    tabs.value = null
})

watch(() => as.userAccount?.inbox?.notifications, (newVal) => {
  if (newVal)
    userMenu.notifications.value = newNotifications.value
}, { deep: true })

watch(() => newNotifications.value, (newVal) => {
  if (newVal)
    userMenu.notifications.value = newNotifications.value
})

watch(() => as.userAccount?.inbox?.messages.length, (newVal) => {
  if (newVal)
    userMenu.inbox.value = unreadMessages.value
})

onMounted (() => {
  us.activeSidebarContent ? tabs.value = us.activeSidebarContent : null
  userMenu.inbox.value = unreadMessages.value
  userMenu.notifications.value = newNotifications.value
})
</script>

<template>
  <Tabs v-model:model-value="tabs">
    <IndicatorTabsList
      :class="cn('h-16  z-1 items-center pr-1.5 pt-1 pb-0 bg-transparent justify-end  inset-shadow-none shadow-none  auto-cols-min grid-flow-col w-100 border-0 ')">
      <span class=" gap-1 justify-start place-items-center auto-cols-min grid-flow-col grid">
        <template
          v-for="item in userMenu"
          :key="item?.name">
          <IndicatorTabsTrigger
            v-if="item"
            v-tippy="{ content: item.name }"
            :class="cn('not-data-[state=active]:**:text-bc/90  size-11 grid place-items-center rounded-field hover:bg-b2/60 relative indicator hover:border-b3/80  group/tab', { 'pointer-events-none': us.activeSidebarContent == item.name })"
            :value="item.name"
            :data-active="us.activeSidebarContent == item.name"
            @click="handleClick(item.name)">

            <span
              v-if="item.value && item.value > 0"
              class="indicator-item top-2 h-4.25 rounded-full grid place-items-center right-1.5 text-1 font-bold   px-1.25 leading-0 w-auto   group-data-[state=active]/tab:bg-n1  group-data-[state=active]/tab:drop-shadow-sm  group-data-[state=active]/tab:bg-n1/86 group-data-[state=active]/tab:!text-nc  group-data-[state=active]/tab:font-black">
              {{ item.value }}
            </span>
            <hicon
              :name="item.icon.name"
              :class="cn('opacity-80 mix-blend-screen drop-shadow-[var(--drop-shadow-xs,--dst)]', item.icon.class)" />
          </IndicatorTabsTrigger>

          <span
            v-else
            class="h-px w-8"></span>
        </template>
      </span>

      <IndicatorTabsTrigger
        v-tippy="{ content: as.userAccount?.riot.puuid ? `${capitalize(as.userAccount?.riot?.name)}'s Account` : 'Connect Riot ID' }"
        value="Account"
        class="btn p-0 shadow-sm grid place-items-center justify-self-end border-0 rounded-full size-9 border grayscale -mt-1 !border-b4 ml-6 drop-shadow-sm relative overflow-hidden inset-shadow-xs inset-shadow-black/50 data-[state=active]:grayscale-0 transition duration-200 "
        @click="us.activeSidebarContent = 'Account'">
        <SummonerIcon class="size-full  shrink-0 absolute" />
      </IndicatorTabsTrigger>
      <!--  *:after:-bottom-2.5 *:after:rounded-full  *:after:absolute *:after:h-1 *:after:bg-n1 *:after:w-full -->
      <TabIndicator
        v-show="us.activeSidebarContent"
        :class="cn('*:!bg-b3/53 self-center !py-0 overflow-visible *:size-11 *:mt-2 *:btn', { '*:rounded-full *:scale-100 *:after:-bottom-[11px]   *:-ml-0.75 *:ring  *:size-10 *:ring-b3 *:relative ': tabs == 'Account' })" />
    </IndicatorTabsList>
  </Tabs>
</template>