<script lang="ts" setup>
import { authProviders } from '@domain'

definePageMeta({
  name: 'Sign up',
  alias: '/sign-up',
  description: 'Login with your Riot, Google, or Discord account.',
  icon: 'gear',
  search: '!user',
})

const client = useSupabaseClient()
const email = ref('')
const password = ref('')

onBeforeRouteLeave(() => {
  email.value = ''
  password.value = ''
})
</script>

<template>
  <SingleCard class="grid gap-6">
    <AuthProviderGrid />
    <div class="relative text-center text-md after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-b4">
      <span class="relative z-10 bg-b1 px-2 text-bc/60">
        Or continue with
      </span>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-2">
        <Label html-for="email">Email</Label>
        <Input
          id="email"
          v-model:email="email"
          type="email"
          class="h-12"
          placeholder="mail@example.com"
          required
          @clear:input="email = ''" />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <Label html-for="password">Password</Label>
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
          class="col-span-full w-full font-medium">
          Sign up with Email
        </Button>

        <div class="flex size-full items-center justify-center gap-3 *:align-baseline">
          <Button
            as="a"
            variant="link"
            size="12"
            hover="link"
            class="underline-offset-1.5 max-w-fit justify-center justify-self-start"
            @click="navigateTo('/login')">
            Logging in?
          </Button>

          <span class="text-sm opacity-50">or</span>
          <Button
            as="a"
            variant="link"
            size="12"
            hover="link"
            class="underline-offset-1.5 max-w-fit justify-center justify-self-end"
            @click="navigateTo('/password-reset')">
            Forgot Password?
          </Button>
        </div>
      </div>
    </div>
  </SingleCard>
</template>
