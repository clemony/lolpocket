<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { getShardIcon, getShardClass } from '@lib/functions/GetColor'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return `url(\'/img/champions/splash/${clean(pocket.value.champions[0].starred)}_0.webp\')`
})

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])

const runes = [
    set.value.p1,
    set.value.p2,
    set.value.p3,
    set.value.s1,
    set.value.s2,
]

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
                        <h4 v-for="tag in pocket.tags" class="pt-0 !text-base">
                            {{ tag }}
                        </h4>
                    </CardDescription>
                </CardHeader>

                <div
                    class="max-w-inherit mt-2 grid w-full grid-cols-[2.5fr_1fr] gap-x-3 gap-y-5 px-2">
                    <div
                        class="grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-start justify-items-center gap-1">
                        <template v-for="index in 6" :key="index">
                            <template
                                v-for="(item, index) in items"
                                :key="item.id">
                                <Item
                                    v-if="item"
                                    :item="item"
                                    :pocket="pocket"
                                    class="size-[38px] shadow-warm"
                                    rounded-box />
                                <Placeholder
                                    v-else
                                    class="size-[38px] rounded-lg" />
                            </template>
                        </template>
                    </div>

                    <div
                        v-if="set"
                        class="col-start-1 grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-center justify-items-center gap-x-2 gap-y-2 p-1.5">
                        <div class="max-size-full max-h-[35px]">
                            <img
                                v-if="set.keystone.name != 'none'"
                                :src="set.keystone.img"
                                class="-mt-1.5 size-[45px] object-cover object-top" />
                            <Placeholder
                                v-else
                                :size="35"
                                class="border-base-300/80 bg-base-300/40 shadow-inset-sm"
                                img="/img/runes/RunesIcon.svg"
                                iClass="p-2 opacity-15" />
                        </div>
                        <template v-for="rune in runes">
                            <div class="rounded-full">
                                <LoadImg
                                    v-if="rune.name != 'none'"
                                    :url="rune.img"
                                    class="col-start-1 size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
                                <Placeholder
                                    v-else
                                    :size="35"
                                    class="border-base-300/80 bg-base-300/40 shadow-inset-sm"
                                    img="/img/runes/RunesIcon.svg"
                                    iClass="p-2 opacity-15" />
                            </div>
                        </template>
                    </div>
                    <div
                        class="col-start-2 row-start-2 flex h-full flex-col items-center justify-center gap-1.5">
                        <div
                            v-for="shard in set.shards"
                            :key="shard.name + shard.slotID"
                            class="size-[22px] rounded-full border border-base-300 p-0.5"
                            :class="getShardClass(shard)">
                            <icon
                                :icon="getShardIcon(shard)"
                                class="size-full" />
                        </div>
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
