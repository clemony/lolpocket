<script lang="ts" setup>
const { champion, championId } = defineProps<{
  champion?: ChampionMastery | null
  championId?: number
}>()

const name = computed(() =>
  champNameById(champion?.championId ?? championId)
)
const id = computed(() => champion?.championId ?? championId)
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
    class="group/photo pb-0.5"
    :alt="name"
    :skin-url="getSplash(champKeyById(id), 'tile')"
  >
    <template #banner>
      <Img
        :src="`/img/mastery/banner/crest-and-banner-mastery-${level}.webp`"
        :alt="level.toString()"
        :class="
          cn(
            'absolute -top-1.5 right-0 z-4 size-17 drop-shadow-sm drop-shadow-black/20',
          )
        "
      />
    </template>

    <!--     <template #crest>
      <Img
        :src="`/img/mastery/mastery-${level}.webp`"
        :alt="level.toString()"
        :class="cn('h-full scale-130 object-cover w-auto absolute z-4 drop-shadow-sm drop-shadow-black/20  -top-0 -right-0')" />
    </template> -->

    <div
      class="relative flex size-full h-12 flex-col justify-center overflow-hidden px-0.75 pt-0.25 pb-1 *:leading-none"
    >
      <div class="flex items-end gap-1.5">
        <h2 class="text-xl font-semibold dst">
          {{ name }}
        </h2>

        <span class="flex items-end pb-px text-sm font-medium tracking-tight">
          lv.&thinsp;{{ champion?.level ?? 0 }}
        </span>
      </div>

      <div class="h-3 items-center text-nowrap">
        <p class="absolute flex items-center gap-1 text-xs font-medium">
          <span
            class="relative size-4 overflow-hidden rounded-full shadow-sm dst"
          >
            <i-lol-cm-mastery-token
              class="absolute grid size-full scale-105 place-items-center object-center"
            />
          </span>
          {{ champion?.totalPoints?.toLocaleString() ?? 0 }}
        </p>
      </div>

      <!--  <div class="text-nowrap h-3 items-center  *:transition-all *:duration-200">
        <p class="text-xs flex gap-1 items-center group-hover/photo:-translate-y-full absolute group-hover/photo:opacity-0 font-medium">
          <span class="size-4 relative overflow-hidden rounded-full dst shadow-sm">
            <Icon name="cm-mastery-token class="size-full scale-105 grid place-items-center absolute object-center"" />
          </span>
          {{ champion?.points?.toLocaleString() ?? 0 }}
        </p>
        <p class="text-xs italic translate-y-full opacity-0 absolute group-hover/photo:opacity-100 group-hover/photo:translate-y-0">
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
