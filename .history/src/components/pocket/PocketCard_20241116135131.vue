<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return `url(\'/img/champions/splash/${clean(pocket.value.champions[0].starred)}_0.webp\')`
})

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})

const flip = ref(false)
</script>

<template>
    <label class="relative size-fit">
        <input type="checkbox" v-model="flip" class="hidden" />
        <Transition
            enter-active-class="flip-front-in"
            leave-active-class="flip-front-out"
            enter-from-class="card-gone"
            leave-to-class="card-gone">
            <div
                v-if="!flip"
                :style="{
                    backgroundImage: champImage,
                }"
                class="absolute overflow-hidden rounded-box bg-[20%_-45%] bg-no-repeat [background-size:200%]">
                <InfoCard
                    cardClass=" h-[350px] w-[250px]  bg-transparent backdrop-blur-none  delay-400 transition-all duration-400"
                    :class="{
                        'bg-base-100/80': flip,
                        'bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 to-base-100 to-30%':
                            !flip,
                    }">
                    <template #header>
                        <h2
                            v-if="!flip"
                            class="duration-400 delay-400 mt-6 animate-in fade-in-0 slide-in-from-bottom-3">
                            {{ pocket.name }}
                        </h2>
                    </template>
                    <template #description>
                        <p
                            v-for="tag in pocket.tags"
                            class="text-base font-medium duration-500 animate-in fade-in-0 slide-in-from-bottom-3">
                            {{ tag }}
                        </p>
                    </template>

                    <div class="flex w-full flex-wrap justify-center gap-1">
                        <template v-for="(item, index) in items" :key="item.id">
                            <Item
                                v-if="index < 6"
                                :item="item"
                                :pocket="pocket"
                                class="size-14" />
                        </template>
                    </div>
                </InfoCard>
            </div>
        </Transition>

        <Transition
            leave-active-class="flip-back-out"
            enter-active-class="flip-back-in"
            enter-from-class="card-gone"
            leave-to-class="card-gone">
            <Card
                v-if="flip"
                class="absolute h-[350px] w-[250px] overflow-hidden">
                <p
                    class="duration-500 animate-in animate-out fade-in-0 fade-out-0">
                    hi
                </p>
            </Card>
        </Transition>
    </label>
</template>

<style scoped></style>
