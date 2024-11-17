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
            <Card
                class="absolute h-[350px] w-[250px] overflow-hidden rounded-box bg-[20%_-45%] bg-no-repeat [background-size:200%]"
                v-if="!flip"
                :style="{
                    backgroundImage: champImage,
                }"></Card>
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
