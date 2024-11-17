<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { state } = useQuery({
    key: () => ['products', route.params.id],
    query: () => getProductById(route.params.id),
})
</script>
<template></template>
