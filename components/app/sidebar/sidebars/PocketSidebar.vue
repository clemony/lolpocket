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

    <Tabs v-model:model-value="pocketNav" class="pl-4 pr-4 w-full mt-1 mb-3" @update:model-value="e => navigateTo(e.toString())">
      <TabsList class="w-full grid grid-cols-3">
        <HoverTabsTrigger :value="`/pocket/${pocket.key}`">
          Champions
        </HoverTabsTrigger>
        <HoverTabsTrigger :value="`/pocket/${pocket.key}/items`">
          Items
        </HoverTabsTrigger>

        <HoverTabsTrigger :value="`/pocket/${pocket.key}/runes`">
          Runes
        </HoverTabsTrigger>
      </TabsList>
    </Tabs>

    <ResizablePanelGroup direction="vertical" class="border-t border-t-b3/60  overflow-y-scroll pt-3  pb-6  flex flex-col gap-3 grow">
      <ResizablePanel class="">
        <div class="h-fit grid">
          <SidebarSelectedChampions v-if="route.name == 'champions'" :pocket="pocket" />
          <PocketItemsSidebarMenu v-if="route.name == 'items'" :pocket="pocket" />
          <PocketRunesCollapsible v-if="route.name == 'runes'" v-model:open="runesOpen" :pocket="pocket" />
        </div>
      </ResizablePanel>

      <ResizableHandle with-handle class="bg-b3/60" />

      <ResizablePanel class="px-3 " :default-size="65">
        <RightbarLabel class="-mt-2 mb-2">
          Complete
        </RightbarLabel>
        <PocketRolesCollapsible :pocket="pocket" />
        <PocketSpellsCollapsible :pocket="pocket" />

        <RightbarLabel class="mb-2">
          Reflect
        </RightbarLabel>
        <PocketSummaryButton :pocket="pocket" @click="pocketNav = null" />
        <PocketCardButton :pocket="pocket" @click="pocketNav = null" />

      <!--       <RightbarLabel v-if="route.name == 'items' || route.name == 'runes'">
          Inspect
        </RightbarLabel>
        <RuneInfoCollapsible
          v-if="rs.hoveredRune && route.name == 'runes'" /> -->
      </ResizablePanel>
    </ResizablePanelGroup>
    <PocketSidebarFooter :pocket="pocket" />
  </div>
</template>