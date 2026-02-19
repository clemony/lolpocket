<script setup lang="ts">
const route = useRoute()
const sum = computed(() => route.path.match(/summoner.*/))
const logInOpen = shallowRef<boolean>(false)
</script>

<template>
  <UHeader
    title="lolpocket"
    :toggle="{
      color: 'neutral',
      variant: 'ghost',
      square: true,
      size: 'md',
      icon: 'lucide:menu',
      ui: {
        base: 'w-full',
        leadingIcon: 'size-7.5  **:stroke-[1.8] text-pc/60 ',
      },
    }">
    <template #left>
      <LpLogo />
      <LazyAppCommand />
    </template>

    <template #right>
      <NavMenu @open-log-in="logInOpen = true" />
    </template>

    <UModal
      v-model:open="logInOpen"
      title="Log in"
      :ui="{
        content:
          'h-max max-w-120 px-10 pt-6 pb-8 items-start grid! self-start! divide-none',
      }"
      description="Use a connected account or log in with email and password.">
      <template #content>
        <div class="flex w-full justify-center">
          <LpLogo />
        </div>
        <h3 class="dst mt-2 mb-10 w-full text-center">
          Log in
        </h3>

        <AuthForm type="logIn" />
      </template>
    </UModal>
  </UHeader>
</template>
