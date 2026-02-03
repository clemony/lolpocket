<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const searchQuery = ref<string>('')
const search = useSearch(championIndex, searchQuery)
const results = computed(() =>
  search.value.length ? search.value : championIndex
)
function handleChampions(champion: string) {
  if (pocket.champions.includes(champion)) return

  pocket.champions.push(champion)
}

const itemsPerPage = 8
const currentPage = ref(1)

const pagedSearchItems = computed(() => {
  if (!results.value) return null
  const start = (currentPage.value - 1) * itemsPerPage
  return results.value.slice(start, start + itemsPerPage)
})

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return pocket.champions.slice(start, start + itemsPerPage)
})

const open = ref(false)

watch(
  () => results.value.length,
  (newVal) => {
    if (newVal) currentPage.value = 1
  }
)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger class="group/collapse" as-child>
      <Button

        hover="btn"
        :class="
          cn(
            'transition-[colors, opacity] relative aspect-square h-auto w-full overflow-hidden p-0 ring-bc/60 duration-300 open:btn-active open:ring-2 hover:text-bc/60 hover:ring hover:inset-shadow-xs',
            { 'shadow-sm drop-shadow-sm': pocket._champion },
          )
        "
      >
        <icon
          v-if="!pocket?._champion"
          class="size-10 text-bc/20"
          name="lp:champ"
        />
        <Champion
          v-else
          v-memo="pocket._champion"
          class="*:scale-160"
          :src="getSplash(pocket._champion, 'tile')"
        />
        <div
          :class="
            cn(
              'absolute inset-0 grid size-full items-end justify-center bg-neutral/60 p-1 opacity-0 transition-opacity duration-300 group-open/collapse:opacity-100 group-hover/collapse:opacity-100',
              { 'bg-b2 **:text-bc/40': !pocket._champion },
            )
          "
        >
          <CaretFlip class="size-8 text-nc! opacity-80 drop-shadow-sm" fill />
        </div>
      </Button>
    </PopoverTrigger>
    <LazyPopPopoverContent
      class="p-0"
      align="start"
      :side-offset="-10"
      :align-offset="-2"
      arrow-class="translate-y-0"
    >
      <div
        class="group/txt relative flex h-12 w-full shrink-0 items-center gap-3 px-3"
      >
        <icon name="search" />
        <input
          v-model="searchQuery"
          class="size-full pr-4 text-sm transition-all duration-200 placeholder:italic"
          placeholder="Search All Champions..."
          @keydown.stop
          @keydown.enter.prevent
        >

        <Button
          class="absolute top-3 right-2 btn-square size-6 shrink-0 opacity-100 group-has-placeholder-shown/txt:opacity-0"
          variant="ghost"
          size="sm"
          @click="searchQuery = ''"
        >
          <icon class="size-4 **:stroke-[1.5]" name="x-sm" />
        </Button>
      </div>

      <Separator />

      <div class="flex w-full flex-col overflow-y-scroll px-1 pt-3 pb-2">
        <template v-if="results && searchQuery">
          <LazyLabel
            v-for="result in pagedSearchItems"
            :key="result.key"
            class="justify-start duration-0"
            variant="ghost"
            size="sm"
          >
            <input
              v-model="pocket._champion"
              class="peer hidden"
              type="radio"
              :value="result.key"
              @change="handleChampions(result.key)"
            >

            <span class="size-8">
              <LazyChampionIcon
                :id="result.id"
                class="pointer-events-none size-8 rounded-lg"
                :alt="result.name"
                hydrate-on-visible
              />
            </span>
            {{ result.name }}
          </LazyLabel>
        </template>

        <span v-else-if="searchQuery && !results">
          No champions found :&lpar;
        </span>
        <div v-else class="grid w-full grid-flow-row grid-cols-3 gap-2 px-1">
          <PopoverClose as-child>
            <Button
              class="hover-ring aspect-square h-auto w-full border-b3 bg-b2 hover:bg-b3/80!"

              title="Clear main champion"
              @click="pocket._champion"
            >
              <icon class="size-7 text-bc/20" name="lp:champ" />
            </Button>
          </PopoverClose>
          <ChampionIcon
            v-for="champion in pagedItems"
            :id="champIdByKey(champion)"
            :key="champion"
            class="hover-ring aspect-square h-auto w-full cursor-pointer rounded-lg"
            as="label"
            @click="open = false"
          >
            <input
              v-model="pocket._champion"
              class="peer hidden"
              type="radio"
              :value="champion"
            >
          </ChampionIcon>
        </div>
        <Pagination
          v-model:page="currentPage"
          class="mx-0 max-w-220 justify-center justify-self-start pt-2"
          :total="pocket.champions.length"
          :default-page="1"
          :sibling-count="1"
          :show-edges="false"
          :items-per-page="itemsPerPage"
        >
          <PaginationContent>
            <PaginationPrev
              class="btn-square size-8 disabled:opacity-40"
              size="sm"
            />
            <PaginationNext
              class="btn-square size-8 disabled:opacity-40"
              size="sm"
            />
          </PaginationContent>
        </Pagination>
      </div>
    </LazyPopPopoverContent>
  </Popover>
</template>
