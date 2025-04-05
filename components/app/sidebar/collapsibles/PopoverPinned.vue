<script setup lang="ts">
const ps = usePocketStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <SidebarButton>
        <slot :pinned="pinned" />
      </SidebarButton>
    </HoverCardTrigger>
    <LazyContrastHoverCardContent side="right" align="center" :side-offset="10">
      <ContrastHoverCardArrow />
      <button v-for="pocket in pinned" :key="pocket.key" class="btn btn-ghost hover:bg-accent text-nc hover:text-nc w-full btn-sm gap-3" @click="navigateTo(`/pocket/${pocket.key}`)">
        <PocketIcon class="size-8" :image="pocket.icon" />
        {{ pocket.name }}
      </button>
    </LazyContrastHoverCardContent>
  </HoverCard>
</template>