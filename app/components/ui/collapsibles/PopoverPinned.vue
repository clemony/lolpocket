<script setup lang="ts">
const ps = usePocketStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.pinned == true)
})

const us = useUiStore()
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child :disabled="!pinned.length" class="group/pin">
      <Btn class=" indicator ">
        <LazyPopupBadge v-if="!us.sidebarExpanded && pinned.length">
          {{ pinned.length }}
        </LazyPopupBadge>

        <slot :pinned="pinned" />
      </Btn>
    </HoverCardTrigger>

    <LazyContrastHoverCardContent side="right" align="center" :side-offset="10">
      <ContrastHoverCardArrow />

      <button v-for="pocket in pinned" :key="pocket.key" class="btn btn-ghost hover:bg-accent text-nc hover:text-nc w-full btn-sm gap-3" @click="navigateTo(`/pocket/${pocket.key}`)">
        <PocketIcon class="size-8" :url="pocket.icon" />
        {{ pocket.name }}
      </button>
    </LazyContrastHoverCardContent>
  </HoverCard>
</template>