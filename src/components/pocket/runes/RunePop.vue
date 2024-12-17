<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'

const as = useAccountStore()
const props = defineProps(['rune'])

props.rune.value = 'rune'
</script>

<!-- This will be the content of the popover -->
<template>
    <div
        class="relative grid max-w-96 overscroll-none py-2"
        :data-tier="rune.tier">
        <div
            class="border-b3 grid w-full grid-cols-[1fr_2fr] gap-1 border-b px-2 pb-3">
            <a
                :href="rune.wiki"
                target="_blank"
                :title="'GO TO: ' + rune.wiki"
                alt="link to league wiki"
                class="group/link relative col-start-1 h-full items-center justify-center"
                :class="{
                    '-mt-1 grid size-[3.4rem] place-items-center overflow-hidden':
                        rune.tier == 0,
                }">
                <img
                    :key="rune.name"
                    :src="rune.img"
                    :alt="rune.name + ' Image'"
                    class="pointer-events-none rounded-full"
                    :class="{
                        'z-20 size-[3.5rem] self-center rounded-none object-cover drop-shadow-md':
                            rune.tier == 0,
                        'ring-b2 ring-offset-b3 size-12 ring-1 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-offset-1':
                            rune.tier != 0,
                    }" />

                <div
                    class="border-b1 bg-neutral group-hover/link:border-primary absolute bottom-0 z-30 flex size-8 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover/link:rotate-180"
                    :class="{
                        'absolute right-0 rounded-full': rune.tier == 0,
                        'right-3': rune.tier != 0,
                    }">
                    <Icon
                        icon="teenyicons:link-outline"
                        class="text-bc size-5" />
                </div>
            </a>

            <!-------------------------------⟢ Header ⟣-------------------------------->

            <div class="grid h-full grid-cols-1">
                <div class="text-middle flex">
                    <h3
                        class="text-2 flex flex-wrap leading-4 font-bold tracking-tight">
                        {{ rune.name }}
                    </h3>
                </div>

                <div class="flex items-center justify-start gap-2">
                    <span class="align-middle capitalize">
                        {{ rune.path }}
                    </span>

                    <img
                        :src="'/img/runes/' + rune.path + '.webp'"
                        class="-mt-1 h-4 object-contain" />
                </div>
            </div>
        </div>

        <!-------------------------------⟢ Stats ⟣-------------------------------->

        <div
            id="wrap"
            :data-tier="rune.tier"
            class="relative px-4 pt-3"
            :key="rune.name + '2'">
            <div
                id="runeStats"
                :key="rune.name + '3'"
                class="text-pretty whitespace-pre-line">
                {{ rune.stats }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>
