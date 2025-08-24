<script setup lang="ts">
const { class: className, variant, size } = defineProps<{
  class?: HTMLAttributes['class']
  variant?: string
  size?: string
}>()
const config = useRuntimeConfig()

const supabase = useSupabaseClient()

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
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
  <Button
    :variant="variant"
    :size="size"
    :class="cn('', className)"
    @click="signInWithGoogle()">
    <div class="size-5  relative grid place-items-center pointer-events-none">
      <hicon
        name="devicon-plain:google"
        :class="cn('size-5.5 ')" />
    </div>
    <span><slot /></span>
  </Button>
</template>