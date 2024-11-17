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
    <label class="swap swap-flip relative h-[350px] w-[250px]">
        <input type="checkbox" />

        <Card
            class="swap-off h-[350px] w-[250px] rounded-box bg-[20%_-45%] bg-no-repeat [background-size:200%]"
            :style="{
                backgroundImage: champImage,
            }">
            <CardContent
                class="size-full bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100 to-30%">
                <CardHeader class="px-4">
                    <p class="!text-[1.3rem]">
                        {{ pocket.name }}
                    </p>
                </CardHeader>
                <CardDescription>
                    <p v-for="tag in pocket.tags" class="">
                        {{ tag }}
                    </p>
                </CardDescription>

                <div class="flex w-full flex-wrap justify-center gap-1">
                    <template v-for="(item, index) in items" :key="item.id">
                        <Item
                            v-if="index < 6"
                            :item="item"
                            :pocket="pocket"
                            class="size-14" />
                    </template>
                </div>
            </CardContent>
        </Card>

        <Card class="swap-on h-[350px] w-[250px]"></Card>
    </label>
</template>

<style scoped>
.swap-flip {
    transform-style: none !important;
    perspective: none !important;
}
</style>
