<script lang="ts" setup>
const emit = defineEmits(["error"])

definePageMeta({
  name: "Sign up",
  alias: "/sign-up",
  description: "Login with your Riot, Google, or Discord account.",
  icon: "gear",
  search: false,
})

const client = useSupabaseClient()
const email = ref("")
const password = ref("")

onBeforeRouteLeave(() => {
  email.value = ""
  password.value = ""
})
</script>

<template>
  <NuxtLayout layout="card">
    <AuthForm type="signUp" />
  </NuxtLayout>
</template>
