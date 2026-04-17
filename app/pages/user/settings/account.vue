<script setup lang="ts">
definePageMeta({
  title: "Account",
  description: "Manage your account safeSettings and login safeSettings.",
  icon: "at",
  path: "/settings/account",
  auth: true,
  order: 1,
  prefix: "Settings"
  /*   middleware: 'confirm-auth', */
})
</script>

<template>
  <AccountSettings />
</template>
