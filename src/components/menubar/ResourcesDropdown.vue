<script setup lang="ts">
import { links } from '@data/resourceLinks'
console.log('💠 - links:', links)
</script>
<template>
    <template v-for="section in links[1].submenu">
        <MenubarLabel>
            {{ section.name }}
        </MenubarLabel>
        <MenubarSeparator />

        <MenubarItem v-for="link in section.items" class="pr-14">
            <img :src="link.icon" class="size-6 rounded-md" />
            <span class="truncate">{{ link.name }}</span>
        </MenubarItem>

        <MenubarSeparator class="last:hidden" />
    </template>
</template>
<style scoped></style>
