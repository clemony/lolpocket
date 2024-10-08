<script setup lang="ts">

import { useRuneStore } from '../../stores/runeStore';
import { usegeneralStore } from '../../stores/generalStore';

const us = usegeneralStore();
const is = useRuneStore();
const props = defineProps(['rune'])


props.rune.value = 'rune'





</script>


<!-- This will be the content of the popover -->
<template>
    <div class="relative grid py-2 w-60 overscroll-none" :data-tier="rune.tier">
        <div class="grid grid-cols-[1fr_2fr] border-b border-base-300 pb-3 gap-1 px-2 w-full ">

            <a :href="rune.wiki" target="_blank" :title="'GO TO: ' + rune.wiki" alt="link to league wiki"
                class="relative justify-end h-full col-start-1 group/link img-wrapper">

                <img :key="rune.name" :src="rune.img" :alt="rune.name + ' Image'"
                    class="rounded-full pointer-events-none runeImg " />
                <div
                    class="absolute bottom-0 z-30 flex items-center justify-center transition-all duration-500 border-2 rounded-full bg-neutral link-icon group-hover/link:rotate-180 group-hover/link:border-primary size-6 border-base-100">
                    <Icon icon="teenyicons:link-outline" class="text-neutral-content size-3" />

                </div>
            </a>

            <!-------------------------------⟢ Header ⟣-------------------------------->

            <div class="grid h-full grid-cols-1">

                <div class="flex text-middle">

                    <h3 class="flex flex-wrap text-sm font-bold leading-4 tracking-tight">
                        {{ rune.name }}
                    </h3>
                </div>



                <div class="flex items-center justify-start gap-2">



                    <span class="text-xs capitalize align-middle"> {{ rune.path }}</span>

                    <img :src="'/img/runes/' + rune.path + '.webp'" class="object-contain h-4 -mt-1" />

                </div>
            </div>

        </div>


        <!-------------------------------⟢ Stats ⟣-------------------------------->

        <div id="wrap" :data-tier="rune.tier" class="relative px-4 pt-3" :key="rune.name + '2'">

            <div id="runeStats" :key="rune.name + '3'" class="text-xs whitespace-pre-line text-pretty ">
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
      @apply rounded-full absolute  ;
    }
    .runeImg {
      @apply size-[3.5rem]  self-center object-cover drop-shadow-md  z-20 rounded-none;
    }
    .link-icon {
        @apply right-0;
    }
.img-wrapper{
@apply size-[3.4rem] -mt-1 grid place-items-center overflow-hidden;
}

  }

  [data-tier='1'],
  [data-tier='2'],
  [data-tier='3'] {
.link-icon {
        @apply right-3;
    }

    .runeImg {
      @apply size-12 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-1 ring-offset-1 ring-base-200 ring-offset-base-300;
    }


  }</style>