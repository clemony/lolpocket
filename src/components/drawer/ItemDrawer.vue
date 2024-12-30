<script setup lang="ts">
import { handleItemLike } from '@/functions/pocketUtilities'
import { formatItemStats } from '@/functions/formatting'
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
import { itemDatabase } from '@data/itemDatabase'
import { itemData } from '@/types/dataTypes'
import { matchItemName } from '@/functions/makeLinks'

const as = useAccountStore()

const ts = useTempStore()

const item = ref(ts.selectedItem)
const itemId = getItemId(item.value.name)

const matchedItem = computed(() => {
    console.log('💠 - matchedItem - matchedItem:', matchedItem)
    return matchItemName(item.value.name)
})

const type = ref(matchedItem.value.type)

const formattedStats = computed(() => {
    return formatItemStats(matchedItem.value.stats)
})
const isLiked = computed(() => {
    return as.favoriteItems.some((item) => item.name === item.name)
})
const handleItemChange = (itemName) => {
    const a = getItemId(itemName.toString())
    console.log('💠 - handleItemChange - a:', a)
    const b = getItembyId(a)
    console.log('💠 - handleItemChange - b:', b)
    ts.selectedItem = b
}
</script>

<template>
    <div class="relative h-full w-120 pr-16" :key="matchedItem.id">
        <div class="flex w-full gap-6 pb-5">
            <LoadImg
                :key="item.name"
                :url="getItemImage(item.name)"
                :alt="item.name + ' Image'"
                class="border-b3/90 shadow-warm pointer-events-none size-20 rounded-lg border" />

            <div class="flex flex-col">
                <h1
                    class="flex flex-wrap items-start pt-1 leading-none tracking-tighter">
                    {{ item.name }}
                </h1>
                <p v-if="type" class="pt-1 font-semibold opacity-50">
                    <!--  {{ type.replace('=>', '-> ') }} -->
                </p>
                <!--
                <a
                    class="flex items-center gap-2 pl-0.75 capitalize underline-offset-2 hover:underline"
                    :href="getWikiLink(item.name)"
                    target="_blank"
                    alt="link to league wiki">
                    Official Wiki
                    <icon
                        icon="mingcute:external-link-line"
                        class="mb-[2px] !size-4.25 shrink-0" />
                </a> -->

                <!--
                <div class="flex items-end justify-end gap-2">     <Button
                        size="xs"
                        variant="neutral"
                        class="group/liked relative aspect-square rounded-full p-2 *:absolute *:size-4.5 *:shrink-0 *:transition-all *:duration-100 hover:opacity-75"
                        @click="handleItemLike(item)">
                        <icon
                            v-if="isLiked"
                            icon="teenyicons:heart-solid"
                            class="text-dark-rose" />
                        <icon icon="teenyicons:heart-outline" class="text-ac" />
                    </Button>
 -->
            </div>
        </div>

        <template v-if="formattedStats">
            <Separator class="mt-4 mb-10" label="STATS" />
            <div class="grid grid-cols-[1.5fr_2fr] gap-2 *:flex">
                <template v-for="stat in formattedStats">
                    <p class="col-start-1 items-end pt-[2px] font-medium">
                        {{ stat.key }}
                    </p>
                    <p class="col-start-2 items-center">{{ stat.value }}</p>
                </template>
            </div>
        </template>

        <div v-if="matchedItem.effects && matchedItem.effects.pass">
            <Separator label="PASSIVES" class="mt-11 mb-9" />
            <p v-if="typeof matchedItem.effects.pass === 'string'"></p>
            <ItemEffect
                v-else
                v-if="matchedItem.effects.pass"
                :data="matchedItem.effects.pass" />
            <ItemEffect
                v-if="matchedItem.effects.pass2"
                :data="matchedItem.effects.pass2"
                class="mt-5" />
            <ItemEffect
                v-if="matchedItem.effects.pass3"
                :data="matchedItem.effects.pass3" />
        </div>

        <div v-if="matchedItem.effects && matchedItem.effects.act">
            <Separator
                v-if="matchedItem.effects && matchedItem.effects.act"
                label="ACTIVES"
                class="my-11" />

            <p v-if="typeof matchedItem.effects.act === 'string'"></p>
            <ItemEffect
                v-else
                v-if="matchedItem.effects.act"
                :data="matchedItem.effects.act" />
        </div>

        <template v-if="matchedItem.recipe">
            <Separator label="RECIPE" class="my-11" />

            <div class="group flex items-center justify-center gap-4">
                <template
                    v-for="(item, index) in matchedItem.recipe"
                    :key="item.toString()">
                    <Tooltip
                        :content="
                            item.toString() +
                            ' ' +
                            matchItemName(item.toString()).buy +
                            'g'
                        ">
                        <button
                            @click="handleItemChange(item)"
                            class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
                            <LoadImg
                                :url="getItemImage(item)"
                                :alt="item + 'image'" />
                        </button>
                    </Tooltip>
                    <icon
                        v-if="matchedItem.recipe.length != index + 1"
                        icon="teenyicons:add-outline"
                        class="stroke-[2]" />
                </template>
            </div>
        </template>

        <div
            v-if="matchedItem.id || matchedItem.buy"
            class="items-end self-end">
            <Separator class="mt-11 mb-3" />
            <div class="flex items-center px-2">
                <p
                    v-if="matchedItem.id"
                    class="flex grow items-end gap-3 pt-2 leading-none">
                    <span class="">Item ID:</span>
                    <span class="">{{ getItemId(item.name) }}</span>
                </p>
                <p
                    v-if="matchedItem.buy"
                    class="flex items-center justify-end gap-2 self-end leading-none font-medium">
                    <img src="/img/icons/Gold.png" class="h-4.5" />
                    {{ matchedItem.buy.toString().replace('=>', '-> ') }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
