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
  <NuxtLayout layout="card">
    <AuthForm type="logIn" />
  </NuxtLayout>
</template>
