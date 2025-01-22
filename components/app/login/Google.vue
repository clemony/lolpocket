<script setup lang="ts">
  const supabase = useSupabaseClient()

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    console.log('💠 - signInWithGoogle - data:', data)
    return data
  }
</script>

<template>
  <Button
    @click="signInWithGoogle()"
    variant="outline"
    size="lg"
    class="hover:border-neutral/80 h-14 gap-4.5 shadow-xs">
    <icon
      name="mdi:google"
      class="-ml-6.5 size-6" />
    <div class="">Log in with Google</div>
  </Button>
</template>
<style scoped></style>
