<script setup lang="ts">
import { useSessionStore } from '@/stores/sessionStore'
import { Item } from 'types'
import { useGeneralStore } from '@/stores/generalStore'

const props = defineProps<{
    params: {
        data: {
            name: string
            key: string
            items: {
                items: Item[]
            }
            icon: string
            pinned: any
        }
        api: any
        node: any
    }
}>()

const sn = useSessionStore()
const gs = useGeneralStore()
const pocket = ref(props.params.data)

const starredItems = computed(() => {
    return pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
})

console.log('this', starredItems.value[0])

const box = computed(() => {
    return 6 - starredItems.value.length
})
</script>

<template>
    <div class="flex items-center">
        <PocketMenu
            :pocket="pocket"
            type="context"
            contentClass="flex size-full items-center gap-2 overflow-y-clip overflow-x-scroll px-1">
            <template v-for="(item, index) in starredItems" :key="index">
                <button
                    v-if="index < 5"
                    class="size-14 overflow-hidden rounded-lg border border-base-300 shadow-sm">
                    <loadImg
                        :url="`/img/items/${item.id}.webp`"
                        :index="index" />
                </button>
            </template>
            <template v-if="starredItems.length < 6">
                <Placeholder
                    v-for="index in box"
                    :key="index"
                    class="m-px size-14 rounded-lg" />
            </template>
            <template #first>
                <CmOptionItems :pocket="pocket" />
            </template>
        </PocketMenu>
        <RouterLink :to="`/pocket/${pocket.key}/items`">hi</RouterLink>
    </div>
</template>

<style scoped></style>
