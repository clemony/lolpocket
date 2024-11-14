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
<Accordion default-value="Q" collapsible class='  overflow-hidden  '>
    <AccordionItem v-for="(ability, key) in champion.abilities" :key="key" :value="key"
        class='last:border-b-transparent max-h-inherit flex-1 overflow-hidden flex flex-col'>
        <AccordionTrigger class='flex py-1.5'>

            <loadImg :url="ability.img" :alt="ability.name"
                class="rounded-lg shadow-sm border border-base-300 size-[45px]" />

            <div class="!text-md font-medium tracking-tight text-start grow px-4">
                {{ ability.name }}
            </div>
            <kbd class="kbd !kbd-md bg-base-200/20 border-opacity-15 mr-4 hover:no-underline"
                :class="{ 'border-opacity-0 bg-transparent': ability.key == 'P' }">{{
                    ability.key.toUpperCase()
                }}</kbd>

        </AccordionTrigger>
        <AccordionContent class='overflow-hidden scrollbar-hide'>

            <div class='flex flex-col gap-3 py-3'>
                <div v-for="(value, key) in filteredData(
                    ability.data)" :key="key" class='flex flex-nowrap w-full bg-base-200/60 rounded-md px-2 py-1'>
                    <div class="text-medium text-sm capitalize opacity-80">
                        {{ key }}
                    </div>
                    <div class="text-nowrap text-right text-sm grow opacity-80">
                        {{ value }}
                    </div>
                </div>
            </div>



            <ScrollArea class="h-auto overflow-y-auto max-h-64   p-1 ">
                <p class='text-sm whitespace-pre-line text-balance'> {{ ability.context }}</p>
            </ScrollArea>
        </AccordionContent>
    </AccordionItem>
</Accordion>
</template>

<style scoped></style>