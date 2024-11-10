<script setup lang="ts">
import type { Champion } from 'types';

const props = defineProps<{
    champion: Champion
}>()

const keysToDisplay = ['COST:', 'COOLDOWN:', 'STATIC COOLDOWN:']

const filteredData = (data: Record<string, string>) => {
    return Object.fromEntries(
        Object.entries(data).filter(([key]) => keysToDisplay.includes(key))
    )
}

</script>

<template>
<Accordion default-value="Q" collapsible>
    <AccordionItem v-for="(ability, key) in champion.abilities" :key="key" :value="key">
        <AccordionTrigger class='flex'>

            <loadImg :url="ability.img" :alt="ability.name"
                class="rounded-lg shadow-sm border border-base-300 size-[50px]" />

            <div class="!text-md font-semibold tracking-tight ">
                {{ ability.name }}
            </div>
            <kbd class="kbd !kbd-md bg-base-200/20 border-opacity-15"
                :class="{ 'border-opacity-0 bg-transparent': ability.key == 'P' }">{{
                    ability.key.toUpperCase()
                }}</kbd>

        </AccordionTrigger>
        <AccordionContent>

            <div v-for="(value, key) in filteredData(
                ability.data)" :key="key">

                <div class="text-medium text-xxs capitalize">
                    {{ key }}
                </div>
                <div class="text-nowrap text-right">
                    {{ value }}
                </div>
            </div>



            <p class="h-auto overflow-y-scroll whitespace-pre-line text-balance p-1 ">
                {{ ability.context }}
            </p>
        </AccordionContent>
    </AccordionItem>
</Accordion>
</template>

<style scoped></style>