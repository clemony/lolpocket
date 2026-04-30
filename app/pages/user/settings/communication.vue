<script lang="ts" setup>
definePageMeta({
  title: "Communication",
  description: "Manage in app-notifications, messaging, and email preferences.",
  icon: "i-chat",
  path: "/settings/communication",
  class: "**:stroke-[2.3]",
  layout: "settings-layout",
  auth: true,
  order: 3,
  prefix: "Settings"
})
</script>

<template>
  <CommunicationSettings />
</template>
