<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const as = useAccountStore()
const ts = useTempStore()

const items = [
  {
    name: 'Items',
    link: '/items',
    icon: 'streamline:bow',
    text: 'Browse a visual grid and read item data.'
  },
  {
    name: 'Item Stats',
    link: '/item-stats',
    icon: 'teenyicons:align-bottom-solid',
    badge: 'Table',
    text: 'An item stat spreadsheet for the data nerds :)'
  },
]
const db = [
  {
    name: 'Champions',
    link: '/champions',
    icon: 'i-helmet',
  },

  {
    name: 'Runes',
    link: '/runes',
    icon: 'i-rune',
  },
  {
    name: 'Spells',
    link: '/spells',
    icon: 'mdi:run-fast',
  },
  {
    name: 'Summoners',
    link: '/summoners',
    icon: 'shield',
    text: 'Look up your friends... or your foes.',
  },
]
</script>

<template>
  <MenubarMenu class=" ">
    <MenubarTrigger>Game</MenubarTrigger>
    <MenubarContent class="!w-74">


      <MenubarLabel>Items</MenubarLabel>
           <NuxtLink
          v-for="item in items"
          :key="item.name"
          :to="item.link"
          class=""
        >
         <MenubarItem>
         
              <icon :name="item.icon" class="size-3 shrink-0"/>
         {{ item.name }}

           <MenubarShortcut v-if="item.badge" class="tracking-normal text-2 uppercase">
{{item.badge}}
           </MenubarShortcut>
     


          </MenubarItem>

        </NuxtLink>
   
        <MenubarSeparator  />
        <NuxtLink
          v-for="submenu in db"
          :key="submenu.name"
          :to="submenu.link"
          class=""
        >
           <MenubarItem>
                       <icon :name="submenu.icon" class="size-3 shrink-0"/>
            {{ submenu.name }}
           </MenubarItem>
        </NuxtLink>

  
    </MenubarContent>
  </MenubarMenu>
</template>

<style scoped></style>
