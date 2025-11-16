<script lang="ts" setup>
import { toast } from '~/composables/utils/useToast'

definePageMeta({
  name: 'Reset Password',
  title: 'Forgot password?',
  description: 'Np. They\'re free. We\'ll get you a new one.',
  icon: 'key',
  layout: 'basic',
})

const password = ref('')

function handleReset() {
  toast({
    title: 'Password reset link sent!',
    description:
      'Check your email for a message from the customer support lolpocat.',
  })
}
</script>

<template>
  <SingleCard>
    <form>
      <div class="grid gap-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <Label html-for="email">Email</Label>
            <Input
              id="email"
              type="email"
              class="h-12"
              placeholder="m@example.com"
              required />
          </div>
          <div class="grid w-full gap-y-2">
            <Button
              variant="neutral"
              size="12"
              type="submit"
              class="h-14 w-full font-medium"
              @click="handleReset()">
              Send Reset Link
            </Button>

            <Button
              as="a"
              variant="link"
              size="12"
              hover="link"
              class="
                underline-offset-1.5 h-14 w-full justify-center gap-3
                justify-self-start
              "
              @click="navigateTo('/login')">
              Remembered it? Log in
            </Button>
          </div>
        </div>
      </div>
    </form>
  </SingleCard>
</template>
