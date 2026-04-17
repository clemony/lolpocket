<script lang="ts" setup>
definePageMeta({
  title: "Communication",
  description: "Manage in app-notifications, messaging, and email preferences.",
  icon: "i-chat-dots",
  path: "/settings/communication",
  auth: true,
  order: 3,
  prefix: "Settings"
})
</script>

<template>
  <CommunicationSettings />
</template>
