<script lang="ts" setup>
definePageMeta({
  name: 'login',
  title: 'Welcome back!',
  alias: '/login',
  description: 'Login with your Riot, Google, or Discord account',
  icon: 'plug',
  path: '/auth/login',
  search: '!user'
})

const email = ref('')
const password = ref('')
</script>

<template>
  <SingleCard class="grid gap-6">
    <AuthProviderGrid />
    <div
      class="
            text-md after:border-b3 relative text-center after:absolute
            after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
            after:border-t
          ">
      <span class="bg-b1 text-bc/60 relative z-10 px-2">
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
          <NuxtLink
            to="/auth/password-reset"
            class="underline-offset-1.5 ml-auto text-sm hover:underline">
            Forgot your password?
          </NuxtLink>
        </div>
        <Input
          id="password"
          v-model:password="password"
          class="h-12"
          type="password"
          required
          @clear:input="password = ''" />
      </div>
      <div class="w-full space-y-2">
        <Button
          variant="neutral"
          size="12"
          type="submit"
          class="w-full font-medium">
          Login
        </Button>
        <Button
          as="a"
          variant="link"
          size="12"
          hover="link"
          class="underline-offset-1.5 w-full justify-center"
          @click="navigateTo('/sign-up')">
          Signing up?
        </Button>
      </div>
    </div>
  </SingleCard>
</template>
