<script lang="ts" setup>
defineOptions({
  meta: {
    name: 'Notifications',
    badge: computed (() => as().account.inbox.notifications.filter(n => !n.read).length).value,
    class: '**:stroke-[2.2]',
    icon: 'lucide:message-square',
  }
})

const notifications = computed(() => as().account?.inbox?.notifications ?? [])

const sortedNotifications = computed(() =>
  [...notifications.value]
    .filter(n => !!n && n.date && n.template)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

function testNotificaition() {
  const vars = {
    pocketKey: 'Hi notification',
    pocketName: 'Really cool cat toys',
  }
  console.log('💠 - testNotificaition - vars:', vars)

  console.log(
    '💠 - testNotificaition - as().account.inbox.notifications:',
    as().account.inbox?.notifications
  )
  saveNotification('newPocket', vars)
}

onBeforeUnmount(() => {
  notifications.value
    ?.filter(n => !n.read)
    .forEach((n) => {
      n.read = true
    })
})
</script>

<template>
  <aside class="size-full">
    <SidebarHeaderWrapper title="Notifications">
      <template #header>
        <button
          class="btn btn-sm pointer-events-auto"
          @click="testNotificaition()">
          cool
        </button>
      </template>
    </SidebarHeaderWrapper>
    <div
      class="gap-0 h-full -space-y-2 overflow-hidden w-full !flex flex-col items-start">
      <template v-if="sortedNotifications">
        <Notification
          v-for="item in sortedNotifications"
          :key="`${item.id}`"
          :item="item" />
      </template>
    </div>
  </aside>
</template>
