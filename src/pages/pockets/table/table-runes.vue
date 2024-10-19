<script setup lang="ts">
import { computed } from 'vue';
import { Item, Rune } from '../../../../types';
import { usePocketStore } from '../../../stores/pocketStore';
import { useSessionStore } from '../../../stores/sessionStore';
import { useRuneStore } from './../../../stores/runeStore';
import { useGeneralStore } from '../../../stores/generalStore';


const props = defineProps<{
    params: {
        data: {
            name: string;
            items: Item[];
            pinned: boolean;
            key: string,
            runes: {
                runes: Rune[];
                starred: number;
            }
        };
        api: any;
        node: any;
    };
}>();
const sn = useSessionStore();
const gs = useGeneralStore();

const ps = usePocketStore();
const pocket = ps.getPocket(props.params.data.key);
const runeSet = computed(() => {
    if (!pocket) { return; }
    return pocket.runes[0].runeSets[pocket.runes[0].starred];
});

const keystone = computed(() => {
    if (runeSet.value && keystone) {
        const stone = runeSet.value.keystone;

        return stone;
    }
});


</script>

<template>

    <!------------------------⟢ runes ⟣------------------------->
    <ContextMenu class='context-menu [&_>span]:size-full flex items-center'>
        <ContextMenuTrigger class="relative flex items-center justify-center gap-4 size-full opacity-95 group">
            <div class='flex items-center justify-center gap-3 size-full'>
                <div v-if="keystone && keystone.name != 'none' && runeSet"
                    class="relative flex shrink-0 aspect-square items-center !size-[52px]  rounded-md shadow-sm cursor-pointer bg-gradient-to-br from-transparent to-75%"
                    :class="{
                        'via-resolve border-resolve': keystone.path == 'resolve',
                        'via-sorcery border-sorcery': keystone.path == 'sorcery',
                        'via-inspiration border-inspiration': keystone.path == 'inspiration',
                        'via-domination border-domination': keystone.path == 'domination',
                        'via-precision border-precision': keystone.path == 'precision',
                        'to-resolve': runeSet.secondary == 'resolve',
                        'to-sorcery': runeSet.secondary == 'sorcery',
                        'to-inspiration': runeSet.secondary == 'inspiration',
                        'to-domination': runeSet.secondary == 'domination',
                        'to-precision': runeSet.secondary == 'precision',
                        'to-bg-base-200': !runeSet.secondary
                    }">
                    <div
                        class="flex items-start justify-center gap-2 p-1 rounded-md size-full bg-gradient-to-br from-base-100/90 to-base-100/40 backdrop-blur-md">

                        <KinesisContainer :disabled="gs.reducedMotion == true" :perspective="100" :duration="200"
                            class='flex items-center group size-full'>
                            <KinesisElement type="depth" :strength="5" class='flex items-center size-full group '>
                                <img :src="keystone.img"
                                    class="w-12 h-auto transition-all duration-200 scale-110 drop-shadow-softer hover:drop-shadow-sm " />




                            </KinesisElement>
                        </KinesisContainer>

                    </div>





                </div>
                <div v-else-if="pocket"
                    @click.stop="sn.navigateTo(`/pocket/${pocket.key}/pocket-runes`, pocket.name, pocket.icon)"
                    class="flex group items-center rounded-[4px] justify-center !justify-self-start  shrink-0 !size-[52px] gap-2 border shadow-sm opacity-70 aspect-square bg-base-200/30 border-base-200 cursor-pointer hover:opacity-70 transition-all duration-300 hover:border-base-300 hover:shadow-inner ">
                    <icon icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />

                </div>


                <KinesisContainer :disabled="gs.reducedMotion == true" :perspective="100" :duration="200"
                    class='flex items-center group size-full'>
                    <KinesisElement type="depth" :strength="5" class='flex items-center size-full group '>

                        <div v-if="runeSet && runeSet.secondary && runeSet.secondary != 'none'" :class="{
                            'border-resolve': runeSet.secondary == 'resolve',
                            'border-sorcery': runeSet.secondary == 'sorcery',
                            'border-inspiration': runeSet.secondary == 'inspiration',
                            'border-domination': runeSet.secondary == 'domination',
                            'border-precision': runeSet.secondary == 'precision'
                        }"
                            class="rounded-full  !aspect-square cursor-pointer bg-base-100/80 backdrop-blur-md overflow-clip !size-7   border-2 p-[2px] shadow-md group-hover:scale-90">
                            <img :src="`/img/runes/${runeSet.secondary}.webp`"
                                class="!object-contain transition-all duration-200  size-full drop-shadow-softest hover:opacity-80" />

                        </div>
                    </KinesisElement>
                </KinesisContainer>



            </div>

            <TableContextMenu v-if="pocket" type="runes" :pocketKey="pocket.key">
                <ContextMenuSub v-if="pocket">
                    <ContextMenuSubTrigger :disabled="pocket.runes[0].runeSets.length <= 1"
                        :class="{ 'last:[&_svg]:hidden': pocket.runes[0].runeSets.length <= 1, 'opacity-50': pocket.runes[0].runeSets.length == 0 }">


                        <icon v-if="pocket.runes[0].runeSets" icon="iconoir:star" class='size-3.5' />
                        <icon v-else icon="iconoir:star-dashed" class='size-3.5' />
                        Set
                    </ContextMenuSubTrigger>

                    <ContextMenuSubContent>
                        <ContextMenuItem v-for="(set, index) in pocket.runes[0].runeSets">

                            <label class="flex items-center gap-0.5">
                                <icon v-if="pocket.runes[0].starred == index" icon="teenyicons:tick-outline"
                                    class='mr-2' />
                                <span v-else class="w-5"></span>
                                <input type="radio" class='hidden' :value="index" v-model="pocket.runes[0].starred" />


                                <div class="flex [&_img]:size-5">
                                    <img v-if="set.keystone" :src="set.keystone.img" />
                                    <img v-if="set.p1" :src="set.p1.img" />
                                    <img v-if="set.p2" :src="set.p2.img" />
                                    <img v-if="set.p3" :src="set.p3.img" />
                                    <img v-if="set.s1" :src="set.s1.img" />
                                    <img v-if="set.s2" :src="set.s2.img" />
                                </div>

                            </label>
                        </ContextMenuItem>


                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
            </TableContextMenu>
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped>
/* 
     */
</style>
