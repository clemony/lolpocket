<script lang="ts" setup>
import { toast } from 'vue-sonner'

definePageMeta({
  layout: 'basic',
  path: '/password-update',
  description: 'Let\'s try out a password manager this time, yeah?',
  name: 'Update Password',
  title: 'Choose a new password',
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
            <div class="flex items-center">
              <Label html-for="password">New Password</Label>
            </div>
            <Input
              id="password"
              class="h-12"
              type="password"
              required />
          </div>
          <div class="w-full gap-y-2 grid ">
            <Button
              variant="neutral"
              size="lg"
              type="submit"
              class="w-full font-medium"
              @click="handleReset()">
              Reset Password
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