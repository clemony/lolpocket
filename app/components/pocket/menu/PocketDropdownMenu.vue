<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <DropdownMenuItem @click="duplicatePocket(pocket)">
    <icon class="size-5" name="teenyicons:layers-subtract-outline" />

    <span class="text-md -ml-px">Duplicate</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon class="size-5" name="teenyicons:upload-outline" />

    <span class="text-md">Export to League Client</span>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <icon class="size-5" name="teenyicons:share-outline" />

    <span>Share Pocket Card</span>
  </DropdownMenuItem>

  <DropdownMenuSeparator />

  <DropdownMenuItem
    class="text-md! font-medium"
    @click="deletePocket(pocket.key)"
  >
    <icon class="size-5" name="x-folder" />
    Send to Trash
  </DropdownMenuItem>
</template>

<style scoped></style>
