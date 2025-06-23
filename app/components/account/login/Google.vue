<script setup lang="ts">
const config = useRuntimeConfig()
console.log('💠 - config:', config)

const supabase = useSupabaseClient()

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: config.public.redirectUrl,
    },
  })
  console.log('💠 - signInWithGoogle - data:', data)
  if (data) {
    console.log('💠 - signInWithGoogle - data:', data)
    return data
  }
  else if (error) {
    console.log('💠 - signInWithGoogle - error:', error)
  }
}
</script>

<template>
  <button
    v-tippy="'Sign in with Google'" alt="Sign in with
    Google"
    class="btn btn-square size-26"
    @click="signInWithGoogle()">
    <icon
      name="mdi:google"
      class="-ml-6.5 size-6" />
  </Button>
</template>

<style scoped></style>
