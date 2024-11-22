<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { getShardIcon, getShardClass } from '@lib/functions/GetColor'
import { makeBox } from '@lib/utils'

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
    <label class="swap swap-flip relative h-[320px] w-[250px] backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative h-[320px] w-[250px] max-w-[250px] overflow-hidden rounded-box bg-transparent">
            <div
                class="mask absolute top-0 h-[200px] w-full bg-[20%_35%] bg-no-repeat mask-b-52 [background-size:200%]"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="max-w-inherit relative size-full bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30% pt-2">
                <CardHeader class="relative flex pl-12 pr-4">
                    <template v-if="set">
                        <div class="max-size-full absolute max-h-[35px]">
                            <img
                                v-if="set.keystone.name != 'none'"
                                :src="set.keystone.img"
                                class="-mt-1.5 size-[45px] object-cover object-top" />
                            <Placeholder
                                v-else
                                :size="35"
                                class="border-base-300/80 shadow-inset-sm"
                                img="/img/runes/RunesIcon.svg"
                                iClass="p-2 opacity-15" />
                        </div>
                    </template>

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
                    class="max-w-inherit mt-2 grid w-full grid-cols-[1fr_2.5fr] gap-x-3 gap-y-5 px-2">
                    <div
                        v-if="set"
                        class="flex h-fit w-full flex-col items-center justify-items-center gap-x-2.5 gap-y-2 p-1.5">
                        <template v-for="rune in runes">
                            <div class="rounded-full">
                                <LoadImg
                                    v-if="rune.name != 'none'"
                                    :url="rune.img"
                                    class="col-start-1 size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
                                <Placeholder
                                    v-else
                                    :size="35"
                                    class="border-base-300/80 shadow-inset-sm"
                                    img="/img/runes/RunesIcon.svg"
                                    iClass="p-2 opacity-15" />
                            </div>
                        </template>
                    </div>

                    <div
                        class="grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-start justify-items-center px-3 py-1">
                        <template v-for="(item, index) in items" :key="item.id">
                            <Item
                                v-if="index < 6"
                                :key="item.id"
                                :item="item"
                                :pocket="pocket"
                                class="size-[38px] shadow-warm"
                                rounded-box />
                        </template>
                        <Placeholder
                            v-for="index in makeBox(items.length)"
                            class="size-[38px] rounded-lg" />
                    </div>

                    <div class="col-start-1 grid place-items-center gap-1">
                        <div
                            v-if="
                                pocket.spells[0].spell1 &&
                                pocket.spells[0].spell1.name != ''
                            "
                            class="size-[38px] overflow-hidden rounded-lg p-0 shadow-standard">
                            <img
                                :src="`/img/spells/Summoner${pocket.spells[0].spell1.name}.webp`"
                                class="size-full" />
                        </div>
                        <Placeholder v-else class="size-[38px] rounded-lg" />

                        <div
                            v-if="
                                pocket.spells[0].spell2 &&
                                pocket.spells[0].spell2.name != ''
                            "
                            class="size-[38px] overflow-hidden rounded-lg p-0 shadow-standard">
                            <img
                                :src="`/img/spells/Summoner${pocket.spells[0].spell2.name}.webp`"
                                class="size-full" />
                        </div>
                        <Placeholder v-else class="size-[38px] rounded-lg" />
                    </div>

                    <div
                        class="relative col-start-1 row-start-2 flex h-full flex-col items-start justify-between gap-4 px-0 py-2 [&_:nth-child(2)]:absolute [&_:nth-child(2)]:right-2 [&_:nth-child(2)]:top-10">
                        <div
                            v-for="shard in set.shards"
                            :key="shard.name + shard.slotID"
                            class="size-8 rounded-full border border-base-200/95 p-1 shadow-sm"
                            :class="
                                cn(getShardClass(shard), {
                                    'bg-base-200/20': shard.name == 'none',
                                })
                            ">
                            <icon
                                :icon="getShardIcon(shard)"
                                class="size-full"
                                :class="
                                    cn(getShardClass(shard), {
                                        'opacity-40': shard.name == 'none',
                                    })
                                " />
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
