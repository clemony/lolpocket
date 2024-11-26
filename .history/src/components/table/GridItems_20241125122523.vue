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
</script>

<template>
    <div class="flex items-center">
        <!------------------------⟢ items ⟣------------------------->
        <PocketMenu
            v-if="pocket"
            :pocket="pocket"
            type="context"
            class="size-full">
            <RouterLink :to="`/pocket/${pocket.key}/items`">
                <button
                    class="flex h-full w-full items-center gap-2 overflow-y-clip overflow-x-scroll px-1">
                    <template v-if="starredItems.length > 0">
                        <template
                            v-for="(item, index) in starredItems"
                            :key="index"
                            class="">
                            <loadImg
                                v-if="index < 6"
                                :url="`/img/items/${item.id}.webp`"
                                :index="index"
                                class="size-14 rounded-lg border border-base-300 shadow-sm" />
                        </template>
                    </template>

                    <Placeholder v-else class="m-px size-14 rounded-lg" />
                </button>
            </RouterLink>
            <template #first>
                <CmOptionItems :pocket="pocket" />
            </template>
        </PocketMenu>
    </div>
</template>

<style scoped></style>
