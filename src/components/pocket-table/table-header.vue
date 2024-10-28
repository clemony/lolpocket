<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
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

<ContextMenu class="context-menu">
    <ContextMenuTrigger
        class="group  w-[200px] size-full cursor-pointer items-center justify-center content-center relative "
        v-if="pocket">
        <div v-if="starred" class='size-full z-0 rounded-l-lg '
            @click="sn.navigateTo(`/pocket/${pocket.key}`, pocket.name, pocket.icon)">





            <KinesisContainer :duration="200" :perspective="150"
                class="size-full scale-[120%] !overflow-x-auto  rounded-l-full" :disabled="gs.reducedMotion == true">

                <KinesisElement type="depth" :strength="7" axis="x" class=" z-0 size-full  bg-[length:350px_175px]  bg-no-repeat opacity-95 !overflow-x-auto border-0 
                    [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_55%,transparent_98%,transparent_100%)] 
                    [background-position-x:46%]
                    [background-position-y:25%]" :style="{
                        backgroundImage: `url(\'/img/champions/splash/${starred}_0.webp\')`,
                    }">
                </KinesisElement>
            </KinesisContainer>
        </div>

        <div
            class='absolute   size-full justify-end  items-end flex z-10 p-1   pointer-events-none inset-0 [&_input]:text-sm [&_span]:text-sm'>

            <div
                class='!self-center absolute left-0 flex items-center rounded-full size-fit shadow-lg opacity-85 ml-1 '>
                <PocketIcon :pocketKey="pocket.key" ring />

            </div>
            <!-- 
            <div
                class='absolute -bottom-0 -right-4 badge badge-sm   bg-base-100/30 backdrop-blur-md opacity-90 border-transparent hover:border-base-300/50 focus:border tracking-tight focus:border-base-300 focus:shadow-inner focus:opacity-100 truncate '>
                <InputResizable v-model:model="pocket.name" textCenter :fontWeight="500" :font-size="12" :padding="0"
                    clear />
            </div> -->
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
