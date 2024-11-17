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
    <label class="swap swap-flip relative h-[350px] w-[250px]">
        <input type="checkbox" />

        <Card
            class="swap-off h-[310px] w-[250px] max-w-[250px] overflow-hidden rounded-box bg-[20%_-95%] bg-no-repeat [background-size:200%]"
            :style="{
                backgroundImage: champImage,
            }">
            <CardContent
                class="max-w-inherit size-full bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100 to-30% pt-2">
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
                    class="max-w-inherit mt-2 grid w-full grid-cols-[2.5fr_1fr] gap-3 px-2">
                    <div
                        class="col-start-1 grid w-full grid-flow-row auto-rows-auto grid-cols-3 justify-items-center gap-1">
                        <template v-for="(item, index) in items" :key="item.id">
                            <Item
                                v-if="index < 6"
                                :item="item"
                                :pocket="pocket"
                                class="size-14" />
                        </template>
                    </div>

                    <Separator class="col-span-full" />

                    <div class="relative col-start-1 size-full">
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
                            class="mask absolute -left-5 top-3 h-auto w-1/2 rounded-full mask-b-2 mask-l-14 mask-r-6 mask-t-10" />

                        <div
                            class="col-start-1 grid w-full grid-flow-row auto-rows-auto grid-cols-3 justify-items-center gap-1 last:col-start-3 [&_:nth-child(4)]:col-start-2"
                            v-if="set">
                            <template v-for="rune in runes">
                                <div class="">
                                    <LoadImg
                                        v-if="rune.name != 'none'"
                                        :url="rune.img"
                                        class="size-[40px] rounded-full" />
                                    <PlCircle v-else :size="40" />
                                </div>
                            </template>
                        </div>
                    </div>
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
