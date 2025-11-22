<script lang="ts" setup>
import { toast } from '~/composables/utils/useToast'

definePageMeta({
  name: 'Update Password',
  title: 'Choose a new password',
  alias: '/auth/password-update',
  description: 'Let\'s try out a password manager this time, yeah?',
  icon: 'key',
  search: 'user'
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
            <div class="flex items-center">
              <Label html-for="password">New Password</Label>
            </div>
            <Input
              id="password"
              v-model:password="password"
              class="h-12"
              type="password"
              required
              @clear:input="password = ''" />
          </div>
          <div class="grid w-full gap-y-2">
            <Button
              variant="neutral"
              size="12"
              type="submit"
              class="h-14 w-full font-medium"
              @click="handleReset()">
              Reset Password
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
