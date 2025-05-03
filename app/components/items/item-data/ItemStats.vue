<script lang="ts" setup>
const props = defineProps<{
  stats: any
}>()

const stats = computed(() => {
  return props.stats ? props.stats : null
})
</script>

<template>
  <div class="stat-grid grid grid-cols-[1.5fr_2fr] gap-2 *:flex">
    <template v-for="stat in stats" :key="stat.key">
      <p class="col-start-1 items-end pt-[2px] font-medium tracking-tight">
        {{ stat.key }}
      </p>
      <p class="col-start-2 items-center">
        {{ stat.value.toString().replace(/\[\[/g, '').replace(/\]\]/g, '') }}
      </p>
    </template>
  </div>
</template>