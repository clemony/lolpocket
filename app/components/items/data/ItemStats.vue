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
    <Separator class=" mt-0" />

    <div class="w-full mt-4 items-center grid gap-y-1.5">
      <div
      class="text-3 flex gap-1 w-full items-center"
        v-for="stat in statEntries"
        :key="stat.key">
        <p class="font-medium  flex flex-nowrap ">
          {{ stat.value }}
        </p>

        <p class="grow  font-medium tracking-tight ">
          {{ itemStats.find(k => k.id == stat.key).displayName }}
        </p>

        <p
          class="badge badge-sm justify-self-end  gap-0.5 h-5.5 px-1.25  !text-white  font-semibold border-none dst !drop-shadow-black/20 !text-0"
          :class="itemStats.find(k => k.id == stat.key).badge">
          <component
            :is="`i-stats-${itemStats.find(k => k.id == stat.key).icon}`"
            class="!size-3.25 self-center" />
          {{ itemStats.find(k => k.id == stat.key).shortName }}
        </p>
      </div>
    </div>
  </div>
</template>