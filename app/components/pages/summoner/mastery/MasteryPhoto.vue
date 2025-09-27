<script lang="ts" setup>
const { champion, championId } = defineProps<{
  champion?: ChampionMastery | null
  championId?: number
}>()

const name = computed(() => ix().champNameById(champion?.id ?? championId))
const id = computed(() => champion?.id ?? championId)
const level = computed(() =>
  champion?.level >= 10
    ? 10
    : champion?.level
      ? champion.level
      : 0
)
</script>

<template>
  <SplashCard
    :alt="name"
    :skin-url="getSplash(ix().champKeyById(id), 'tile')"
    class="pb-0.5 group/photo">
    <template #banner>
      <Img
        :img="`/img/mastery/banner/crest-and-banner-mastery-${level}.webp`"
        :alt="level.toString()"
        :class="
          cn(
            'size-17 absolute z-4 drop-shadow-sm drop-shadow-black/20  -top-1.5 right-0',
          )
        " />
    </template>

    <!--     <template #crest>
      <Img
        :img="`/img/mastery/mastery-${level}.webp`"
        :alt="level.toString()"
        :class="cn('h-full scale-130 object-cover w-auto absolute z-4 drop-shadow-sm drop-shadow-black/20  -top-0 -right-0')" />
    </template> -->

    <div
      class="size-full relative flex flex-col h-12 justify-center overflow-hidden pb-1 *:leading-none px-0.75 pt-0.25">
      <div class="flex items-end gap-1.5">
        <h2
          class="font-semibold dst text-5>
          {{ name }}
        </h2>

        <span class="
          text-2
          pb-px
          tracking-tight
          font-medium
          flex
          items-end">
          lv.&thinsp;{{ champion?.level ?? 0 }}
          </span>
        </h2>
      </div>

      <div class="text-nowrap h-3 items-center">
        <p class="text-1 flex gap-1 items-center absolute font-medium">
          <span
            class="size-4 relative overflow-hidden rounded-full dst shadow-sm">
            <i-lol-cm-mastery-token
              class="size-full scale-105 grid place-items-center absolute object-center" />
          </span>
          {{ champion?.points?.toLocaleString() ?? 0 }}
        </p>
      </div>

      <!--  <div class="text-nowrap h-3 items-center  *:transition-all *:duration-200">
        <p class="text-1 flex gap-1 items-center group-hover/photo:-translate-y-full absolute group-hover/photo:opacity-0 font-medium">
          <span class="size-4 relative overflow-hidden rounded-full dst shadow-sm">
            <i-lol-cm-mastery-token class="size-full scale-105 grid place-items-center absolute object-center" />
          </span>
          {{ champion?.points?.toLocaleString() ?? 0 }}
        </p>
        <p class="text-1 italic translate-y-full opacity-0 absolute group-hover/photo:opacity-100 group-hover/photo:translate-y-0">
          <template v-if="champion?.lastPlayed">
            Last Played {{ useDateFormat(champion.lastPlayed, 'MMM D, YYYY') }}
          </template>
          <template v-else>
            Never played
          </template>
        </p>
      </div> -->
    </div>
  </SplashCard>
</template>
