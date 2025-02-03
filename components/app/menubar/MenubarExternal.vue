<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
</script>

<template>
  <template v-for="section in links">
    <MenubarLabel>
      {{ section.name }}
    </MenubarLabel>
    <MenubarSeparator />

    <NavigationMenuItem
      v-for="link in section.items"
      class="pr-14"
    >
      <NavigationMenuLink :class="navigationMenuTriggerStyle()">
        <img
          :src="link.icon"
          class="size-6 rounded-md"
        />
        <span class="truncate">{{ link.name }}</span>
      </NavigationMenuLink>
    </NavigationMenuItem>

    <MenubarSeparator class="last:hidden" />
  </template>
</template>

<style scoped></style>
