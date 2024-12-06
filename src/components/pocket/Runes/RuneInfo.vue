<script setup lang="ts">
import { ref, computed } from 'vue'
import { useItemStore } from '@/stores/itemStore'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'

const ds = useDataStore()
const rs = useRuneStore()

const isCollapsed = ref('')

const props = defineProps<{
    rune?: {
        name?: string
        tier?: string
        wiki?: string
        path?: string
        img?: string
        stats?: string
    }
}>()

// Create a computed property for the rune
const rune = computed(() => {
    return props.rune || rs.selectedRune // Fallback to rs.selectedRune if no prop is passed
})
</script>

<template>
<div v-if="rune"
    class="relative h-fit max-h-full max-w-64 overflow-y-auto pb-6 shadow-[inset_0px_0px_40px_#00000009,_rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-500">
    <div :rune="rune" :key="rune.name" class="h-full">
        <!-------------------------------⟢ Header ⟣-------------------------------->

        <label :key="rune.name + '1'"
            class="frost sticky left-0 top-0 z-50 flex !h-fit w-full flex-wrap items-center justify-end gap-4 rounded-t-xl border-b border-b-b3 px-4 py-1">
            <h2 class="sub-text flex grow items-center justify-start gap-3">
                <span class="grow"> {{ rune.name || 'Rune Detail' }}</span>
                <div v-if="rune">
                    <img :src="'/img/runes/' + rune.path + '.webp'" class="h-5 object-contain" />
                </div>
            </h2>
        </label>

        <!-------------------------------⟢ Data ⟣-------------------------------->

        <div id="wrap" :data-tier="rune.tier" class="relative px-4 pt-3" :key="rune.name + '2'">
            <div class="img-wrapper group relative z-0 before:absolute" :href="rune.wiki" target="_blank"
                :title="rune.wiki" :alt="rune.wiki" :key="rune.name + 'img'">
                <div class="link-set">
                    <img id="runeImg" :src="rune.img" class="float-right ml-2.5 mt-1 rounded-full" />
                    <div class="link-icon flex items-center justify-center">
                        <Icon icon="teenyicons:link-outline" class="size-3 text-ac" />
                    </div>
                </div>
            </div>
            <div id="runeStats" :key="rune.name + '3'"
                class="mt-1 whitespace-pre-line text-justify font-serif text-[0.76rem] first-letter:float-left first-letter:mr-1.5 first-letter:text-3xl first-letter:font-[700] first-line:font-[700] first-line:uppercase first-line:tracking-widest">
                {{ rune.stats }}
            </div>
        </div>
    </div>
</div>
<div v-else></div>
</template>

<style scoped>
/* beautify ignore:start */
[data-tier='0'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
        content: '';
        @apply absolute rounded-full content-[''];
    }
    #runeImg {
        @apply z-20 ml-0 size-[6rem] rounded-none p-1.5 drop-shadow-md;
    }

    .img-wrapper .link-icon {
        @apply right-[-0.01rem] top-[4rem] z-20 size-[1.5rem] bg-accent shadow-md transition-all duration-500;
    }
    .link-set:hover .link-icon {
        @apply rotate-180 ring-2 ring-accent ring-offset-accent;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
        content: '';
        @apply absolute rounded-full content-[''];
    }

    .img-wrapper .link-icon {
        @apply right-[-0.01rem] top-[2.17rem] z-20 size-[1.5rem] bg-accent shadow-md transition-all duration-500;
    }

    #runeImg {
        @apply size-14 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-1 ring-b2 ring-offset-1 ring-offset-b3;
    }

    .link-set:hover .link-icon {
        @apply rotate-180 ring-2 ring-accent ring-offset-accent;
    }
}</style>
