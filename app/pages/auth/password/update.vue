<script lang="ts" setup>
const emit = defineEmits(["error"])
definePageMeta({
  name: "Update Password",
  title: "Choose a new password",
  alias: "/auth/password-update",
  description: "Let's try a password manager this time, shall we?",
  icon: "key",
  search: false,
})
const toast = useToast()

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
            <div class="flex items-center">
              <Label html-for="password">New Password</Label>
            </div>
            <UInput
              id="password"
              v-model:password="password"
              class="h-12"
              type="password"
              required
              @clear-input="password = ''" />
          </div>
          <div class="grid w-full gap-y-2">
            <UButton
              class="h-14 w-full font-medium"
              color="neutral"
              size="lg"
              type="submit"
              @click="handleReset()">
              Reset Password
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
