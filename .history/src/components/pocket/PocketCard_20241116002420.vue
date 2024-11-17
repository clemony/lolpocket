<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
    <InfoCard
        :key="pocket.key"
        cardClass="card h-[600px] w-[500px] !bg-red-600 before:absolute before:size-full">
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
