<script setup lang="ts">
  const supabase = useSupabaseClient()

  const signInWithDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    })
    if (error) {
      console.error('Error logging in with Discord:', error)
    } else if (data) {
      console.log('💠 - withGoogle - data:', data)
    }
  }
</script>
<template>
  <Button
    @click="signInWithDiscord"
    variant="outline"
    size="lg"
    class="hover:border-neutral/80 h-14 gap-4 shadow-xs">
    <icon
      name="prime:discord"
      class="-ml-6 size-7" />
    <div class="">Log in with Discord</div>
  </Button>
</template>
<style scoped></style>
