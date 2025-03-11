<script setup lang="ts">
const items = [
  {
    name: 'Items',
    link: '/items',
    icon: '',
    text: 'Browse a visual grid and read item data.',
  },
  {
    name: 'Item Stats',
    link: '/item-stats',
    icon: 'teenyicons:table-outline',
    badge: '',
    text: 'An item stat spreadsheet for the data nerds :)',
  },
]
const db = [
  {
    name: 'Champions',
    link: '/champions',
    icon: '',
  },

  {
    name: 'Runes',
    link: '/runes',
    icon: '',
  },
  {
    name: 'Spells',
    link: '/spells',
    icon: '',
  },
  {
    name: 'Summoners',
    link: '/summoners',
    icon: '',
    text: 'Look up your friends... or your foes.',
  },
]
</script>

<template>
  <MenubarContent class="!w-74">
    <MenubarLabel class="select-none" inset>
      Game Data
    </MenubarLabel>
    <MenubarSeparator />
    <NuxtLink
      v-for="item in items"
      :key="item.name"
      :to="item.link"
      class="">
      <MenubarItem inset>
        {{ item.name }}

        <MenubarShortcut v-if="item.badge" class="tracking-normal text-2 uppercase">
          {{ item.badge }}
        </MenubarShortcut>
      </MenubarItem>
    </NuxtLink>

    <MenubarSeparator />

    <template
      v-for="submenu in db"
      :key="submenu.name">
      <MenubarSeparator v-if="submenu.name == 'Summoners'" />
      <NuxtLink
        class=""
        :to="submenu.link">
        <MenubarItem inset>
          {{ submenu.name }}
        </MenubarItem>
      </NuxtLink>
    </template>
  </MenubarContent>
</template>

<style scoped></style>
