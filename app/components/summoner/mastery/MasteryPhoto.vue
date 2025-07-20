<script lang="ts" setup>
const { champion, championId } = defineProps<{
champion?: ChampionMastery | null
championId?: number
}>()

const ix = useIndexStore()
const name = computed (() => ix.champNameById(champion?.id ?? championId))
const id = computed (() =>  champion?.id ?? championId)
const level = computed (() =>  champion?.level >= 10 ? 10 : champion?.level ? champion.level : 0)
</script>

<template>
      <Card class="grid grid-rows-[2fr_0.6fr] aspect-[1/1] p-0 overflow-hidden relative border-b3  p-2 rounded-lg inset-shadow-xxs group/photo">

          <div class=" relative  overflow-hidden drop-shadow-sm shadow-sm  rounded-md  size-full grid place-items-center  ">
            <Img v-if="id" :alt="name" :img="getSplash(ix.champKeyById(id), 'centered')" class="size-full absolute object-cover bg-black -left-2  top-20 scale-240 opacity-92" />
          </div>

          <Img
            :img="`/img/mastery/banner/crest-and-banner-mastery-${level}.webp`"
            :alt="level.toString()"  :class="cn('size-17 absolute  drop-shadow-sm drop-shadow-black/20  -top-1.5 right-0')"/>

<div class="size-full relative flex flex-col justify-center gap-1.25 *:leading-none px-0.75 pt-2 ">

<div class="flex items-end gap-1.5 ">

  <h2 class=" font-semibold dst   text-5">
    {{ name}}
  </h2>

            <span  class="text-2 pb-px tracking-tight font-medium flex items-end">
              lv.&thinsp;{{ champion?.level ?? 0 }}
            </span>
</div>

<div class="text-nowrap h-3 items-center overflow-hidden *:transition-all *:duration-200">
  <p class="text-1 group-hover/photo:-translate-y-full absolute group-hover/photo:opacity-0 font-medium">
    {{ champion?.points?.toLocaleString() ?? 0 }} points
  </p>
<p  class="text-1 italic translate-y-full opacity-0 absolute group-hover/photo:opacity-100 group-hover/photo:translate-y-0">
  <template v-if="champion?.lastPlayed">
 Last Played {{ useDateFormat(champion.lastPlayed, 'MMM D, YYYY') }}
</template>
<template v-else>
  Never played
</template>
</p>
</div>
</div>
      </Card>
</template>