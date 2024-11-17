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

const set = ref(
    pocket.value.runes[0].runeSets[pocket.value.runes[0].starred]
).value

const runes = [set.p1, set.p2, set.p3, set.s1, set.s2]

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
    <label class="swap swap-flip relative h-[320px] w-[250px]">
        <input type="checkbox" />

        <Card
            class="swap-off h-[320px] w-[250px] max-w-[250px] overflow-hidden rounded-box bg-[20%_-125%] bg-no-repeat [background-size:200%]"
            :style="{
                backgroundImage: champImage,
            }">
            <CardContent
                class="max-w-inherit relative size-full bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100 to-30% pt-2">
                <CardHeader class="px-4">
                    <CardTitle class="pb-0 !text-[1.45rem] font-semibold">
                        {{ pocket.name }}
                    </CardTitle>
                    <CardDescription>
                        <p v-for="tag in pocket.tags" class="pt-0">
                            {{ tag }}
                        </p>
                    </CardDescription>
                </CardHeader>

                <div
                    class="max-w-inherit mt-2 grid w-full grid-cols-[2.5fr_1fr] gap-x-3 gap-y-5 px-2">
                    <div
                        class="grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-start justify-items-center gap-1">
                        <template v-for="(item, index) in items" :key="item.id">
                            <Item
                                v-if="index < 6"
                                :item="item"
                                :pocket="pocket"
                                class="size-14 shadow-warm"
                                rounded-box />
                        </template>
                    </div>

                    <div
                        v-if="set"
                        class="col-start-1 grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-center justify-items-center gap-x-1.5 gap-y-2">
                        <div class="max-size-full max-h-[40px]">
                            <img
                                v-if="
                                    pocket.runes[0].runeSets[
                                        pocket.runes[0].starred
                                    ].keystone.name != 'none'
                                "
                                :src="
                                    pocket.runes[0].runeSets[
                                        pocket.runes[0].starred
                                    ].keystone.img
                                "
                                class="-mt-1.5 size-[53px] object-cover object-top" />
                        </div>
                        <template v-for="rune in runes">
                            <div class="rounded-full shadow-warm">
                                <LoadImg
                                    v-if="rune.name != 'none'"
                                    :url="rune.img"
                                    class="col-start-1 size-[43px] rounded-full" />
                                <PlCircle
                                    v-else
                                    :size="42"
                                    class="bg-base-200/60" />
                            </div>
                        </template>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card class="swap-on h-[320px] w-[250px]"></Card>
    </label>
</template>

<style scoped>
.swap-flip {
    transform-style: none !important;
    perspective: none !important;
}
</style>
