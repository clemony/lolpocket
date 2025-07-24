<script lang="ts" setup>
const { champion, championId } = defineProps<{
  champion?: ChampionMastery | null
  championId?: number
}>()

const ix = useIndexStore()
const name = computed (() => ix.champNameById(champion?.id ?? championId))
const id = computed (() => champion?.id ?? championId)
const level = computed (() => champion?.level >= 10 ? 10 : champion?.level ? champion.level : 0)
</script>

<template>
  <SplashCard
    :alt="name"
    :skin-url="getSplash(ix.champKeyById(id), 'tile')"
    class="  group/photo">
    <template #banner>
      <Img
        :img="`/img/mastery/banner/crest-and-banner-mastery-${level}.webp`"
        :alt="level.toString()"
        :class="cn('size-17 absolute z-4 drop-shadow-sm drop-shadow-black/20  -top-1.5 right-0')" />
    </template>

    <div class="size-full relative flex flex-col justify-center gap-1.25 *:leading-none px-0.75 pt-2 ">
      <div class="flex items-end gap-1.5 ">
        <h2 class=" font-semibold dst   text-5">
          {{ name }}
        </h2>

        <span class="text-2 pb-px tracking-tight font-medium flex items-end">
          lv.&thinsp;{{ champion?.level ?? 0 }}
        </span>
      </div>
    </div>
  </SplashCard>
</template>