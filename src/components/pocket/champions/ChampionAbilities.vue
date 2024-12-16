<script setup lang="ts">
import type { Champion } from 'types'

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
    <Accordion
        default-value="Q"
        collapsible
        class="overflow-hidden"
        v-model:modelValue="modelValue"
        @update:modelValue="(v) => (modelValue = v)">
        <AccordionItem
            v-for="(ability, key) in champion.abilities"
            :key="key"
            :value="key"
            :class="{
                'h-0': modelValue && modelValue != key,
                'border-transparent': modelValue,
                'delay-300': !modelValue,
            }"
            class="max-h-inherit flex flex-1 flex-col overflow-hidden transition-all duration-1000! last:border-b-transparent">
            <AccordionTrigger class="flex py-2">
                <loadImg
                    :url="ability.img"
                    :alt="ability.name"
                    class="border-b3 size-[45px] rounded-lg border shadow-xs" />

                <div
                    class="text-md! grow px-4 text-start font-medium tracking-tight">
                    {{ ability.name }}
                </div>
                <p
                    class="font-cursive kbd-sm text-2 mr-6 scale-x-125 font-mono capitalize not-italic! no-underline! hover:no-underline!">
                    {{ ability.key }}
                </p>
            </AccordionTrigger>
            <AccordionContent class="">
                <div class="flex flex-col gap-3 py-3">
                    <div
                        v-for="(value, key) in filteredData(ability.data)"
                        :key="key"
                        class="bg-b2/60 flex w-full flex-nowrap rounded-md px-2 py-1">
                        <div class="text-medium text-2 capitalize opacity-80">
                            {{ key }}
                        </div>
                        <div
                            class="text-2 grow text-right text-nowrap opacity-80">
                            {{ value }}
                        </div>
                    </div>
                </div>

                <ScrollArea
                    class="text-2 overflow-auto p-1 text-balance whitespace-pre-line [scrollbar-color:bg-b3/20]">
                    {{ ability.context }}
                </ScrollArea>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>

<style scoped>
kbd {
    width: 1.5rem;
    font-family: var(--mono);
}
</style>
