<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  updated?: boolean
}>()
const ds = useDataStore()
const patch = computed (() => {
  return `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${ds.currentPatch.toString().replace('.', '-')}-notes/`
})
</script>

<template>
  <NuxtLink :to="patch" target="_blank" external>
    <div v-if="props.updated" :class="cn('btn !font-medium tracking-tight !gap-5 btn-ghost px-2 btn-lg w-full', props.class)">
      <SidebarIcon>
        <i-logo-league-filled class="size-4.75 absolute left-px text-bc/80 " />
      </SidebarIcon>
      Patch {{ ds.currentPatch }} - 2 days ago

      <icon name="link" class="size-3.75 dst  shrink-0 " />
    </div>

    <div v-else :class="cn('flex items-center text-bc hover:bg-b2/60 gap-2.5 w-full', props.class)">
      <div class="grow flex items-end">
        <span class="text-[11px] pt-0.25">{{ ds.currentPatch }}&nbsp;</span>

        <span class="pt-0.5  align-baseline"> Patch Notes</span>
      </div>

      <icon name="radix-icons:external-link" class="size-3.75 dst shrink-0 " />
    </div>
  </NuxtLink>
</template>