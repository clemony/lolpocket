<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { clean } from '@lib/utils'
import SidebarFooter from '@components/base/sidebar/SidebarFooter.vue';

const cs = useChampStore()
const is = useItemStore()

const props = defineProps(['champion'])

const tabModel = ref('abilities')
console.log(tabModel);






watch(
    () => cs.lovedChamps,
    (newVal) => {
    },
    { immediate: true }
)

const isLiked = computed(() => {
    return cs.lovedChamps.some((champ) => champ.name === props.champion.name)
})

function handleLike(thisChamp) {
    let lovedChamps = cs.lovedChamps

    if (!Array.isArray(lovedChamps)) {
        lovedChamps = []
        cs.lovedChamps = lovedChamps
    }

    if (lovedChamps.some((champ) => champ.name === thisChamp.name)) {
        const index = lovedChamps.findIndex(
            (champ) => champ.name === thisChamp.name
        )
        if (index !== -1) {
            lovedChamps.splice(index, 1)
        }
    } else {
        lovedChamps.push(thisChamp)
    }
}



</script>
<template>
<SidebarProvider>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Basics</SidebarGroupLabel>

                <SidebarMenu class='mb-1 [&_svg]:!size-5'>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>


        <SidebarFooter></SidebarFooter>


        <SidebarRail />
    </Sidebar>
</SidebarProvider>
<Card class='relative'>
    <div class='join-item join join-horizontal overflow-hidden h-9  absolute top-2 right-2 w-20'>

        <a :href="champion.wiki" target="_blank" class='w-1/2  join-item rounded-t-none'>
            <Button variant="ghost" class="items-center justify-center join-item size-full p-0  group">
                <Icon icon="ph:link-simple" class=" !size-5 duration-500 transition-all  group-hover:rotate-180" />
            </Button>
        </a>


        <Button variant="ghost"
            class="group/liked w-1/2 join-item [&_svg]:absolute !apsect-square rounded-full [&_svg]:transition-all [&_svg]:duration-500 [&_svg]:pt-px [&_svg]:size-5"
            title="Add/Remove Favorite" @click="handleLike(champion)">
            <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
            <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />
        </Button>
    </div>



    <CardHeader class='flex flex-row gap-8 items-center '>



        <div class='relative w-fit'>

            <div
                class='size-[75px]  join-item border-base-300 border grid place-items-center  overflow-y-hidden rounded-lg'>
                <loadImg class=" size-[75px] scale-[108%] mr-1   aspect-square object-center shrink-0 !rounded-none "
                    :url="`/img/champions/${clean(champion.name)}.webp`" />
            </div>





        </div>


        <div class="flex flex-col w-full h-full *:shrink-0 ">
            <p class=" font-semibold font-serif !text-3xl">
                {{ champion.name }}
            </p>

            <p
                class="mt-1 flex place-items-center text-pretty pb-1 pl-[10px] pr-3 pt-0 -indent-[11px] scale-y-[99%] text-sm font-medium uppercase tracking-wide ">
                @ {{ champion.title }}
            </p>



            <div class="justify-content-end w-full mt-1.5 flex gap-2 justify-self-end  text-center ">
                <code v-for="(tag, index) in champion.tags" :key="index"
                    class="badge flex h-max w-auto flex-nowrap text-center font-mono text-sm font-medium lowercase tracking-normal"
                    :data-tag="tag">#{{
                        tag }}</code>
            </div>

        </div>




    </CardHeader>


</Card>



<Card class='overflow-hidden pb-3 px-6 pt-0 mt-8'>

    <!------------------------⟢ tablist ⟣------------------------->



    <template v-if="tabModel == 'abilities'">
        <ChampionAbilities :champion="champion" class='pt-5 w-inherit max-w-inherit' />
    </template>

</Card>




</div>
</template>

<style scoped>
.tab {
    --tab-border-color: oklch(var(--b3)/0.8);

    @apply text-sm text-start;
}

.collapse-title {
    @apply flex items-center gap-3 text-sm;

    img {
        @apply -ml-1 size-9 rounded-full border border-neutral/40;
    }

    div {
        @apply flex-grow truncate text-nowrap;
    }

    kbd {
        @apply kbd-sm size-6 font-mono;
    }
}

.collapse-title:has(input[type='radio']:checked) {}

.ability-wrapper>div {
    @apply border border-neutral/15;
}
</style>