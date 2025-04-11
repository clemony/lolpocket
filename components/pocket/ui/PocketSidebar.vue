<script lang="ts" setup>

const route = useRoute()

const pocket = computed (() => {
  return getPocket(route.params.pocketKey)
})

const rs = useRuneStore()

const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})

const championsOpen = ref(false)
const itemsOpen = ref(false)
const runesOpen = ref(false)
</script>

<template>
    <div class="inset-0 top-0 left-0  overflow-hidden  flex  flex-col h-full">
      <div class="items-center w-full pt-7  flex flex-col gap-6  px-3">
        <LazyPopover>
          <PopoverTrigger class="group/picon z-0 !cursor-pointer self-center  !size-28   rounded-full !pointer-events-auto shadow-sm  inset-shadow-sm aspect-square  grid place-items-center relative">
            <div class="size-full rounded-full overflow-hidden relative ">
              <Image v-if="pocket.icon != '/img/lp/192.webp'" :image="pocket.icon" alt="pocket icon" class=" pointer-events-none group-hover/picon:brightness-50 z-1 group-data-[state=open]/picon:brightness-50 scale-280  tldr-30 object-cover rounded-xl absolute top-17 left-1  " />
              <div v-else class="size-full bg-gradient-to-br from-neutral/80 to-neutral grid place-items-center text-nc font-semibold text-6 dst">
                LP
              </div>
            </div>
            <icon name="images" class="size-8 !text-nc absolute opacity-0  group-hover/picon:opacity-80 z-2 transition-all  duration-300 group-data-[state=open]/picon:opacity-100" />
          </PopoverTrigger>
          <LazyIconPopover :pocket="pocket" align="center" class="bg-neutral/85  backdrop-blur-md w-86" :b2="true" />
        </LazyPopover>

        <div class="w-full relative mb-6 pr-1 mt-1">
          <EditablePocketHeader :pocket="pocket" class="font-serif dst !text-7 font-black" />
        </div>
      </div>

      <Tabs v-model:model-value="pocketNav" class="pl-4 pr-4 w-full mt-1 mb-4" @update:model-value="e => navigateTo(e.toString())">
        <TabsList class="w-full grid grid-cols-3">
          <HoverTabsTrigger :value="`/pocket/${pocket.key}`" @click="championsOpen = true">
            Champions
          </HoverTabsTrigger>
          <HoverTabsTrigger :value="`/pocket/${pocket.key}/items`" @click="itemsOpen = true">
            Items
          </HoverTabsTrigger>

          <HoverTabsTrigger :value="`/pocket/${pocket.key}/runes`" @click="runesOpen = true">
            Runes
          </HoverTabsTrigger>
        </TabsList>
      </Tabs>
      <div class="  overflow-y-scroll   px-3 flex flex-col gap-3 grow">
        <div class="w-full flex justify-between items-end h-fit">
          <RightbarLabel class="pt-0">
            Create
          </RightbarLabel>
          <button v-tippy="'Collapse All'" class="*:text-bc/50  hover:*:text-bc btn btn-ghost btn-sm btn-square  mr-1.75 cursor-pointer -mb-1">
            <icon name="minus" class="shrink-0 size-5 dst   " />
          </button>
        </div>

        <LayoutGroup>
          <PocketChampionsCollapsible v-model:open="championsOpen" :pocket="pocket" />
          <PocketItemsCollapsible v-model:open="itemsOpen" :pocket="pocket" />
          <PocketRunesCollapsible v-model:open="runesOpen" :pocket="pocket" />
          <PocketRolesCollapsible :pocket="pocket" />
          <PocketSpellsCollapsible :pocket="pocket" />

          <RightbarLabel>Reflect</RightbarLabel>
          <PocketSummaryButton :pocket="pocket" @click="pocketNav = null" />
          <PocketCardButton :pocket="pocket" @click="pocketNav = null" />

        <!--       <RightbarLabel v-if="route.name == 'items' || route.name == 'runes'">
          Inspect
        </RightbarLabel>
        <RuneInfoCollapsible
          v-if="rs.hoveredRune && route.name == 'runes'" /> -->
        </LayoutGroup>
      </div>
      <PocketSidebarFooter :pocket="pocket" />
    </div>

</template>