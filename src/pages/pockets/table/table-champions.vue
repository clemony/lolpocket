<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { usePocketStore } from '../../../stores/pocketStore'
import { useRouter } from 'vue-router'
import { useSessionStore } from '../../../stores/sessionStore'
import { Champion } from '../../../../types'
import { useGeneralStore } from '../../../stores/generalStore'

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
        star = star.replace(/\s/g, '').replace(/\'/g, '').replace(/\./g, '')
        return
    }

    return star
})
</script>

<template>
    <!------------------------⟢ champions⟣------------------------->
    <ContextMenu class="px-2 context-menu">
        <ContextMenuTrigger
            class="relative group items-center justify-center overflow-hidden size-full rounded-[4px] cursor-pointer"
            v-if="pocket">
            <KinesisContainer
                v-if="starred"
                :duration="200"
                :perspective="150"
                class="overflow-auto scale-[120%] size-full"
                :disabled="gs.reducedMotion == true">
                <KinesisElement
                    type="depth"
                    :strength="7"
                    class="bg-[center_top_-2rem] bg-no-repeat z-0 bg-[length:400px_200px] size-full opacity-95 shadow-contrast !overflow-auto"
                    :style="{
                        backgroundImage: `url(\'/img/champions/splash/${starred}_0.webp\'`,
                    }">
                </KinesisElement>
            </KinesisContainer>

            <div
                v-else
                @click="
                    sn.navigateTo(
                        `/pocket/${pocket.key}/pocket-champions`,
                        pocket.name,
                        pocket.icon
                    )
                "
                class="flex items-center justify-center gap-2 transition-all duration-300 border shadow-sm cursor-pointer opacity-70 size-full bg-base-200/30 hover:opacity-70 border-base-200 hover:border-base-300 hover:shadow-inner group">
                <icon
                    icon="teenyicons:add-outline"
                    class="group-hover:stroke-[1.5]" />
            </div>

            <div
                v-if="pocket.champions[0].champions.length > 1"
                class="absolute z-10 transition-all duration-500 transform pointer-events-none opacity-60 -bottom-5 right-0.5 group-hover:opacity-80">
                <button
                    class="font-bold p-0.5 !pointer-events-auto btn btn-neutral btn-xs !min-h-0 size-5 btn-square"
                    @click.stop>
                    +{{ pocket.champions[0].champions.length - 1 }}
                </button>
            </div>

            <TableContextMenu type="champions" :pocketKey="pocket.key">
                <ContextMenuSub>
                    <ContextMenuSubTrigger
                        :disabled="pocket.champions[0].champions.length <= 1"
                        :class="{
                            'last:[&_svg]:hidden':
                                pocket.champions[0].champions.length <= 1,
                            'opacity-50 ':
                                pocket.champions[0].champions.length == 0,
                        }">
                        <icon
                            v-if="pocket.champions[0].starred"
                            icon="iconoir:star"
                            class="size-3.5" />
                        <icon
                            v-else
                            icon="iconoir:star-dashed"
                            class="size-3.5" />

                        <span v-if="pocket.champions[0].starred">
                            {{ pocket.champions[0].starred }}
                        </span>

                        <span v-else> Champions </span>
                    </ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                        <ContextMenuItem
                            v-for="champion in pocket.champions[0].champions"
                            class="items-center rounded-xs"
                            :key="champion.name">
                            <label
                                class="flex items-center gap-2 font-semibold size-full">
                                <input
                                    type="radio"
                                    :value="champion.name"
                                    class="hidden peer"
                                    v-model="pocket.champions[0].starred"
                                    @change="
                                        console.log(pocket.champions[0].starred)
                                    " />

                                <icon
                                    icon="teenyicons:tick-outline"
                                    class="invisible peer-checked:visible" />
                                <div
                                    class="overflow-hidden shadow-sm size-4.5 rounded-xs mr-1">
                                    <div
                                        class="scale-[116%] grid place-items-center">
                                        <img
                                            :src="`/img/champions/${champion.name.replace(' ', '').replace('\'', '').replace('.', '')}.webp`"
                                            class="size-4.5" />
                                    </div>
                                </div>

                                {{ champion.name }}
                            </label>
                        </ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
            </TableContextMenu>
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped></style>
