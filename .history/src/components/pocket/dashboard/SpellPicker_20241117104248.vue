<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { spells } = useQuery({
    key: () => ['spells'],
    query: () => getProductById(route.params.id),
})
</script>
<template></template>
