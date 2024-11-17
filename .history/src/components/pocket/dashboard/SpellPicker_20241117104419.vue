<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { spells } = useQuery({
    key: ['spells'],
    query: () => getProductById(route.params.id),
    key: ['todos'],
    query: () => fetch('@/Data/').then((res) => res.json()),
})
</script>
<template></template>
