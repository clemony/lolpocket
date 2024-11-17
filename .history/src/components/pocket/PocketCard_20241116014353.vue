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
</script>

<template>
    <div
        :style="{
            backgroundImage: champImage,
        }"
        class="rounded-box bg-cover bg-[center_top_-4rem] bg-no-repeat">
        <InfoCard
            cardClass="card h-[350px] w-[300px]  before:absolute before:size-full bg-transparent backdrop-blur-none bg-gradient-to-b from-transparent -from-10% to-base-100 to-25%">
            <template #header>Card Title</template>
            <template #description>
                <p v-for="tag in pocket.tags">
                    {{ tag }}
                </p>
            </template>

            <template #content>Card Content</template>
        </InfoCard>
    </div>
</template>

<style scoped></style>
