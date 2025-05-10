<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ds = useDataStore()

// TODO days ago
</script>

<template>
  <NuxtLink :to="ds.patchNotesLink" target="_blank" external class="w-full hover:bg-transparent justify-start flex" :class="cn('btn !font-medium tracking-tight !gap-5 btn-ghost  group/p px-4 btn-lg w-full', props.class)">
    <SidebarIcon>
      <i-logo-league-filled class="size-4.75 absolute  text-bc/80 " />
    </SidebarIcon>
    <span class="">
      {{ ds.currentPatch }}
    </span>
    <div class="relative justify-end items-center  grid grow *:flex-nowrap *:justify-end *:text-nowrap *:w-full *:not-last:pr-8 *:font-semibold *:text-end *:flex *:items-center  *:transition-all *:duration-400">
      <span class="group-hover/p:opacity-0 absolute">
        2 days ago
      </span>

      <span class="group-hover/p:opacity-100 underline underline-offset-2 absolute opacity-0 translate-y-4 group-hover/p:translate-y-0">
        Read Patch Notes
      </span>
      <icon name="iconamoon:link-external" class="size-3.75 dst stroke-2 shrink-0 pointer-events-none opacity-50 group-hover/p:opacity-100 " />
    </div>
  </NuxtLink>
</template>