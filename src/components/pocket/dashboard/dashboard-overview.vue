<script setup lang="ts">
import type { pocket } from 'types';
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();
const props = defineProps<{
    pocket: pocket
}>()
const pocket = props.pocket
const start = ref(pocket.items[0].start)
const core = ref(pocket.items[0].core)
const final = ref(pocket.items[0].final)


console.log(pocket);

</script>

<template>
<div class='flex flex-col gap-6'>
    <InfoCard title="Starter Items"
        description="Your early game items. What are you starting with or buying first back?">
        <div class='px-5'>
            <DdSelect defaultText="Item Sets" @update="(model) => pocket.items[0].start = model" v-model:model="start"
                :data="pocket.items[0].itemSets" />

        </div>
    </InfoCard>

    <InfoCard title="Core Items" description="Your champion's core. What should you work towards first?">
        <div class='px-5'>
            <DdSelect defaultText="Item Sets" @update="(model) => pocket.items[0].core = model" v-model:model="core"
                :data="pocket.items[0].itemSets" />
        </div>
    </InfoCard>

    <InfoCard title="Final Build"
        description="The pinnacle. What's your game plan if you don't stomp the enemy team TOO quickly?  The first six items in a set are considered your final build. Other items can be used as alternates.">
        <div class='px-5'>
            <DdSelect defaultText="Item Sets" @update="(model) => pocket.items[0].final = model" v-model:model="final"
                :data="pocket.items[0].itemSets" />
        </div>
    </InfoCard>
</div>
</template>

<style scoped></style>