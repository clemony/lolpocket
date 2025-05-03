<script lang="ts" setup>
const { stats } = defineProps<{ stats: Record<string, number> }>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value }))
)
</script>

<template>
  
          <Separator class="bg-nc/10   my-3"  />
  <div class="stat-grid grid grid-cols-[1.5fr_20px_1fr] gap-2 *:flex ">
    <template v-for="stat in statEntries" :key="stat.key">
      <p class="col-start-1 items-end pt-[2px] font-medium tracking-tight">
        {{ itemStats.find(k => k.id == stat.key).displayName }}
      </p>
      <p class="col-start-2 items-center justify-end">
        {{ stat.value }}
      </p>
    </template>
  </div>
</template>