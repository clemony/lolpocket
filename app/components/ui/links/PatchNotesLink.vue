<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  updated?: boolean
}>()
const ds = useDataStore()
</script>

<template>
  <MenubarItem as-child>
    <NuxtLink
      :to="ds.patchNotesLink"
      target="_blank"
      external
      class="flex  items-center grow text-bc gap-2.5 pl-4 pr-4 mt-2 w-full ">
      <span class="size-5 relative grid place-items-center ">
        <i-logo-league-filled class="size-4.5 top-1 text-bc/70 dst" />
      </span>

      <div class="grow flex items-end w-full">
        <span class="text-[11px] pt-0.25">{{ ds.currentPatch }}&nbsp;</span>

        <span class="pt-0.5  align-baseline"> Patch Notes</span>
      </div>

      <Grow />

      <icon
        name="radix-icons:external-link"
        class="size-4 dst shrink-0 " />
    </NuxtLink>
  </MenubarItem>
</template>