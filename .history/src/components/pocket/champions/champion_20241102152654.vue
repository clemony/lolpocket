<script setup lang="ts">
import { Champion } from 'types'
import { clean } from '@lib/utils'
import { useChampStore } from '@stores/champStore'
const cs = useChampStore();
const props = defineProps<{
    champion: Champion

}>()
</script>

<template><label class="drag-label" dragClass="setDrag" @click.right.prevent="">
    <div class="drag-wrapper">
        <input type="radio" :value="champion" v-model="cs.selectedChampion" class="peer hidden" />
        <img :src="`/img/champions/${clean(champion.name)}.webp`" class="load-img drag-img scale-[115%]"
            draggable="false" />
    </div>
</label></template>

<style scoped></style>