<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const as = useAccountStore()

const champion = ref(ts.selectedChampion)

watch(
    () => as.favoriteChamps,
    (newVal) => {},
    { immediate: true }
)

const isLiked = computed(() => {
    return as.favoriteChamps.some((champ) => champ.name === champion.value.name)
})

function handleLike(thisChamp) {
    let favoriteChamps = as.favoriteChamps

    if (!Array.isArray(favoriteChamps)) {
        favoriteChamps = []
        as.favoriteChamps = favoriteChamps
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

function getVariant(tag) {
    return tag == 'Mage' ? 'sorcery' : 'default'
}
</script>
<template>
    <div
        v-if="champion"
        class="max-w-inherit h-full w-full flex-col gap-6 pr-[3px]">
        <Card class="relative">
            <div class="absolute top-2 right-2 h-9 w-20 overflow-hidden">
                <a :href="champion.wiki" target="_blank">
                    <Button
                        variant="ghost"
                        class="group size-9 items-center justify-center p-0">
                        <Icon
                            icon="ph:link-simple"
                            class="size-5 transition-all duration-500 group-hover:rotate-180" />
                    </Button>
                </a>

                <Button
                    variant="ghost"
                    class="group/liked !apsect-square size-9 [&_svg]:absolute [&_svg]:size-5 [&_svg]:pt-px [&_svg]:transition-all [&_svg]:duration-500"
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
                        <LoadImg
                            :alt="champion.name"
                            class="mr-1 aspect-square size-[70px] shrink-0 scale-[109%] rounded-none! object-center"
                            :url="`/img/champions/${clean(champion.name)}.webp`" />
                    </div>
                </div>

                <div class="flex h-full w-full flex-col *:shrink-0">
                    <h1
                        class="font-serif leading-none !font-semibold tracking-tight">
                        {{ champion.name }}
                    </h1>

                    <p
                        class="text-2 mt-1 flex scale-y-[99%] place-items-center pt-0 pr-3 pb-1 pl-[10px] -indent-[11px] font-medium tracking-wide text-pretty uppercase">
                        @ {{ champion.title }}
                    </p>

                    <div
                        class="justify-content-end mt-1.5 flex w-full gap-2 justify-self-end text-center">
                        <Badge
                            v-for="(tag, index) in champion.tags"
                            :key="index"
                            class="text-3 bg-sorcery flex flex-nowrap text-center font-mono lowercase"
                            :data-tag="tag"
                            :variant="getVariant(tag)">
                            #{{ tag }}
                        </Badge>
                    </div>
                </div>
            </CardHeader>
        </Card>

        <label>
            <icon icon="carbon:user-data" class="size-8 shrink-0 rounded-lg" />
        </label>

        <ChampionAbilities :champion="champion" />
    </div>
</template>

<style></style>
