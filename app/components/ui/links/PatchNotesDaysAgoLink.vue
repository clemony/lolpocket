<script lang="ts" setup>

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ds = useDataStore()

//TODO days ago
</script>

<template>

  <NuxtLink :to="ds.patchNotesLink" target="_blank" external class="w-full hover:bg-transparent flex">
    <div  :class="cn('btn !font-medium tracking-tight !gap-5 btn-ghost px-2 btn-lg w-full', props.class)">
      <SidebarIcon>
        <i-logo-league-filled class="size-4.75 absolute left-px text-bc/80 " />
      </SidebarIcon>
      Patch {{ ds.currentPatch }} - 2 days ago

      <icon name="link" class="size-3.75 dst  shrink-0 " />
    </div>
  </NuxtLink>
</template>