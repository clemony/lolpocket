<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { state } = useQuery({
    key: ['spells'],
    query: () => fetch('@/data/spells').then((res) => res.json()),
})

console.log(state)
</script>
<template></template>
