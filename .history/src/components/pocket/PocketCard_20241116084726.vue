<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return `url(\'/img/champions/splash/${clean(pocket.value.champions[0].starred)}_0.webp\')`
})

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})
</script>

<template>
    <div
        :style="{
            backgroundImage: champImage,
        }"
        class="rounded-box bg-[25%_-40%] bg-no-repeat [background-size:200%]">
        <InfoCard
            cardClass="card h-[350px] w-[250px]  before:absolute before:size-full bg-transparent backdrop-blur-none bg-gradient-to-b from-transparent -from-10% to-base-100 to-25%">
            <template #header>
                <h1 class="mt-6">{{ pocket.name }}</h1>
            </template>
            <template #description>
                <p v-for="tag in pocket.tags">
                    {{ tag }}
                </p>
            </template>

            <div class="flex w-full flex-wrap justify-center gap-1">
                <template v-for="(item, index) in items" :key="item.id">
                    <Item v-if="index < 6" :item="item" :pocket="pocket" />
                </template>
            </div>
        </InfoCard>
    </div>
</template>

<style scoped></style>
