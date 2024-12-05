<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { clean } from '@lib/utils'

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
                class="join join-item join-horizontal absolute right-2 top-2 h-9 w-20 overflow-hidden">
                <a
                    :href="champion.wiki"
                    target="_blank"
                    class="join-item w-1/2 rounded-t-none">
                    <Button
                        variant="ghost"
                        class="group join-item size-full items-center justify-center p-0">
                        <Icon
                            icon="ph:link-simple"
                            class="!size-5 transition-all duration-500 group-hover:rotate-180" />
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
                        :class="{ 'text-neutral/20': isLiked }" />
                </Button>
            </div>

            <CardHeader class="flex flex-row items-center gap-8">
                <div class="relative w-fit">
                    <div
                        class="join-item grid size-[70px] place-items-center overflow-y-hidden rounded-lg border border-base-300">
                        <loadImg
                            class="mr-1 aspect-square size-[70px] shrink-0 scale-[108%] !rounded-none object-center"
                            :url="`/img/champions/${clean(champion.name)}.webp`" />
                    </div>
                </div>

                <div class="flex h-full w-full flex-col *:shrink-0">
                    <h2 class="scale-x-105 font-serif font-extrabold">
                        {{ champion.name }}
                    </h2>

                    <p
                        class="mt-1 flex scale-y-[99%] place-items-center text-pretty pb-1 pl-[10px] pr-3 pt-0 -indent-[11px] text-sm font-medium uppercase tracking-wide">
                        @ {{ champion.title }}
                    </p>

                    <div
                        class="justify-content-end mt-1.5 flex w-full gap-2 justify-self-end text-center">
                        <code
                            v-for="(tag, index) in champion.tags"
                            :key="index"
                            class="badge flex h-max w-auto flex-nowrap text-center font-mono text-sm font-medium lowercase tracking-normal"
                            :data-tag="tag">
                            #{{ tag }}
                        </code>
                    </div>
                </div>
            </CardHeader>
        </Card>

        <Card class="mt-8 overflow-hidden px-6 pb-3 pt-0">
            <!------------------------⟢ tablist ⟣------------------------->

            <template v-if="tabModel == 'abilities'">
                <ChampionAbilities
                    :champion="champion"
                    class="max-w-inherit w-inherit pt-5" />
            </template>
        </Card>
    </div>
</template>

<style scoped>
[data-tag='Support'] {
    @apply bg-cyan-700/40 text-info-content;
}

[data-tag='Mage'] {
    @apply bg-info text-primary-content;
}

[data-tag='Marksman'] {
    @apply bg-warning/70 text-warning-content;
}

[data-tag='Assassin'] {
    @apply bg-error/80 text-base-content;
}

[data-tag='Tank'] {
    @apply bg-success/70 text-success-content;
}

[data-tag='Fighter'] {
    @apply bg-orange-600/60 text-base-content;
}

.tab {
    --tab-border-color: oklch(var(--b3) / 0.8);

    @apply text-start text-sm;
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

.collapse-title:has(input[type='radio']:checked) {
}

.ability-wrapper > div {
    @apply border border-neutral/15;
}
</style>
