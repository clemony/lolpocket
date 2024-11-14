<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'
import { Champion } from 'types'
import { useGeneralStore } from '@stores/generalStore'
import { clean } from '@lib/utils'
const router = useRouter()

const sn = useSessionStore()
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

<template><!------------------------⟢ champions⟣------------------------->

<ContextMenu class="context-menu">
    <ContextMenuTrigger
        class="group  w-[200px] size-full cursor-pointer items-center justify-center content-center relative flex"
        v-if="pocket">
        <template v-for="(champion, index) in pocket.champions[0].champions">
            <div v-if="index < 4" class='overflow-hidden size-16 rounded-lg shadow-sm border border-base-300'>
                <loadImg :url="`/img/champions/${clean(champion.name)}.webp`" class='size-14 object-center scale-105' />
            </div>
        </template>




        <CmPocket type="champions" :pocketKey="pocket.key">
            <ContextMenuSub>
                <ContextMenuSubTrigger :disabled="pocket.champions[0].champions.length <= 1" :class="{
                    'last:[&_svg]:hidden':
                        pocket.champions[0].champions.length <= 1,
                    'opacity-50':
                        pocket.champions[0].champions.length == 0,
                }">
                    <icon v-if="pocket.champions[0].starred" icon="iconoir:star" class="size-3.5" />
                    <icon v-else icon="iconoir:star-dashed" class="size-3.5" />

                    <span v-if="pocket.champions[0].starred">
                        {{ pocket.champions[0].starred }}
                    </span>

                    <span v-else> Champions </span>
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                    <ContextMenuItem v-for="champion in pocket.champions[0].champions" class="items-center rounded-xs"
                        :key="champion.name">
                        <label class="flex size-full items-center gap-2 font-semibold">
                            <input type="radio" :value="champion.name" class="peer hidden"
                                v-model="pocket.champions[0].starred" @change="
                                    console.log(pocket.champions[0].starred)
                                    " />

                            <icon icon="teenyicons:tick-outline" class="invisible peer-checked:visible" />
                            <div class="mr-1 size-4.5 overflow-hidden rounded-xs shadow-sm">
                                <div class="grid scale-[116%] place-items-center">
                                    <img :src="`/img/champions/${clean(champion.name)}.webp`" class="size-4.5" />
                                </div>
                            </div>

                            {{ champion.name }}
                        </label>
                    </ContextMenuItem>
                </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
