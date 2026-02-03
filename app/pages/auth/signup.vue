<script lang="ts" setup>
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
    <div
      class="text-md after:border-b4 relative text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
    >
      <span class="bg-b1 text-bc/60 relative z-10 px-2">Or continue with</span>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-2">
        <Label html-for="email">Email</Label>
        <Input
          id="email"
          v-model:email="email"
          class="h-12"
          type="email"
          placeholder="mail@example.com"
          required
          @clear-input="email = ''"
        />
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
          @clear-input="password = ''"
        />
      </div>
      <div class="grid w-full gap-y-2">
        <Button
          class="col-span-full w-full font-medium"
          color="neutral"
          size="lg"
          type="submit"
        >
          Sign up with Email
        </Button>

        <div
          class="flex size-full items-center justify-center gap-3 *:align-baseline"
        >
          <button
            class="hover:underline max-w-fit justify-center justify-self-start"
            as="a"
            size="lg"
            hover="link"
            @click="navigateTo('/login')"
          >
            Logging in?
          </button>

          <span class="text-sm opacity-50">or</span>
          <Button
            class="underline-offset-1.5 hover:underline  max-w-fit justify-center justify-self-end"
            as="a"
            size="lg"
            @click="navigateTo('/password-reset')"
          >
            Forgot Password?
          </Button>
        </div>
      </div>
    </div>
  </SingleCard>
</template>
