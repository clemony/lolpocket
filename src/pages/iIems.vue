<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'

const dataStore = useDataStore()

interface Item {
    name: string
    img: string
    buy: number
    sell: number
    stats: string
    passive: string
    active: string
    type: string // Assuming 'type' is a property in your JSON data
}

const items = dataStore.items
</script>

<template>
    <div class="grid-container">
        <div class="grid-item item" v-for="item in items">
            <div class="grid-image-container item">
                <img
                    v-if="item.type === 'item'"
                    :src="item.img"
                    :alt="item.name + ' Image'"
                    class="grid-image item" />
                <span class="grid-tip">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
