<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'

const sn = useSessionStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ps.getPocket(props.pocketKey

)
const showChamp = ref<{ [key: string]: boolean }>({});

onMounted(() => {
    ps.rowData.forEach(pocket => {
        if (pocket && !(pocket.key in showChamp.value)) {
            showChamp.value[pocket.key] = false;
        }
    });
});
</script>

<template>
<li class='flex flex-row flex-nowrap items-center '>

    <ButtonToggle v-model:model="showChamp[pocket.key]" />
    <!------------------------⟢ champ button ⟣------------------------->
    <ButtonMenuItem @click="
        sn.navigateTo(
            `/pocket/${pocket.key}/items`,
            pocket.name,
            pocket.icon
        )" class='grow' badge="ghost" :array="pocket.champions[0].champions">


        <Icon icon="teenyicons:user-circle-outline" class='!size-[14px] -ml-[1px]' />
        <span>Champions</span>

    </ButtonMenuItem>

</li>

<!----------------------⟢ champ list ⟣----------------------->

<li>
    <ul class=' menu-dropdown two  flex-none flex-col ' :class="{ 'menu-dropdown-show': showChamp[pocket.key] }">
        <li v-for="champion in pocket.champions[0].champions" class='w-full'>
            <ButtonMenuItem>
                <div class='!size-4.5 shadow-md shrink-0 !aspect-square rounded-full overflow-clip '>

                    <img :src="`/img/champions/${champion.name}.webp`"
                        class='!size-4.5 scale-110 !w-5 !aspect-square rounded-full object-center' />

                </div>
                <span> {{ champion.name }}</span>
            </ButtonMenuItem>

        </li>
    </ul>

</li>
</template>

<style scoped></style>