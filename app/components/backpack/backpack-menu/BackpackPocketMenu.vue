<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => props.pocket)
</script>

<template>
  <ContextMenuContent class="w-64">
    <ContextMenuItem
      inset
      class="justify-between "
      @click="navigateTo(`/pocket/${pocket.key}`)">
      Open
      <icon
        name="link-lg"
        class="size-4  dst" />
    </ContextMenuItem>

    <ContextMenuItem
      inset
      class="justify-between ">
      Pocket Pic Editor
      <icon
        name="link-lg"
        class="size-4  dst" />
    </ContextMenuItem>

    <ContextMenuSeparator />

    <ContextMenuItem>
      <icon
        name="ph:text-a-underline-bold"
        class="size-4.5" />
      Edit Name
    </ContextMenuItem>

    <ContextMenuItem>
      <icon
        name="material-symbols:imagesmode-outline"
        class="size-4.5" />
      Edit Splash
    </ContextMenuItem>

    <ContextMenuSeparator />

    <ContextMenuItem
      @click="duplicatePocket(pocket)">
      <icon
        name="copy"
        class="size-4.5" />
      Duplicate
    </ContextMenuItem>

    <ContextMenuItem>
      <icon
        name="export"
        class="size-4.5" />
      Export
    </ContextMenuItem>

    <ContextMenuItem
      @click="deletePocket(pocket)">
      <icon
        name="trash"
        class="size-4.25" />
      Trash
    </ContextMenuItem>
  </ContextMenuContent>
</template>