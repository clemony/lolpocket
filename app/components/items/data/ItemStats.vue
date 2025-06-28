<script lang="ts" setup>
const { stats } = defineProps<{
  stats: Record<string, number>
}>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value })),
)
</script>

<template>
  <div class="">
    <Separator class="bg-nc/10  mt-0" />

    <div class="w-full mt-4 items-center  grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-0.75 *:flex *:text-3">
      <template v-for="stat in statEntries" :key="stat.key">
        <p class="font-medium  flex flex-nowrap ">
          {{ stat.value }}
        </p>

        <p class="  tracking-tight ">
          {{ itemStats.find(k => k.id == stat.key).displayName }}
        </p>

        <p class="badge badge-sm justify-self-end  gap-0.5 h-5.5 px-1.25  !text-white  font-semibold border-none dst !drop-shadow-black/20 !text-0" :class="itemStats.find(k => k.id == stat.key).badge">
          <component :is="`i-stats-${itemStats.find(k => k.id == stat.key).icon}`" class="!size-3.25 self-center" />
          {{ itemStats.find(k => k.id == stat.key).shortName }}
        </p>
      </template>
    </div>
  </div>
</template>