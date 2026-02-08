<script lang="ts" setup>
definePageMeta({
  name: "login",
  title: "Welcome back!",
  alias: "/login",
  description: "Login with your Riot, Google, or Discord account",
  icon: "plug",
  path: "/auth/login",
  search: "!user",
})
</script>

<template>
  <UCard>
    <AuthForm type="logIn" />
  </UCard>
</template>
