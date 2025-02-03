<script lang="ts" setup>


const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>


  <DropdownMenuItem
    @click="duplicatePocket(pocket)"
  >
    <icon name="teenyicons:layers-subtract-outline" class="size-5" />
    <span class="-ml-[1px] text-3">Duplicate</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon name="teenyicons:upload-outline" class="size-5" />
    <span class="text-3">Export to League Client</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon name="teenyicons:share-outline" class="size-5" />
    <span>Share Pocket Card</span>
  </DropdownMenuItem>

  <DropdownMenuSeparator  />
  <DropdownMenuItem class="!text-3 font-medium" @click="deletePocket(pocket.key)">
    <icon name="x-folder" class="size-5" />Send to Trash
  </DropdownMenuItem>
</template>

<style scoped>

</style>