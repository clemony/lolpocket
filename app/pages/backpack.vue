<script lang="ts" setup>
definePageMeta({
  title: "Backpack",
  icon: "backpack",
  layout: "default",
  order: 4,
})
const isCollapsed = ref(false)
const route = useRoute()
const pinned = computed(() =>
  ps().pockets.filter((p) => ps().pinned.includes(p.key))
)
</script>

<template>
  <!--
          <PinnedPocketsNav
            :pinned
            :is-collapsed />
                <PocketTagsInput />
                <BackpackRoleFilter />-->

  <UDashboardGroup unit="px">
    <UDashboardSidebar resizable collapsible :max-size="280" />

    <NuxtPage />
  </UDashboardGroup>
</template>
