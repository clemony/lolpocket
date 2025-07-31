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
    v-tippy="'Discord'"
    class="btn  w-full group h-18 relative overflow-hidden   hover:!btn-neutral hover:bg-n1/90 "
    alt="Sign in with
    Discord"
    @click="signInWithDiscord">
    <div class="size-full relative grid place-items-center">
      <icon
        name="discord"
        :class="cn('absolute dst  transition-colors duration-200  size-8  group-hover:!text-nc text-bc/80  ')" />
    </div>
  </button>
</template>

<style scoped></style>
