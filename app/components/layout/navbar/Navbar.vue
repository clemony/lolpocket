<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { navItem } = defineProps<{
  navItem?: NavigationMenuItem
}>()
const route = useRoute()
const sum = computed(() => route.path.match(/summoner.*/))
const component = 'navbar'
const nav = computed (() => [
  navItem || {},
  buildRoute('/library', { component }),
  buildRoute('/backpack', { component, merge: '/tools' }),
  buildRoute('/nexus', { component })
]
)
console.log('🥸 - nav:', nav)
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
        leadingIcon: 'size-7.5  **:stroke-[1.8] text-bc/60 ',
      },
    }"
    :ui="{
      root: cn(
        'bg-linear-to-r from-transparent to-b1/40 fixed top-0 z-10 flex bg-blend-darken  w-full max-w-screen shrink-0 items-center gap-2 border-b  pr-5 pl-16 backdrop-blur-sm',
        {
          'border-0 bg-b1/20!': sum,
        },
      ),
    }">
    <template #left>
      <LpLogo />
      <BreadcrumbNav />
    </template>
    <template #right>
      <div class="flex items-center gap-4">
        <UNavigationMenu :items="(nav as NavigationMenuItem[])" />
        <AccountMenu />
        <slot />
      </div>
    </template>

    <!-- search buttton -->
    <!--    <SearchBox class="bg-b1/60!" />
    <AccountNavbarMenu /> -->
  </UHeader>
</template>
