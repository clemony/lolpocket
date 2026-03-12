<script lang="ts" setup>
const emit = defineEmits(["error"])

definePageMeta({
  name: "login",
  title: "Welcome back!",
  alias: "/login",
  description: "Login with your Riot, Google, or Discord account",
  icon: "plug",
  path: "/auth/login",
  layout: "form",
  search: false,
})
</script>

<template>
  <AuthForm type="logIn" @error="(e) => emit('error', e)" />
</template>
