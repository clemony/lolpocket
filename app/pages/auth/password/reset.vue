<script lang="ts" setup>
const emit = defineEmits(["error"])

definePageMeta({
  name: "Reset Password",
  title: "Forgot password?",
  alias: "/auth/password-reset",
  description: "It's ok. They're free. We'll get you a new one.",
  icon: "key",
  search: false,
})

const password = ref("")
const supabase = useSupabaseClient()
const email = ref("")

const requestResetPassword = async () => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    email.value,
    {
      redirectTo: "https://example.com/password/update",
    },
  )
  if (error) console.log(error)
}
function handleReset() {
  const toast = useToast()
  toast.add({
    title: "Password reset link sent!",
    description:
      "Check your email for a message from the customer support lolpocat.",
  })
}
</script>

<template>
  <NuxtLayout layout="card">
    <form>
      <div class="grid gap-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <Label html-for="email">Email</Label>
            <UInput
              id="email"
              class="h-12"
              type="email"
              placeholder="m@example.com"
              required />
          </div>
          <div class="grid w-full gap-y-2">
            <UButton
              class="h-14 w-full font-medium"
              color="neutral"
              size="lg"
              type="submit"
              @click="handleReset()">
              Send Reset Link
            </UButton>

            <button
              class="underline-offset-1.5 h-14 w-full justify-center gap-3 justify-self-start hover:underline"
              as="a"
              size="lg"
              hover="link"
              @click="navigateTo('/login')">
              Remembered it? Log in
            </button>
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>
