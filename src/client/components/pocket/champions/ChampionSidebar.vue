<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChampStore } from '@/client/stores/champStore'
import { useItemStore } from '@/client/stores/itemStore'
import { clean } from '@/client/lib/utils'

const cs = useChampStore()
const is = useItemStore()

const props = defineProps(['champion'])

const tabModel = ref('abilities')

watch(
    () => cs.favoriteChamps,
    (newVal) => {},
    { immediate: true }
)

const isLiked = computed(() => {
    return cs.favoriteChamps.some((champ) => champ.name === props.champion.name)
})

function handleLike(thisChamp) {
    let favoriteChamps = cs.favoriteChamps

    if (!Array.isArray(favoriteChamps)) {
        favoriteChamps = []
        cs.favoriteChamps = favoriteChamps
    }

    if (favoriteChamps.some((champ) => champ.name === thisChamp.name)) {
        const index = favoriteChamps.findIndex(
            (champ) => champ.name === thisChamp.name
        )
        if (index !== -1) {
            favoriteChamps.splice(index, 1)
        }
    } else {
        favoriteChamps.push(thisChamp)
    }
}
</script>
<template>
    <div
        v-if="champion"
        class="max-w-inherit h-full w-full flex-col gap-6 pr-[3px]">
        <Card class="relative">
            <div
                class="join join-item join-horizontal absolute top-2 right-2 h-9 w-20 overflow-hidden">
                <a
                    :href="champion.wiki"
                    target="_blank"
                    class="join-item w-1/2 rounded-t-none">
                    <Button
                        variant="ghost"
                        class="group join-item size-full items-center justify-center p-0">
                        <Icon
                            icon="ph:link-simple"
                            class="size-5! transition-all duration-500 group-hover:rotate-180" />
                    </Button>
                </a>

                <Button
                    variant="ghost"
                    class="group/liked !apsect-square join-item w-1/2 rounded-full [&_svg]:absolute [&_svg]:size-5 [&_svg]:pt-px [&_svg]:transition-all [&_svg]:duration-500"
                    title="Add/Remove Favorite"
                    @click="handleLike(champion)">
                    <icon
                        v-if="isLiked"
                        icon="teenyicons:heart-solid"
                        class="text-dark-rose" />
                    <icon
                        icon="teenyicons:heart-outline"
                        class=""
                        :class="{ 'text-bccent/20': isLiked }" />
                </Button>
            </div>

            <CardHeader class="flex flex-row gap-8">
                <div class="shadow-warm relative size-fit pt-px">
                    <div
                        class="border-neutral/40 grid size-[70px] content-start items-start overflow-hidden rounded-lg border">
                        <loadImg
                            class="mr-1 aspect-square size-[70px] shrink-0 scale-[109%] rounded-none! object-center"
                            :url="`/img/champions/${clean(champion.name)}.webp`" />
                    </div>
                </div>

                <div class="flex h-full w-full flex-col *:shrink-0">
                    <h1 class="font-serif leading-none font-semibold!">
                        {{ champion.name }}
                    </h1>

                    <p
                        class="text-2 mt-1 flex scale-y-[99%] place-items-center pt-0 pr-3 pb-1 pl-[10px] -indent-[11px] font-medium tracking-wide text-pretty uppercase">
                        @ {{ champion.title }}
                    </p>

                    <div
                        class="justify-content-end mt-1.5 flex w-full gap-2 justify-self-end text-center">
                        <code
                            v-for="(tag, index) in champion.tags"
                            :key="index"
                            class="badge text-2 flex h-max w-auto flex-nowrap text-center font-mono font-medium tracking-normal lowercase"
                            :data-tag="tag">
                            #{{ tag }}
                        </code>
                    </div>
                </div>
            </CardHeader>
        </Card>

        <Tabs default-value="abilities" class="mt-8 w-full">
            <TabsList class="ml-2px">
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="abilities">Abilities</TabsTrigger>
            </TabsList>
            <TabsContent value="stats" class="mt-3!">stats</TabsContent>
            <TabsContent value="abilities" class="mt-3!">
                <Card class="overflow-hidden px-6 pt-0 pb-3">
                    <ChampionAbilities
                        :champion="champion"
                        class="max-w-inherit w-inherit pt-5" />
                </Card>
            </TabsContent>
        </Tabs>
    </div>
</template>

<style scoped>
[data-tag='Support'] {
    background: var(--inspiration-light);
}

[data-tag='Mage'] {
    background: var(--sorcery-light);
}

[data-tag='Marksman'] {
    background: var(--precision-light);
}

[data-tag='Assassin'] {
    background: var(--domination-light);
}

[data-tag='Tank'] {
    background: var(--resolve-light);
}

[data-tag='Fighter'] {
    background: var(--orange-600) / 60;
}

.collapse-title {
    font-size: var(--text-3);
    align-items: center;
    display: flex;
    gap: 0.75rem;

    img {
        border: 1px solid var(--neutral) / 40;

        border-radius: 100%;
    }

    div {
        flex: grow;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex-grow: 1;
    }
}

.ability-wrapper > div {
    border: 1px solid var(--neutral) / 15;
}
</style>
