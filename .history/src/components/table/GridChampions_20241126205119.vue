<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { Champion } from 'types'
import { useGeneralStore } from '@/stores/generalStore'
import { clean } from '@lib/utils'
const router = useRouter()

const gs = useGeneralStore()
const props = defineProps<{
    params: {
        data: {
            name: string
            items: any
            pinned: boolean
            key: string
            champions: {
                champions: {
                    name: string
                }
                starred: Champion[]
            }
        }
        api: any
        node: any
    }
}>()

const ps = usePocketStore()

const pocket = ref(ps.getPocket(props.params.data.key))

const starred = computed(() => {
    if (!pocket.value) {
        return
    }
    let star = pocket.value.champions[0].starred

    if (!star || star == undefined || star == null) {
        star = clean(star)
        return
    }

    return star
})
</script>

<template>
    <!------------------------⟢ champions⟣------------------------->

    <PocketMenu
        type="context"
        :pocket="pocket"
        class="group relative flex size-full cursor-pointer content-center items-center justify-start gap-2 px-2"
        v-if="pocket">
        <template v-for="(champion, index) in pocket.champions[0].champions">
            <div
                v-if="index < 3"
                class="size-14 shrink-0 overflow-hidden rounded-lg border border-base-300 shadow-sm">
                <loadImg
                    :url="`/img/champions/${clean(champion.name)}.webp`"
                    class="size-14 scale-[108%] object-cover" />
            </div>
        </template>
    </PocketMenu>
</template>

<style scoped></style>
