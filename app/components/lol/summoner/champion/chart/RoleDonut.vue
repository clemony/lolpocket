<script setup lang="ts">
const { cutout, roles } = defineProps<{
  roles: PlayerChampionRoleStats
  cutout: string
}>()

const data = computed(() => {
  return {
    datasets: [
      {
        label: "Games",
        backgroundColor: [
          cssVar("--color-domination"),
          cssVar("--color-res"),
          cssVar("--color-sorc"),
          cssVar("--color-pre"),
          cssVar("--color-insp"),
        ],
        data: [
          roles?.stats?.top?.games ?? 0,
          roles?.stats?.jungle?.games ?? 0,
          roles?.stats?.middle?.games ?? 0,
          roles?.stats?.bottom?.games ?? 0,
          roles?.stats?.support?.games ?? 0,
        ],
      },
    ],
    labels: ["Top", "Jungle", "Middle", "Bottom", "Support"],
  }
})
</script>

<template>
  <div
    v-if="roles"
    class="relative grid size-44 place-items-center overflow-hidden">
    <Donut
      v-if="data"
      class="size-full"
      :cutout
      :data
      gauge
      aria-label="Playrate by role in percentage" />

    <Icon
      v-if="roles?.mostPlayed"
      class="dst absolute aspect-square size-full max-h-12 min-h-4"
      :name="`role:${roles?.mostPlayed}`"
      :style="{ color: `var(--color-${roles?.mostPlayed})` }" />
  </div>
</template>
