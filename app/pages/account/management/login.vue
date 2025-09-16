<script lang="ts" setup>
import { authProviders } from '#shared/appdata/authProviders'

definePageMeta({
  layout: 'basic',
  name: 'login',
  path: '/login',
  title: 'Welcome back!',
  description: 'Login with your Riot, Google, or Discord account',
  icon: 'plug',
})

const email = ref('')
const password = ref('')
</script>

<template>
  <SingleCard>
    <form>
      <div class="grid gap-6">
        <div class="grid grid-cols-3 gap-4">
          <Button
            v-for="provider in authProviders"
            :key="provider"
            size="lg"
            variant="link"
            hover="outline"
            class="w-full h-14 grid place-items-center border border-b4/60 shadow-xs [&_svg]:opacity-80"
            @click="useSignIn(provider)">
            <icon
              :name="provider"
              :class="cn('size-5.5 ')" />
          </Button>
        </div>
        <div
          class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-b4">
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
              <NuxtLink
                to="/password-reset"
                class="ml-auto text-xs underline-offset-1.5 hover:underline">
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
              size="lg"
              type="submit"
              class="w-full font-medium">
              Login
            </Button>
            <Button
              as="a"
              variant="link"
              size="lg"
              hover="link"
              class="underline-offset-1.5 justify-center w-full"
              @click="navigateTo('/signup')">
              Signing up?
            </Button>
          </div>
        </div>
      </div>
    </form>
  </SingleCard>
</template>
