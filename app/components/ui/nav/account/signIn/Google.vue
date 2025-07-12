<script setup lang="ts">
const config = useRuntimeConfig()

const supabase = useSupabaseClient()

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: config.public.redirectUrl,
    },
  })
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
    v-tippy="'Google'" alt="Sign in with
    Google"  class="btn  w-full group h-18 relative overflow-hidden   hover:!btn-n1 hover:bg-n1/90 "
    @click="signInWithGoogle()">
    <div class="size-full relative grid place-items-center">
      <hicon name="devicon-plain:google" :class="cn('absolute transition-opacity duration-200  dst size-7  group-hover:!text-nc text-bc/80  ')" />
    </div>
  </button>
</template>
