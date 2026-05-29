<script lang="ts" setup>
import { settingsUpdate } from "~/domain/user/composables/settingsUpdate"

definePageMeta({
  title: "Profile",
  order: 2,
  description:
    "Set your public profile display settings and hide your annoyances.",
  icon: "i-lucide-circle-user-round",
  layout: "settings-layout",
  class: "",
  path: "/settings/profile",
  auth: true,
  prefix: "Settings"
  /* middleware: 'confirm-auth', */
})
</script>

<template>
  <ProfileSettings />
</template>
