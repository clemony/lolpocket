<script setup lang="ts">
import { useRuneStore } from '@/stores/runeStore'
import { useGeneralStore } from '@/stores/generalStore'

const us = useGeneralStore()
const is = useRuneStore()
const props = defineProps(['rune'])

props.rune.value = 'rune'
</script>

<!-- This will be the content of the popover -->
<template>
<div class="relative grid w-60 overscroll-none py-2" :data-tier="rune.tier">
    <div class="grid w-full grid-cols-[1fr_2fr] gap-1 border-b border-base-300 px-2 pb-3">
        <a :href="rune.wiki" target="_blank" :title="'GO TO: ' + rune.wiki" alt="link to league wiki"
            class="group/link img-wrapper relative col-start-1 h-full justify-end">
            <img :key="rune.name" :src="rune.img" :alt="rune.name + ' Image'"
                class="runeImg pointer-events-none rounded-full" />
            <div
                class="link-icon absolute bottom-0 z-30 flex size-6 items-center justify-center rounded-full border-2 border-base-100 bg-neutral transition-all duration-500 group-hover/link:rotate-180 group-hover/link:border-primary">
                <Icon icon="teenyicons:link-outline" class="size-3 text-neutral-content" />
            </div>
        </a>

        <!-------------------------------⟢ Header ⟣-------------------------------->

        <div class="grid h-full grid-cols-1">
            <div class="text-middle flex">
                <h3 class="flex flex-wrap text-sm font-bold leading-4 tracking-tight">
                    {{ rune.name }}
                </h3>
            </div>

            <div class="flex items-center justify-start gap-2">
                <span class="align-middle  capitalize">
                    {{ rune.path }}</span>

                <img :src="'/img/runes/' + rune.path + '.webp'" class="-mt-1 h-4 object-contain" />
            </div>
        </div>
    </div>

    <!-------------------------------⟢ Stats ⟣-------------------------------->

    <div id="wrap" :data-tier="rune.tier" class="relative px-4 pt-3" :key="rune.name + '2'">
        <div id="runeStats" :key="rune.name + '3'" class="whitespace-pre-line text-pretty ">
            {{ rune.stats }}
        </div>
    </div>
</div>
</template>

<style scoped>
/* beautify ignore:start */
[data-tier='0'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
        @apply absolute rounded-full;
    }
    .runeImg {
        @apply z-20 size-[3.5rem] self-center rounded-none object-cover drop-shadow-md;
    }
    .link-icon {
        @apply right-0;
    }
    .img-wrapper {
        @apply -mt-1 grid size-[3.4rem] place-items-center overflow-hidden;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    .link-icon {
        @apply right-3;
    }

    .runeImg {
        @apply size-12 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-1 ring-base-200 ring-offset-1 ring-offset-base-300;
    }
}</style>
