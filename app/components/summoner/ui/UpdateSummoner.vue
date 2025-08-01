<script lang="ts" setup>
import { throttleFunction } from 'composables'

const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
}>()

const cooldown = Number(120000)

const { refreshMatches } = useSummoner(summoner.puuid)
const { throttled: throttledRefresh, isLoading } = throttleFunction(
  refreshMatches,
  cooldown,
)

const lastUpdate = computed(() => parseDate(summoner?.matches?.lastUpdate))

const diff = ref(0)

useIntervalFn(() => {
  if (!lastUpdate.value)
    return
  const now = Date.now()
  diff.value = Math.max(0, cooldown - (now - lastUpdate.value.getTime()))
}, 1000)

const timeRemaining = computed(() => {
  const secs = Math.floor(diff.value / 1000)
  return secs > 0
    ? {
        seconds: secs,
        percent: (secs / (cooldown / 1000)) * 100,
      }
    : null
})

watch(
  () => timeRemaining.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  },
)
</script>

<template>
  <tippy
    v-if="summoner.matches"
    tag="div"
    placement="bottom-start"
    :offset="[-6, 10]"
    :class="
      cn('group/load size-fit **:[.tippy_arrow]:!translate-y-2.5', className)
    "
    @click="throttledRefresh()">
    <button
      v-if="!timeRemaining"
      :class="cn(' btn btn-neutral btn-circle', buttonClass)">
      <icon
        name="mingcute:refresh-2-line"
        :class="
          cn(' size-5  mt-px shrink-0   group-hover/load:!text-bc tldr-20', {
            'animate-rotate': isLoading,
          })
        " />
    </button>

    <div
      v-else-if="timeRemaining && timeRemaining?.percent"
      class="radial-progress  btn btn-neutral btn-circle opacity-90 text-b1  "
      :style="{
        '--value': timeRemaining?.seconds,
        '--size': '1.25rem',
        '--thickness': '2px',
      }"
      :aria-valuenow="timeRemaining?.percent"
      role="progressbar" />

    <slot />

    <template #content>
      <div class="grid py-1.5 gap-1">
        <p
          v-if="timeRemaining"
          class="flex italic !text-2">
          {{ timeRemaining.seconds }}s cd
        </p>

        <p class="italic !text-2">
          last updated
        </p>

        <p class="italic !text-2">
          {{ useTimeAgo(summoner.matches.lastUpdate).value }}
        </p>
      </div>
    </template>
  </tippy>
</template>
