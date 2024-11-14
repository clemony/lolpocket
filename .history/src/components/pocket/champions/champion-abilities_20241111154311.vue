<script setup lang="ts">
import type { Champion } from 'types';

const props = defineProps<{
    champion: Champion
}>()

const keysToDisplay = ['COST:', 'COOLDOWN:', 'STATIC COOLDOWN:']
const modelValue = ref()
const filteredData = (data: Record<string, string>) => {
    return Object.fromEntries(
        Object.entries(data).filter(([key]) => keysToDisplay.includes(key))
    )
}

</script>

<template>
<Accordion default-value="Q" collapsible class='  overflow-hidden' v-model:modelValue="modelValue"
    @update:modelValue="(v) => modelValue = v">
    <AccordionItem v-for="(ability, key) in champion.abilities" :key="key" :value="key"
        :class="{ 'h-0': modelValue && modelValue != key, ' border-transparent': modelValue, 'delay-300': !modelValue }"
        class='last:border-b-transparent max-h-inherit flex-1 overflow-hidden flex flex-col transition-all !duration-1000 bg-clip-padding'>
        <AccordionTrigger class='flex py-2'>

            <div :style="{ 'backgroundImage': 'url(' + ability.img + ')' }" :alt="ability.name"
                class="rounded-lg shadow-sm border border-transparent size-[45px] colorful-shadow bg-contain"></div>

            <div class="!text-md font-medium tracking-tight text-start grow px-4">
                {{ ability.name }}
            </div>
            <p
                class=" mr-6 hover:!no-underline font-cursive text-sm scale-x-125 !not-italic !no-underline font-mono capitalize  ">
                {{
                    ability.key
                }}</p>

        </AccordionTrigger>
        <AccordionContent class=''>

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



            <ScrollArea
                class=" overflow-auto  p-1 text-sm whitespace-pre-line text-balance [scrollbar-color:bg-base-300/20]">
                {{
                    ability.context }}
            </ScrollArea>
        </AccordionContent>
    </AccordionItem>
</Accordion>
</template>

<style scoped>
.colorfulShadow::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    background-position: center center;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.50)) blur(10px);
    z-index: -1;
}
</style>