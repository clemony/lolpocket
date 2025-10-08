<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(ix().champions, searchQuery)

function handleChampions(champion: string) {
  if (pocket.champions.includes(champion))
    return

  pocket.champions.push(champion)
}

const itemsPerPage = 8
const currentPage = ref(1)

const pagedSearchItems = computed(() => {
  if (!results.value)
    return null
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
    if (newVal)
      currentPage.value = 1
  }
)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger
      as-child
      class="group/collapse">
      <Button
        variant="btn"
        hover="btn"
        :class="
          cn(
            'aspect-square  relative transition-[colors, opacity] p-0 duration-300 relative w-full h-auto hover:text-bc/60 hover:inset-shadow-xs open:ring-2 hover:ring overflow-hidden ring-bc/60 open:btn-active',
            { 'shadow-sm drop-shadow-sm ': pocket.main?.champion },
          )
        ">
        <icon
          v-if="!pocket?.main?.champion"
          name="lp:champ"
          class="text-bc/20 size-10" />
        <Champion
          v-else
          v-memo="pocket.main?.champion"
          class="*:scale-160"
          :img="ix().getSplash(pocket.main?.champion, 'tile')" />
        <div
          :class="cn('size-full opacity-0 group-hover/collapse:opacity-100 group-open/collapse:opacity-100 inset-0 transition-opacity duration-300 bg-neutral/60 absolute grid place-items-center', { 'bg-b2 **:text-bc/40': !pocket.main?.champion })">
          <CaretFlip
            class="!text-nc size-8 drop-shadow-sm opacity-80 translate-y-18"
            fill />
        </div>
      </Button>
    </PopoverTrigger>
    <LazyPopPopoverContent
      align="start"
      :side-offset="-10"
      :align-offset="-2"
      arrow-class="translate-y-0"
      class="p-0">
      <div
        class="relative w-full px-3 h-12 shrink-0 group/txt gap-3 flex items-center w-full">
        <icon name="search" />
        <input
          v-model="searchQuery"
          class="h-full placeholder:italic w-full pr-4 text-2 transition-all duration-200"
          placeholder="Search All Champions..."
          @keydown.stop
          @keydown.enter.prevent />

        <Button
          variant="ghost"
          size="xs"
          class="btn-square absolute top-3 right-2 shrink-0 group-has-[:placeholder-shown]/txt:opacity-0 opacity-100 size-6"
          @click="searchQuery = ''">
          <icon
            name="x-sm"
            class="size-4 **:stroke-[1.5]" />
        </Button>
      </div>

      <Separator />

      <div class="pt-3 pb-2 px-1 overflow-y-scroll w-full flex flex-col">
        <template v-if="results && searchQuery">
          <LazyLabel
            v-for="result in pagedSearchItems"
            :key="result.key"
            variant="ghost"
            size="sm"
            class="justify-start duration-0">
            <input
              v-model="pocket.main.champion"
              type="radio"
              class="peer hidden"
              :value="result.key"
              @change="handleChampions(result.key)" />

            <span class="size-8">
              <LazyChampionIcon
                :id="result.id"
                :alt="result.name"
                class="size-8 pointer-events-none rounded-lg"
                hydrate-on-visible />
            </span>
            {{ result.name }}
          </LazyLabel>
        </template>

        <span v-else-if="searchQuery && !results">
          No champions found :&lpar;
        </span>
        <div
          v-else
          class="px-1 grid grid-cols-3 w-full gap-2 grid-flow-row">
          <PopoverClose as-child>
            <Button
              variant="btn"
              title="Clear main champion"
              class="w-full border-b3 bg-b2 hover-ring hover:!bg-b3/80 h-auto aspect-square"
              @click="pocket.main.champion = ''">
              <icon
                name="lp:champ"
                class="text-bc/20 size-7" />
            </Button>
          </PopoverClose>
          <ChampionIcon
            v-for="champion in pagedItems"
            :id="ix().champIdByKey(champion)"
            :key="champion"
            as="label"
            class="rounded-lg cursor-pointer hover-ring w-full h-auto aspect-square"
            @click="open = false">
            <input
              v-model="pocket.main.champion"
              type="radio"
              :value="champion"
              class="peer hidden" />
          </ChampionIcon>
        </div>
        <Pagination
          v-model:page="currentPage"
          :total="pocket.champions.length"
          :default-page="1"
          :sibling-count="1"
          :show-edges="false"
          :items-per-page="itemsPerPage"
          class="pt-2 max-w-220 justify-center justify-self-start mx-0">
          <PaginationContent>
            <PaginationPrev
              size="xs"
              class="disabled:opacity-40 btn-square size-8" />
            <PaginationNext
              size="xs"
              class="disabled:opacity-40 btn-square size-8" />
          </PaginationContent>
        </Pagination>
      </div>
    </LazyPopPopoverContent>
  </Popover>
</template>
