<script setup lang="ts">
definePageMeta({
  title: "Account",
  description: "Manage your account safeSettings and login safeSettings.",
  icon: "at",
  layout: "settings-layout",
  path: "/settings/account",
  auth: true,
  order: 0,
  prefix: "Settings"
  /*   middleware: 'confirm-auth', */
})
</script>

<template>
  <AccountSettings />
</template>
