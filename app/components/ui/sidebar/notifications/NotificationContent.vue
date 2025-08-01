<script lang="ts" setup>
const as = useAccountStore()
const notifications = computed(() => as.userAccount?.inbox?.notifications ?? [])

const sortedNotifications = computed(() =>
  [...notifications.value]
    .filter(n => !!n && n.date && n.template)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

function testNotificaition() {
  const vars = {
    pocketKey: 'Hi notification',
    pocketName: 'Really cool cat toys',
  }
  console.log('💠 - testNotificaition - vars:', vars)

  console.log('💠 - testNotificaition - as.userAccount.inbox.notifications:', as.userAccount.inbox.notifications)
  saveNotification('newPocket', vars)
}

onBeforeUnmount(() => {
  notifications.value.filter(n => !n.read).forEach((n) => {
    n.read = true
  })
})
</script>

<template>
  <SidebarContentWrapper
    title="Notifications">
    <template #header>
      <button
        class="btn btn-sm pointer-events-auto"
        @click="testNotificaition()">
        cool
      </button>
    </template>
    <SidebarGroupContent class="gap-0  h-full  -space-y-2 overflow-hidden  w-full !flex flex-col items-start">
      <template
        v-if="sortedNotifications">
        <Notification
          v-for="item in sortedNotifications"
          :key="`${item.id}`"
          :item="item" />
      </template>
    </SidebarGroupContent>
  </SidebarContentWrapper>
</template>