<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return cleanpocket.value.champions[0].starred
})
</script>

<template>
    <InfoCard
        :key="pocket.key"
        cardClass="card h-[600px] w-[500px]  before:absolute before:size-full bg-transparent">
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
}
</style>
