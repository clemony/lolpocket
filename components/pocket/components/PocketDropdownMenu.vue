<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <DropdownMenuItem as-child class="w-full">
    <button class=" group w-full justify-between">
      <h1 class="!text-8 text-start dst tracking-tight !leading-none truncate overflow-hidden capitalize ">
        {{ pocket.name }}
      </h1>

      <ExpandIndicator :check="true" class="w-fit"/>
    </button>
  </DropdownMenuItem>

  <DropdownMenuSeparator class="mb-2" />

  <DropdownMenuItem
    @click="duplicatePocket(pocket)"
  >
    <icon name="teenyicons:layers-subtract-outline" class="size-5" />
    <span class="-ml-[1px]">Duplicate</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon name="teenyicons:upload-outline" class="size-5" />
    <span>Export to League Client</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon name="teenyicons:share-outline" class="size-5" />
    <span>Share Pocket Card</span>
  </DropdownMenuItem>

  <DropdownMenuItem @click="deletePocket(pocket.key)">
    <icon name="x-folder" class="size-5" />Send to Trash
  </DropdownMenuItem>
</template>

<style scoped>

</style>