<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { spells } = useQuery({
    key: () => ['products', route.params.id],
    query: () => getProductById(route.params.id),
})
</script>
<template></template>
