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
      class="w-full"
      as-child>
      <PopoverItem class="relative w-full">
        <!--         <span class="size-4.5 relative grid place-items-center">
          <icon
            name="material-symbols-light:how-to-vote"
            class="!size-6 shrink-0 absolute" />
        </span> -->
        <icon name="arrow-curve-right" />
        Copy to Pocket

        <icon
          class="absolute right-1 size-4 opacity-50"
          name="right" />
      </PopoverItem>
    </HoverCardTrigger>

    <LazyHoverCardContent
      class="grid max-h-100 w-64 auto-rows-fr items-center overflow-y-scroll px-1 py-1.5"
      side="right"
      align="start">
      <PopoverItem
        v-for="friendlyPocket in ps().pockets.filter(
          (p) => p.key !== pocket.key,
        )"
        :key="friendlyPocket.key"
        class="w-full"
        @click="copyItemSetToPocket(friendlyPocket, props.set)">
        <PocketIcon
          class="size-6 rounded-full"
          :pocket
          size="sm" />
        <span class="truncate">
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
