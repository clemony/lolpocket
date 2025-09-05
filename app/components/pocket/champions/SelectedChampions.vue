<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value

const itemsPerPage = 9
const currentPage = ref(1)

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return pocket.champions.slice(start, start + itemsPerPage)
})
</script>

<template>
  <!--
  <AnimatePresence
    v-memo="pocket.champions"
    as="div"
    layout
    mode="sync"
    class="w-full h-20 relative overflow-hidden bg-b2 field-box border-b3/80 p-2 min-h-20 gap-2 justify-evenly items-center overflow-x-scroll flex">
    <button
      v-if="!pocket?.champions || !pocket?.champions?.length"
      class="size-full cursor-pointer grid place-items-center absolute group/box">
      <i-lol-champ
        class="size-8  group-hover/box:opacity-10 transition-all duration-500"
        :class="{ 'opacity-0 scale-0 ': pocket?.champions && pocket?.champions?.length }" />

      <span class="absolute opacity-0 transition-opacity duration-700 text-3  tracking-tight font-semibold ease-out group-hover/box:opacity-100">
        Select Champions
      </span>
    </button>

    <template v-if="pocket?.champions && pocket?.champions?.length">
      <SelectedChampion
        v-for="champion in pocket?.champions.filter(c => c != pocket.main?.champion)"
        :key="champion"
        :pocket
        :champion />
    </template>
  </AnimatePresence> -->
  <HoverCard>
    <HoverCardTrigger
      class="avatar-group mt-1 overflow-hidden object-center hover:bg-b3/80 data-[state=open]:bg-b3/80  data-[state=open]:ring-b4/80  data-[state=open]:ring-1  data-[state=open]:inset-shadow-sm items-center shrink-0 w-max px-0.25 h-12 hover:ring-1 group/avatar hover:ring-b4/80 hover:inset-shadow-sm rounded-full -space-x-5">
      <template
        v-if="pocket.champions?.length">
        <template
          v-for="champion, i in pocket.champions"
          :key="champion">
          <div
            v-if="i < 5"
            class="avatar bg-b1  group-data-[state=open]/avatar:border-b3/80  group-hover/avatar:border-b3/80 size-fit">
            <ChampionIcon
              :id="ix().champIdByKey(champion)"
              class="size-11 border-bc shadow-sm shadow-black rounded-full" />
          </div>
        </template>
      </template>
      <Placeholder
        v-else
        class="size-11  group-hover/avatar:border-b3/80  group-data-[state=open]/avatar:border-b3/80  shrink-0   rounded-full mr-1">
        0
      </Placeholder>
      <div
        v-if="pocket.champions?.length > 5"
        class="avatar  shrink-0   group-data-[state=open]/avatar:border-b3/80  group-hover/avatar:border-b3/80  avatar-placeholder">
        <div class="bg-neutral text-neutral-content w-11 text-2">
          <span>+{{ pocket.champions.length - 5 }}</span>
        </div>
      </div>
    </HoverCardTrigger>
    <HoverPopContent>
      <HoverCardArrow />

      <div class="px-1 mt-2 grid grid-cols-3 w-full gap-2 grid-flow-row">
        <ChampionIcon
          v-for="champion in pagedItems"
          :id="ix().champIdByKey(champion)"
          :key="champion"
          as="label"
          class="rounded-lg hover:after:opacity-100 after:scale-150 **:!text-white after:absolute after:bg-black/70 after:size-full after:grid after:place-items-center after:!text-white after:text-3  after:content-['🞤'] after:z-1 after:rotate-45 size-16 cursor-pointer hover-ring w-full h-auto aspect-square">
          <input
            v-model="pocket.champions"
            type="checkbox"
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
            class="disabled:opacity-40 btn-square  size-8" />
          <PaginationNext
            size="xs"
            class="disabled:opacity-40 btn-square  size-8" />
        </PaginationContent>
      </Pagination>
    </HoverPopContent>
  </HoverCard>
</template>