<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@stores/sessionStore'
import { Champion } from 'types'
import { useGeneralStore } from '@stores/generalStore'
import { clean } from '@utils/utils'
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
<!-- 
<div :style="{
    backgroundImage: `url(\'/img/champions/splash/${starred}_0.webp\'`,
}" v-if="pocket && starred" class="absolute -z-1 size-full top-0 left-0"></div> -->


<ContextMenu class="context-menu">
    <ContextMenuTrigger class="group  size-full cursor-pointer items-center justify-center content-center "
        v-if="pocket">
        <div v-if="starred" class='size-full '>





            <KinesisContainer :duration="200" :perspective="150" class="size-full scale-[120%] !overflow-x-auto  "
                :disabled="gs.reducedMotion == true">

                <KinesisElement type="depth" :strength="7" class=" z-0 size-full  bg-[length:400px_200px]  bg-no-repeat opacity-95 !overflow-x-auto border-0
                    [mask-image:linear-gradient(to_right,black_50%,transparent_99%,transparent_100%)] 
                    [background-position-x:60%]
                    [background-position-y:25%]" :style="{
                        backgroundImage: `url(\'/img/champions/splash/${starred}_0.webp\'`,
                    }">
                </KinesisElement>
            </KinesisContainer>
        </div>

        <div v-else @click="
            sn.navigateTo(
                `/pocket/${pocket.key}/items`,
                pocket.name,
                pocket.icon
            )
            "
            class="group flex size-full cursor-pointer items-center justify-center gap-2 border border-base-200 bg-base-200/30 opacity-70 shadow-sm transition-all duration-300 hover:border-base-300 hover:opacity-70 hover:shadow-inner">
            <icon icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />
        </div>

        <div v-if="pocket.champions[0].champions.length > 1"
            class="pointer-events-none absolute -bottom-5 right-0.5 z-10 transform opacity-60 transition-all duration-500 group-hover:opacity-80">
            <button class="btn btn-square btn-neutral btn-xs !pointer-events-none size-5 !min-h-0 p-0.5 font-bold"
                @click.stop>
                +{{ pocket.champions[0].champions.length - 1 }}
            </button>
        </div>

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
                                    <img :src="`/img/champions/${champion.name.replace(' ', '').replace('\'', '').replace('.', '')}.webp`"
                                        class="size-4.5" />
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
