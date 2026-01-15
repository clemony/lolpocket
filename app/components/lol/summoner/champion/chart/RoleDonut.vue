<script setup lang="ts">
const { cutout, roles } = defineProps<{
  roles: PlayerChampionRoleStats
  cutout: string
}>()

const data = computed(() => {
  return {
    datasets: [{
      backgroundColor: [
        cssVar('--color-domination'),
        cssVar('--color-resolve'),
        cssVar('--color-sorcery'),
        cssVar('--color-precision'),
        cssVar('--color-inspiration'),
      ],
      data: [
        roles?.stats?.top?.games ?? 0,
        roles?.stats?.jungle?.games ?? 0,
        roles?.stats?.middle?.games ?? 0,
        roles?.stats?.bottom?.games ?? 0,
        roles?.stats?.support?.games ?? 0,
      ],
      label: 'Games',
    }],
    labels: ['Top', 'Jungle', 'Middle', 'Bottom', 'Support']
  }
})
</script>

<template>
  <div
    v-if="roles"
    class="relative grid size-44 place-items-center overflow-hidden">
    <Donut
      v-if="data"
      :cutout
      :data
      gauge
      class="size-full"
      aria-label="Playrate by role in percentage" />

    <Icon
      v-if="roles?.mostPlayed"
      :name="`role:${roles?.mostPlayed}`"
      class="absolute aspect-square size-full max-h-12 min-h-4 dst"
      :style="{ color: `var(--color-${roles?.mostPlayed})` }" />
  </div>
</template>
