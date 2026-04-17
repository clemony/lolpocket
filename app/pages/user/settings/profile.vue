<script lang="ts" setup>
import { settingsUpdate } from "~/composables/account/settingsUpdate"

definePageMeta({
  title: "Profile",
  order: 2,
  description:
    "Set your public profile display settings and hide your annoyances.",
  icon: "i-mingcute-badge-line",
  class: "scale-110 ",
  path: "/settings/profile",
  auth: true,
  prefix: "Settings"
  /* middleware: 'confirm-auth', */
})
</script>

<template>
  <ProfileSettings />
</template>
