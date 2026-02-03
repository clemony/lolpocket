<script lang="ts" setup>
import { useScroll } from 'motion-v'

const elementRef = useTemplateRef<HTMLElement>('elementRef')
const { scrollYProgress } = useScroll({
  offset: ['end end', 'start start'],
  target: elementRef,
})
const scrollRef = useState<HTMLElement | null>('scrollRef')

const { stats } = storeToRefs(s_champion())
const { summoner } = storeToRefs(s_session())
const { champions } = storeToRefs(s_data())
const { mastery } = storeToRefs(s_champion())

const param = useRouteParams('champion_key')
const filter = shallowRef<string>('')

const sorted = computed(() =>
  sortAbc(Array.from(champions.value.values()), 'championName')
)

const search = useSearch(sorted.value, filter, { keys: ['championName'] })

const results = computed(() => {
  if (search.value.length) return search.value
  else return sorted.value
})
</script>

<template>
  <div
    class="sticky inset-y-0 -top-66 grid h-fit max-h-dvh w-full max-w-64 auto-rows-max items-start gap-3 overflow-y-auto px-1 pt-28 **:select-none"
  >
    <div class="relative w-full">
      <Button
        class="absolute -top-10 left-0 justify-start gap-1 p-0 text-sm leading-none font-medium"
        data-type="Back to all champions"
        data-placement="right"
        data-them="neutral mini-tip line"
        size="xs"
        @click="navigateTo({ name: 'summoner-region-slug-champions' })"
      >
        <span class="font-semibold capitalize opacity-40">
          {{ summoner?.name }}
        </span>
        <Icon class="size-4 opacity-50" name="slash" />
        <span class="group-hover/btn:underline">Champions</span>
      </Button>
      <h1 class="flex size-full items-center gap-3 pt-0.5 pl-0.5 leading-none">
        <button
          class="grid size-8 place-items-center overflow-hidden rounded-full shadow-sm dss after:absolute after:z-1 after:size-full after:bg-black/50 after:opacity-0 after:backdrop-blur-sm after:transition-opacity after:duration-200 group-hover/btn:after:opacity-100"
          data-type="Back to all champions"
          @click="navigateTo({ name: 'summoner-region-slug-champions' })"
        >
          <ChampionIcon
            :id="mastery?.championId"
            class="pointer-events-none z-0 size-full rounded-full"
            type="tile"
          />
          <Icon
            class="absolute z-2 text-white/80 opacity-0 transition-opacity duration-200 **:stroke-[2.5] group-hover/btn:opacity-100"
            name="arrow-left"
          />
        </button>
        {{ champNameById(stats?.championId) }}
      </h1>
    </div>

    <div class="mt-4 flex w-full flex-col">
      <!--       <div class="absolute bottom-1.5 flex w-full items-center gap-2 px-2">
        <Icon
          name="lol:mastery"
          class="text-white/80" />
        <MasteryProgress
          v-if="mastery"
          class="grow"
          :mastery />
      </div> -->

      <ChampionStatsTimelineNav :scroll-ref />
      <div class="mt-6 flex w-full flex-col gap-4 pl-3">
        <Separator class="mb-2 h-px opacity-80" />
        <h6 class="pl-2 capitalize">
          Search {{ summoner.name }}'s Champions
        </h6>

        <div class="relative w-full">
          <InputGroup class="px-1.5" variant="outline" size="sm">
            <InputGroupSearch />
            <InputGroupInput v-model:model-value="filter" />
            <InputGroupClear size="sq-6" />
          </InputGroup>
          <Listbox
            v-model:model-value="param"
            :multiple="false"
            selection-behavior="replace"
          >
            <ListboxContent
              class="max-h-124 w-full space-y-0.5 overflow-y-scroll py-4"
            >
              <!--     <label
                v-for="k in results"
                :key="k.championId"
                class="flex h-9 w-full cursor-pointer items-center"
              >
                <ListboxItem
                  class="hover-on:underline w-fit gap-2 rounded-xl pr-6 pl-2.5 font-medium on:no-underline"
                  :value="champKeyById(k.championId)"
                  size="sm"
                  variant="link"
                  on="neutral"
                >
                  <ChampionIcon
                    :id="k.championId"
                    class="size-5 rounded-full"
                  />
                  {{ k.championName }}
                </ListboxItem>
              </label> -->
            </ListboxContent>
          </Listbox>

          <Separator class="absolute bottom-0 opacity-80" />
        </div>
        <label class="w-full cursor-pointer">
          <button
            class="w-fit justify-start hover:underline rounded-xl pr-8 text-sm"
            size="sm"
          >
            <Icon class="size-3.5 **:stroke-[2.2]" name="arrow-left" />
            <span>Champion list</span>
          </button>
        </label>
      </div>
    </div>
  </div>

  <!--       <div class="flex w-full flex-col gap-1.5 pr-1 text-end">
          <div class="inline-flex items-center justify-between align-baseline">
            <span
              data-type="Total level"
              class="text-lg font-bold">
              lv. {{ mastery?.level }}
            </span>
            <span
              data-type="Total points"
              class="pr-1 text-xs font-medium tracking-wide">
              {{ mastery?.totalPoints.toLocaleString() }}
            </span>
          </div>
        </div> -->
</template>
