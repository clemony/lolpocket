<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { spells } = useQuery({
    key: ['spells'],
    query: () => fetch('@/data/spells').then((res) => res.json()),
})
</script>
<template></template>
