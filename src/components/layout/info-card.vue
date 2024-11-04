<script setup lang="ts">
const props = defineProps<{
    title?: string
    description?: string
}>()
</script>

<template>
<Card class='h-fit'>
    <CardContent>
        <CardHeader>
            <h3>{{ props.title }}</h3>
            <CardDescription>
                {{ props.description }}
            </CardDescription>
        </CardHeader>

        <slot />
    </CardContent>
</Card>
</template>

<style scoped></style>