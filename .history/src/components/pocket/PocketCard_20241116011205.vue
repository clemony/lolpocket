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
    <InfoCard
        cardClass="card h-[600px] w-[500px]  before:absolute before:size-full  before:z-0 z-10 bg-gradient-to-b from-transparent to-base-100">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
    </InfoCard>
</template>

<style scoped>
.card::before {
    background-image: v-bind(champImage);
}
</style>
