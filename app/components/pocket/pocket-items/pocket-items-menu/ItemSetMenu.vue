<script lang="ts" setup>
const props = defineProps<{
  set?: ItemSet
  pocket?: Pocket
}>()

const ps = usePocketStore()
const pocket = computed (() => props.pocket)
const allPockets = [...ps.pockets]
const notThisPocket = computed (() => {
  return allPockets.filter(p => p != pocket.value)
})
console.log('💠 - notThisPocket - notThisPocket:', notThisPocket)
</script>

<template>
  <ContrastDropdownItem
    class=""
    @click="duplicateItemSet(props.pocket, props.set)">
    <icon name="copy" />
    Duplicate
  </ContrastDropdownItem>

  <DropdownMenuSub>
    <ContrastDropdownSubTrigger>
      <icon
        name="material-symbols-light:how-to-vote"
        class="size-7 -ml-1 mr-1.25" />
      Copy to Pocket
    </ContrastDropdownSubTrigger>

    <ContrastDropdownSubContent>
      <ContrastDropdownItem
        v-for="friendlyPocket in notThisPocket"
        :key="friendlyPocket.key"
        @click="copyItemSetToPocket(friendlyPocket, props.set)">
        {{ friendlyPocket.name }}
      </ContrastDropdownItem>
    </ContrastDropdownSubContent>
  </DropdownMenuSub>

  <ContrastDropdownItem @click="''">
    <icon name="icon-park-outline:add-item" />
    New Pocket with Set
  </ContrastDropdownItem>

  <ContrastDropdownSeparator />

  <ContrastDropdownItem @click="resetItems(set)">
    <icon name="reset" />
    Reset Items
  </ContrastDropdownItem>

  <ContrastDropdownItem @click="deleteItemSet(pocket, set)">
    <icon name="trash" />
    Delete Set
  </ContrastDropdownItem>
</template>