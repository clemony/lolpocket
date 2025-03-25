<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const route = useRoute()

const rs = useRuneStore()
</script>

<template>
  <div class="inset-0 top-0 left-0  overflow-hidden  flex  flex-col h-full">
    <div class="items-center w-full pt-12  flex flex-col gap-6 pb-12  px-3">
      <LazyPopover>
        <PopoverTrigger class="group/picon z-0 !cursor-pointer  aspect-square size-24  rounded-full !pointer-events-auto shadow-sm !drop-shadow-none  bg-gradient-to-br from-neutral/60 to-neutral grid place-items-center relative">
          <PocketIcon :image="pocket.icon" class="size-24 pointer-events-none group-hover/picon:opacity-50 z-1 group-data-[state=open]/picon:opacity-50 tldr-30" />
          <icon name="entypo:images" class="size-8 !text-nc absolute opacity-0  group-hover/picon:opacity-80 z-2 transition-all  duration-300 group-data-[state=open]/picon:opacity-100" />
        </PopoverTrigger>
        <LazyIconPopover :pocket="pocket" :align-offset="-82" align="end" class="bg-b2/50 backdrop-blur-md" :b2="true" />
      </LazyPopover>

      <h1 class="font-serif text-9 font-black">
        {{ pocket.name }}
      </h1>
    </div>


    <div class="  overflow-y-scroll   px-3 flex flex-col gap-3 grow">
      
    <div class="w-full flex justify-between items-end h-fit">
      <RightbarLabel class="pt-0">Create</RightbarLabel>
      <button v-tippy="'Collapse All'" class="*:text-bc/50  hover:*:text-bc btn btn-ghost btn-sm btn-square  mr-2.25 cursor-pointer -mb-1">
        <icon name="minus" class="shrink-0 size-5 dst   "/>
      </button>

    </div>

      <PocketChampionsCollapsible :pocket="pocket" />
      <PocketItemsCollapsible :pocket="pocket" />
      <PocketRunesCollapsible :pocket="pocket" />
      <PocketRolesCollapsible :pocket="pocket" />
      <PocketSpellsCollapsible :pocket="pocket" />

      <RightbarLabel>Reflect</RightbarLabel>
            <PocketSummaryButton :pocket="pocket" />
      <PocketCardButton :pocket="pocket"  />

      <RightbarLabel v-if="route.name == 'items' || route.name == 'runes'">
        Inspect
      </RightbarLabel>
      <ItemInfoCollapsible v-if="route.name == 'items'" />
      <RuneInfoCollapsible
        v-if="rs.hoveredRune && route.name == 'runes'" />
    </div>
    <PocketRightbarFooter :pocket="pocket" />
  </div>
</template>