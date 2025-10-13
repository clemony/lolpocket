<script lang="ts" setup>
const props = defineProps<{
  set?: ItemSet
  pocket?: Pocket
}>()

const pocket = computed(() => props.pocket)
</script>

<template>
  <PopoverItem
    class=""
    @click="duplicateItemSet(props.set, props.pocket.key)">
    <icon name="copy" />
    Duplicate
  </PopoverItem>

  <HoverCard>
    <HoverCardTrigger
      as-child
      class="w-full">
      <PopoverItem class="relative w-full">
        <!--         <span class="size-4.5 relative grid place-items-center">
          <icon
            name="material-symbols-light:how-to-vote"
            class="!size-6 shrink-0 absolute" />
        </span> -->
        <icon name="arrow-curve-right" />
        Copy to Pocket

        <icon
          name="right"
          class="size-4 opacity-50 absolute right-1" />
      </PopoverItem>
    </HoverCardTrigger>

    <LazyHoverCardContent
      side="right"
      class="px-1 py-1.5 w-64 max-h-100 overflow-y-scroll items-center grid auto-rows-fr"
      align="start">
      <PopoverItem
        v-for="friendlyPocket in ps().pockets.filter(p => p.key !== pocket.key)"
        :key="friendlyPocket.key"
        class="w-full "
        @click="copyItemSetToPocket(friendlyPocket, props.set)">
        <PocketIcon
          :pocket
          size="sm"
          class="size-6 rounded-full" />
        <span class="truncate ">
          {{ friendlyPocket.name }}
        </span>
      </PopoverItem>
    </LazyHoverCardContent>
  </HoverCard>

  <PopoverItem @click="''">
    <icon name="panel-dash" />
    New Pocket with Set
  </PopoverItem>

  <DropdownMenuSeparator />

  <PopoverItem @click="resetItems(set)">
    <icon name="reset" />
    Reset Items
  </PopoverItem>

  <PopoverItem @click="deleteItemSet(pocket, set)">
    <icon name="trash" />
    Delete Set
  </PopoverItem>
</template>
