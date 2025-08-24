<script lang="ts" setup>
import { toast } from 'vue-sonner'

definePageMeta({
  layout: 'basic',
  path: '/password-reset',
  description: 'Np. They\'re free. We\'ll get you a new one.',
  name: 'Reset Password',
  title: 'Forgot password?',
  icon: 'key',
})

const password = ref('')

function handleReset() {
  toast.success('Password reset link sent!', { description: 'Check your email for a message from the customer support lolpocat.' })
}
</script>

<template>
  <SingleCard>
    <form>
      <div class="grid gap-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <Label
              html-for="email">Email</Label>
            <Input
              id="email"
              type="email"
              class="h-12"
              placeholder="m@example.com"
              required />
          </div>
          <div class="w-full gap-y-2 grid ">
            <Button
              variant="neutral"
              size="lg"
              type="submit"
              class="w-full font-medium"
              @click="handleReset()">
              Send Reset Link
            </Button>

            <Button
              as="a"
              variant="link"
              size="lg"
              hover="link"
              class="underline-offset-1.5 justify-center gap-3  justify-self-start w-full "
              @click="navigateTo('/login')">
              Remembered it?
              Log in
            </Button>
          </div>
        </div>
      </div>
    </form>
  </SingleCard>
</template>