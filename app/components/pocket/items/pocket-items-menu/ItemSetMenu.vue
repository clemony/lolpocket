<script lang="ts" setup>
import {
  copyItemSetToPocket,
  deleteItemSet,
  resetItems
} from "~/domain/pocket/handleItems"
import { duplicateItemSet } from "~/domain/pocket/manage/duplicate"

const props = defineProps<{
  set?: ItemSet
  pocket?: Pocket
}>()

const pocket = computed(() => props.pocket)
</script>

<template>
  <UButton
    class=""
    @click="
      props.set && props.pocket
        ? duplicateItemSet(props.set, props.pocket.key)
        : null
    ">
    <icon name="copy" />
    Duplicate
  </UButton>

  <UPopover mode="hover">
    <UButton class="w-full" as-child>
      <UButton class="relative w-full">
        <!--         <span class="size-4.5 relative grid place-items-center">
          <icon
            name="material-symbols-light:how-to-vote"
            class="!size-6 shrink-0 absolute" />
        </span> -->
        <icon name="arrow-curve-right" />
        Copy to Pocket

        <icon class="absolute right-1 size-4 opacity-50" name="right" />
      </UButton>
    </UButton>
    <template #content>
      <div
        class="grid max-h-100 w-64 auto-rows-fr items-center overflow-y-scroll px-1 py-1.5"
        side="right"
        align="start">
        <UButton
          v-for="friendlyPocket in pocketStore().pockets.filter(
            (p) => p.key !== pocket?.key
          )"
          :key="friendlyPocket.key"
          class="w-full"
          @click="
            props.set ? copyItemSetToPocket(friendlyPocket, props.set) : null
          ">
          <PocketIcon class="size-6 rounded-full" :pocket size="sm" />
          <span class="truncate">
            {{ friendlyPocket.name }}
          </span>
        </UButton>
      </div>
    </template>
  </UPopover>

  <UButton @click="''">
    <icon name="panel-dash" />
    New Pocket with Set
  </UButton>

  <USeparator />

  <UButton @click="props.set ? resetItems(props.set) : null">
    <icon name="reset" />
    Reset Items
  </UButton>

  <UButton
    @click="props.set && pocket ? deleteItemSet(pocket, props.set) : null">
    <icon name="trash" />
    Delete Set
  </UButton>
</template>
