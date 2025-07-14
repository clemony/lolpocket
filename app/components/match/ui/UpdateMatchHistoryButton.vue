<script lang="ts" setup>
import { computed } from 'vue'

const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ss = useSummonerStore()

const { refreshMatches } = useSummoner(summoner.puuid)
const {
  throttled: throttledRefresh,
  isLoading,
} = useThrottledFn(refreshMatches, 60000)

const lastUpdate = computed(() => parseDate(summoner?.matches?.lastUpdate))

const timeRemaining = computed(() => {
  if (!lastUpdate.value) return null

  const now = Date.now()
  const diff = Math.max(0, 600000 - (now - lastUpdate.value.getTime()))
  return diff > 0 ? `${Math.floor(diff / 1000)}` : null
})

watch(() => timeRemaining.value, (newVal) => {
console.log("💠 - watch - newVal:", newVal)
}
)
</script>

<template>
  <button v-tippy="`Last Update: ${useTimeAgo(summoner.matches.lastUpdate).value}`" :class="cn('btn rounded-lg border-b2 hover:border-b3/40  btn-sm bg-b2/40 hover:bg-b2 text-1 px-2.5', className)" @click="throttledRefresh()">
    <span v-if="(!timeRemaining || timeRemaining === '0s') && !isLoading" class="flex gap-3 items-center">
      <icon name="update" class="dst size-3.5  hover:text-bc tldr-20" />
      Update
    </span>

    <div class="" v-else-if="timeRemaining" >
      <span class="countdown">
  <span :style="{'--value': timeRemaining}" aria-live="polite" :aria-label="timeRemaining">
      {{ computed (() => timeRemaining).value }}</span>
</span>
  {{ computed (() => timeRemaining).value }}
    </div>

    <span v-else-if="isLoading" class="flex gap-3 items-center">
      <icon name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
      Checking
    </span>
  </button>
</template>
