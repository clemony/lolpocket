<script setup lang="ts">
const supabase = useSupabaseClient()

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:8080/summoner',
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
  <Button
    variant="outline"
    size="lg"
    class="hover:border-neutral/80 h-14 gap-4.5 shadow-xs"
    @click="signInWithGoogle()"
  >
    <icon
      name="mdi:google"
      class="-ml-6.5 size-6"
    />
    <div class="">
      Log in with Google
    </div>
  </Button>
</template>

<style scoped></style>
