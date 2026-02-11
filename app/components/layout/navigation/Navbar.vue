<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const { navItem } = defineProps<{
  navItem?: NavigationMenuItem
}>()
const route = useRoute()
const sum = computed(() => route.path.match(/summoner.*/))
const component = "navbar"
const nav = computed(() => [
  navItem || {},
  buildRoute("/library"),
  buildRoute("/backpack", { merge: "/tools" }),
  buildRoute("/nexus"),
])

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
        leadingIcon: 'size-7.5  **:stroke-[1.8] text-pc/60 ',
      },
    }"
    :ui="{
      root: cn(
        'fixed top-0 z-10 flex w-full max-w-screen shrink-0 items-center gap-1 border-b bg-linear-to-r from-transparent to-p0/40 bg-blend-darken backdrop-blur-sm',
        {
          'border-0 bg-p0/20!': sum,
        }
      ),
      right: 'shrink-0',
    }">
    <template #left>
      <LpLogo />
      <BreadcrumbNav />
    </template>

    <template #right>
      <UNavigationMenu
        :items="nav as NavigationMenuItem[]"
        :ui="{ list: 'shrink-0', linkLeadingIcon: 'hidden' }" />
      <LazyAppCommand />
      <LazyAccountMenu @open-log-in="logInOpen = true" />
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
        <h3 class="mt-2 mb-10 w-full text-center dst">
          Log in
        </h3>

        <AuthForm type="logIn" />
      </template>
    </UModal>
  </UHeader>
</template>
