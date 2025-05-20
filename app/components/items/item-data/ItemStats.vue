<script lang="ts" setup>
const { stats } = defineProps<{ stats: Record<string, number> }>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value }))
)


</script>

<template>
  
          <Separator class="bg-nc/10   mt-3 mb-5"  />
  <div class="mb-1 stat-grid grid grid-cols-[_1fr_50px_0.5f] gap-x-8 gap-y-1.5 *:flex *:text-3">
    <template v-for="stat in statEntries" :key="stat.key">
  
      <p class="items-end gap-2  font-medium tracking-tight col-start-1 ">
        {{ itemStats.find(k => k.id == stat.key).displayName }}
      </p>
      <p class="items-center justify-end col-start-2">
        {{ stat.value }}
      </p>
   <p class="badge py-0.25  col-start-3 justify-self-end font-semibold border-none" :class="itemStats.find(k => k.id == stat.key).bgClass">
    <component :is="`i-stats-${itemStats.find(k => k.id == stat.key).icon}`"  class="size-3.5 self-center **:text-nc"  />
    {{ itemStats.find(k => k.id == stat.key).shortName }}
   </p>
    </template>
  </div>
</template>