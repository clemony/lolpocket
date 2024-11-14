<script setup lang="ts">
const props = defineProps<{
    params: {
        data: {
            name: string
            key: string
            icon: string
            pinned: any
            tags: Array<string>
        }
        api: any
        node: any
    }
}>()
</script>

<template>
<div>
    <Badge v-for="tag in props.params.data.tags">
        # {{ tag }}
    </Badge>
</div>
</template>

<style scoped></style>