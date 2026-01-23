<script setup lang="ts">
import '@css/components/mastery-progress.css'

const { params } = defineProps<{
  params: any
}>()

const progress = computed(() => {
  if (params.data.pointsUntilLevel <= 0) {
    return 100
  }
  else {
    return Math.round(params.data.pointsSinceLevel / (params.data.pointsSinceLevel + params.data.pointsUntilLevel) * 100)
  }
})
</script>

<template>
  <div
    data-placement="left"
    data-theme="mini-tip multi-line neutral"
    :data-type="`Total:  ${params.data.totalPoints.toLocaleString()}
    Since last level:  ${params.data.pointsSinceLevel.toLocaleString()}
    Next level in:  ${params.data.pointsUntilLevel.toLocaleString()}`"
    class="relative grid size-full place-items-center bg-transparent py-1">
    <!--  -->
    <div class="bg-neutral text-md text-nc absolute z-1 grid size-10 place-items-center rounded-full leading-none font-semibold tracking-wide drop-shadow-sm">
      {{ params.data.level }}
    </div>

    <MasteryRing
      :value="progress"
      :thickness="5"
      :level="params.data.level"
      :size="38" />
  </div>
</template>
