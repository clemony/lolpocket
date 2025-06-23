<script setup lang="ts">
const supabase = useSupabaseClient()

async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
  if (error) {
    console.error('Error logging in with Discord:', error)
  }
  else if (data) {
    console.log('💠 - withGoogle - data:', data)
  }
}
</script>

<template>
  <button
    v-tippy="'Sign in with Discord'" alt="Sign in with
    Discord"
    class="btn btn-square size-26"
    @click="signInWithDiscord">
    <icon
      name="discord"
      class=" size-10" />
  </button>
</template>

<style scoped></style>
