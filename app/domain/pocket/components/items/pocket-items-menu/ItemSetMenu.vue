<script lang="ts" setup>
import { duplicateItemSet } from "~/domain/pocket/utils/manage/duplicate"
import {
  copyItemSetToPocket,
  deleteItemSet,
  resetItems
} from "~/domain/pocket/utils/manage/handleItems"

const props = defineProps<{
  set?: ItemSet
  pocket?: Pocket
}>()

const pocket = computed(() => props.pocket)

function duplicateSet() {
  if (props.set && props.pocket) {
    duplicateItemSet(props.set, props.pocket.key)
  }
}

function copySetToPocket(friendlyPocket: Pocket) {
  if (props.set) copyItemSetToPocket(friendlyPocket, props.set)
}

function resetSetItems() {
  if (props.set) resetItems(props.set)
}

function deleteSet() {
  if (props.set && props.pocket) deleteItemSet(props.pocket, props.set)
}

function createPocketWithSet() {}
</script>

<template>
  <UButton class="" @click="duplicateSet">
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
          @click="copySetToPocket(friendlyPocket)">
          <PocketIcon class="size-6 rounded-full" :pocket size="sm" />
          <span class="truncate">
            {{ friendlyPocket.label }}
          </span>
        </UButton>
      </div>
    </template>
  </UPopover>

  <UButton @click="createPocketWithSet">
    <icon name="panel-dash" />
    New Pocket with Set
  </UButton>

  <USeparator />

  <UButton @click="resetSetItems">
    <icon name="reset" />
    Reset Items
  </UButton>

  <UButton @click="deleteSet">
    <icon name="trash" />
    Delete Set
  </UButton>
</template>
