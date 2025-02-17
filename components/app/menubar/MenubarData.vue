<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const as = useAccountStore()
const ts = useTempStore()

const items = [
  {
    name: 'Items',
    link: 'Items',
    icon: 'streamline:bow',
    text: 'Browse a visual grid and read item data.'
  },
  {
    name: 'Item Stats',
    link: 'ItemTable',
    icon: 'teenyicons:align-bottom-solid',
    badge: 'Table',
    text: 'An item stat spreadsheet for the data nerds :)'
  },
]
const db = [
  {
    name: 'Champions',
    link: 'Champions',
    icon: 'i-helmet',
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
      <div class=" nav-menu-size  py-6 px-7 gap-8 grid grid-cols-2">

        <div class="bg-b2/40 rounded-lg px-3 py-3 grid border-b2 border bg-[var(--bg-noise)] group/i gap-2">
           <NuxtLink
          v-for="item in items"
          :key="item.name"
          :to="{ name: item.link }"
          class="flex gap-4 items-center justify-start btn btn-ghost !h-full "
        >
          <NavigationMenuLink  class="text-left">
            <div class="flex items-center gap-3 ">
              <icon :name="item.icon" class="size-4 shrink-0"/>
           <h5 class="f-sb grow f-tt"> {{ item.name }}</h5>

           <BadgeNeutral v-if="item.badge" class="uppercase">
{{item.badge}}
           </BadgeNeutral>
          </div>
           <p class="text-3 !font-normal mt-1">{{item.text}}</p>


          </NavigationMenuLink>

        </NuxtLink>
        </div>
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
