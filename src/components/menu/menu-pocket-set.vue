<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'

const sn = useSessionStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
    type: string;
}>()

const pocket = ps.getPocket(props.pocketKey)
const showSets = ref<{ [key: string]: boolean }>({});

const type = props.type;

onMounted(() => {
    ps.pockets.forEach(pocket => {
        if (pocket && !(pocket.key in showSets.value)) {
            showSets.value[pocket.key] = false;
        }

    });
});

const setType = computed(() => {
    if (props.type === 'items') {
        return pocket.items[0].itemSets;
    } else if (props.type === 'runes') {
        return pocket.runes[0].runeSets;
    }
})
</script>

<template><!------------------------⟢ items ⟣------------------------->
<li class=' flex flex-row  flex-nowrap items-center'>

    <ButtonToggle v-model:model="showSets[pocket.key]" />

    <ButtonMenuItem @click="
        sn.navigateTo(
            `/pocket/${pocket.key}/pocket-${type}`,
            pocket.name,
            pocket.icon
        )" class='grow' badge="ghost" :array="setType">
        <ui-noun-sword v-if="props.type == 'items'" class="-ml-[1px] !size-[15px]" />
        <ui-rune v-if="props.type == 'runes'" class="stroke-[2.5] !size-[15px] -ml-[1px]" />
        <span class='capitalize'>{{ type }}</span>

    </ButtonMenuItem>

</li>

<li>
    <ul class='  menu-dropdown two  flex-none flex-col !w-[calc(100%-11px)]'
        :class="{ 'menu-dropdown-show': showSets[pocket.key] }">
        <template v-for="(set, index) in setType" :key="index">

            <MenuPocketThings :set="set" :type="props.type" />
        </template>
    </ul>
</li>
</template>

<style scoped></style>