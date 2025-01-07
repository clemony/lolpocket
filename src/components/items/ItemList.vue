<script setup lang="ts">
import { itemDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@/functions/utils'
import { filteredItems } from './data/client/filter'
</script>

<template>
    <transition-slide
        group
        class="flex max-h-full flex-wrap items-start justify-around gap-5 px-1">
        <Item
            v-for="(item, i) in filteredItems"
            :key="i"
            :item="item"
            ref="el"
            class="size-18 shadow-sm select-none"
            @click="toggleDrawerState(itemDrawer, null, null, item)" />

        <div
            v-for="index in 18"
            :key="index"
            class="invisible aspect-square size-18 opacity-0"></div>
    </transition-slide>
</template>

<style></style>
