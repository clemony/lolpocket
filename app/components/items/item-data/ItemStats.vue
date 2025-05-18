<script lang="ts" setup>
const { stats } = defineProps<{ stats: Record<string, number> }>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value }))
)


</script>

<template>
  
          <Separator class="bg-nc/10   mt-3 mb-5"  />
  <div class="mb-1 stat-grid grid grid-cols-[1.5fr_20px_1fr] gap-2 *:flex *:text-3">
    <template v-for="stat in statEntries" :key="stat.key">
  
     <!--  <component :is="`i-stats-${itemStats.find(k => k.id == stat.key).icon}`"  class="size-3.5 col-start-1 self-center **:text-nc"  /> -->
   
      <p class="items-end pt-[2px] font-medium tracking-tight col-start-1">
        {{ itemStats.find(k => k.id == stat.key).displayName }}
      </p>
      <p class="items-center justify-end col-start-2">
        {{ stat.value }}
      </p>
    </template>
  </div>
</template>