<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const as = useAccountStore()
const ts = useTempStore()

const db = [
  {
    name: 'Champions',
    link: 'Champions',
    icon: 'i-helmet',
  },
  {
    name: 'Items',
    link: 'Items',
    icon: 'teenyicons:shield-tick-outline',
  },

  {
    name: 'Item Stats',
    link: 'ItemTable',
    icon: 'teenyicons:shield-tick-outline',
    badge: 'Table',
  },
  {
    name: 'Runes',
    link: 'Runes',
    icon: 'i-rune',
  },
  {
    name: 'Spells',
    link: 'Spells',
    icon: 'shield',
  },
  {
    name: 'Summoners',
    link: '',
    icon: 'shield',
    text: 'Look up your friends... or your foes.',
  },
]
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Game</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size  py-6 px-7 gap-4 grid grid-cols-2">
        <NuxtLink
          v-for="submenu in db"
          :key="submenu.name"
          :to="{ name: submenu.link }"
          class="flex gap-4 items-center"
        >
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            {{ submenu.name }}
          </NavigationMenuLink>
        </NuxtLink>

        <NuxtLink to="/Summoners">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Summoners
          </NavigationMenuLink>
        </NuxtLink>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped></style>
