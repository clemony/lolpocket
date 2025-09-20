<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const itemsPerPage = 9
const currentPage = ref(1)

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return pocket.champions.slice(start, start + itemsPerPage)
})
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <TransitionScalePop
        class="avatar-group mt-1 overflow-hidden object-center hover:bg-b3/80 data-[state=open]:bg-b3/80 data-[state=open]:ring-b4/80 data-[state=open]:ring-1 data-[state=open]:inset-shadow-sm items-center shrink-0 w-max px-0.25 h-12 hover:ring-1 group/avatar hover:ring-b4/80 hover:inset-shadow-sm rounded-full -space-x-5">
        <template v-if="pocket.champions?.length">
          <template
            v-for="(champion, i) in pocket.champions.toReversed()"
            :key="champion">
            <div
              v-if="i < 5"
              class="avatar bg-b1 group-data-[state=open]/avatar:border-b3/80 group-hover/avatar:border-b3/80 size-fit">
              <ChampionIcon
                :id="ix().champIdByKey(champion)"
                class="size-11 border-bc shadow-sm shadow-black rounded-full" />
            </div>
          </template>
        </template>
        <Placeholder
          v-else
          class="size-11 group-hover/avatar:border-b3/80 group-data-[state=open]/avatar:border-b3/80 shrink-0 rounded-full mr-1">
          0
        </Placeholder>
        <div
          v-if="pocket.champions?.length > 5"
          class="avatar shrink-0 group-data-[state=open]/avatar:border-b3/80 group-hover/avatar:border-b3/80 avatar-placeholder">
          <div class="bg-neutral text-neutral-content w-11 text-xs">
            <span>+{{ pocket.champions.length - 5 }}</span>
          </div>
        </div>
      </TransitionScalePop>
    </HoverCardTrigger>
    <HoverPopContent>
      <HoverCardArrow />

      <div class="px-1 mt-2 grid grid-cols-3 w-full gap-2 grid-flow-row">
        <ChampionIcon
          v-for="champion in pagedItems"
          :id="ix().champIdByKey(champion)"
          :key="champion"
          :for="`${champion}-select`"
          as="label"
          class="rounded-lg hover:after:opacity-100 after:scale-150 **:!text-white after:absolute after:bg-black/70 after:size-full after:grid after:place-items-center after:!text-white after:text-sm after:content-['🞤'] after:z-1 after:rotate-45 size-16 cursor-pointer hover-ring w-full h-auto aspect-square">
          <input
            v-model="pocket.champions"
            :aria-label="`${champion}-select`"
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
            class="disabled:opacity-40 btn-square size-8" />
          <PaginationNext
            size="xs"
            class="disabled:opacity-40 btn-square size-8" />
        </PaginationContent>
      </Pagination>
    </HoverPopContent>
  </HoverCard>
</template>
