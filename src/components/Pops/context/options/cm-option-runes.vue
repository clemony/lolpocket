<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = props.pocket
</script>

<template>
<ContextMenuSub v-if="pocket">
    <ContextMenuSubTrigger :disabled="pocket.runes[0].runeSets.length <= 1" :class="{
        '[&_svg]:last:hidden':
            pocket.runes[0].runeSets.length <= 1,
        'opacity-50': pocket.runes[0].runeSets.length == 0,
    }">
        <icon v-if="pocket.runes[0].runeSets" icon="iconoir:star" class="size-3.5" />
        <icon v-else icon="iconoir:star-dashed" class="size-3.5" />
        {{ pocket.runes[0].runeSets[pocket.runes[0].starred].name || "Set" }}
    </ContextMenuSubTrigger>

    <ContextMenuSubContent>
        <ContextMenuItem v-for="(set, index) in pocket.runes[0].runeSets">
            <label class="flex items-center gap-0.5">
                <icon v-if="pocket.runes[0].starred == index" icon="teenyicons:tick-outline" class="mr-2" />
                <span v-else class="w-5"></span>
                <input type="radio" class="hidden" :value="index" v-model="pocket.runes[0].starred" />

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
</template>

<style scoped></style>